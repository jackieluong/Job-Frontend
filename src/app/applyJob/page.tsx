"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check, Eye, MessageSquare } from "lucide-react";

const statuses = [
  { id: "applied", label: "Đã ứng tuyển" },
  { id: "viewed", label: "NTD đã xem hồ sơ" },
  { id: "matched", label: "Hồ sơ phù hợp" },
  { id: "not_matched", label: "Hồ sơ chưa phù hợp" },
];

const appliedJobs = [
  {
    nameCompany: "Chi Nhánh Công Ty Cổ Phần Thiết Bị Vệ Sinh Caesar Việt Nam Tại Hà Nội",
    nameJob: "Nhân Viên Kinh Doanh Dự Án",
    logoCompany: "/assets/logoCompany.jpg",
    salary: "22 - 45 triệu",
    applyDate: "24/03/2025 - 17:08",
    hiringView: "12/03/2025 - 19:44",
    status: "viewed",
  },
  {
    nameCompany: "CÔNG TY TNHH TRIDENT DIGITAL TECH",
    nameJob: "Senior Frontend Developer (Salary Upto 45M - Get 2 Weekends Off)",
    logoCompany: "/assets/logoCompany.jpg",
    salary: "Tới 45 triệu",
    applyDate: "24/03/2025 - 17:08",
    hiringView: "12/03/2025 - 19:44",
    status: "applied",
  },
  {
    nameCompany: "CÔNG TY TNHH TECH",
    nameJob: "Senior Frontend Developer (Salary Upto 45M - Get 2 Weekends Off)",
    logoCompany: "/assets/logoCompany.jpg",
    salary: "Tới 45 triệu",
    applyDate: "24/03/2025 - 17:08",
    hiringView: "12/03/2025 - 19:44",
    status: "matched",
  },
];

export default function Page() {
  const [selectedStatus, setSelectedStatus] = useState<string>("applied");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // dong drop menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // loc job
  const filteredJobs = appliedJobs.filter((job) => job.status === selectedStatus);

  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <div className="flex flex-row gap-4 px-24 py-6">
          {/* Left section */}
          <div className="left-section basis-7/10 h-[fit-content] bg-white rounded-lg px-4 py-4">
            {/* drop menu */}
            <div className="flex justify-between items-center mb-6 relative">
              <h2 className="text-xl font-bold">Việc làm đã ứng tuyển</h2>
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
                      <li className="px-4 py-2 text-gray-500 font-semibold">Trạng thái</li>
                      {statuses.map((status) => (
                        <li
                          key={status.id}
                          className={`px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 ${
                            selectedStatus === status.id ? "text-green-600 font-semibold" : ""
                          }`}
                          onClick={() => {
                            setSelectedStatus(status.id);
                            setIsOpen(false);
                          }}
                        >
                          {status.label}
                          {selectedStatus === status.id && <Check className="w-4 h-4" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    key={job.nameCompany}
                    className="flex flex-row gap-4 px-4 py-4 border-1 border-gray-300 rounded-lg mb-4"
                  >
                    <div className="w-25 h-25 flex items-center justify-center border-1 border-gray-300 rounded-lg">
                      <img className="w-auto h-auto object-contain px-2 py-2" src={job.logoCompany} alt="Logo company" />
                    </div>
                    <div>
                      <div className="flex flex-row justify-between gap-4 mb-2">
                        <div className="text-wrap">
                          <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
                            <a href="#">{job.nameJob}</a>
                          </h3>
                          <a href="#" className="text-base text-gray-600 uppercase mb-1">{job.nameCompany}</a>
                          <p className="text-gray-800">Thời gian ứng tuyển: {job.applyDate}</p>
                        </div>
                        <div className="text-nowrap">
                          <span className="text-sm text-green-600 font-semibold">{job.salary}</span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between gap-4">
                        <div className="text-gray-500">
                          CV đã ứng tuyển: <a href="#" className="text-green-600 underline">CV tải lên</a>
                        </div>
                        <div className="flex flex-row gap-2">
                          <a href="#" className="w-full block">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                            >
                              <MessageSquare />Nhắn tin
                            </Button>
                          </a>
                          <a href="#" className="w-full block">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                            >
                              <Eye /> Xem CV
                            </Button>
                          </a>
                        </div>
                      </div>
                      <hr className="mt-4 mb-2" />
                      <p className="text-base text-orange-500">NTD đã xem hồ sơ ({job.hiringView})</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center">
                  <div className=" flex flex-col items-center gap-4 py-4">
                    <img src="/assets/empty.png" alt="Không có dữ liệu" />
                    <p className="font-semibold">Bạn chưa ứng tuyển công việc nào!</p>
                    <p className="text-gray-600">Bắt đầu sự nghiệp mơ ước với hàng nghìn việc làm chất lượng tại TopCV</p>
                    <a href="#">
                      <Button variant="default">Tìm việc ngay</Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
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