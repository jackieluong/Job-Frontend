'use client';
import { useState } from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { saveJob, deleteSaveJob } from '@/services/jobService';
import { useAuth } from '@/store/userStore';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

interface CardJobProps {
  jobId: number; //
  jobTitle: string;
  companyId: number;
  companyName: string;
  salary: string;
  location: string[];
  companyImgUrl: string;
  yearOfExperience: number;
}

const CardJob: React.FC<CardJobProps> = ({
  jobId,
  jobTitle,
  companyId,
  companyName,
  salary,
  location,
  companyImgUrl,
  yearOfExperience,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const user = useAuth();
  const router = useRouter();

  const handleSaveClick = async (id: number) => {
    if (!user) {
      alert('Bạn cần đăng nhập để lưu tin.');
      router.push('/login');
      return;
    }

    if (isSaved) {
      setIsSaved(false); // có thể thay bằng gọi API hủy lưu nếu cần
      try {
        await deleteSaveJob(Number(id));
        setIsSaved(false);
        console.log('xoa thanh cong');
      } catch (error: any) {
        console.log('Lỗi khi bỏ lưu job: ', error.mesage);
      }
    } else {
      try {
        await saveJob(Number(id));
        console.log(id);
        setIsSaved(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      } catch (error: any) {
        console.error('Lỗi khi lưu job:', error.message);
      }
    }
  };

  return (
    <div className="border border-gray-200 cursor-pointer rounded-lg mb-2 bg-white">
      <div className="flex flex-row gap-4 px-2 py-2 hover:bg-gray-100 rounded-lg">
        <div className="left rounded-lg">
          <div className="w-30 h-30 flex items-center justify-center border border-gray-200 bg-white rounded-lg">
            <img
              className="w-auto h-auto object-contain px-2 py-2"
              src={companyImgUrl}
              alt="Logo company"
            />
          </div>
        </div>
        <div className="right w-full flex flex-col justify-between">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
                <Link href={`/jobdetail/${jobId}`} className="">
                  {jobTitle}
                </Link>
              </h3>
              <Link
                href={`/companyDetail/${companyId}`}
                className="text-base text-gray-600 uppercase mb-1"
              >
                {companyName}
              </Link>
            </div>
            <div>
              <span className="text-green-600 font-semibold text-nowrap">
                {salary}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row flex-wrap gap-2">
              {location.map((e) => (
                <div
                  key={e}
                  className="h-[fit-content] w-[fit-content] text-xs bg-gray-300 px-1 py-1 rounded-xs"
                >
                  {e}
                </div>
              ))}
              {yearOfExperience && (
                <div className="h-fit w-fit text-xs bg-gray-300 px-1 py-1 rounded-xs">
                  Yêu cầu {yearOfExperience} năm kinh nghiệm
                </div>
              )}
            </div>
            <div className="flex flex-row gap-2">
              <a href="#" className="w-full block">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full rounded-xs"
                >
                  Ứng tuyển
                </Button>
              </a>
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-gray-200 hover:bg-gray-200 rounded-xs"
                  onClick={() => handleSaveClick(jobId)}
                >
                  <Heart
                    className={`text-green-600 ${isSaved ? 'fill-green-600' : ''}`}
                  />
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
        </div>
      </div>
    </div>
  );
};

export default CardJob;
