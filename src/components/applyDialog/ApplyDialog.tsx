import { useAuth } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { JobDetail } from '@/app/(main)/job/[id]/page';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Book } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import toast from 'react-hot-toast';
import { applyForJob } from '@/services/applyService';


export type ApplyDialogRef = {
  openDialog: (job: JobDetail) => void;
};


const ApplyDialog = forwardRef<ApplyDialogRef, {}>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
//   const [selectedCV, setSelectedCV] = useState<CV | null>(null);
    const [job, setJob] = useState<JobDetail | null>(null);
  
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
  
  // Refs for form elements
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const coverLetterRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Expose `openDialog` method to parent
  useImperativeHandle(ref, () => ({
    openDialog: (job: JobDetail) => {
    //   setSelectedCV(cv);
        setJob(job);
      setIsOpen(true);
    },
  }));

  const handleFileChange = () => {
    if (fileInputRef.current?.files && fileInputRef.current.files[0]) {
      const file = fileInputRef.current.files[0];
      
      // Validate file type
      const validTypes = ['.doc', '.docx', '.pdf'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      // Validate file size (5MB = 5 * 1024 * 1024 bytes)
      if (!validTypes.includes(fileExtension)) {
        toast.error('Please upload a .doc, .docx, or .pdf file');
        fileInputRef.current.value = '';
        setFileName('');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB');
        fileInputRef.current.value = '';
        setFileName('');
        return;
      }
      
      setFileName(file.name);
    }
  };
 

  const router = useRouter();

  const {user} = useAuth();
  
  const handleSubmit = async () => {
    // Get values from refs
    const fullName = fullNameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const coverLetter = coverLetterRef.current?.value || '';
    const resumeFile = fileInputRef.current?.files?.[0];
    
    // Validation
    if (!resumeFile) {
      toast.error('Please select a resume file');
      return;
    }

    if (!fullName || !email || !coverLetter) {
      toast.error('Please fill in all fields');
      return;
    }

    // if (!job?.id || !user?.id) {
    //   alert('Missing job or user information');
    //   return;
    // }
    
    setIsSubmitting(true);
    
    if(!user || !user.id || !job?.id) {
        return;
    }
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('email', email);
      formData.append('coverLetter', coverLetter);
      formData.append('userId', user?.id.toString() );
      formData.append('jobId', job.id.toString());
      formData.append('resume', resumeFile);

      // Make API call
      const response = await applyForJob(formData);
      
        
        setIsOpen(false);
        // Reset form
        if (coverLetterRef.current) coverLetterRef.current.value = '';
        if (fileInputRef.current) fileInputRef.current.value = '';
        setFileName('');
        // Optionally redirect or show success message
        toast.success('Application submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogContent className="max-w-full lg:max-w-3/4 xl:max-w-3/7 h-[85vh] overflow-auto flex flex-col">
        {/* <DialogHeader className="h-[50px] flex flex-col items-center gap-4 lg:flex lg:flex-row lg:gap-60">
          <DialogTitle>Chi tiết CV</DialogTitle>
          <Link href={selectedCV ? selectedCV.url : '#'} target='_blank'>
            <Button>Tải về</Button>{' '}
          </Link>
        </DialogHeader> */}

<DialogHeader className=''>
  <DialogTitle className="text-xl font-semibold text-gray-800 text-left">
    Ứng tuyển vị trí <span className='text-green-500'>{job?.name}</span>
  </DialogTitle>
</DialogHeader>
        <div className='flex flex-col'>
        <div className='text-base text-gray-700 font-semibold my-4'> Chọn CV để ứng tuyển</div>
        <div className='border border-dashed border-green-400 flex flex-col gap-6 p-4'>
            <div className='w-full'>
                <div className=''>
                <input type='file' onChange={handleFileChange} ref={fileInputRef} accept='.doc, .docx, .pdf' className='hidden w-full h-full' id='cvFile' />

                    {/* <div className='font-medium'>Tải lên CV từ máy tính</div>
                    <div className="text-sm text-gray-500 mb-4" >Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB</div>
                    <Button variant="outline" className='hover:bg-green-500 text-base text-gray-500'>Chọn CV</Button> */}
                    <label htmlFor='cvFile' className='cursor-pointer flex flex-col items-center gap-5'>
    <div className='font-medium'>Tải lên CV từ máy tính</div>
    <div className="text-sm text-gray-500 ">
      Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB
    </div>
    <Button onClick={() => document.getElementById('cvFile').click()}
     variant="outline" className='hover:bg-green-500 text-base bg-gray-300 text-gray-500'>
      {fileName || 'Chọn CV'}
    </Button>
  </label>
                </div>
                
            </div>
            <div className='flex flex-col gap-3'>
            <Label >Họ và tên</Label> 
            <Input placeholder='Họ tên hiển thị với NTD' ref={fullNameRef}/>
            </div>
          
            <div className='gap-3 flex flex-col'>
            <Label>Email</Label> 
            <Input placeholder='Email hiển thị với NTD' ref={emailRef} />
            </div>
        

        </div>
       
        <div className='flex flex-col gap-2 mt-6'>
        <div className='text-base text-gray-700 font-semibold'> Thư giới thiệu</div>
        <div className='text-sm text-gray-400'>
        Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và gây ấn tượng hơn với nhà tuyển dụng.
        </div>
        <Textarea rows={4} ref={coverLetterRef}/>
        </div>
        </div>

        <DialogFooter className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5 '>
            <Button className='bg-gray-300 font-semibold text-base py-5 text-black hover:bg-gray-500 md:col-span-1'
            onClick={() => setIsOpen(false)}
            >Hủy</Button>
            <Button onClick={handleSubmit} disabled={isSubmitting} className=' py-5 text-base md:col-span-3' >Nộp hồ sơ ứng tuyển</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

ApplyDialog.displayName = 'ApplyDialog'; // Required for debugging in React DevTools
export default ApplyDialog;
