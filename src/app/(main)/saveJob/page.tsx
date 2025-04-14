'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/header/header';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { getSaveJob, deleteSaveJob } from '@/services/jobService';
import { useAuth } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import Pagination from '@/components/pagination/Pagination';
import { displayVNDWithPostfix } from '@/lib/utils';

type JobSaved = {
  nameCompany: string;
  nameJob: string;
  logoCompany: string;
  salary: string;
  location: string;
  outOfDate: string;
  saveDate: string;
  update: string;
};

export default function SavedJobsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [savedJobs, setSavedJobs] = useState<JobSaved[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const pageCount = useRef<number>(0);
  const totals = useRef<number>(0);

  if (!user) {
    alert('Bạn cần đăng nhập để lưu tin.');
    router.push('/login');
    return;
  }

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const response = await getSaveJob({
          currentPage: 1,
          pageSize: 10,
          sortBy: 'id',
          ascending: 'true',
        });
        totals.current = response.totalElement;
        pageCount.current = response.totalPage;
        setSavedJobs(response.data);
      } catch (error: any) {
        console.error('Lỗi khi lấy danh sách job đã lưu:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchSavedJobs();
    } else {
      setLoading(false);
    }
  }, [user]);

  // xu li bo luu job
  const handleUnSaveJob = async (jobId: number) => {
    try {
      await deleteSaveJob(jobId);
      setSavedJobs((prev) => prev.filter((job) => job?.id !== jobId));
    } catch (error: any) {
      console.error('Lỗi khi bỏ lưu công việc:', error.message);
      alert('Xoá không thành công!');
    }
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex flex-row gap-4 px-24 py-6">
          {/* left */}
          <div className="left-section basis-7/10 h-auto">
            <div className="relative bg-gradient-to-r from-green-900 to-green-600 text-white py-4 px-4 rounded-t-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/arrow_desktop.png')] bg-contain bg-no-repeat bg-center opacity-100"></div>
              <div className="relative z-10 p-6">
                <h2 className="text-2xl font-bold">Việc làm đã lưu</h2>
                <p>
                  Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng
                  tuyển ngay để không bỏ lỡ cơ hội nghề nghiệp dành cho bạn.
                </p>
              </div>
            </div>

            <div className="bg-white px-4 py-2 rounded-b-lg">
              {loading ? (
                <p className="text-center py-8 text-gray-500">
                  Đang tải dữ liệu...
                </p>
              ) : savedJobs.length > 0 ? (
                <div>
                  <p className="mb-6">
                    Danh sách <strong className='text-green-600'>{totals.current}</strong> việc làm đã
                    lưu
                  </p>
                  {savedJobs?.map((job) => (
                    <div
                      key={job.id}
                      className="border border-gray-200 cursor-pointer rounded-lg mb-2"
                    >
                      <div className="flex flex-row gap-4 px-2 py-2 hover:bg-gray-100 rounded-lg">
                        <div className="left rounded-lg">
                          <div className="w-30 h-30 flex items-center justify-center border border-gray-200 bg-white rounded-lg">
                            <img
                              className="w-auto h-auto object-contain px-2 py-2"
                              src={job?.companyImg}
                              alt="Logo company"
                            />
                          </div>
                        </div>
                        <div className="right w-full flex flex-col justify-between">
                          <div className="flex justify-between gap-2">
                            <div className="flex flex-col">
                              <h3 className="text-lg font-semibold mb-1 hover:text-green-600">
                                <Link href={`/job/${job.id}`} className="">
                                  {job.name}
                                </Link>
                              </h3>
                              <Link
                                href={`/company/${job.companyId}`}
                                className="text-base text-gray-600 uppercase mb-1"
                              >
                                {job?.companyName}
                              </Link>
                            </div>
                            <div>
                              <span className="text-green-600 font-semibold text-nowrap">{`Từ ${displayVNDWithPostfix( job.salaryFrom)} - ${displayVNDWithPostfix(job.salaryTo)} VNĐ`}</span>
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 justify-between">
                            <div className="flex flex-row flex-wrap gap-2">
                              {job?.city?.map((e) => (
                                <div
                                  key={e}
                                  className="h-[fit-content] w-[fit-content] text-xs bg-gray-300 px-1 py-1 rounded-xs"
                                >
                                  {e}
                                </div>
                              ))}
                              <div className="h-[fit-content] w-[fit-content] text-xs bg-gray-300 px-1 py-1 rounded-xs">
                                Yêu cầu {job?.yearOfExperience} năm kinh nghiệm
                              </div>
                            </div>
                            <div className="flex flex-row gap-2">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full rounded-xs"
                              >
                                Ứng tuyển
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full bg-gray-200 hover:bg-gray-200 rounded-xs"
                                onClick={() => handleUnSaveJob(job?.id)}
                              >
                                <Trash className="text-gray-700" /> Bỏ lưu
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Pagination
                    currentPage={currentPage}
                    pageCount={pageCount.current}
                    onPageChange={setCurrentPage}
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center ">
                  <div className="flex flex-col items-center gap-4 py-4">
                    <img src="/assets/empty.png" alt="Không có dữ liệu" />
                    <p>Bạn chưa lưu công việc nào!</p>
                    <Link href="/home">
                      <Button variant="default">Tìm việc ngay</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* right */}
          <div className="right-section basis-3/10">
            <div className="h-[480px] w-full bg-contain bg-no-repeat bg-[url(/assets/no-spotlight-mau-cv.png)] rounded-lg">
              <a href="#" className="h-full w-full block rounded-b-lg"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
