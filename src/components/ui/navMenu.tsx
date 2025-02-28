<<<<<<< HEAD
"use client";

import { useState } from "react";
import Link from "next/link";
// import x from "@style/navmenu.module.css";
import x from "../../style/navmenu.module.css";
import { 
  Briefcase, 
  FileText, 
  DollarSign, 
  BookOpen, 
  ShieldCheck, 
  TrendingUp, 
  GraduationCap, 
  Layers 
} from "lucide-react";
import DropdownMenu from "@/components/ui/dropmenu";


const iconMap: Record<string, JSX.Element> = {
  briefcase: <Briefcase size={18} className="text-green-500" />,
  fileText: <FileText size={18} className="text-green-500" />,
  dollarSign: <DollarSign size={18} className="text-green-500" />,
  bookOpen: <BookOpen size={18} className="text-green-500" />,
  shieldCheck: <ShieldCheck size={18} className="text-green-500" />,
  trendingUp: <TrendingUp size={18} className="text-green-500" />,
  graduationCap: <GraduationCap size={18} className="text-green-500" />,
  layers: <Layers size={18} className="text-green-500" />,
};


interface MenuItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
  badge?: string;
  dropdownItems?: { name: string; href: string , icon: string}[];
}

const menuItems: MenuItem[] = [
  { 
    name: "Việc làm", 
    href: "#", 
    hasDropdown: true, 
    dropdownItems: [
      { name: "Tìm việc làm", href: "#", icon: "briefcase" },
      { name: "Việc làm phù hợp", href: "#", icon: "fileText" },
      { name: "Việc làm IT", href: "#", icon: "briefcase" },
      { name: "Việc làm Senior", href: "#", icon: "fileText" },
      { name: "Danh sách công ty", href: "#", icon: "layers" }
    ]
  },
  { 
    name: "Hồ sơ & CV", 
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Tạo CV", href: "#", icon: "fileText" },
      { name: "Mẫu CV đẹp", href: "#", icon: "fileText" },
      { name: "Hướng dẫn viết CV", href: "#", icon: "fileText" }
    ]
  },
  { 
    name: "Công cụ", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Trắc nghiệm tính cách MBTI", href: "#", icon: "shieldCheck" },
      { name: "Trắc nghiệm MI", href: "#", icon: "shieldCheck" },
      { name: "TopCV Skills", href: "#", icon: "fileText" },
      { name: "Khóa học", href: "#", icon: "bookOpen" },
      { name: "Mobile App TopCV", href: "#", icon: "trendingUp" },
      { name: "Tính lương GROSS - NET", href: "#", icon: "dollarSign" },
      { name: "Tính thuế thu nhập cá nhân", href: "#", icon: "dollarSign" },
      { name: "Tính mức hưởng bảo hiểm thất nghiệp", href: "#", icon: "shieldCheck" },
      { name: "Tính bảo hiểm xã hội một lần", href: "#", icon: "shieldCheck" },
      { name: "Tính lãi suất kép", href: "#", icon: "trendingUp" },
      { name: "Lập kế hoạch tiết kiệm", href: "#", icon: "trendingUp" }
    ]
  },
  { 
    name: "Cẩm nang nghề nghiệp", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Định hướng nghề nghiệp", href: "#", icon: "briefcase" },
      { name: "Bí kíp tìm việc", href: "#", icon: "fileText" },
      { name: "Chế độ lương thưởng", href: "#", icon: "dollarSign" },
      { name: "Kiến thức chuyên ngành", href: "#", icon: "bookOpen" },
      { name: "Hành trang nghề nghiệp", href: "#", icon: "shieldCheck" },
      { name: "Thị trường và xu hướng tuyển dụng", href: "#", icon: "trendingUp" }
    ]
  },
  { name: "TopCV Pro", href: "#", badge: "Pro" }
];



const NavMenu: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
=======
import React from "react";

const NavMenu = () => {
  const menuItems = [
    { name: "Việc làm", href: "#" },
    { name: "Hồ sơ & CV", href: "#", active: true },
    { name: "Công cụ", href: "#" },
    { name: "Cẩm nang nghề nghiệp", href: "#" },
    { name: "TopCV Pro", href: "#", badge: "Pro" },
  ];
>>>>>>> 3650e7b37e4a0211ed14a81dc1cb081b3c6881a6

  return (
    <nav>
      <ul className="flex space-x-6 relative">
        {menuItems.map((item, index) => (
    
          <li key={index} className="relative group"

              onMouseEnter={() => {
  if (item.hasDropdown && activeDropdown !== item.name) {
    setActiveDropdown(item.name);
    console.log("Hover vào:", item.name);
  }
}}
onMouseLeave={() => {
  if (item.hasDropdown && activeDropdown !== item.name) {
    setActiveDropdown(item.name);
    console.log("Rời chuột khỏi:", item.name);
  }
}}
      
          >
          
      
            <Link
              href={item.href}
              className={`text-gray-800 hover:text-green-600 ${
                item.active ? "text-green-600 font-semibold" : ""
              }`}
            >
              {item.name}
              {item.badge && (
                <span className="ml-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-md">
                  {item.badge}
                </span>
              )}
            </Link>

            
    {item.hasDropdown && activeDropdown === item.name && (
  <>
    {console.log("Hiển thị dropdown:", item.name)}
      <DropdownMenu
    items={item.dropdownItems?.map((dropdown) => ({
      ...dropdown,
      icon: iconMap[dropdown.icon], // Truyền JSX element thay vì string
    })) ?? []}
    isActive={activeDropdown === item.name} // ✅ Truyền trạng thái active
  />
  </>
)}


            {/* Dropdown Menu */}
              {/* {item.hasDropdown && (
             <ul
  className={`absolute left-0 top-full mt-2 w-[220px] bg-white rounded-lg border border-gray-300 shadow-lg 
  opacity-0 invisible translate-y-[-10px] transition-all duration-300 ease-in-out 
  ${activeDropdown === item.name ? "opacity-100 visible translate-y-0" : ""}`}
>
   {item.dropdownItems?.map((dropdown, idx) => (
                  <li key={idx} className="flex items-center px-4 py-2 hover:bg-gray-100">
                    {iconMap[dropdown.icon] || null} 
                    <Link href={dropdown.href} className="ml-3 text-gray-800">
                      {dropdown.name}
                    </Link>
                  </li>
                    ))}
                    </ul>
            )} */}


          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
