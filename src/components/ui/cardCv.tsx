import Image from 'next/image';
import React from 'react'

interface CVCardProps {
  title: string;
  img: string;
  category: string;
}

function CardCv({ title, img, category }: CVCardProps)  {
  return (
    <div className="relative bg-white shadow-lg rounded-xl border p-4 max-w-sm">
      <div className="relative">
        <Image width={300} height={300} src={img} alt={title} className="rounded-md" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
          <button className="bg-white text-gray-700 font-medium px-4 py-1 rounded-full mb-2">👁️ Xem trước</button>
          <button className="bg-green-500 text-white font-medium px-4 py-2 rounded-full">✅ Dùng mẫu</button>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-md">Powered by CV Builder 2.0</span>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
       
        <p className="mt-2 text-green-600 font-bold">{category}</p>
      </div>
    </div>)
}

export default CardCv