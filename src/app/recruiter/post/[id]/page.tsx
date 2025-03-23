'use client';
import { RenderLexicalContent } from '@/components/jobDescription/renderLexicalContent';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { JobPostingInfo } from '@/lib/interface';
import { displayVNDCurrency, displayVNDWithPostfix } from '@/lib/utils';
import {
  MapPin,
  Calendar,
  Briefcase,
  DollarSign,
  Users,
  GraduationCap,
  User,
  Check,
  Hourglass,
  Clock,
  List,
  Pencil,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import CVListTab from './CVListTab';
import DetailTab from './DetailTab';
const jobDescription = `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Mô tả công việc","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"heading","version":1,"tag":"h3"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Lập trình, phát triển các ứng dụng trong lĩnh vực Chứng khoán, Ngân hàng","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Chủ động và/hoặc phối hợp cùng các nhà cung cấp để phát triển/ triển khai các giải pháp CNTT theo các công việc được phân công","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Duy trì hoạt động của các sản phẩm/dịch vụ được phân công","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Nghiên cứu, tìm kiếm, đề xuất các giải pháp/sáng kiến CNTT và đề xuất nhà cung cấp đáp ứng yêu cầu của công việc","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Yêu cầu ứng viên","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"heading","version":1,"tag":"h3"},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Kỹ năng:","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Bằng cấp: Tốt nghiệp kỹ sư Công nghệ thông tin, toán tin các trường đại học, cao đẳng hoặc các trung tâm đào tạo lập trình viên","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"- Kinh nghiệm: tối thiểu 1 năm kinh nghiệm, ưu tiên trong lĩnh vực phát triển phần mềm level từ Middle - Junior","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Có kinh nghiệm làm việc với Java, Spring Boot, Maven/Gradle","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Có kinh nghiệm thiết kế và phát triển Rest API","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Sử dụng thành thạo các IDE phát triển và công cụ quản lý mã nguồn (Git)","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Nhiệt tình, trách nhiệm với công việc","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Ưu tiên:","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Ưu tiên ứng viên có thể làm được ReactJS hoặc Flutter","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Có kinh làm việc với Web socket.","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Có kinh nghiệm về Microservices","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Có kinh nghiệm làm việc với docker","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Đã từng làm việc tốt với cơ sở dữ liệu Oracle, PostgreSQL/NoSQL là một lợi thế","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Quyền lợi","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"heading","version":1,"tag":"h3"},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Cơ hội phát triển","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Được làm việc với các chuyên gia công nghệ với trên 15 năm kinh nghiệm trong lĩnh vực tài chính, fintech","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Số lượng giải pháp và các sản phẩm rất nhiều với nhiều thử thách đa dạng, giúp phát triển nghề nghiệp.","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Luôn được tiếp cận công nghệ mới nhất, tối ưu hóa năng lực sản xuất phần mềm","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Quy trình phát triển DevOps, tự động hóa nhiều trong quy trình","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Giải pháp tổng thể từ Front Office (iOS, Android, Flutter, ReactJS, .NET) – Middleware – Back Office với nhiều công nghệ chuyên sâu J2EE, Sping Framework, jBase, Nodejs, Apache Kafka, Apache Spark, Apache Flink, Hadoop, ElasticSearch, Oracle Database, SQL Server, Memory Database, Caching...được triển khai tại nhiều tổ chức tài chính, chứng khoán hàng đầu thế giới","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Được tham gia vào các dự án phần mềm, các mô hình phát triển ứng dụng cao cấp với các đối tác hàng đầu Nhật Bản: các ứng dụng trong lĩnh vực tài chính, fintech","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Được tiếp cận và đào tạo theo quy trình quản lý dự án phần mềm chuyên nghiệp theo chuẩn Nhật Bản như ISO 9001:2013, ISMS ISO 27001:2013","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Chế độ đãi ngộ","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Lương cứng + Lương tháng thứ 13 + thưởng các dịp lễ, tết + lương hiệu quả kinh doanh;","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Có chế độ riêng cho các leader ở các cấp khác nhau","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Hưởng bảo hiểm xã hội, bảo hiểm y tế theo chế độ nhà nước ban hành.","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Thưởng dự án, review kết quả công việc 6 tháng một lần.","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Tuần làm việc 5 ngày, nghỉ thứ bảy, chủ nhật và các ngày lễ tết. Làm thêm ngoài giờ được tính tiền làm thêm = 150% ngày bình thường.","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Khám tổng thể sức khỏe định kỳ hàng năm tại các bệnh viện quốc tế","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Du lịch 1 năm tối thiểu 1 lần, tháng tháng/quý có các hoạt động ngoại khóa, team building","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Được đào tạo hàng tuần về chuyên môn kĩ thuật, nghiệp vụ và các chương trình đào tạo kĩ năng mềm khác như quản lý dự án, quản lý cảm xúc, não bộ, sức khỏe, giải tỏa stress, thiền cho kĩ sư...","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Văn hóa","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Môi trường làm việc cởi mở, sẵn sàng chia sẻ, giúp đỡ lẫn nhau để cùng phát triển","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Khuyến khích các thành viên trong công ty sáng tạo các ý tưởng giúp dự án, công ty phát triển","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Tôn trọng quyền tự do các nhân","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Chú trọng đào tạo và phát triển cá nhân","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[],"direction":null,"format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[],"direction":null,"format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[],"direction":null,"format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Địa điểm làm việc","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"heading","version":1,"tag":"h3"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"- Hà Nội: Tầng 8, tòa nhà Kim Ánh, 78 Duy Tân, Cầu Giấ","type":"text","version":1}],"direction":"ltr","format":"start","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}
`;

const job: JobPostingInfo = {
  title: 'Frontend Developer',
  industry: 'Technology',
  province: 'Hà Nội',
  district: 'Cầu Giấy',
  jobType: 'Full-time',
  description: jobDescription,
  salaryFrom: 10000000,
  salaryTo: 20000000,
  deadline: '2025-04-15',
  gender: 'Any',
  level: 'Senior',
  quantity: 2,
  experience: 3,
  education: 'Bachelor',
  createdAt: '2025-03-20',
  updatedAt: '2025-03-20',
  status: 'OPEN',
};

 

export default function page() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  // const { id } = router.query;
  const handleClickEdit = () => {
    router.push(`/recruiter/post/create`);
  };

  const handleClickViewCV = () => {
      setActiveTab(1);
  }

  const tabs = [
    {
      title: 'Tin tuyển dụng',
      component: <DetailTab job={job} handleClickViewCV={handleClickViewCV}  />,
    },
    { title: 'Danh sách CV', component: <CVListTab  job={job}/> },
    // { title: 'Quyền lợi', component: <Benefit /> },
    // { title: 'Thông tin liên hệ', component: <Contact /> },
  ];

  return (
    <div>
      <Card className="mx-auto w-3/4 mb-5">
        <CardHeader>
          <CardTitle className="flex gap-2 break-words mb-4">
            {job.title}{' '}
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
              <MapPin className="h-10 w-10 text-white rounded-full mt-1 mr-2 bg-green-500  p-2" />

              <div className="flex flex-col gap-1">
                <div className="font-semibold">Địa điểm</div>
                <div>{job.province}</div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Hourglass className="h-10 w-10 text-white rounded-full mt-1 mr-2 bg-green-500  p-2" />

              <div className="flex flex-col gap-1">
                <div className="font-semibold">Kinh nghiệm</div>
                <div>{job.experience} năm</div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-left">
            <span className="inline-flex items-center bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-sm gap-3">
              <Clock className="w-5 h-5"></Clock>
              Hạn nộp hồ sơ: {job.deadline}
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
     <div className="mx-auto w-3/4">
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
        <div className="p-4">{tabs[activeTab].component}</div>
      </div>
        

    </div>
  );
}
