'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '@/components/header/header';
import { Button } from '@/components/ui/button';
import { ChevronDown, Check, Eye, MessageSquare } from 'lucide-react';
import { JobApply } from '@/lib/interface';
import React from 'react';
import { fetchAppliedJobsByUser } from '@/services/applyService';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { displayVNDWithPostfix, formatDateTime } from '@/lib/utils';
import Pagination from '@/components/pagination/Pagination';
import { useRouter } from 'next/navigation';
import { useChat } from '@/store/chatStore';
import { useAuth } from '@/store/userStore';
const statuses = [
  { id: 'applied', label: 'Đã ứng tuyển' },
  { id: 'viewed', label: 'NTD đã xem hồ sơ' },
  { id: 'matched', label: 'Hồ sơ phù hợp' },
  { id: 'not_matched', label: 'Hồ sơ chưa phù hợp' },
];

const appliedJobs = [
  {
    nameCompany:
      'Chi Nhánh Công Ty Cổ Phần Thiết Bị Vệ Sinh Caesar Việt Nam Tại Hà Nội',
    nameJob: 'Nhân Viên Kinh Doanh Dự Án',
    logoCompany: '/assets/logoCompany.jpg',
    salary: '22 - 45 triệu',
    applyDate: '24/03/2025 - 17:08',
    hiringView: '12/03/2025 - 19:44',
    status: 'viewed',
  },
  {
    nameCompany: 'CÔNG TY TNHH TRIDENT DIGITAL TECH',
    nameJob: 'Senior Frontend Developer (Salary Upto 45M - Get 2 Weekends Off)',
    logoCompany: '/assets/logoCompany.jpg',
    salary: 'Tới 45 triệu',
    applyDate: '24/03/2025 - 17:08',
    hiringView: '12/03/2025 - 19:44',
    status: 'applied',
  },
  {
    nameCompany: 'CÔNG TY TNHH TECH',
    nameJob: 'Senior Frontend Developer (Salary Upto 45M - Get 2 Weekends Off)',
    logoCompany: '/assets/logoCompany.jpg',
    salary: 'Tới 45 triệu',
    applyDate: '24/03/2025 - 17:08',
    hiringView: '12/03/2025 - 19:44',
    status: 'matched',
  },
];

const applyStatusMap: Record<string, string> = {
  PENDING: 'Đang chờ xử lý',
  SEEN: 'NTD đã xem',
  ACCEPTED: 'NTD đã chấp nhận',
  REJECTED: 'Đã từ chối',
};

export default function Page() {
  const [selectedStatus, setSelectedStatus] = useState<string>('applied');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [appliedJobs, setAppliedJobs] = useState<JobApply[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const pageCount = useRef<number>(0);
  const totals = useRef<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // loc applyJob
  // const appliedJobs = appliedJobs.filter(
  //   (applyJob) => applyJob.status === selectedStatus,
  // );

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await fetchAppliedJobsByUser(
          currentPage + 1,
          pageSize,
          null,
          null,
        );

        setAppliedJobs(response.data);
        pageCount.current = response.totalPage;
        totals.current = response.totalElement;
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
        toast.error('Error fetching applied jobs');
      }
    };

    fetchAppliedJobs();
  }, [currentPage]);

  const { addConversation } = useChat();
  const router = useRouter();

  const { user } = useAuth();

  const handleClickChat = (applyJob: JobApply) => {
    addConversation(
      {
        id: Number(applyJob.job.companyId) || -1,
        name: applyJob.job.companyName || '',
        role: 'COMPANY',
      },
      user?.id || -1,
    );
    setTimeout(() => {
      router.push('/chat');
    }, 500); // Delay to ensure state updates before navigating

    // router.push("/chat");
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="bg-gray-100">
        <div className="flex flex-row gap-4 px-24 py-6">
          {/* Left section */}
          <div className="left-section basis-7/10 h-[fit-content] bg-white rounded-lg px-4 py-4">
            {/* drop menu */}
            <div className="flex justify-between items-center mb-6 relative">
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Việc làm đã ứng tuyển</h2>
                <div className=" text-gray-500">
                  Đã ứng tuyển{' '}
                  <span className="text-green-600">{totals.current}</span> việc
                  làm
                </div>
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between text-sm text-gray-500 font-medium px-4 py-2 border rounded-lg w-56"
                >
                  {statuses.find((s) => s.id === selectedStatus)?.label}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
                {isOpen && (
                  <div className="absolute top-12 right-0 w-56 bg-white border rounded-lg shadow-md">
                    <ul>
                      <li className="px-4 py-2 text-gray-500 font-semibold">
                        Trạng thái
                      </li>
                      {statuses.map((status) => (
                        <li
                          key={status.id}
                          className={`px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 ${
                            selectedStatus === status.id
                              ? 'text-green-600 font-semibold'
                              : ''
                          }`}
                          onClick={() => {
                            setSelectedStatus(status.id);
                            setIsOpen(false);
                          }}
                        >
                          {status.label}
                          {selectedStatus === status.id && (
                            <Check className="w-4 h-4" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div>
              {appliedJobs.length > 0 ? (
                appliedJobs.map((applyJob) => (
                  <div
                    key={applyJob.id}
                    className="flex flex-row gap-4 px-4 py-4 border-1 border-gray-300 rounded-lg mb-4 flex-1"
                  >
                    <div className="w-25 h-25 flex items-center justify-center border-1 border-gray-300 rounded-lg">
                      <img
                        className="w-auto h-auto object-contain px-2 py-2"
                        src={applyJob.job.companyImg}
                        alt="Logo company"
                      />
                    </div>
                    <div className="w-full pr-5">
                      <div className="flex flex-row justify-between gap-4 mb-2">
                        <div className="text-wrap">
                          <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
                            <Link href={`/job/${applyJob.job.id}`}>
                              {applyJob.job.name}
                            </Link>
                          </h3>
                          <Link
                            href={`/company/${applyJob.job.companyId}`}
                            className="text-base text-gray-600 uppercase mb-1"
                          >
                            {applyJob.job.companyName}
                          </Link>
                          <p className="text-gray-800">
                            Thời gian ứng tuyển:{' '}
                            {formatDateTime(applyJob.createdAt)}
                          </p>
                        </div>
                        <div className="text-nowrap">
                          <span className="text-sm text-green-600 font-semibold">
                            {displayVNDWithPostfix(applyJob.job.salaryFrom)} -{' '}
                            {displayVNDWithPostfix(applyJob.job.salaryTo)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between gap-4">
                        <div className="text-gray-500">
                          CV đã ứng tuyển:{' '}
                          <Link
                            target="_blank"
                            href={applyJob.resume}
                            className="text-green-600 underline"
                          >
                            CV tải lên
                          </Link>
                        </div>
                        <div className="flex flex-row gap-2">
                          <a href="#" className="w-full block">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                              onClick={() => handleClickChat(applyJob)}
                            >
                              <MessageSquare />
                              Nhắn tin
                            </Button>
                          </a>
                          <Link
                            target="_blank"
                            href={applyJob.resume}
                            className="w-full block"
                          >
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                            >
                              <Eye /> Xem CV
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <hr className="mt-4 mb-2" />
                      <p className="text-base text-orange-500">
                        {applyStatusMap[applyJob.applyStatus]}
                        {applyJob.applyStatus !== 'PENDING' && (
                          <span> ({formatDateTime(applyJob.updatedAt)}) </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center">
                  <div className=" flex flex-col items-center gap-4 py-4">
                    <img src="/assets/empty.png" alt="Không có dữ liệu" />
                    <p className="font-semibold">
                      Bạn chưa ứng tuyển công việc nào!
                    </p>
                    <p className="text-gray-600">
                      Bắt đầu sự nghiệp mơ ước với hàng nghìn việc làm chất
                      lượng tại TopCV
                    </p>
                    <Link href="/job/search">
                      <Button variant="default">Tìm việc ngay</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              pageCount={pageCount.current}
            />
          </div>

          {/* Right section */}
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
