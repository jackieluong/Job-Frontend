import React from 'react'

function cardCompany() {
  return (
    <div className="border-1 border-orange-300 rounded-lg px-2 py-2">
			<div className="flex flex-row gap-2">
				<div className="left">
					<div className="w-20 h-20 border-1 border-gray-200 rounded-lg ">
						<img src="./assets/logoCompany.jpg" alt="" className="w-auto h-auto object-contain px-1 py-1"/>
					</div>
				</div>
				<div className="right flex flex-col">
					<span className="text-lg font-semibold uppercase line-clamp-2 overflow-hidden text-ellipsis">CÔNG TY CỔ PHẦN QUẢN LÝ GIÁO DỤC VÀ ĐẦU TƯ EMG hhhhhhhhhhhhh</span>
					<span className="text-base text-gray-700 line-clamp-1 overflow-hidden text-ellipsis ">Sản xuất</span>
				</div>
			</div>
		</div>
  )
}

export default cardCompany
