// import React from 'react'
// import Header from "@/components/ui/header";
// import { Button } from "@/components/ui/button";

// export default function cvdetail() {
//   return (
//     <div>
//         <Header/>
        
//         <div>
//             <div className="bg-gray-100">
//                 <div className="flex flex-row mx-24 gap-5">
//                     {/* left */}
//                     <div className="basis-7/10 h-auto">
//                         <div className="flex flex-col gap-2 bg-white px-4 py-4 my-4 rounded-lg">
//                             <h1 className="text-xl font-bold">
//                                 <a href="#" className="">Front End Intern</a>
//                             </h1>
//                             <div className="flex flex-row">
//                                 <div className="basis-1/3 flex items-center gap-2.5">
//                                     <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
//                                         <img src="/assets/paid.png" alt="" className="px-2 py-2 invert" />
//                                     </div>
//                                     <div className="text-sm">
//                                         <p className="mb-1 text-gray-700">Mức lương</p>
//                                         <p className="font-semibold">Tới 3 triệu</p>
//                                     </div>
//                                 </div>
//                                 <div className="basis-1/3 flex items-center gap-2.5">
//                                     <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
//                                         <img src="/assets/location.png" alt="" className="px-2 py-2 invert"/>
//                                     </div>
//                                     <div className="text-sm">
//                                         <p className="mb-1 text-gray-700">Địa điểm</p>
//                                         <p className="font-semibold">Hồ Chí Minh</p>
//                                     </div>
//                                 </div>
//                                 <div className="basis-1/3 flex items-center gap-2.5">
//                                     <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
//                                         <img src="/assets/work.png" alt="" className="px-2 py-2 invert"/>
//                                     </div>
//                                     <div className="text-sm ">
//                                         <p className="mb-1 text-gray-700">Kinh nghiệm</p>
//                                         <p className="font-semibold">Không yêu cầu</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="h-auto w-[fit-content] text-sm bg-gray-200 px-1 py-1 rounded-xs">
//                                 Hạn nộp hồ sơ: 14/04/2025
//                             </div>
//                             <div className="flex flex-row w-full gap-4 mt-1">
//                                 {/* <a href="#" className="h-10 w-full flex justify-center items-center text-base text-white font-semibold bg-green-600 rounded-md
//                                     hover:bg-green-700">
//                                     Ứng tuyển
//                                 </a> */}
//                                 <Button variant="default" size="lg" className="w-full block"
//                                 >
//                                     click
//                                 </Button>
//                                 <div className="flex justify-center items-center ">
//                                     {/* <button className="h-10 w-30 text-base text-green-600 font-semibold border-1 border-green-500 rounded-md
//                                         hover:border-green-600 cursor-pointer">Lưu tin
//                                     </button> */}
//                                     <Button variant="default" size="lg" className="w-full bg-white text-green-600 border-1 border-green-600 hover:bg-white hover:border-green-700 block"
//                                 >
//                                     Lưu tin
//                                 </Button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-white rounded-lg my-4">
//                             <div className="px-4 py-4">
//                                 <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2">Chi tiết tin tuyển dụng</h2>
//                                 <div className="my-4">
//                                     <h3 className="text-base font-semibold my-2">Mô tả công việc</h3>
//                                     <li className="text-sm">Work reports.</li>
                                    
//                                 </div>
//                                 <div className="my-4">
//                                     <h3 className="text-base font-semibold my-2">Yêu cầu ứng viên</h3>
//                                     <li className="text-sm">Work reports.</li>
                                    
//                                 </div>
//                                 <div className="my-4">
//                                     <h3 className="text-base font-semibold my-2">Quyền lợi</h3>
//                                     <li className="text-sm">Work reports.</li>
//                                 </div>
//                                 <div className="my-4">
//                                     <h3 className="text-base font-semibold my-2">Địa điểm làm việc</h3>
//                                     <span>dd</span>
//                                 </div>
//                                 <div className="my-4">
//                                     <h3 className="text-base font-semibold my-2">Cách thức ứng tuyển</h3>
//                                     <span>link</span>
//                                 </div>
//                                 <div className="flex flex-row w-100 gap-10 mt-1">
//                                     <a href="#" className="basis-2/3 h-10 flex justify-center items-center text-base text-white font-semibold bg-green-600 rounded-xl
//                                         hover:bg-green-700">
//                                         Ứng tuyển
//                                     </a>
//                                     <div className="basis-1/3 flex justify-center items-center ">
//                                         <button className="h-10 w-30 text-base text-green-500 font-semibold border-1 border-green-400 rounded-xl 
//                                             hover:border-green-600 cursor-pointer">Lưu tin
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-white rounded-lg my-4">
//                             <div className="px-4 py-4">
//                                 <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2 mb-4">Việc làm liên quan</h2>
//                                 <div className="flex flex-row gap-4 px-4 py-4 border-1 border-gray-300 rounded-lg mb-4">
//                                     <div className=" w-30 h-30 flex items-center justify-center border-1 border-gray-300 rounded-lg">
//                                         <img className="w-auto h-auto object-contain px-2 py-2" src="/assets/logoCompany.jpg" alt="Logo company"/>
//                                     </div>
//                                     <div className="">
//                                         <div className="relative flex flex-row mb-2">
//                                             <div className="basis-3/4 text-wrap ">
//                                                 <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
//                                                     <a href="#">Nhân Viên Kinh Doanh Dự Án</a>
//                                                 </h3>
//                                                 <a href="#" className="text-base text-gray-600 uppercase mb-1">Chi Nhánh Công Ty Cổ Phần Thiết Bị Vệ Sinh Caesar Việt Nam Tại Hà Nội</a>
//                                             </div>
//                                             <div className="basis-1/4 absolute top-0 right-0">
//                                                 <span className="text-sm text-green-600 font-semibold">22 - 45 triệu</span>
//                                             </div>
//                                         </div>
//                                         <div className="relative flex flex-row">
//                                             <div className="basis-3/4 flex flex-row flex-wrap gap-2">
//                                                 <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Hồ Chí Minh</div>
//                                                 <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Còn 25 ngày để ứng tuyển</div>
//                                                 <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Cập nhật 4 giờ trước</div>
//                                             </div> 
//                                             <div className="basis-1/4 absolute bottom-0 right-0 flex flex-row gap-2">
//                                                 <a href="#" className="h-auto flex justify-center items-center text-xs text-white font-semibold bg-green-600 rounded-xs
//                                                     hover:bg-green-700 px-4 py-1">
//                                                     Ứng tuyển
//                                                 </a>
//                                                 <div className="flex justify-center items-center ">
//                                                     <button className="h-auto w-auto text-base text-green-500 font-semibold border-1 border-green-400 rounded-xs 
//                                                         hover:border-green-600 cursor-pointer">❤️
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>



//                                 <div className="flex flex-row gap-4 px-4 py-4 border-1 border-gray-300 rounded-lg mb-4">
//                                     <div className=" w-30 h-30 flex items-center justify-center border-1 border-gray-300 rounded-lg">
//                                         <img className="w-auto h-auto object-contain px-2 py-2" src="/assets/logoCompany.jpg" alt="Logo company"/>
//                                     </div>
//                                     <div className="">
//                                         <div className="relative flex flex-row mb-2">
//                                             <div className="basis-3/4 text-wrap ">
//                                                 <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
//                                                     <a href="#">Nhân Viên Kinh Doanh Dự Án</a>
//                                                 </h3>
//                                                 <a href="#" className="text-base text-gray-600 uppercase mb-1">Chi Nhánh Công Ty Cổ Phần Thiết Bị Vệ Sinh Caesar Việt Nam Tại Hà Nội</a>
//                                             </div>
//                                             <div className="basis-1/4 absolute top-0 right-0">
//                                                 <span className="text-sm text-green-600 font-semibold">22 - 45 triệu</span>
//                                             </div>
//                                         </div>
//                                         <div className="relative flex flex-row">
//                                             <div className="basis-3/4 flex flex-row flex-wrap gap-2">
//                                                 <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Hồ Chí Minh</div>
//                                                 <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Còn 25 ngày để ứng tuyển</div>
//                                                 <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Cập nhật 4 giờ trướchhhhhhhhhhhhhhhhhhhhhhhhhh</div>
//                                             </div> 
//                                             <div className="basis-1/4 absolute bottom-0 right-0 flex flex-row gap-2">
//                                                 <a href="#" className="h-auto flex justify-center items-center text-xs text-white font-semibold bg-green-600 rounded-xs
//                                                     hover:bg-green-700 px-4 py-1">
//                                                     Ứng tuyển
//                                                 </a>
//                                                 <div className="flex justify-center items-center ">
//                                                     <button className="h-auto w-auto text-base text-green-500 font-semibold border-1 border-green-400 rounded-xs 
//                                                         hover:border-green-600 cursor-pointer">❤️
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                             </div>
//                         </div>
//                     </div>
//                     {/* right */}
//                     <div className="basis-3/10 h-auto">
//                         <div className="bg-white rounded-lg px-4 py-4 my-4">
//                             <div className="flex flex-row gap-2 mb-4">
//                                 <div className="logoCompany w-22 h-auto flex items-center justify-center border-1 border-gray-300 rounded-lg">
//                                     <img className="w-auto h-auto object-contain px-2 py-2" src="/assets/logoCompany.jpg" alt="Logo company"/>
//                                 </div>
//                                 <div className="">
//                                     <a href="#" className="font-semibold uppercase">Công ty cổ phần giải pháp ATOM</a>
//                                 </div>
//                             </div>
//                             <div className="flex flex-row px-2 gap-2">
//                                 <div className="flex gap-1 mt-0.5">
//                                     <img className="w-4 h-4 mt-0.5"src="/assets/group.png" alt="" />                                 
//                                     <span className="text-sm text-gray-500 text-nowrap">Quy mô:</span>
//                                 </div>
//                                 <p className="font-normal line-clamp-2 text-wrap">100-499 nhân viên</p>
//                             </div>
//                             <div className="flex flex-row px-2 gap-2">
//                                 <div className="flex gap-1 mt-0.5">
//                                     <img className="w-4 h-4 mt-0.5"src="/assets/cube.png" alt="" />                                 
//                                     <span className="text-sm text-gray-500 text-nowrap">Lĩnh vực:</span>
//                                 </div>
//                                 <p className="font-normal line-clamp-2 text-wrap">Thương mại điện tử</p>
//                             </div>
//                             <div className="flex flex-row px-2 gap-6">
//                                 <div className="flex gap-1 mt-0.5">
//                                     <img className="w-4 h-4 mt-0.5"src="/assets/location.png" alt="" />                                 
//                                     <span className="text-sm text-gray-500 text-nowrap">Địa điểm:</span>
//                                 </div>
//                                 <p className="font-normal line-clamp-2 text-wrap">Phòng 802,Lầu 8, tòa nhà Vietnam Business Center, 57-59 Hồ Tùng Mậu, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>
//                             </div>
//                             <div className="flex justify-center items-center hover:underline cursor-pointer">
//                                 <a href="#" className="font-medium text-green-600">Xem trang công ty</a>
//                             </div>
//                         </div>
//                         <div className="bg-white rounded-lg px-4 py-4 my-4">
//                             <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
//                             <div className="">
//                                 <div className="flex items-center gap-2.5 mb-4">
//                                     <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
//                                         <img src="/assets/bagde.png" alt="" className="px-2 py-2 invert" />
//                                     </div>
//                                     <div className="text-sm">
//                                         <p className="mb-1 text-gray-700">Cấp bậc</p>
//                                         <p className="font-semibold">Thực tập sinh</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2.5 mb-4">
//                                     <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
//                                         <img src="/assets/school.png" alt="" className="px-2 py-2 invert" />
//                                     </div>
//                                     <div className="text-sm">
//                                         <p className="mb-1 text-gray-700">Học vấn</p>
//                                         <p className="font-semibold">Đại Học trở lên</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2.5 mb-4">
//                                     <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
//                                         <img src="/assets/group.png" alt="" className="px-2 py-2 invert" />
//                                     </div>
//                                     <div className="text-sm">
//                                         <p className="mb-1 text-gray-700">Số lượng tuyển</p>
//                                         <p className="font-semibold">10 người</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2.5 mb-4">
//                                     <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
//                                         <img src="/assets/work.png" alt="" className="px-2 py-2 invert" />
//                                     </div>
//                                     <div className="text-sm">
//                                         <p className="mb-1 text-gray-700">Hình thức làm việc</p>
//                                         <p className="font-semibold">Toàn thời gian</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-lg px-4 py-4 my-4">
//                             <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }

"use client";

import React, {useState} from 'react';
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import {Heart, CheckCircle} from "lucide-react";
import { set } from 'react-hook-form';


export default function cvdetail() {
    const jobDetail = [
        {
            nameCompany: "Công ty cổ phần giải pháp ATOM",
            logoCompany: "/assets/logoCompany.jpg",
            nameJob: "Front End Intern",
            salary: "Tới 3 triệu",
            location: "Phòng 802,Lầu 8, tòa nhà Vietnam Business Center, 57-59 Hồ Tùng Mậu, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
            experience: "Không yêu cầu",
            scale: "100-499 nhân viên",
            field: "Thương mại điện tử",
            rank: "Thực tập sinh",
            education: "Đại Học trở lên",
            number: "10 người",
            workType: "Toàn thời gian",
            outOfDate: "14/04/2025",
            description: "We are excited to announce an internship opening for the Front-End Developer.",
            requirements: "Work reports.Hands-on experience with JavaScript, HTML, and CSS.",
            benefit: " Collaborate with a passionate and skilled team.",
            wayApply: "Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây.",
            formWork: "Thực tập sinh",
        },
    ]
    const relatedWorks = [
        {
            nameCompany: "Chi Nhánh Công Ty Cổ Phần Thiết Bị Vệ Sinh Caesar Việt Nam Tại Hà Nội",
            nameJob: "Nhân Viên Kinh Doanh Dự Án",
            logoCompany: "/assets/logoCompany.jpg",
            salary: "22 - 45 triệu",
            location: "Hồ Chí Minh",
            outOfDate: "Còn 25 ngày để ứng tuyển",
            update: "Cập nhật 4 giờ trước",
        },
        {
            nameCompany: "CÔNG TY TNHH TRIDENT DIGITAL TECH",
            nameJob: "Senior Frontend Developer (Salary Upto 45M - Get 2 Weekends Off)",
            logoCompany: "/assets/logoCompany.jpg",
            salary: "Tới 45 triệu",
            location: "Hồ Chí Minh",
            outOfDate: "Còn 5 ngày để ứng tuyển",
            update: "Cập nhật 3 tuần trước",
        },
    ]

    const [isSaved, setIsSaved] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleSaveClick = () => {
        if (isSaved){
            setIsSaved(false);
        }
        else {
            setIsSaved(true);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000); // Ẩn thông báo sau 3 giây
        }    
    };
    
    return (
    <div>
        <Header/>    
        <div>
            <div className="bg-gray-100">
                <div className="flex flex-row mx-24 gap-5">
                    {/* left */}
                    <div className="basis-7/10 h-auto">
                        {/* map */}
                        {jobDetail.map((job) => (
                            <div key={job.nameCompany}className="flex flex-col gap-2 bg-white px-4 py-4 my-4 rounded-lg">
                                <h1 className="text-xl font-bold">
                                    <a href="#" className="">{job.nameJob}</a>
                                </h1>
                                <div className="flex flex-row">
                                    <div className="basis-1/3 flex items-center gap-2.5">
                                        <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                            <img src="/assets/paid.png" alt="" className="px-2 py-2 invert" />
                                        </div>
                                        <div className="text-sm">
                                            <p className="mb-1 text-gray-700">Mức lương</p>
                                            <p className="font-semibold">{job.salary}</p>
                                        </div>
                                    </div>
                                    <div className="basis-1/3 flex items-center gap-2.5">
                                        <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                            <img src="/assets/location.png" alt="" className="px-2 py-2 invert"/>
                                        </div>
                                        <div className="text-sm">
                                            <p className="mb-1 text-gray-700">Địa điểm</p>
                                            <p className="font-semibold">Ho Chi Minh</p>
                                        </div>
                                    </div>
                                    <div className="basis-1/3 flex items-center gap-2.5">
                                        <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                            <img src="/assets/work.png" alt="" className="px-2 py-2 invert"/>
                                        </div>
                                        <div className="text-sm ">
                                            <p className="mb-1 text-gray-700">Kinh nghiệm</p>
                                            <p className="font-semibold">Không yêu cầu</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-auto w-[fit-content] text-sm bg-gray-200 px-1 py-1 rounded-xs">
                                    Hạn nộp hồ sơ: {job.outOfDate}
                                </div>
                                <div className="flex flex-row w-full gap-4 mt-1">
                                    <a href="#" className="w-full block">
                                        <Button variant="default" size="lg" className="w-full"
                                        >
                                        Ứng tuyển
                                        </Button>
                                    </a>
                                    <div>
                                        {/* <Button variant="outline" size="lg" className="w-full text-green-600 hover:text-green-600 hover:bg-white border-green-500 hover:border-green-600"
                                        >
                                            <Heart/>Lưu tin
                                        </Button> */}
                                        {/* Nút Lưu tin */}
                                        <Button 
                                            variant= "default"
                                            size="lg" 
                                            className={`w-full bg-white text-green-600 hover:bg-white border-1 border-green-500 hover:border-green-600 "}`} 
                                            onClick={handleSaveClick}
                                        >
                                            {isSaved ? <CheckCircle className="text-green-600" /> : <Heart className="" />}
                                            {isSaved ? "Đã lưu" : "Lưu tin"}
                                        </Button>

                                        {/* Thông báo */}
                                        {showNotification && (
                                            <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-4 rounded-lg shadow-lg flex items-center gap-2">
                                                <CheckCircle className="text-white" />
                                                Tin đã được lưu thành công!
                                            </div>
                                        )}
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                        
                        {jobDetail.map((job) => (
                            <div key={job.nameCompany} className="bg-white rounded-lg my-4 px-4 py-4">
                                <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2">Chi tiết tin tuyển dụng</h2>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Mô tả công việc</h3>
                                    <li className="text-sm">{job.description}</li>
                                    
                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Yêu cầu ứng viên</h3>
                                    <li className="text-sm">{job.requirements}</li>
                                    
                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Quyền lợi</h3>
                                    <li className="text-sm">{job.benefit}</li>

                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Địa điểm làm việc</h3>
                                    <p className="text-sm">{job.location}</p>
                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Cách thức ứng tuyển</h3>
                                    <p className="text-sm">{job.wayApply}</p>
                                </div>
                                <div className="flex flex-row w-70 gap-2 mt-1">
                                    <a href="#" className="w-full block">
                                        <Button variant="default" size="lg" className="w-full"
                                        >
                                        Ứng tuyển
                                        </Button>
                                    </a>
                                    <a href="#" className="w-full block">
                                        <Button variant="outline" size="lg" className="w-full text-green-600 hover:text-green-600 hover:bg-white border-green-500 hover:border-green-600"
                                        >
                                            Lưu tin
                                        </Button>
                                    </a>
                                </div>   
                            </div>
                        ))}
                        
                        <div className="bg-white rounded-lg my-4 px-4 py-4">
                            <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2 mb-4">Việc làm liên quan</h2>
                            {/* map card  */}
                            {relatedWorks.map((job) => (
                                <div key={job.nameCompany} className="flex flex-row gap-4 px-4 py-4 border-1 border-gray-300 rounded-lg mb-4">
                                    <div className=" w-30 h-30 flex items-center justify-center border-1 border-gray-300 rounded-lg">
                                        <img className="w-auto h-auto object-contain px-2 py-2" src={job.logoCompany} alt="Logo company"/>
                                    </div>
                                    <div className="">
                                        <div className="relative flex flex-row mb-2">
                                            <div className="basis-3/4 text-wrap ">
                                                <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
                                                    <a href="#">{job.nameJob}</a>
                                                </h3>
                                                <a href="#" className="text-base text-gray-600 uppercase mb-1">{job.nameCompany}</a>
                                            </div>
                                            <div className="basis-1/4 absolute top-0 right-0">
                                                <span className="text-sm text-green-600 font-semibold">{job.salary}</span>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-row">
                                            <div className="basis-3/4 flex flex-row flex-wrap gap-2">
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">{job.location}</div>
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">{job.outOfDate}</div>
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">{job.update}</div>
                                            </div> 
                                            <div className="basis-1/4 absolute bottom-0 right-0 flex flex-row gap-2">
                                                <a href="#" className="w-full block">
                                                    <Button variant="default" size="sm" className="w-full rounded-xs "
                                                    >
                                                    Ứng tuyển
                                                    </Button>
                                                </a>
                                                <div className="">
                                                    <Button variant="outline" size="sm" className="w-full bg-gray-200 hover:bg-gray-200 rounded-xs"
                                                    >
                                                        <Heart className="text-green-600"/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}       
                        </div>
                    </div>
                    {/* right */}
                    <div className="basis-3/10 h-auto">
                        {jobDetail.map((job) => (
                            <div key={job.nameCompany} className="bg-white rounded-lg px-4 py-4 my-4">
                                <div className="flex flex-row gap-2 mb-4">
                                    <div className="logoCompany w-22 h-auto flex items-center justify-center border-1 border-gray-300 rounded-lg">
                                        <img className="w-auto h-auto object-contain px-2 py-2" src="/assets/logoCompany.jpg" alt="Logo company"/>
                                    </div>
                                    <div className="">
                                        <a href="#" className="font-semibold uppercase">{job.nameCompany}</a>
                                    </div>
                                </div>
                                <div className="flex flex-row px-2 gap-2">
                                    <div className="flex gap-1 mt-0.5">
                                        <img className="w-4 h-4 mt-0.5"src="/assets/group.png" alt="" />                                 
                                        <span className="text-sm text-gray-500 text-nowrap">Quy mô:</span>
                                    </div>
                                    <p className="font-normal line-clamp-2 text-wrap">{job.scale}</p>
                                </div>
                                <div className="flex flex-row px-2 gap-2">
                                    <div className="flex gap-1 mt-0.5">
                                        <img className="w-4 h-4 mt-0.5"src="/assets/cube.png" alt="" />                                 
                                        <span className="text-sm text-gray-500 text-nowrap">Lĩnh vực:</span>
                                    </div>
                                    <p className="font-normal line-clamp-2 text-wrap">{job.field}</p>
                                </div>
                                <div className="flex flex-row px-2 gap-6">
                                    <div className="flex gap-1 mt-0.5">
                                        <img className="w-4 h-4 mt-0.5"src="/assets/location.png" alt="" />                                 
                                        <span className="text-sm text-gray-500 text-nowrap">Địa điểm:</span>
                                    </div>
                                    <p className="font-normal line-clamp-2 text-wrap">{job.location}</p>
                                </div>
                                <div className="flex justify-center items-center hover:underline cursor-pointer">
                                    <a href="#" className="font-medium text-green-600">Xem trang công ty</a>
                                </div>
                            </div>
                        ))}
                        
                            <div className="bg-white rounded-lg px-4 py-4 my-4">
                                <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
                                {jobDetail.map((job) => (
                                    <div key={job.nameCompany} className="">
                                        <div className="flex items-center gap-2.5 mb-4">
                                            <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                                <img src="/assets/bagde.png" alt="" className="px-2 py-2 invert" />
                                            </div>
                                            <div className="text-sm">
                                                <p className="mb-1 text-gray-700">Cấp bậc</p>
                                                <p className="font-semibold">{job.rank}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5 mb-4">
                                            <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                                <img src="/assets/school.png" alt="" className="px-2 py-2 invert" />
                                            </div>
                                            <div className="text-sm">
                                                <p className="mb-1 text-gray-700">Học vấn</p>
                                                <p className="font-semibold">{job.education}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5 mb-4">
                                            <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                                <img src="/assets/group.png" alt="" className="px-2 py-2 invert" />
                                            </div>
                                            <div className="text-sm">
                                                <p className="mb-1 text-gray-700">Số lượng tuyển</p>
                                                <p className="font-semibold">{job.number}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5 mb-4">
                                            <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                                <img src="/assets/work.png" alt="" className="px-2 py-2 invert" />
                                            </div>
                                            <div className="text-sm">
                                                <p className="mb-1 text-gray-700">Hình thức làm việc</p>
                                                <p className="font-semibold">{job.formWork}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        
                        

                        <div className="bg-white rounded-lg px-4 py-4 my-4">
                            <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )
}

// "use client"; // Thêm dòng này ở đầu file

// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Sử dụng next/navigation cho App Router

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter(); // Sử dụng useRouter trong Client Component

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Kiểm tra đăng nhập (giả lập, có thể thay bằng API thực tế)
//     if (email === "admin@example.com" && password === "123456") {
//       alert("Đăng nhập thành công!");
//       router.push("/home"); // Chuyển hướng
//     } else {
//       alert("Sai tài khoản hoặc mật khẩu!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Đăng nhập</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 mb-4 border rounded-lg"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Mật khẩu"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 mb-4 border rounded-lg"
//             required
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//             Đăng nhập
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
