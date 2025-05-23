'use client';
import Header from '@/components/header/header';
import { Button } from '@/components/ui/button';
import { Heart, CheckCircle } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import CardJob from '@/components/card/cardJob';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  deleteSaveJob,
  getJobDetailByIdNew,
  getJobRelatedlById,
  saveJob,
} from '@/services/jobService';
import { useAuth } from '@/store/userStore';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { displayVNDWithPostfix, formatDateTime } from '@/lib/utils';
import ApplyDialog, {
  ApplyDialogRef,
} from '@/components/applyDialog/ApplyDialog';

export interface JobDetail {
  id: number;
  name: string;
  description: string;
  detail: string;
  deadline: string;
  createdAt: string;
  updatedAt: string | null;
  city: string[]; // ['Hà Nội', 'Hồ Chí Minh']
  companyId: number;
  companyName: string;
  companySize: string;
  companyIndustry: string;
  companyImgUrl: string;
  companyAddress: {
    province: string;
    district: string;
    location: string;
  };
  salaryFrom: number;
  salaryTo: number;
  jobStatus: string; // e.g. "PENDING"
  jobType: string; // e.g. "FULL_TIME"
  level: string; // e.g. "INTERN"
  educationLevel: string | null;
  genderRequire: string | null;
  yearOfExperience: number;
  skills: string[];
  quantity: number;
  industry: string;
  saved: boolean;
  appliedAt: string;
  resume: string;
}

function formattedDate(isoDate: string | undefined) {
  if (!isoDate) return 'Không xác định';
  const date = new Date(isoDate);
  return date.toLocaleDateString('vi-VN');
}

export default function cvdetail() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();

  const applyDialogRef = useRef<ApplyDialogRef>(null);

  const [job, setJob] = useState<JobDetail | null>(null);
  const [relatedJob, setRelatedJob] = useState<JobDetail[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!id) {
      console.error('Job ID is missing or undefined');
      return;
    }
    const fetchDetail = async () => {
      try {
        const dataJob = await getJobDetailByIdNew(Number(id)).then(
          (res) => res.data,
        );
        setJob(dataJob);

        // const dataRelatedJob = await getJobRelatedlById(Number(id), job.name).then(
        //   (res) => res.data,
        // );

        setIsSaved(dataJob.saved);
        // setRelatedJob(dataRelatedJob);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchDetail();
  }, [id]);

  useEffect(() => {
    const fetchRelatedJob = async () => {
      if (!job) return;
      try {
        const dataRelatedJob = await getJobRelatedlById(
          Number(id),
          job.name,
        ).then((res) => res.data);
        setRelatedJob(dataRelatedJob);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    fetchRelatedJob();
  }, [job]);
  const handleSaveClick = async (id: number) => {
    if (!user) {
      alert('Bạn cần đăng nhập để lưu tin.');
      router.push('/login');
      return;
    }
    if (isSaved) {
      try {
        await deleteSaveJob(Number(id));
        setIsSaved(false);
      } catch (error: any) {
        console.log('Lỗi khi bỏ lưu job: ', error.mesage);
      }
    } else {
      try {
        await saveJob(Number(id));
        setIsSaved(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      } catch (error: any) {
        console.error('Lỗi khi lưu job:', error.message);
      }
    }
  };

  const handleClickApply = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // e.stopPropagation(); // Prevent the click event from bubbling up to the job name
    if (!user) {
      alert('Bạn cần đăng nhập để ứng tuyển');
      return;
    }
    if (!job?.appliedAt) applyDialogRef.current?.openDialog(job);
  };

  return (
    <div>
      {/* <Header/>     */}
      <div>
        <div className="bg-gray-100">
          <div className="flex flex-row mx-24 gap-5">
            {/* left */}
            <div className="basis-7/10 h-auto">
              {/* map */}
              <div
                key={job?.id}
                className="flex flex-col gap-2 bg-white px-4 py-4 my-4 rounded-lg"
              >
                <h1 className="text-xl font-bold">
                  <a href="#" className="">
                    {job?.name}
                  </a>
                </h1>
                <div className="flex flex-row">
                  <div className="basis-1/3 flex items-center gap-2.5">
                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                      <img
                        src="/assets/paid.png"
                        alt=""
                        className="px-2 py-2 invert"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="mb-1 text-gray-700">Mức lương</p>
                      <p className="font-semibold">{`Từ ${job?.salaryFrom} - ${job?.salaryTo} VNĐ`}</p>
                    </div>
                  </div>
                  <div className="basis-1/3 flex items-center gap-2.5">
                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                      <img
                        src="/assets/location.png"
                        alt=""
                        className="px-2 py-2 invert"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="mb-1 text-gray-700">Địa điểm</p>
                      <p className="font-semibold">{job?.city.join(', ')}</p>
                    </div>
                  </div>
                  <div className="basis-1/3 flex items-center gap-2.5">
                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                      <img
                        src="/assets/work.png"
                        alt=""
                        className="px-2 py-2 invert"
                      />
                    </div>
                    <div className="text-sm ">
                      <p className="mb-1 text-gray-700">Kinh nghiệm</p>
                      <p className="font-semibold">
                        {job?.yearOfExperience} năm{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-auto w-[fit-content] text-sm bg-gray-200 px-1 py-1 rounded-xs">
                  Hạn nộp hồ sơ: {formattedDate(job?.deadline)}
                </div>
                <div className="flex flex-row w-full gap-4 mt-1">
                  <Button
                    // disabled={job?.appliedAt != null}
                    onClick={handleClickApply}
                    variant="default"
                    size="lg"
                    className="w-full"
                  >
                    {job?.appliedAt ? (
                      <p className="text-gray-800 font-bold">
                        {' '}
                        Đã ứng tuyển vào {formatDateTime(job.appliedAt)}
                      </p>
                    ) : (
                      'Ứng tuyển'
                    )}
                  </Button>
                  <div>
                    <Button
                      variant="default"
                      size="lg"
                      className={`w-full bg-white text-green-600 hover:bg-white border-1 border-green-500 hover:border-green-600 "}`}
                      onClick={() => handleSaveClick(job?.id)}
                    >
                      {isSaved ? (
                        <Heart className="fill-green-600" />
                      ) : (
                        <Heart className="" />
                      )}
                      {isSaved ? 'Đã lưu' : 'Lưu tin'}
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

              <div
                key={job?.name}
                className="bg-white rounded-lg my-4 px-4 py-4"
              >
                <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2">
                  Chi tiết tin tuyển dụng
                </h2>
                <CardContent className="flex flex-col text-base">
                  {/* <RenderLexicalContent json={job.description} /> */}
                  <div className="markdown">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {job?.detail}
                    </ReactMarkdown>
                  </div>
                </CardContent>
                <div className="flex flex-row w-70 gap-2 mt-1">
                  <Button variant="default" size="lg" className="w-full">
                    Ứng tuyển
                  </Button>
                  <div>
                    <Button
                      variant="default"
                      size="lg"
                      className={`w-full bg-white text-green-600 hover:bg-white border-1 border-green-500 hover:border-green-600 "}`}
                      onClick={() => handleSaveClick(job?.id)}
                    >
                      {isSaved ? (
                        <Heart className="fill-green-600" />
                      ) : (
                        <Heart className="" />
                      )}
                      {isSaved ? 'Đã lưu' : 'Lưu tin'}
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

              <div className="bg-white rounded-lg my-4 px-4 py-4">
                <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2 mb-4">
                  Việc làm liên quan
                </h2>
                {/* map card  */}
                {relatedJob?.map((job) => (
                  <CardJob
                    key={job.id}
                    jobId={job.id}
                    jobTitle={job.name}
                    companyId={job.companyId}
                    companyName={job.companyName}
                    salary={`Từ ${displayVNDWithPostfix(job.salaryFrom)} - ${displayVNDWithPostfix(job.salaryTo)} VNĐ`}
                    location={job.city}
                    companyImgUrl={job.companyImg}
                    yearOfExperience={job?.yearOfExperience}
                  />
                ))}
              </div>
            </div>
            {/* right */}
            <div className="basis-3/10 h-auto">
              <div key={job?.id} className="bg-white rounded-lg px-4 py-4 my-4">
                <div className="flex flex-row gap-2 mb-4">
                  <div className="logoCompany w-22 h-22 flex items-center justify-center border-1 border-gray-300 rounded-lg">
                    <img
                      className="w-auto h-auto object-contain px-2 py-2"
                      src={job?.companyImgUrl}
                      alt="Logo company"
                    />
                  </div>
                  <Link
                    href={`/company/${job?.companyId}`}
                    className="font-semibold uppercase"
                  >
                    {job?.companyName}
                  </Link>
                </div>
                <div className="flex flex-row px-2 gap-2">
                  <div className="flex gap-1 mt-0.5">
                    <img
                      className="w-4 h-4 mt-0.5"
                      src="/assets/group.png"
                      alt=""
                    />
                    <span className="text-sm text-gray-500 text-nowrap">
                      Quy mô:
                    </span>
                  </div>
                  <p className="font-normal line-clamp-2 text-wrap">
                    {job?.companySize}
                  </p>
                </div>
                <div className="flex flex-row px-2 gap-2">
                  <div className="flex gap-1 mt-0.5">
                    <img
                      className="w-4 h-4 mt-0.5"
                      src="/assets/cube.png"
                      alt=""
                    />
                    <span className="text-sm text-gray-500 text-nowrap">
                      Lĩnh vực:
                    </span>
                  </div>
                  <p className="font-normal line-clamp-2 text-wrap">
                    {job?.companyIndustry}
                  </p>
                </div>
                <div className="flex flex-row px-2 gap-6">
                  <div className="flex gap-1 mt-0.5">
                    <img
                      className="w-4 h-4 mt-0.5"
                      src="/assets/location.png"
                      alt=""
                    />
                    <span className="text-sm text-gray-500 text-nowrap">
                      Địa điểm:
                    </span>
                  </div>
                  <p className="font-normal line-clamp-2 text-wrap">
                    {job?.companyAddress.location},{' '}
                    {job?.companyAddress.district},{' '}
                    {job?.companyAddress.province}
                  </p>
                </div>
                <div className="flex justify-center items-center hover:underline cursor-pointer">
                  <Link
                    href={`/company/${job?.companyId}`}
                    className="font-medium text-green-600"
                  >
                    Xem trang công ty
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg px-4 py-4 my-4">
                <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
                <div key={job?.name} className="">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                      <img
                        src="/assets/bagde.png"
                        alt=""
                        className="px-2 py-2 invert"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="mb-1 text-gray-700">Cấp bậc</p>
                      <p className="font-semibold">{job?.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                      <img
                        src="/assets/school.png"
                        alt=""
                        className="px-2 py-2 invert"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="mb-1 text-gray-700">Học vấn</p>
                      <p className="font-semibold">
                        {job?.educationLevel
                          ? job?.educationLevel
                          : 'Đang cập nhật'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                      <img
                        src="/assets/group.png"
                        alt=""
                        className="px-2 py-2 invert"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="mb-1 text-gray-700">Số lượng tuyển</p>
                      <p className="font-semibold">{job?.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                      <img
                        src="/assets/work.png"
                        alt=""
                        className="px-2 py-2 invert"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="mb-1 text-gray-700">Hình thức làm việc</p>
                      <p className="font-semibold">{job?.jobType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Apply Dialog */}
      <ApplyDialog ref={applyDialogRef} />
    </div>
  );
}
