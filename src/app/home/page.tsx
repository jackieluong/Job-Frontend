"use client"

import React, { useEffect, useState} from 'react'
import Header from '@/components/header/header'
import Footer from '@/components/footer/Footer'
import { Button } from '@/components/ui/button'
import { getJobForHomepage } from '@/services/jobService';
import Link from 'next/link';
import { ChevronLeft, ChevronRight , Search } from "lucide-react";
import Pagination from '@/components/pagination/Pagination';
import { displayVNDWithPostfix } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useSearchStore } from '@/store/searchStore'

const categories = [
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/kinh-doanh-ban-hang.png?v=2', title: "Kinh doanh - Bán hàng" },
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/marketing-truyen-thong-quang-cao.png?v=2', title: "Marketing - PR - Quảng cáo" },
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/dich-vu-khach-hang.png?v=2', title: "Chăm sóc khách hàng (Customer service)" },
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/hanh-chinh-van-phong.png?v=2', title: "Nhân sự - Hành chính - Pháp chế" },
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/ngan-hang-tai-chinh.png?v=2', title: "Tài chính - Ngân hàng - Bảo hiểm" },
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/cong-nghe-thong-tin.png?v=2', title: "Công nghệ thông tin" },
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/bat-dong-san.png?v=2', title: "Bất động sản - Xây dựng" },
  { imgUrl: 'https://www.topcv.vn/v4/image/welcome/top-categories/ke-toan-kiem-toan.png?v=2', title: "Kế toán - Kiểm toán - Thuế" },
];

interface JobDetail {
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
  companyImg: string;
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
}

function page() {
  const [jobGood, setJobGood] = useState<JobDetail[]>([])
  const [currentPage, setCurrentPage] = useState(0);

  // fetch API
  useEffect(() => {
    const fetchJobGood = async () => {
      try {
        const response = await getJobForHomepage({
          currentPage: 1,
          pageSize: 10,
          sortBy: "id",
          ascending: "true",
        })
        setJobGood(response.data)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    fetchJobGood()
  }, [])
  // Pagination cho việc làm tốt nhất
  const jobsPerPage = 9;
  const pageCount = Math.ceil((jobGood?.length || 0) / jobsPerPage);
  const paginatedJobs = jobGood?.slice(currentPage * jobsPerPage, (currentPage + 1) * jobsPerPage);

  //const [keyword, setKeyword] = useState('');
  const { keyword, setKeyword } = useSearchStore()
  const router = useRouter();

  const handleSearch = () => {
    if (keyword.trim()) {
      console.log('keyword: ', keyword)
      router.push(`job/search`);
    }
  };

  return (
    <div>
      <Header/>
      <div className="w-full bg-white">
        {/* banner */}
        <div className="bg-[url('/assets/bannerhomepage.jpg')] bg-cover bg-no-repeat py-16 px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="bg-white/90 rounded-xl p-6 w-full md:w-[400px] shadow-md">
              <p className="text-gray-700 text-sm">Đón lấy thành công</p>
              <p className="font-bold text-lg mb-4">139,000 Cơ hội sẽ đến với bạn</p>
              <div className="relative w-full mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-500 w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Nhập từ khóa..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm"
                />
              </div>
              <Button 
              onClick={handleSearch}
              variant="default"
              size="default"
              className="w-full">
                TÌM VIỆC NGAY
              </Button>
            </div>
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-5xl font-black text-gray-800 mb-4">NextJob</h1>
              <p className="text-gray-600 text-base italic">
                “Khi ước mơ nở hoa trên con đường sự nghiệp, hãy đồng hành cùng chúng tôi để tạo ra ngọn lửa đam mê và thắp lên cơ hội.”
              </p>
            </div>
          </div>
        </div>
        {/* Nhà tuyển dụng nổi bật */}
        <div className="w-full flex flex-col justify-center items-center px-6 md:px-24 pt-8 pb-4 bg-white">
          <div className="flex justify-center items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-green-600 text-center">
              Nhà tuyển dụng nổi bật
            </h2>
          </div>
          <div className="w-full overflow-hidden relative">
            <div
              className="flex gap-4 animate-marquee"
              style={{ animationDuration: '10s' }}
            >
              {[...jobGood, ...jobGood].map((company, index) => (
                <div key={`${company.companyId}-${index}`} className="flex-none w-1/3 sm:w-1/5 md:w-1/4 lg:w-1/6 p-2 sm:p-3 md:p-4">
                  <Link href={`/company/${company.companyId}`} className="bg-white w-full h-20 md:h-28 rounded-lg flex justify-center items-center border border-gray-300 hover:border-green-600 p-2 cursor-pointer">
                    <div className="flex items-center justify-center rounded-full">
                      <img
                        src={company.companyImg}
                        alt={company.name}
                        className="h-full object-contain"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Việc làm tốt nhất */}
        <div className="bg-white pb-6">
          <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 gap-5">
            <div className="flex justify-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mt-2 mb-6 text-center">
                Việc làm tốt nhất
              </h2>
            </div>
            <div className="left-section w-full ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {paginatedJobs?.map((job) => (
                  <div key={job.id} className="w-full bg-white px-2 py-2 border-1 hover:border-1 hover:border-green-500 rounded-lg">
                    <div className="flex flex-col-1  sm:flex-col-2 md:flex-cols-3 gap-2 mb-1">
                      <div className="left-section ">
                        <div className="w-18 h-18 flex items-center justify-center border border-gray-200 bg-white rounded-lg">
                          <img
                            className="w-auto h-auto object-contain px-2 py-2"
                            src={job.companyImg}
                            alt="Logo company"
                          />
                        </div>
                      </div>
                      <div className="right-section flex flex-col">
                        <Link href={`/jobdetail/${job.id}`} className="text-base font-semibold hover:text-green-600 line-clamp-1">
                          {job.name}
                        </Link>
                        <Link href={`/company/${job.companyId}`} className="text-base text-gray-600 uppercase line-clamp-1">
                          {job.companyName}
                        </Link>
                        
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                      {job?.salaryFrom 
                      ? <div className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">{displayVNDWithPostfix(job.salaryFrom)} - {displayVNDWithPostfix(job.salaryTo)}</div> 
                      : <div className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">Thỏa thuận</div> 
                      }
                      {job?.city?.map((e) => (
                        <div key={e} className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">{e}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full bg-white relative pb-10">
          <div className="pt-4 px-6 mx-4 sm:mx-8 md:mx-16">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 text-center mb-6">
            NextJob của chúng tôi
            </h2>
            <div className="relative">
              <div className="bg-white story flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] xl:w-[90%] mx-auto ">
                <div className="basis-1/2">
                  <video autoPlay loop muted className="w-full h-full object-cover min-h-[350px] ">
                    <source src="./assets/searchjob.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className="basis-1/2 text-center lg:text-left lg:pl-6">
                    <div className="text-xl leading-10 mb-4 font-normal">Ở một thế giới nơi những hồ sơ xin việc trôi dạt như lá vàng cuối thu, đã có một miền đất mới xuất hiện - nơi mọi cơ hội nghề nghiệp đều được xếp hàng chờ đón bạn.</div>
                    <div className="text-gray-500 leading-7 mb-4">Ngay cả những kẻ mộng mơ nhất cũng không thể cưỡng lại được sức hút của những công việc đo ni đóng giày cho chính bạn. <br />Tên miền ấy, đơn giản mà kỳ diệu - chính là nơi hành trình nghề nghiệp bắt đầu bằng một cú nhấp chuột.</div>
                    <div>
                      <Link href="/job/search" className="text-green-300 hover:text-green-500 font-semibold relative after:absolute after:-bottom-2 after:left-0 after:bg-green-300 hover:after:bg-green-500
                        after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400">Tìm việc ngay</Link>
                    </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
        {/* Top ngành nghề nổi bật */}
        <div className="w-full bg-white relative mb-12">
          <div className="pt-4 px-6 mx-4 sm:mx-8 md:mx-16">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 text-center mb-6">
              Top ngành nghề nổi bật
            </h2>
            <div className="relative">
              <button className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 p-2 rounded-full border bg-white shadow z-10">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition border hover:border-green-500 hover:bg-white cursor-pointer"
                  >
                    <img src={item.imgUrl} alt="" className="w-20 h-20 object-contain" />
                    <p className="text-xs sm:text-sm font-medium text-gray-900 text-center line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <button className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 p-2 rounded-full border bg-white shadow z-10">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* parallax */}
        <div className="mx-auto h-60 md:h-85 w-full  bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('/assets/parallax.jpg')]">
        </div>
        {/* đk */}
        <div className="w-full relative bg-cover bg-no-repeat py-10 px-4 sm:px-10 flex items-center justify-center text-center mt-6 md:mt-16 ">
          <div className="absolute inset-0 bg-green-400 z-0" />
          <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Hãy Đăng Ký Theo Dõi Để Nhận Cơ Hội Làm Việc Mới Nhất
            </h2>
            <div className="flex w-full max-w-xl bg-white rounded-md overflow-hidden shadow-md">
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="flex-grow px-4 py-2 text-sm outline-none"
              />
              <Button 
              variant="default"
              size="default"
              className="">
                TÌM VIỆC NGAY
              </Button>
            </div>
          </div>
        </div>
        
       
      </div>
      <Footer/>
    </div>
  )
}

export default page