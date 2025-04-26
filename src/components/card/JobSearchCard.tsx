'use client';
import { JobSearchInfo } from '@/lib/type';
import React from 'react';
import { Button } from '../ui/button';
import { displayVNDWithPostfix, timeAgo } from '@/lib/utils';
import { time } from 'node:console';
import { Heart } from 'lucide-react';
import { industryMap } from '@/data/map';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/userStore';
import { saveJob } from '@/services/jobService';

type JobSearchCardProps = {
  // Define your props here
  job: JobSearchInfo;
};

export default function JobSearchCard({ job }: JobSearchCardProps) {
  const router = useRouter();

  const handleClickJobName = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the job name
    // Prevent the click event from bubbling up to the company name
    // Handle click on job name here, e.g., navigate to job details page
    router.push(`/job/${job.id}`);
  };

  const handleClickCompanyName = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the job name
    router.push(`/company/${job.companyId}`);
  };

  const { isAuthenticated } = useAuth();

  const handleClickApply = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the job name
    if (!isAuthenticated) {
      alert('Bạn cần đăng nhập để ứng tuyển');
      // router.push("/login")
    } else {
      router.push(`/job/${job.id}`);
    }
  };

  const handleClickSave = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the job name
    if (!isAuthenticated) {
      alert('Bạn cần đăng nhập để lưu việc làm');
      // router.push("/login")
    } else {
      // Handle save job logic

      const response = await saveJob(job.id);
      if (response.success == true) {
        alert('Lưu việc làm thành công ');
      } else {
        alert('Đã xảy ra lỗi, vui lòng thử lại sau');
      }
    }
  };

  return (
    <div className="group rounded-xl cursor-pointer min-h-28  bg-white p-3 border-1 border-green-300 transition hover:border-green-600 hover:opacity-90">
      <div className="flex gap-5 justify-start pr-1">
        <div className="border-1 border-gray-300 mb-4 bg-white p-1 h-[140px]">
          <img
            src={job.companyImg}
            className="object-contain w-[120px] h-[120px] "
          />
        </div>

        {/* Job Info section */}

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between">
            <div
              className="font-semibold break-words text-lg cursor-pointer hover:text-green-500"
              onClick={(e) => handleClickJobName(e)}
            >
              {job.name}
            </div>
            <div className="text-green-700 ml-3">
              {' '}
              {displayVNDWithPostfix(job.salaryFrom)} -{' '}
              {displayVNDWithPostfix(job.salaryTo)}{' '}
            </div>
          </div>
          <div
            className="text-gray-500 break-words cursor-pointer hover:underline text-lg"
            onClick={(e) => handleClickCompanyName(e)}
          >
            {job.companyName}{' '}
          </div>
          <div className="flex gap-2">
            <div className="text-sm rounded-xl py-1 px-3 bg-gray-300">
              {job.city.join(', ')}
            </div>
            <div className="text-sm rounded-xl py-1 px-3 bg-gray-300">
              {job.yearOfExperience} năm
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex justify-between border-t-1 border-gray-100 pt-2 items-center">
            {/* <div className='flex gap-1'>
                    {job.skills?.map((s, index) => <div key={index} className='text-sm rounded-xl py-1 px-3 bg-gray-300'>{s}</div>)}
                   
                    
                </div> */}
            <div className="text-gray-500 text-sm truncate hover:underline">
              {industryMap[job.industry] || ''}
            </div>

            <div className="space-x-2 flex items-center">
              <Button
                className="opacity-0 group-hover:opacity-100"
                onClick={(e) => handleClickApply(e)}
              >
                Ứng tuyển
              </Button>
              <div className="text-gray-500 group-hover:hidden text-sm">
                {job.updatedAt == null ? (
                  <p>Đã đăng {timeAgo(job.createdAt)} </p>
                ) : (
                  <p> Cập nhật {timeAgo(job.updatedAt)}</p>
                )}
              </div>
              <button
                onClick={(e) => handleClickSave(e)}
                className={`${job.saved ? 'bg-green-500 text-white' : ''} cursor-pointer rounded-full border border-green-500 w-8 h-8 flex items-center justify-center hover:bg-green-500 hover:text-white transition`}
              >
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
