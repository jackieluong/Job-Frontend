// "use client"
// import Banner from "@/components/ui/banner";
// import CvSamplesList from "@/components/ui/CvSampleList";
// import Header from "@/components/ui/header";
// import { useAuth } from "@/store/userStore";
// import React from 'react';




// export default function HomeLayout({ children }: { children: React.ReactNode }) {
//   const {user, isAuthenticated} = useAuth();

//   console.log("user: ", user);
//   console.log("isAuthenticated: ", isAuthenticated);

//   return (
//     <>
//       {/* UI chỉ có trên trang Home */}
//       <Header />
//       <Banner />
//       <CvSamplesList />
//       <main>{children}</main>
//     </>
//   );
// }

// "use client"

// import React, { useEffect, useState } from 'react'
// import Header from '@/components/ui/header'
// //import CardJob from '@/components/cardJob'
// import { getSaveJob } from '@/services/jobService';
// import Link from 'next/link';

// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "https://i-vn.joboko.com/images/ban/default/OKODoanhnghiep/1170x250.png",
//   "https://i-vn.joboko.com/images/ban/default/OKOEngine/1170x250.png",
//   "https://i-vn.joboko.com/images/ban/rp2025/RP2025/TrangUV/1170x250.png",
// ]

// const companies = [
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'Công Ty TNHH Bảo Hiểm Nhân Thọ AIA (Việt Nam)',
//   },
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'Anh văn hội Việt Mỹ VUS Miền Bắc',
//   },
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'Ngân hàng TMCP Hàng Hải Việt Nam (MSB)',
//   },
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'CÔNG TY CỔ PHẦN DỊCH VỤ GIAO HÀNG NHANH',
//   },
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'Công ty Cổ phần Viễn thông FPT - FPT Telecom',
//   },
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'Công ty TNHH Shopee - Shopee Việt Nam',
//   },
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'Nhất Tín Logistics',
//   },
//   {
//     logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
//     name: 'Tổng Công ty Cổ phần Bưu chính Viettel - Viettel Post',
//   },
// ];

// interface JobDetail {
//   id: number;
//   name: string;
//   description: string;
//   detail: string;
//   deadline: string;
//   createdAt: string;
//   updatedAt: string | null;
//   city: string[]; // ['Hà Nội', 'Hồ Chí Minh']
//   companyId: number;
//   companyName: string;
//   companySize: string;
//   companyIndustry: string;
//   companyImg: string;
//   companyAddress: {
//     province: string;
//     district: string;
//     location: string;
//   };
//   salaryFrom: number;
//   salaryTo: number;
//   jobStatus: string; // e.g. "PENDING"
//   jobType: string; // e.g. "FULL_TIME"
//   level: string; // e.g. "INTERN"
//   educationLevel: string | null;
//   genderRequire: string | null;
//   yearOfExperience: number;
//   skills: string[];
//   quantity: number;
//   industry: string;
// }

// function page() {
//   const [jobGood, setJobGood] = useState<JobDetail[]>([])
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const fetchJobGood = async () => {
//       try {
//         const response = await getSaveJob({
//           currentPage: 1,
//           pageSize: 10,
//           sortBy: "id",
//           ascending: "true",
//         })
//         setJobGood(response.data)
//       } catch (error) {
//         console.log("Error: ", error)
//       }
//     }
//     fetchJobGood()
//   }, [])

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//       //next()
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);


//   const [slide, setSlide] = useState(0);
//   const cardPerView = 4;

//   const next = () => {
//     setSlide((prev) =>
//       prev + 1 > companies.length - cardPerView ? 0 : prev + 1
//     ); 
//   };

//   const prev = () => {
//     setSlide((prev) =>
//       prev - 1 < 0 ? companies.length - cardPerView : prev - 1
//     );
//   };

//   return (
//     <div>
//       <Header/>
//       <div className="w-full bg-gray-200">
//         <div className="flex flex-row mx-24 gap-5 py-4 mb-6">
//           <div className="left-section basis-7/10">
//             <div className="grid grid-cols-2 gap-4 ">
//               {jobGood?.map((job) => (
//                 <div key={job.id} className="w-full bg-white px-2 py-2 border-1 hover:border-1 hover:border-green-500 rounded-lg">
//                   <div className="flex flex-row gap-2 items-center mb-1">
//                     <div className="left-section ">
//                       <div className="w-18 h-18 flex items-center justify-center border border-gray-200 bg-white rounded-lg">
//                         <img
//                           className="w-auto h-auto object-contain px-2 py-2"
//                           src={job.companyImg}
//                           alt="Logo company"
//                         />
//                       </div>
//                     </div>
//                     <div className="right-section flex flex-col">
//                       <Link href={`/jobdetail/${job.id}`} className="text-base font-semibold hover:text-green-600 line-clamp-1">
//                         {job.name}
//                       </Link>
//                       <Link href={`/companyDetail/${job.companyId}`} className="text-base text-gray-600 uppercase line-clamp-1">
//                         {job.companyName}
//                       </Link>
//                       <div className="flex flex-row gap-2">
//                         {job?.salaryFrom 
//                         ? <div className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">{job.salaryFrom} - {job.salaryTo}</div> 
//                         : <div className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">Thỏa thuận</div> 
//                         }
//                         {job?.city?.map((e) => (
//                           <div key={e} className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">{e}</div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
  
//           </div>
//           <div className="right-section basis-3/10 "></div>
//         </div>

//         <div className="w-full bg-white overflow-hidden py-8">
//           <div className="relative mx-24 rounded-xl shadow-lg overflow-hidden">
//             {/* Slide group */}
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={`Slide ${index}`}
//                   className="w-[fit-content] h-[fit-content] flex-shrink-0 object-contain"
//                 />
//               ))}
//             </div>
//             {/* Nút trái */}
//             <button
//               onClick={prevSlide}
//               className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-700 rounded-full p-2"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             {/* Nút phải */}
//             <button
//               onClick={nextSlide}
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-700 rounded-full p-2"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>


//         <div className="w-full px-6 md:px-20 py-10">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl md:text-2xl font-bold text-green-600">Doanh nghiệp nổi bật</h2>
//             <div className="flex gap-2">
//               <button onClick={prev} className="border-1 border-gray-700 p-1 bg-gray-200 hover:bg-gray-300 rounded-full">
//                 <ChevronLeft size={20} />
//               </button>
//               <button onClick={next} className="border-1 border-gray-700 p-1 bg-gray-200 hover:bg-gray-300 rounded-full">
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>


//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${slide * (100 / 4)}%)` }} // 4 là số card hiển thị trên 1 hàng
//             >
//               {companies.map((company, index) => (
//                 <div
//                   key={index}
//                   className="w-1/4 p-2 shrink-0"
//                 >
//                   <div className="h-full bg-white rounded-lg p-4 flex flex-col items-center shadow hover:shadow-md transition border-1 hover:border-green-600">
//                     <div className="h-20 flex items-center justify-center mb-2">
//                       <img
//                         src={company.logo}
//                         alt={company.name}
//                         className="h-full object-contain"
//                       />
//                     </div>
//                     <p className="text-sm text-center font-medium uppercase">{company.name}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>



//         </div>

//       </div>
//     </div>
//   )
// }

// export default page







"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/components/ui/header'
import { getSaveJob } from '@/services/jobService';
import Link from 'next/link';

import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://i-vn.joboko.com/images/ban/default/OKODoanhnghiep/1170x250.png",
  "https://i-vn.joboko.com/images/ban/default/OKOEngine/1170x250.png",
  "https://i-vn.joboko.com/images/ban/rp2025/RP2025/TrangUV/1170x250.png",
]

const companies = [
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'Công Ty TNHH Bảo Hiểm Nhân Thọ AIA (Việt Nam)',
  },
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'Anh văn hội Việt Mỹ VUS Miền Bắc',
  },
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'Ngân hàng TMCP Hàng Hải Việt Nam (MSB)',
  },
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'CÔNG TY CỔ PHẦN DỊCH VỤ GIAO HÀNG NHANH',
  },
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'Công ty Cổ phần Viễn thông FPT - FPT Telecom',
  },
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'Công ty TNHH Shopee - Shopee Việt Nam',
  },
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'Nhất Tín Logistics',
  },
  {
    logo: 'https://u-vn.joboko.com/ComLogo/2023/11/231110150034_khoi-khach-hang-dai-chung-ngan-hang-ocb-phuong-dong.png',
    name: 'Tổng Công ty Cổ phần Bưu chính Viettel - Viettel Post',
  },
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardPerView = 4;
  
  // Tạo mảng companies mở rộng cho carousel vô tận
  // Duplicate một số phần tử để tạo hiệu ứng vô tận
  const extendedCompanies = [...companies, ...companies.slice(0, cardPerView)];

  // State để kiểm soát vị trí hiện tại của carousel
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const fetchJobGood = async () => {
      try {
        const response = await getSaveJob({
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

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Hàm xử lý carousel vô tận cho công ty
  const nextCompany = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setPosition(prev => prev + 1);
    
    // Nếu đã đến cuối danh sách gốc
    if (position >= companies.length - 1) {
      // Đặt timeout để đợi animation kết thúc rồi reset lại position
      setTimeout(() => {
        setIsTransitioning(false);
        setPosition(0);
      }, 500); // Thời gian này phải khớp với thời gian transition
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevCompany = () => {
    if (isTransitioning) return;
    
    if (position <= 0) {
      // Nhảy ngay lập tức đến vị trí cuối của danh sách gốc
      setIsTransitioning(false);
      setPosition(companies.length - 1);
    } else {
      setIsTransitioning(true);
      setPosition(prev => prev - 1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  // Auto slide cho công ty carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextCompany();
    }, 3000);
    return () => clearInterval(interval);
  }, [position, isTransitioning]);

  return (
    <div>
      <Header/>
      <div className="w-full bg-gray-200">
      <h2 className="text-xl md:text-2xl font-bold text-green-600 mx-20 mb-4">Thanh tìm kiếm</h2>
        <div className="flex flex-row mx-24 gap-5 py-4 mb-6">
          <div className="left-section basis-7/10">
            <div className="grid grid-cols-2 gap-4 ">
              {jobGood?.map((job) => (
                <div key={job.id} className="w-full bg-white px-2 py-2 border-1 hover:border-1 hover:border-green-500 rounded-lg">
                  <div className="flex flex-row gap-2 items-center mb-1">
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
                      <Link href={`/companyDetail/${job.companyId}`} className="text-base text-gray-600 uppercase line-clamp-1">
                        {job.companyName}
                      </Link>
                      <div className="flex flex-row gap-2">
                        {job?.salaryFrom 
                        ? <div className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">{job.salaryFrom} - {job.salaryTo}</div> 
                        : <div className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">Thỏa thuận</div> 
                        }
                        {job?.city?.map((e) => (
                          <div key={e} className="h-[fit-content] w-[fit-content] text-xs text-gray-700 font-medium bg-gray-100 px-2 py-1 rounded-full">{e}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
          </div>
          <div className="right-section basis-3/10 "></div>
        </div>

        <div className="w-full bg-white overflow-hidden py-8">
          <div className="relative mx-24 rounded-xl shadow-lg overflow-hidden">
            {/* Slide group */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-[fit-content] h-[fit-content] flex-shrink-0 object-contain"
                />
              ))}
            </div>
            {/* Nút trái */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-700 rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>
            {/* Nút phải */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-700 rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-green-600 mx-20">Việc làm nổi bật</h2>

        <div className="w-full px-6 md:px-20 py-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-green-600">Doanh nghiệp nổi bật</h2>
            <div className="flex gap-2">
              <button onClick={prevCompany} className="border-1 border-gray-700 p-1 bg-gray-200 hover:bg-gray-300 rounded-full">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextCompany} className="border-1 border-gray-700 p-1 bg-gray-200 hover:bg-gray-300 rounded-full">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
              style={{ transform: `translateX(-${position * (100 / cardPerView)}%)` }}
            >
              {extendedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="w-1/4 p-2 shrink-0"
                >
                  <div className="h-full bg-white rounded-lg p-4 flex flex-col items-center shadow hover:shadow-md transition border-1 hover:border-green-600">
                    <div className="h-20 flex items-center justify-center mb-2">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-center font-medium uppercase">{company.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <h2 className="text-xl md:text-2xl font-bold text-green-600 mx-20 my-4">Top ngành nghề nổi bật</h2>
        <h2 className="text-xl md:text-2xl font-bold text-green-600 mx-20 my-4">Hotline tư vấn</h2>
        <h2 className="text-xl md:text-2xl font-bold text-green-600 mx-20 my-4">thông tin </h2>
        <h2 className="text-xl md:text-2xl font-bold text-green-600 mx-20 my-4">Từ khóa</h2>
        <h2 className="text-xl md:text-2xl font-bold text-green-600 mx-20 my-4">Footer</h2>
      </div>
    </div>
  )
}

export default page