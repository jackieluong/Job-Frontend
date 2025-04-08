import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {

  redirect("/home");
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-green-600">topCV</h1>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600">Việc làm</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Hồ sơ & CV</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Công cụ</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Cẩm nang</a>
          </nav>
        </div>
      </header> */}

      {/* Banner */}
      {/* <section className="bg-green-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Danh sách mẫu CV xin việc</h2>
        <p className="mt-2">Các mẫu CV chuẩn theo ngành nghề, phù hợp cho sinh viên & người đi làm.</p>
      </section> */}

      {/* Danh sách CV */}
      {/* <section className="container mx-auto py-10">
        <h3 className="text-xl font-semibold mb-4">Mẫu CV theo style</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md rounded-md">
            <img src="/cv1.jpg" alt="CV 1" className="w-full h-56 object-cover" />
            <p className="mt-2 font-medium">CV Mẫu 1</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img src="/cv2.jpg" alt="CV 2" className="w-full h-56 object-cover" />
            <p className="mt-2 font-medium">CV Mẫu 2</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img src="/cv3.jpg" alt="CV 3" className="w-full h-56 object-cover" />
            <p className="mt-2 font-medium">CV Mẫu 3</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
