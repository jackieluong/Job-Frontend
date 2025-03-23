
'use client';

import BasicInfo from '@/components/JobPosting/BasicInfo';
import Benefit from '@/components/JobPosting/Benefit';
import Contact from '@/components/JobPosting/Contact';
import Requirement from '@/components/JobPosting/Requirement';
import { JobPostingInfo } from '@/lib/interface';
import React, { useState } from 'react';


const jobInfo: JobPostingInfo = {
  title: '',
  industry: '',
  province: '',
  district: '',
  description: '',
  jobType: '',
  salaryFrom: 0,
  salaryTo: 0,
  deadline: '',
  gender: '',
  level: '',
  quantity: 0,
  experience: 0,
  education: '',
};
export default function JobPosting() {
  const [activeTab, setActiveTab] = useState<number>(0);
  // const [jobInfo, setJobInfo] = useState<JobPostingInfo>({
  //   title: '',
  //   industry: '',
  //   province: '',
  //   district: '',
  //   description: '',
  //   salaryFrom: 0,
  //   salaryTo: 0,
  //   deadline: '',
  //   companyName: '',
  // });

  // Handles form submission at every step
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, step?: number) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Log the data to check what’s being submitted at each step
    console.log(`Step ${activeTab + 1} Submitted:`);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // If a step number is provided, navigate to that step
    if (step !== undefined) {
      setActiveTab(step);
    }
  };

  const tabs = [
    {
      title: 'Thông tin tuyển dụng',
      component: <BasicInfo jobInfo={jobInfo}  />,
    },
    { title: 'Yêu cầu', component: <Requirement  jobInfo={jobInfo}/> },
    // { title: 'Quyền lợi', component: <Benefit /> },
    // { title: 'Thông tin liên hệ', component: <Contact /> },
  ];

  return (
    <>
      <div className="mx-auto w-3/4 px-2 lg:px-4 lg:pt-5 pb-6  bg-white shadow-md border-b-2 mb-3">
        <h3 className="sm:text-center font-medium md:text-xl md:font-semibold md:mb-8">
          Đăng tin tuyển dụng
        </h3>

        {/* Timeline Navigation */}
        <div className="flex items-center justify-between relative mb-6 py-3">
          {tabs.map((tab, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Step Number */}
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold cursor-pointer transition-all 
                ${index <= activeTab ? 'bg-green-400 text-white' : 'bg-gray-300 text-gray-700'}
              `}
                onClick={() => setActiveTab(index)}
              >
                {index + 1}
              </div>
              {/* Tab Title */}
              <p
                className={`mt-2 text-lg ${
                  index <= activeTab
                    ? 'text-green-400 font-semibold'
                    : 'text-gray-500'
                }`}
              >
                {tab.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FORM WRAPPER */}
      <form
        onSubmit={(e) => handleSubmit(e, activeTab + 1)} // Only submit when form is submitted
        className="mx-auto px-4 lg:px-5 lg:pt-5 pb-6 w-3/4 bg-white shadow-md"
      >
        {/* Tab Content */}
        <div className="text-xl font-semibold">{tabs[activeTab].title}</div>
        {tabs[activeTab].component}

        {/* Navigation Buttons */}
        <div className="flex justify-evenly mt-4">
          <button
            type="button" // Prevent form submission
            className={`cursor-pointer px-4 py-2 rounded-md ${
              activeTab > 0
                ? 'bg-gray-300 hover:bg-gray-400'
                : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={activeTab === 0}
            onClick={() => setActiveTab(activeTab - 1)} // Only change tab
          >
            Quay lại
          </button>

          <button
            type="submit" // This will trigger form submission
            className={`cursor-pointer px-4 py-2 rounded-md ${
              activeTab < tabs.length - 1
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {activeTab < tabs.length - 1 ? 'Tiếp theo' : 'Hoàn tất'}
          </button>
        </div>
      </form>
    </>
  );
}
