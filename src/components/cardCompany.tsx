// "use client"
// import React from "react";

// interface companyDetail {
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
//   quantity: number;
// }

// function cardCompany({ companyId: , companyName: string, companySize, companyImg, companyIndustry}) {
//   return (
//     <div key={companyId} className="border-1 border-orange-300 rounded-lg px-2 py-2">
// 			<div className="flex flex-row gap-2">
// 				<div className="left">
// 					<div className="w-20 h-20 border-1 border-gray-200 rounded-lg ">
// 						<img src="./assets/logoCompany.jpg" alt="" className="w-auto h-auto object-contain px-1 py-1"/>
// 					</div>
// 				</div>
// 				<div className="right flex flex-col">
// 					<span className="text-lg font-semibold uppercase line-clamp-2 overflow-hidden text-ellipsis">CÔNG TY CỔ PHẦN QUẢN LÝ GIÁO DỤC VÀ ĐẦU TƯ EMG hhhhhhhhhhhhh</span>
// 					<span className="text-base text-gray-700 line-clamp-1 overflow-hidden text-ellipsis ">Sản xuất</span>
// 				</div>
// 			</div>
// 	</div>
//   )
// }

// export default cardCompany



"use client"
import React from "react";
import Link from "next/link";

interface CompanyDetail {
  city: string[];
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
  quantity: number;
}

interface Props {
  company: CompanyDetail;
}

function CardCompany({ company }: Props) {
  const { companyId, companyName, companyImg, companyIndustry } = company;

  return (
    <Link href={`/companyDetail/${companyId}`} key={companyId} className="border-1 border-orange-300 hover:border-green-600 hover:text-green-600 bg-white rounded-lg px-2 py-2">
      <div className="flex flex-row gap-2">
        <div className="left">
          <div className="w-20 h-20 flex justify-center items-center border-1 border-gray-200 rounded-lg">
            <img
              src={companyImg}
              alt="Company Logo"
              className="w-auto h-auto object-contain px-1 py-1"
            />
          </div>
        </div>
        <div className="right flex flex-col">
          <span className="text-base font-semibold uppercase line-clamp-2 overflow-hidden text-ellipsis ">
            {companyName}
          </span>
          <span className="text-base text-gray-700 line-clamp-1 overflow-hidden text-ellipsis">
            {companyIndustry}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CardCompany;
