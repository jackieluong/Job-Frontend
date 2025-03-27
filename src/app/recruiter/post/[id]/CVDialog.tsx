
import { forwardRef, useImperativeHandle, useState } from 'react';
import {
  Dialog,
  DialogContent,
  
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import React from 'react';
import { CV } from '@/lib/interface';

import { useChat, useChatStore } from '@/store/chatStore';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/userStore';
// export type CV = {
//   id: string;
//   name: string;
//   email: string;
//   createdAt: string;
//   url?: string;
// };
const statusLabelMap: Record<string, string> = {
  APPROVED: 'Đã chấp nhận',
  REVIEWED: 'Đã xem',
  REJECTED: 'Bị từ chối',
  PENDING: 'Đang chờ duyệt',
};

export type CVDialogRef = {
  openDialog: (cv: CV) => void;
};

type InfoProps = {
  selectedCV: CV | null;
}
const Info = ({ selectedCV} : InfoProps) =>{

  return (
    <>
    <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:gap-24 mb-3 mt-4">
    <div className="flex flex-col gap-4">
      <div>
        <strong>Ứng viên:</strong> {selectedCV?.name}
      </div>
      <div>
        <strong>Email:</strong> {selectedCV?.email}
      </div>
      <div>
        <strong>Ngày tạo:</strong>{' '}
        {selectedCV ? formatDate(selectedCV.createdAt) : ''}
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <div>
        <strong>Vị trí:</strong> {selectedCV?.jobTitle}
      </div>
      <div>
        <strong>Trạng thái:</strong>{' '}
        {statusLabelMap[selectedCV?.status || '']}
      </div>
    </div>
  </div>

  {selectedCV?.coverLetter && (
    <>
      <div>
        <strong> Thư giới thiệu</strong>
      </div>
      <div className="border mt-3 p-4 mx-auto w-full h-40 rounded-md overflow-auto bg-white">
        <textarea
          className="w-full h-full resize-none bg-transparent border-none outline-none text-sm text-gray-700"
          readOnly
          value={selectedCV?.coverLetter || ''}
        />
      </div>
    </>
  )}
  </>
  )
}

type PreviewCVProps = {
  selectedCV: CV | null;
}
const PreviewCV = ({selectedCV} : PreviewCVProps) => {
  return (
  <div className='h-full mt-4'>
  {selectedCV?.url ? (
    <iframe
      src={selectedCV.url}
      className="w-full h-[90%] border rounded-md"
      title="CV Preview"
    ></iframe>
  ) : (
    <p className="text-gray-500 text-center">Không có CV để hiển thị.</p>
  )}
  </div>
  )
}
const CVDialog = forwardRef<CVDialogRef, {}>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCV, setSelectedCV] = useState<CV | null>(null);

  const [activeTab, setActiveTab] = useState(0);
  // Expose `openDialog` method to parent
  useImperativeHandle(ref, () => ({
    openDialog: (cv: CV) => {
      setSelectedCV(cv);
      setIsOpen(true);
    },
  }));

  const tabs = [
    {
      title: 'Thông tin chung',
      component: <Info selectedCV={selectedCV} />,
    },
    {
      title: "Xem CV",
      component: <PreviewCV selectedCV={selectedCV} />
    },
  ]

  const {addConversation} = useChat();
  const router = useRouter();

  const {user} = useAuth();
  const handleClickChatButton = () => {
    
    addConversation({id: Number(selectedCV?.id) || -1, name: selectedCV?.name || "", role: selectedCV?.role || ""}, user.id || -1);
    setTimeout(() => {
      router.push("/chat");
    }, 500); // Delay to ensure state updates before navigating
    
    // router.push("/chat");

  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogContent className="max-w-4xl h-[95vh] overflow-auto">
        {/* <DialogHeader className="h-[50px] flex flex-col items-center gap-4 lg:flex lg:flex-row lg:gap-60">
          <DialogTitle>Chi tiết CV</DialogTitle>
          <Link href={selectedCV ? selectedCV.url : '#'} target='_blank'>
            <Button>Tải về</Button>{' '}
          </Link>
        </DialogHeader> */}

<DialogHeader className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:px-6">
  <DialogTitle className="text-xl font-semibold text-gray-800">
    Chi tiết CV
  </DialogTitle>
  <div className="flex gap-2">
    {selectedCV?.url && (
      <Link href={selectedCV.url} target='_blank'>
        <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition">
          Tải về
        </Button>
      </Link>
    )}
    <Button onClick={() => handleClickChatButton()} variant="default" className="bg-blue-500 text-white hover:bg-blue-600 transition">
      Nhắn tin
    </Button>
  </div>
</DialogHeader>

             {/* Tabs Section */}
     <div className="lg:mx-auto w-full h-[80vh] ">
        <div className="flex border-b border-gray-300">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-3 px-6 md:w-1/2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === index ? "border-green-500 text-green-500" : "border-transparent text-gray-500 hover:text-gray-700 cursor-pointer"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tabs[activeTab].component }
      </div>
        
      


        {/* Floating Message Button */}
  {/* <div className="absolute bottom-6 right-6">
    <Button variant="default" className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-6 py-3 shadow-lg">
      Nhắn tin
    </Button>
  </div> */}
      </DialogContent>
    </Dialog>
  );
});

CVDialog.displayName = 'CVDialog'; // Required for debugging in React DevTools
export default CVDialog;
