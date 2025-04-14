// import React from "react";
// import Link from "next/link"; // Use Next.js Link for navigation


// export default function RecruiterNav() {
//   return (
//     <nav >
//       <ul className="container mx-auto flex items-center justify-center gap-6 py-4">
//         {navLinks.map(({ href, label }, index) => (
//           <li key={index}>
//             <Link
//               href={href}
//               className="text-gray-700 hover:text-green-600 transition font-medium px-4 py-2"
//             >
//               {label}
//             </Link>
//           </li>
//         ))}

        
//       </ul>
         
//     </nav>
//   );
// }

// // Navigation links array
// const navLinks = [
//   { href: "/recruiter/post/create", label: "Đăng tin" },
//   { href: "/recruiter/post/list", label: "Quản lý tin" },
//   { href: "#", label: "Tìm hồ sơ" },
//   { href: "/recruiter/cv/list", label: "Danh sách ứng viên" },
//   { href: "#", label: "Tài khoản" },
// ];


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
  LogOut,
  Settings
} from "lucide-react";
import DropdownMenu from "@/components/ui/dropmenu"; // Đảm bảo component này có sẵn và hoạt động đúng
import { useAuth } from "@/store/userStore";
import { useRouter } from "next/navigation";

const iconMap: Record<string, JSX.Element> = {
  briefcase: <Briefcase size={18} className="text-green-500" />,
  fileText: <FileText size={18} className="text-green-500" />,
  dollarSign: <DollarSign size={18} className="text-green-500" />,
  bookOpen: <BookOpen size={18} className="text-green-500" />,
  shieldCheck: <ShieldCheck size={18} className="text-green-500" />,
  trendingUp: <TrendingUp size={18} className="text-green-500" />,
  graduationCap: <GraduationCap size={18} className="text-green-500" />,
  layers: <Layers size={18} className="text-green-500" />,
  logout: <LogOut size={18} className="text-green-500" />,
  settings: <Settings size={18} className="text-green-500" />,
};

interface DropdownItem {
  name: string;
  href: string;
  icon: string;
  onClick?: () => void;
}

interface MenuItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
  badge?: string;
  dropdownItems?: DropdownItem[];
}

const NavMenu: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const router = useRouter();
  const {logout} = useAuth();
  const handleLogout = () => {
    logout();
    router.push("/login"); 
  }
const menuItems: MenuItem[] = [
  { 
    name: "Đăng tin", 
    href: "/recruiter/post/create", 
    hasDropdown: false, 
  
  },
  { 
    name: "Quản lý tin", 
    href: "/recruiter/post/list",
    hasDropdown: false,
  
  },
  { 
    name: "Danh sách ứng viên", 
    href: "/recruiter/cv/list", 
    hasDropdown: false,
    
  },
  { 
    name: "Tài khoản", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Thông tin tài khoản", href: "/recruiter/account", icon: "fileText" },
      { name: "Cài đặt tài khoản", href: "#", icon: "settings" },
      
      { name: "Đăng xuất", href: "#", icon: "logout", onClick: handleLogout },
    ]
  },
  
];

  return (
    <nav>
      <ul className="flex space-x-4 lg:space-x-20 relative">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
            
            // onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
            // onMouse
            
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
                  onClick: dropdown.onClick,
                })) ?? []}
                isActive={activeDropdown === item.name}  // ✅ Truyền trạng thái active
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              />
            )}
            
          </li>

        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
