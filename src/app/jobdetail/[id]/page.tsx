"use client";

import React, {useState, useEffect} from 'react';
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import {Heart, CheckCircle} from "lucide-react";

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getJobDetailByIdNew, getJobRelatedlById } from '@/services/jobService';
import { JobDetail } from '@/lib/interface';

import { CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import axios from 'axios';

const initJob: JobDetail = {
    name: 'Frontend Developer',
    industry: 'Technology',
    city: ['Hà Nội'],
    
    jobType: 'FULL_TIME',
    description: "",
    salaryFrom: 10000000,
    salaryTo: 20000000,
    deadline: '2025-04-15',
    genderRequire: 'ANY',
    level: 'SENIOR',
    quantity: 2,
    yearOfExperience: 3,
    educationLevel: 'BACHELOR',
    createdAt: '2025-03-20',
    updatedAt: '2025-03-20',
    jobStatus: 'OPEN',
    view: 40,
  };

function formattedDate(isoDate: string | undefined) {
    if (!isoDate) return "Không xác định";
    const date = new Date(isoDate);
    return date.toLocaleDateString('vi-VN');
}


export default function cvdetail() {
    const {id} = useParams();
    console.log(id)

    // const [job, setJob] = useState({});
    const [relatedJob, setRelatedJob] = useState<JobDetail>([initJob])

    const [job, setJob] = useState<JobDetail>(initJob);

    // job.companyAddress = {
    //     province: "Hà Nội",
    //     district: "Cầu Giấy",
    //     location: "Số 1, Đường ABC"
    //   };

    useEffect(() => {
        if (!id) {
            console.error("Job ID is missing or undefined");
            return;  // Prevent the API call if the ID is not available
        }
        const fetchDetail = async () => {
            console.log('kkkkk')
          try {
             const res = await getJobDetailByIdNew(Number(id)).then((res) => res.data);
            console.log(res)
            setJob(res);


            //const dataJob = await axios.get(`http://localhost:8081/api/v1/jobs/detail/${id}`);
            // const dataRelatedJob = await axios.get(`http://localhost:8081/api/v1/jobs/${id}/related`);
            const dataRelatedJob = await getJobRelatedlById(Number(id)).then((res) => res.data);
            
            // console.log('data: ', dataRelatedJob.data)
            
            // console.log(dataJob.data)
            // setJob(dataJob.data.data);
            
            setRelatedJob(dataRelatedJob)
            console.log('job: ', job)
          }catch (error) {
            console.log('error: ', error);
          }
        }
    
        fetchDetail();
    },[])
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
                        <div key={job.id}className="flex flex-col gap-2 bg-white px-4 py-4 my-4 rounded-lg">
                            <h1 className="text-xl font-bold">
                                <a href="#" className="">{job.name}</a>
                            </h1>
                            <div className="flex flex-row">
                                <div className="basis-1/3 flex items-center gap-2.5">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/paid.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Mức lương</p>
                                        <p className="font-semibold">{job.salaryFrom} {'-'} {job.salaryTo}</p>
                                    </div>
                                </div>
                                <div className="basis-1/3 flex items-center gap-2.5">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/location.png" alt="" className="px-2 py-2 invert"/>
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Địa điểm</p>
                                        <p className="font-semibold">{job.city}</p>
                                    </div>
                                </div>
                                <div className="basis-1/3 flex items-center gap-2.5">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/work.png" alt="" className="px-2 py-2 invert"/>
                                    </div>
                                    <div className="text-sm ">
                                        <p className="mb-1 text-gray-700">Kinh nghiệm</p>
                                        <p className="font-semibold">{job.yearOfExperience} năm </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-auto w-[fit-content] text-sm bg-gray-200 px-1 py-1 rounded-xs">
                                Hạn nộp hồ sơ: {formattedDate(job.deadline)}
                            </div>
                            <div className="flex flex-row w-full gap-4 mt-1">
                                <a href="#" className="w-full block">
                                    <Button variant="default" size="lg" className="w-full"
                                    >
                                    Ứng tuyển
                                    </Button>
                                </a>
                                <div>
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
             
                        <div key={job.name} className="bg-white rounded-lg my-4 px-4 py-4">
                            <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2">Chi tiết tin tuyển dụng</h2>
                            {/* <div className="my-4">
                                <h3 className="text-base font-semibold my-2">Mô tả công việc</h3>
                                <li className="text-sm">{job.description}</li>
                                
                            </div>
                            <div className="my-4">
                                <h3 className="text-base font-semibold my-2">Yêu cầu ứng viên</h3>
                                {job.skills ? <li className="text-sm">{job.skills}</li> : 'Không yêu cầu'}
                                
                                
                            </div>
                            <div className="my-4">
                                <h3 className="text-base font-semibold my-2">Quyền lợi</h3>
                                <li className="text-sm">{job.description}</li>

                            </div> */}
                            <CardContent className='flex flex-col text-base'>
                                {/* <RenderLexicalContent json={job.description} /> */}
                                <div className='markdown'>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}  >{job.description}</ReactMarkdown>
                                </div>
                        
                                <div className='markdown'>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.detail}</ReactMarkdown>
                                </div>
                            </CardContent>
                            <div className="my-4">
                                <h3 className="text-base font-semibold my-2">Địa điểm làm việc</h3>
                                <p className="text-sm">oooooo</p>
                            </div>
                            <div className="my-4">
                                <h3 className="text-base font-semibold my-2">Cách thức ứng tuyển</h3>
                                <p className="text-sm">{job.name}</p>
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
                        
                        <div className="bg-white rounded-lg my-4 px-4 py-4">
                            <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2 mb-4">Việc làm liên quan</h2>
                            {/* map card  */}
                            {relatedJob.map((job) => (
                                <div key={job.id} className="w-full border-1 border-gray-200 rounded-lg mb-4">
                                    <div className="flex flex-row gap-4 px-2 py-2">
                                        <div className="left">
                                            <div className="w-30 h-30 flex justify-center items-center border-1 border-gray-200 rounded-lg">
                                                <img src={job.companyImg} alt="logo company" className="w-auto h-auto object-contain px-2 py-2"/>
                                            </div>
                                        </div>
                                        <div className="right w-full flex flex-col gap-8">
                                            <div className="flex flex-row justify-between">
                                                <div className="text-wrap ">
                                                    <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
                                                        <a href="#">{job.name}</a>
                                                    </h3>
                                                    <a href="#" className="text-base text-gray-600 uppercase mb-1">{job.companyName}</a>
                                                </div>
                                                <div className="text-nowrap">
                                                    <span className="text-sm text-green-600 font-semibold">Từ {job.salaryFrom} đến {job.salaryTo}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-2 justify-between">
                                                <div className="flex flex-row flex-wrap gap-2 bottom-0">
                                                    <div className="h-[fit-content] w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">{job.city}</div>
                                                    <div className="h-[fit-content] w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Yêu cầu {job.yearOfExperience} năm kinh nghiệm</div>
                                                </div> 
                                                <div className="flex flex-row gap-2">
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
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* right */}
                    <div className="basis-3/10 h-auto">
                        <div key={job.id} className="bg-white rounded-lg px-4 py-4 my-4">
                            <div className="flex flex-row gap-2 mb-4">
                                <div className="logoCompany w-22 h-22 flex items-center justify-center border-1 border-gray-300 rounded-lg">
                                    <img className="w-auto h-auto object-contain px-2 py-2" src={job.companyImgUrl} alt="Logo company"/>
                                </div>
                                <div className="">
                                    <a href="#" className="font-semibold uppercase">{job.companyName}</a>
                                </div>
                            </div>
                            <div className="flex flex-row px-2 gap-2">
                                <div className="flex gap-1 mt-0.5">
                                    <img className="w-4 h-4 mt-0.5"src="/assets/group.png" alt="" />                                 
                                    <span className="text-sm text-gray-500 text-nowrap">Quy mô:</span>
                                </div>
                                <p className="font-normal line-clamp-2 text-wrap">{job.companySize}</p>
                            </div>
                            <div className="flex flex-row px-2 gap-2">
                                <div className="flex gap-1 mt-0.5">
                                    <img className="w-4 h-4 mt-0.5"src="/assets/cube.png" alt="" />                                 
                                    <span className="text-sm text-gray-500 text-nowrap">Lĩnh vực:</span>
                                </div>
                                <p className="font-normal line-clamp-2 text-wrap">{job.companyIndustry}</p>
                            </div>
                            <div className="flex flex-row px-2 gap-6">
                                <div className="flex gap-1 mt-0.5">
                                    <img className="w-4 h-4 mt-0.5"src="/assets/location.png" alt="" />                                 
                                    <span className="text-sm text-gray-500 text-nowrap">Địa điểm:</span>
                                </div>
                                <p className="font-normal line-clamp-2 text-wrap">{job.name}</p>
                            </div>
                            <div className="flex justify-center items-center hover:underline cursor-pointer">
                                <a href="#" className="font-medium text-green-600">Xem trang công ty</a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg px-4 py-4 my-4">
                            <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
                            <div key={job.name} className="">
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/bagde.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Cấp bậc</p>
                                        <p className="font-semibold">{job.level}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/school.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Học vấn</p>
                                        <p className="font-semibold">{job.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/group.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Số lượng tuyển</p>
                                        <p className="font-semibold">{job.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/work.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Hình thức làm việc</p>
                                        <p className="font-semibold">{job.jobType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )
}