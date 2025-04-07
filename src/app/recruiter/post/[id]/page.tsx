'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { JobDetail } from '@/lib/interface';
import {  displayVNDWithPostfix, formatDate } from '@/lib/utils';
import {
  MapPin,
  
  DollarSign,
  
  Check,
  
  Clock,
  List,
  Pencil,
  Users2,

  Eye,
} from 'lucide-react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import CVListTab from './CVListTab';
import DetailTab from './DetailTab';
import { getJobDetailById } from '@/services/jobService';


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

 const totalCvs = 20;

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTabParam = Number.parseInt(searchParams?.get('activeTab') || '0');
  
  const {id} = useParams();

  
  const [activeTab, setActiveTab] = useState(activeTabParam || 0);
  // const { id } = router.query;
  const [job, setJob] = useState<JobDetail>(initJob);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await getJobDetailById(Number(id)).then((res) => res.data);

        setJob(res);
      }catch (error) {
        console.log(error);
      }
    }

    fetchDetail();
  },[])
  const handleClickEdit = () => {
    router.push(`/recruiter/post/create`);
  };

  const handleClickViewCV = () => {
      setActiveTab(1);
  }

  const tabs = [
    {
      key:"detail",
      title: 'Tin tuyển dụng',
      component: <DetailTab job={job} handleClickViewCV={handleClickViewCV}  />,
    },
    {
      key:"cvList", 
      title: 'Danh sách CV', 
      component: <CVListTab  job={job}/> 
    },
    // { title: 'Quyền lợi', component: <Benefit /> },
    // { title: 'Thông tin liên hệ', component: <Contact /> },
  ];

  // const tabs = new Map([
  //   ["detail", { title: "Tin tuyển dụng", component: <DetailTab job={job} handleClickViewCV={handleClickViewCV} /> }],
  //   ["cvList", { title: "Danh sách CV", component: <CVListTab job={job} /> }],
  //   // ["benefit", { title: "Quyền lợi", component: <Benefit /> }],
  //   // ["contact", { title: "Thông tin liên hệ", component: <Contact /> }],
  // ]);
  
  return (
    <div>
      <Card className="lg:mx-auto w-full lg:w-3/4 mb-5">
        <CardHeader>
          <CardTitle className="flex gap-2 break-words mb-4">
            {job.name}{' '}
            <span>
              <Check className="rounded-full bg-green-500 text-white"></Check>{' '}
            </span>
          </CardTitle>
          <div className="flex flex-col space-y-2 pr-4 md:flex-row md:justify-between">
            <div className="flex gap-2 items-center">
              <DollarSign className="h-10 w-10 text-white rounded-full mt-1 mr-2 bg-green-500  p-2" />

              <div className="flex flex-col gap-1">
                <div className="font-semibold">Mức lương</div>
                <div>
                  {displayVNDWithPostfix (job.salaryFrom)} - {displayVNDWithPostfix(job.salaryTo)} VND
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Users2 className="h-10 w-10 text-white rounded-full mt-1 mr-2 bg-green-500  p-2" />

              <div className="flex flex-col gap-1">
                <div className="font-semibold">Tổng số CV</div>
                <div>{totalCvs} </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Eye className="h-10 w-10 text-white rounded-full mt-1 mr-2 bg-green-500  p-2" />

              <div className="flex flex-col gap-1">
                <div className="font-semibold">Số lượt xem tin</div>
                <div>{job.view || 40} </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <MapPin className="h-10 w-10 text-white rounded-full mt-1 mr-2 bg-green-500  p-2" />

              <div className="flex flex-col gap-1">
                <div className="font-semibold">Địa điểm</div>
                <div>{job.city.map((c) => c).join(', ')}</div>
              </div>
            </div>
            {/* <div className="flex gap-2 items-center">
              <Hourglass className="h-10 w-10 text-white rounded-full mt-1 mr-2 bg-green-500  p-2" />

              <div className="flex flex-col gap-1">
                <div className="font-semibold">Kinh nghiệm</div>
                <div>{job.experience} năm</div>
              </div>
            </div> */}

          </div>

          <div className="mt-4 text-left">
            <span className="inline-flex items-center bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-sm gap-3">
              <Clock className="w-5 h-5"></Clock>
              Hạn nộp hồ sơ: {formatDate(job.deadline)}
            </span>
          </div>

          <div className=" my-5 flex flex-col lg:flex-row gap-5">
            <Button size="lg" className=" lg:flex-[3] py-6" onClick={handleClickViewCV}>
              <List className="w-7 h-7"></List>
              <span className="font-bold">Xem danh sách CV</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className=" border-green-200 py-6 lg:flex-[1] text-green-500"
              onClick={handleClickEdit}
            >
              <Pencil className="w-6 h-6"></Pencil>
              <span className="font-bold">Sửa tin</span>
            </Button>
          </div>
        </CardHeader>
      </Card>

     {/* Tabs Section */}
     <div className="lg:mx-auto w-full lg:w-3/4">
        <div className="flex border-b border-gray-300">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-3 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === index ? "border-green-500 text-green-500" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-4">{tabs[activeTab].component}</div>
      </div>
        

    </div>
  );
}
