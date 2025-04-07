import JobSearchCard from '@/components/jobSearchCard/JobSearchCard';
import Pagination from '@/components/pagination/Pagination';
import { JobSearchInfo } from '@/lib/type';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

import React from 'react';

type JobSectionProps = {
  // Define your props here
  jobs: JobSearchInfo[] | null;
  isLoading: boolean;
  // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

// const jobs = [
//   {
//     id: 1,
//     name: 'Kỹ sư phần mềm',
//     city: ['Hà Nội', 'Hồ Chí Minh'],
//     skills: ['React', 'Node.js'],
//     salaryFrom: 20000000,
//     salaryTo: 30000000,
//     yearOfExperience: 3,
//     companyName: 'Tech Corp',
//     industry: "Công nghệ thông tin",
//     companyId: 101,
//     companyImg:
//       'https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/UdiO7Pguf3akX65drUOKRz0N5dcyKWWr_1737604772____3a6bc78024143aefa7a42eaf3e57e674.png',
//     createdAt: '2025-03-31T08:47:51.505229Z',
//     updatedAt: null,
//   },
//   {
//     id: 2,
//     name: 'Lập trình viên Java',
//     city: ['Hà Nội', 'Đà Nẵng'],
//     skills: ['Java', 'Spring Boot'],
//     salaryFrom: 25000000,
//     salaryTo: 40000000,
//     yearOfExperience: 4,
//     companyName: 'Dev Solutions',
//     industry: "Công nghệ thông tin",
//     companyId: 102,
//     companyImg:
//       "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/eUxH0WnxGUWtToMKQb2t6jwFpR4dlJrI_1662350744____46eacdff39fc9e8f35ff596fc47f1233.jpg",
//     createdAt: '2025-03-29T10:15:51.505229Z',
//     updatedAt: null,
//   },
//   {
//     id: 3,
//     name: 'Kỹ sư DevOps',
//     city: ['Hà Nội', 'Hồ Chí Minh'],
//     skills: ['Docker', 'Kubernetes', 'AWS'],
//     salaryFrom: 30000000,
//     salaryTo: 50000000,
//     yearOfExperience: 5,
//     companyName: 'CloudTech',
//     industry: "Công nghệ thông tin",
//     companyId: 103,
//     companyImg:
//       'https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/UdiO7Pguf3akX65drUOKRz0N5dcyKWWr_1737604772____3a6bc78024143aefa7a42eaf3e57e674.png',
//     createdAt: '2025-03-25T14:25:51.505229Z',
//     updatedAt: null,
//   },
//   {
//     id: 4,
//     name: 'Chuyên viên QA',
//     city: ['Hà Nội', 'Cần Thơ'],
//     skills: ['Automation Testing', 'Selenium', 'Jenkins'],
//     salaryFrom: 15000000,
//     salaryTo: 25000000,
//     yearOfExperience: 2,
//     companyName: 'TestMaster',
//     industry: "Công nghệ thông tin",
//     companyId: 104,
//     companyImg:
//       'https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/UdiO7Pguf3akX65drUOKRz0N5dcyKWWr_1737604772____3a6bc78024143aefa7a42eaf3e57e674.png',
//     createdAt: '2025-03-20T09:30:51.505229Z',
//     updatedAt: null,
//   },
//   {
//     id: 5,
//     name: 'Lập trình viên Python',
//     city: ['Hà Nội', 'Hồ Chí Minh'],
//     skills: ['Python', 'Django', 'Flask'],
//     salaryFrom: 22000000,
//     salaryTo: 35000000,
//     yearOfExperience: 3,
//     companyName: 'PythonWorks',
//     industry: "Công nghệ thông tin",
//     companyId: 105,
//     companyImg:
//       'https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/UdiO7Pguf3akX65drUOKRz0N5dcyKWWr_1737604772____3a6bc78024143aefa7a42eaf3e57e674.png',
//     createdAt: '2025-03-15T11:40:51.505229Z',
//     updatedAt: null,
//   },
// ];

export default function JobSection({ jobs, isLoading, pageCount,  currentPage, onPageChange }: JobSectionProps) {
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <>
    <div className="grid grid-cols-1 xl:lg:grid-cols-2 gap-4">
      {jobs?.map((job, index) => (
        <JobSearchCard key={index} job={job} />
      ))}
    </div>
     {/* Pagination */}
      <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={onPageChange}/>
    </>
  );
}
