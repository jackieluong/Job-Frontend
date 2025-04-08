// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import Link from 'next/link';
// // import React from 'react';

// // type pageProps = {
// //     // Define your props here
// // };

// // export default function page(props: pageProps) {
// //     return (
// //           <div className='lg:mx-auto w-full lg:w-3/4'>
                 
// //                  <Card className='border-b-2'>
// //                      <CardHeader className='flex flex-row justify-between'>
// //                          <CardTitle className='flex items-center'>Thông tin công ty</CardTitle>
// //                          <div>
// //                          <Button variant="default" size="lg"><Link href="/recruiter/post/create"> Tạo bài đăng</Link></Button>
// //                          </div>
// //                      </CardHeader>
// //                  </Card>
     
// //                  <Card className='mt-4'>
// //                      <CardHeader>
// //                          <div className='flex items-center w-1/4'>
                        
// //                          </div>
// //                      </CardHeader>
// //                      <CardContent>
                    
// //                      </CardContent>
// //                  </Card>
// //              </div>
// //     );
// // }

// "use client";

// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { fetchCompanuDetail, fetchCompanyDetail } from '@/services/companyService';
// import { useAuth } from '@/store/userStore';
// import { Pencil } from 'lucide-react';
// import Link from 'next/link';
// import React, { useEffect } from 'react';

// type Address = {
//   location: string;
//   province: string;
//   district: string;
// };

// type Company = {
// id: number
//   name: string;
//   overview: string;
//   industry: string;
//   companyWebsite: string;
//   country: string;
//   imgUrl: string;
//   companySize: string;
//   taxCode: string;
//   email: string;
//   address: Address;
// };

// const mockCompany: Company = {
//     id: 1,
//   name: "Công ty TNHH Công Nghệ ABC",
//   overview: "Chúng tôi là công ty công nghệ chuyên cung cấp giải pháp phần mềm cho doanh nghiệp vừa và nhỏ.",
//   industry: "Phần mềm",
//   companyWebsite: "https://abc-tech.vn",
//   country: "Việt Nam",
//   imgUrl: "https://via.placeholder.com/150",
//   companySize: "51-200 nhân viên",
//   taxCode: "0312345678",
//   email: "contact@abc-tech.vn",
//   address: {
//     location: "123 Đường Lê Lợi",
//     district: "Quận 1",
//     province: "TP. Hồ Chí Minh",
//   },
// };

// export default function CompanyPage() {

//     const { user } = useAuth();

//     const [company, setCompany] = React.useState<Company | null>(null);
//     const [isLoading, setIsLoading] = React.useState(true);

//    useEffect(() => {
//         const fetchCompany = async () => {
//             if(!user && !user?.id) return;
//             try {
//                 const data = await fetchCompanyDetail(user?.id).then((res) => res.data);
                
//                 setCompany(data);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error("Error fetching company:", error);
//                 setIsLoading(false);
//             }
//         }
//         fetchCompany();
//    },[user]) 

//   return (
//     <div className='lg:mx-auto w-full lg:w-3/4'>

//       {/* Header Card */}
//       <Card className='border-b-2'>
//         <CardHeader className='flex flex-row justify-between'>
//           <CardTitle className='flex items-center'>Thông tin công ty</CardTitle>
//           {/* <div>
//             <Button variant="default" size="lg">
//               <Link href="/recruiter/post/create">Tạo bài đăng</Link>
//             </Button>
//           </div> */}
//         </CardHeader>
//       </Card>

//       {/* Info Card */}
//       <Card className='mt-4'>
//         <CardHeader className='flex flex-row justify-between'>
//           <div className='flex flex-col lg:flex-row items-center gap-4'>
//             <img
//               src={company?.imgUrl}
//               alt="Company Logo"
//               className="w-30 h-30 object-contain rounded-md border"
//             />
//             <div className='space-y-2'>
//               <h2 className="text-xl font-semibold">{company?.name}</h2>
//               <div className="text-base"> Ngành nghề: <span className='text-gray-700'> {company?.industry} </span></div>
//               <div className="text-base">Quy mô: <span className='text-gray-700'>  {company?.companySize} </span></div>
//               <div className="text-base">Quốc gia: <span className='text-gray-700'>{company?.country} </span> </div>
              
                
              
//             </div>
//           </div>

//             <Button variant="secondary" size="lg" className='bg-gray-200 text-black hover:bg-gray-300 mr-5'>
//             <Link href="/recruiter/company/edit" className="flex items-center gap-2">
//             <Pencil size={18} /> Chỉnh sửa
//     </Link>
//   </Button>
//         </CardHeader>

//         <CardContent>
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-semibold text-lg">Giới thiệu</h3>
//               <p className="text-gray-700 mt-2 whitespace-pre-line">{company?.overview}</p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Thông tin liên hệ</h3>
//               <div className="text-gray-700 mt-2 space-y-1">
//                 <div>
//                   <span className="font-medium">Website:</span>{" "}
//                   <a href={company?.companyWebsite} className="text-blue-600 underdivne" target="_blank" rel="noopener noreferrer">
//                     {company?.companyWebsite}
//                   </a>
//                 </div>
//                 <div><span className="font-medium">Email:</span> {company?.email}</div>
//                 <div><span className="font-medium">Mã số thuế:</span> {company?.taxCode}</div>
//                 <div><span className="font-medium">Địa chỉ:</span> {company?.address.street}, {company?.address.district}, {company?.address.city}</div>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { companySizeOption, industryOptions } from '@/data/options';
import { fetchCompanyDetail } from '@/services/companyService';
import { useAuth } from '@/store/userStore';
import { ArrowLeft, Camera, Pencil } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactMde from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
type Address = {
  location: string;
  province: string;
  district: string;
};

type Company = {
  id: number;
  name: string;
  overview: string;
  industry: string;
  companyWebsite: string;
  country: string;
  imgUrl: string;
  companySize: string;
  taxCode: string;
  email: string;
  address: Address;
};

export default function CompanyPage() {
  const { user } = useAuth();
  const [company, setCompany] = useState<Company>();
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'view' | 'edit'>('view'); // 👈 Tab state

  useEffect(() => {
    const fetchCompany = async () => {
      if (!user?.id) return;
      try {
        const data = await fetchCompanyDetail(user.id).then((res) => res.data);
        setCompany(data);
      } catch (error) {
        console.error("Error fetching company:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompany();
  }, [user]);


  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (company) {
          setCompany({ ...company, imgUrl: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleToggleEdit = () => {
    setViewMode(viewMode === 'view' ? 'edit' : 'view');
  };

  return (
    <div className='lg:mx-auto w-full lg:w-3/4'>
      <Card className='border-b-2'>
        <CardHeader className='flex flex-row justify-between'>
          <CardTitle>Thông tin công ty</CardTitle>
         
        </CardHeader>
      </Card>

      <Card className='mt-4'>
        {viewMode === 'view' ? (
          <>
            <CardHeader className='flex flex-row justify-between'>
              <div className='flex flex-col lg:flex-row items-center gap-4'>
                <img
                  src={company?.imgUrl}
                  alt="Company Logo"
                  className="w-30 h-30 object-contain rounded-md border"
                />
                <div className='space-y-2'>
                  <h2 className="text-xl font-semibold">{company?.name}</h2>
                  <div className="text-base">Ngành nghề: <span className='text-gray-700'>{company?.industry}</span></div>
                  <div className="text-base">Quy mô: <span className='text-gray-700'>{company?.companySize}</span></div>
                  <div className="text-base">Quốc gia: <span className='text-gray-700'>{company?.country}</span></div>
                </div>
              </div>
              <Button
            variant="secondary"
            size="lg"
            onClick={handleToggleEdit}
            className='bg-gray-200 text-black hover:bg-gray-300 mr-5'
          >
            <div className="flex items-center gap-2">
              <Pencil size={18} /> {viewMode === 'view' ? 'Chỉnh sửa' : 'Xem'}
            </div>
          </Button>
            </CardHeader>

            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg">Giới thiệu</h3>
                  <p className="text-gray-700 mt-2 whitespace-pre-line">{company?.overview}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Thông tin liên hệ</h3>
                  <div className="text-gray-700 mt-2 space-y-1">
                    <div><span className="font-medium">Website:</span> <a href={company?.companyWebsite} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{company?.companyWebsite}</a></div>
                    <div><span className="font-medium">Email:</span> {company?.email}</div>
                    <div><span className="font-medium">Mã số thuế:</span> {company?.taxCode}</div>
                    <div><span className="font-medium">Địa chỉ:</span> {company?.address?.location}, {company?.address?.district}, {company?.address?.province}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </>
        ) : (
            <>
           
            <CardHeader className='flex flex-row justify-between items-center'>
            <Button  onClick={() => setViewMode('view')} className="flex items-center gap-2 bg-gray-200 text-gray-700 hover:bg-gray-300">
            <ArrowLeft size={18} />
                Quay lại
            </Button>
          </CardHeader>
          <CardContent>
              {/* Avatar upload - centered */}
  <div className="flex justify-center mb-8 relative">
    <div className="group relative w-[120px] h-[120px] ">
      <Avatar className="w-full h-full border-1 rounded-xl border-gray-100 shadow-md">
        <AvatarImage src={company?.imgUrl} alt={company?.name}  className='object-contain'/>
        <AvatarFallback>{company?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
        
      <Input
        type="file"
        accept="image/*"
        // onChange={handleAvatarChange}
        className="absolute inset-0 opacity-0 cursor-pointer h-full"
      />
      {/* Camera Icon on hover */}
      <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl cursor-pointer">
        <Camera className="text-white" />
      </div>

      {/* Hidden file input */}
      
    </div>
  </div>
            <div className="space-y-6">
              {/* Simple mock form */}
              <form className="space-y-4">
                <div>
                  <Label className="block text-base font-medium mb-1">Tên công ty</Label>
                  <Input type="text" onChange={(e) => (company.name = e.target.value)} defaultValue={company?.name} className="w-full border rounded-md p-2"/>
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-1">Giới thiệu</Label>
                  <ReactMde
                    value={company?.overview}
                    onChange={(value) => (company.overview = value)}
        
                    options={{
                        spellChecker: false,
                        maxHeight: "300px",
          
                    }}  
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-base font-medium mb-1">Ngành nghề</Label>
                    <Select
          name="industry"
          defaultValue={company?.industry}
          onValueChange={(value) => (company.industry = value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn lĩnh vực" />
          </SelectTrigger>
          <SelectContent>
            {industryOptions.map((industry, index) => (
              <SelectItem key={index} value={industry.value}>
                {industry.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
                  </div>
                  <div>
                    <Label className="block text-base font-medium mb-1">Quy mô</Label>
                    <Select
          name="companySize"
          defaultValue={company?.companySize}
          onValueChange={(value) => (company.companySize = value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn quy mô" />
          </SelectTrigger>
          <SelectContent>
            {companySizeOption.map((size, index) => (
              <SelectItem key={index} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
                  </div>
                  <div>
                    <Label className="block text-base font-medium mb-1">Email</Label>
                    <Input type="email" onChange={(e) => (company.email = e.target.value)} defaultValue={company?.email} className="w-full border rounded-md p-2" />
                  </div>
                  <div>
                    <Label className="block text-base font-medium mb-1">Quốc gia</Label>
                    <Input type="text" defaultValue={company?.country} className="w-full border rounded-md p-2" />
                  </div>
                 
                </div>
                <div>
                  <Label className="block text-base font-medium mb-1">Địa chỉ</Label>
                  <Input type="text" onChange={(e) => (company.address.location = e.target.value)} defaultValue={`${company?.address?.location}, ${company?.address?.district}, ${company?.address?.province}`} className="w-full border rounded-md p-2" />
                </div>
                <div className='flex justify-center mt-10'>
                <Button type="submit" >Lưu thay đổi</Button>
                </div>
              </form>
            </div>
          </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
