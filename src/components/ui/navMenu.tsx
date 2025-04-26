"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  FileText, 
  DollarSign, 
  BookOpen, 
  ShieldCheck, 
  TrendingUp, 
  GraduationCap, 
  Layers, 
  Search,
  Heart
} from "lucide-react";
import DropdownMenu from "@/components/ui/dropmenu"; // Đảm bảo component này có sẵn và hoạt động đúng

const iconMap: Record<string, JSX.Element> = {
  search: <Search size={18} className="text-green-500" />,
  heart: <Heart size={18} className="text-green-500" />,
  briefcase: <Briefcase size={18} className="text-green-500" />,
  fileText: <FileText size={18} className="text-green-500" />,
  dollarSign: <DollarSign size={18} className="text-green-500" />,
  bookOpen: <BookOpen size={18} className="text-green-500" />,
  shieldCheck: <ShieldCheck size={18} className="text-green-500" />,
  trendingUp: <TrendingUp size={18} className="text-green-500" />,
  graduationCap: <GraduationCap size={18} className="text-green-500" />,
  layers: <Layers size={18} className="text-green-500" />,
};

interface DropdownItem {
  name: string;
  href: string;
  icon: string;
}

interface MenuItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
  badge?: string;
  dropdownItems?: DropdownItem[];
}

const menuItems: MenuItem[] = [
  { 
    name: "Việc làm", 
    href: "#", 
    hasDropdown: true, 
    dropdownItems: [
      { name: "Tìm việc làm", href: "/job/search", icon: "search" },
      { name: "Việc làm đã ứng tuyển", href: "/applyJob", icon: "briefcase" },
      { name: "Việc làm đã lưu", href: "/saveJob", icon: "heart" },
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
  
];

const NavMenu: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav>
      <ul className="flex space-x-6 relative">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
            
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
              <DropdownMenu
                items={item.dropdownItems?.map((dropdown) => ({
                  ...dropdown,
                  icon: iconMap[dropdown.icon], // Truyền JSX element thay vì string
                })) ?? []}
                isActive={activeDropdown === item.name} // ✅ Truyền trạng thái active
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
