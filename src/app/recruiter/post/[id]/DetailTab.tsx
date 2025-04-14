'use client';
import React from 'react';


import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { JobDetail } from '@/lib/interface';
import { displayVNDWithPostfix, formatDate } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
  MapPin,
  Calendar,
  Briefcase,
  DollarSign,
  Users,
  GraduationCap,
  User,
  List,
  Pencil,
  Hourglass,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

type DetailTabProps = {
  // Define your props here
  job: JobDetail;
  handleClickViewCV: () => void;
};



export default function DetailTab({ job, handleClickViewCV }: DetailTabProps) {
  const router = useRouter();
  const handleClickEdit = () => {
    router.push(`/recruiter/post/create`);
  };

  
 
  return (
    <div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Tin tuyển dụng</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <MapPin className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Tỉnh/Thành phố</div>
                  <div>{job.city.map((c) => c).join(', ')}</div>
                </div>
              </div>
              {/* <div className="flex gap-2">
                <MapPin className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Quận/Huyện</div>
                  <div>{job.district}</div>
                </div>
              </div> */}

              <div className="flex gap-2">
                <Hourglass className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Kinh nghiệm</div>
                  <div>{job.yearOfExperience} năm</div>
                </div>
              </div>
              

            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Calendar className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Ngày tạo</div>
                  <div>{formatDate(job.createdAt)}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Calendar className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Ngày cập nhật</div>
                  <div>{formatDate(job.updatedAt)}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Briefcase className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Hình thức</div>
                  <div>{job.jobType}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Users className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Số lượng tuyển</div>
                  <div>{job.quantity}</div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <DollarSign className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Lương</div>
                  <div>
                    {displayVNDWithPostfix(job.salaryFrom)} -{' '}
                    {displayVNDWithPostfix(job.salaryTo)}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Briefcase className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Cấp bậc</div>
                  <div>{job.level}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <User className="h-8 w-7 te7t-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Giới tính</div>
                  <div>{job.genderRequire || "Không yêu cầu"}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <GraduationCap className="h-7 w-7 text-gray-500 mt-1 mr-2 bg-gray-100 p-1 " />
                <div>
                  <div className="text-gray-600 font-bold">Bằng cấp</div>
                  <div>{job.educationLevel || "Không yêu cầu"}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>Chi tiết tuyển dụng</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col text-base'>
          {/* <RenderLexicalContent json={job.description} /> */}
          <div className='markdown'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}  >{job.description}</ReactMarkdown>
          </div>
  
          <div className='markdown'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.detail}</ReactMarkdown>
          </div>
        </CardContent>

        <CardFooter>
          <div className=" my-5 flex flex-col lg:flex-row gap-5 ">
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
        </CardFooter>
      </Card>
    </div>
  );
}
