import React from 'react'
import Header from "@/components/ui/header";

export default function cvdetail() {
  return (
    <div>
        
        <div>
            <div className="bg-gray-100">
                <div className="flex flex-row mx-24 gap-5">
                    {/* left */}
                    <div className="basis-7/10 h-auto">
                        <div className="flex flex-col gap-2 bg-white px-4 py-4 my-4 rounded-lg">
                            <h1 className="text-xl font-bold">
                                <a href="#" className="">Front End Intern</a>
                            </h1>
                            <div className="flex flex-row">
                                <div className="basis-1/3 flex items-center gap-2.5">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/paid.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Mức lương</p>
                                        <p className="font-semibold">Tới 3 triệu</p>
                                    </div>
                                </div>
                                <div className="basis-1/3 flex items-center gap-2.5">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/location.png" alt="" className="px-2 py-2 invert"/>
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Địa điểm</p>
                                        <p className="font-semibold">Hồ Chí Minh</p>
                                    </div>
                                </div>
                                <div className="basis-1/3 flex items-center gap-2.5">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/work.png" alt="" className="px-2 py-2 invert"/>
                                    </div>
                                    <div className="text-sm ">
                                        <p className="mb-1 text-gray-700">Kinh nghiệm</p>
                                        <p className="font-semibold">Không yêu cầu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-auto w-[fit-content] text-sm bg-gray-200 px-1 py-1 rounded-xs">
                                Hạn nộp hồ sơ: 14/04/2025
                            </div>
                            <div className="flex flex-row w-full gap-10 mt-1">
                                <a href="#" className="h-10 w-full flex justify-center items-center text-base text-white font-semibold bg-green-600 rounded-md
                                    hover:bg-green-700">
                                    Ứng tuyển
                                </a>
                                <div className="flex justify-center items-center ">
                                    <button className="h-10 w-30 text-base text-green-600 font-semibold border-1 border-green-500 rounded-md
                                        hover:border-green-600 cursor-pointer">Lưu tin
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg my-4">
                            <div className="px-4 py-4">
                                <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2">Chi tiết tin tuyển dụng</h2>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Mô tả công việc</h3>
                                    <li className="text-sm">Work reports.</li>
                                    
                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Yêu cầu ứng viên</h3>
                                    <li className="text-sm">Work reports.</li>
                                    
                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Quyền lợi</h3>
                                    <li className="text-sm">Work reports.</li>
                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Địa điểm làm việc</h3>
                                    <span>dd</span>
                                </div>
                                <div className="my-4">
                                    <h3 className="text-base font-semibold my-2">Cách thức ứng tuyển</h3>
                                    <span>link</span>
                                </div>
                                <div className="flex flex-row w-100 gap-10 mt-1">
                                    <a href="#" className="basis-2/3 h-10 flex justify-center items-center text-base text-white font-semibold bg-green-600 rounded-xl
                                        hover:bg-green-700">
                                        Ứng tuyển
                                    </a>
                                    <div className="basis-1/3 flex justify-center items-center ">
                                        <button className="h-10 w-30 text-base text-green-500 font-semibold border-1 border-green-400 rounded-xl 
                                            hover:border-green-600 cursor-pointer">Lưu tin
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg my-4">
                            <div className="px-4 py-4">
                                <h2 className="border-l-6 border-green-500 text-xl font-bold pl-2 mb-4">Việc làm liên quan</h2>
                                <div className="flex flex-row gap-4 px-4 py-4 border-1 border-gray-300 rounded-lg mb-4">
                                    <div className=" w-30 h-30 flex items-center justify-center border-1 border-gray-300 rounded-lg">
                                        <img className="w-auto h-auto object-contain px-2 py-2" src="/assets/logoCompany.jpg" alt="Logo company"/>
                                    </div>
                                    <div className="">
                                        <div className="relative flex flex-row mb-2">
                                            <div className="basis-3/4 text-wrap ">
                                                <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
                                                    <a href="#">Nhân Viên Kinh Doanh Dự Án</a>
                                                </h3>
                                                <a href="#" className="text-base text-gray-600 uppercase mb-1">Chi Nhánh Công Ty Cổ Phần Thiết Bị Vệ Sinh Caesar Việt Nam Tại Hà Nội</a>
                                            </div>
                                            <div className="basis-1/4 absolute top-0 right-0">
                                                <span className="text-sm text-green-600 font-semibold">22 - 45 triệu</span>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-row">
                                            <div className="basis-3/4 flex flex-row flex-wrap gap-2">
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Hồ Chí Minh</div>
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Còn 25 ngày để ứng tuyển</div>
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Cập nhật 4 giờ trước</div>
                                            </div> 
                                            <div className="basis-1/4 absolute bottom-0 right-0 flex flex-row gap-2">
                                                <a href="#" className="h-auto flex justify-center items-center text-xs text-white font-semibold bg-green-600 rounded-xs
                                                    hover:bg-green-700 px-4 py-1">
                                                    Ứng tuyển
                                                </a>
                                                <div className="flex justify-center items-center ">
                                                    <button className="h-auto w-auto text-base text-green-500 font-semibold border-1 border-green-400 rounded-xs 
                                                        hover:border-green-600 cursor-pointer">❤️
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="flex flex-row gap-4 px-4 py-4 border-1 border-gray-300 rounded-lg mb-4">
                                    <div className=" w-30 h-30 flex items-center justify-center border-1 border-gray-300 rounded-lg">
                                        <img className="w-auto h-auto object-contain px-2 py-2" src="/assets/logoCompany.jpg" alt="Logo company"/>
                                    </div>
                                    <div className="">
                                        <div className="relative flex flex-row mb-2">
                                            <div className="basis-3/4 text-wrap ">
                                                <h3 className="text-xl font-semibold mb-1 hover:text-green-600">
                                                    <a href="#">Nhân Viên Kinh Doanh Dự Án</a>
                                                </h3>
                                                <a href="#" className="text-base text-gray-600 uppercase mb-1">Chi Nhánh Công Ty Cổ Phần Thiết Bị Vệ Sinh Caesar Việt Nam Tại Hà Nội</a>
                                            </div>
                                            <div className="basis-1/4 absolute top-0 right-0">
                                                <span className="text-sm text-green-600 font-semibold">22 - 45 triệu</span>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-row">
                                            <div className="basis-3/4 flex flex-row flex-wrap gap-2">
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Hồ Chí Minh</div>
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Còn 25 ngày để ứng tuyển</div>
                                                <div className="h-auto w-[fit-content] text-xs bg-gray-200 px-1 py-1 rounded-xs">Cập nhật 4 giờ trướchhhhhhhhhhhhhhhhhhhhhhhhhh</div>
                                            </div> 
                                            <div className="basis-1/4 absolute bottom-0 right-0 flex flex-row gap-2">
                                                <a href="#" className="h-auto flex justify-center items-center text-xs text-white font-semibold bg-green-600 rounded-xs
                                                    hover:bg-green-700 px-4 py-1">
                                                    Ứng tuyển
                                                </a>
                                                <div className="flex justify-center items-center ">
                                                    <button className="h-auto w-auto text-base text-green-500 font-semibold border-1 border-green-400 rounded-xs 
                                                        hover:border-green-600 cursor-pointer">❤️
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="basis-3/10 h-auto">
                        <div className="bg-white rounded-lg px-4 py-4 my-4">
                            <div className="flex flex-row gap-2 mb-4">
                                <div className="logoCompany w-22 h-auto flex items-center justify-center border-1 border-gray-300 rounded-lg">
                                    <img className="w-auto h-auto object-contain px-2 py-2" src="/assets/logoCompany.jpg" alt="Logo company"/>
                                </div>
                                <div className="">
                                    <a href="#" className="font-semibold uppercase">Công ty cổ phần giải pháp ATOM</a>
                                </div>
                            </div>
                            <div className="flex flex-row px-2 gap-2">
                                <div className="flex gap-1 mt-0.5">
                                    <img className="w-4 h-4 mt-0.5"src="/assets/group.png" alt="" />                                 
                                    <span className="text-sm text-gray-500 text-nowrap">Quy mô:</span>
                                </div>
                                <p className="font-normal line-clamp-2 text-wrap">100-499 nhân viên</p>
                            </div>
                            <div className="flex flex-row px-2 gap-2">
                                <div className="flex gap-1 mt-0.5">
                                    <img className="w-4 h-4 mt-0.5"src="/assets/cube.png" alt="" />                                 
                                    <span className="text-sm text-gray-500 text-nowrap">Lĩnh vực:</span>
                                </div>
                                <p className="font-normal line-clamp-2 text-wrap">Thương mại điện tử</p>
                            </div>
                            <div className="flex flex-row px-2 gap-6">
                                <div className="flex gap-1 mt-0.5">
                                    <img className="w-4 h-4 mt-0.5"src="/assets/location.png" alt="" />                                 
                                    <span className="text-sm text-gray-500 text-nowrap">Địa điểm:</span>
                                </div>
                                <p className="font-normal line-clamp-2 text-wrap">Phòng 802,Lầu 8, tòa nhà Vietnam Business Center, 57-59 Hồ Tùng Mậu, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>
                            </div>
                            <div className="flex justify-center items-center hover:underline cursor-pointer">
                                <a href="#" className="font-medium text-green-600">Xem trang công ty</a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg px-4 py-4 my-4">
                            <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
                            <div className="">
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/bagde.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Cấp bậc</p>
                                        <p className="font-semibold">Thực tập sinh</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/school.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Học vấn</p>
                                        <p className="font-semibold">Đại Học trở lên</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/group.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Số lượng tuyển</p>
                                        <p className="font-semibold">10 người</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-10 h-10 flex justify-center items-center text-xl text-white bg-green-600 rounded-full">
                                        <img src="/assets/work.png" alt="" className="px-2 py-2 invert" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="mb-1 text-gray-700">Hình thức làm việc</p>
                                        <p className="font-semibold">Toàn thời gian</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg px-4 py-4 my-4">
                            <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
