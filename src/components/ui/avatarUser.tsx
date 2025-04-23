'use client';

import React, { useState } from 'react';
import DropdownMenu from "@/components/ui/dropmenu"; // đường dẫn đến DropdownMenu.tsx
import Image from 'next/image';
import {
  UserRound,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react';

const AvatarDropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    avatar: '/assets/logoNextJob2.png',
  };

  const dropdownItems = [
    {
      name: (
        <div className="flex flex-col">
          <span className="font-semibold">{user.name}</span>
          <span className="text-sm text-gray-500">{user.email}</span>
        </div>
      ),
      icon: (
        <Image
          src={user.avatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      ),
    },
    {
      name: 'Xem CV của tôi',
      href: '/my-cv',
      icon: <FileText className="text-green-500 w-5 h-5" />,
    },
    {
      name: 'Cập nhật tài khoản',
      href: '/account/update',
      icon: <Settings className="text-blue-500 w-5 h-5" />,
    },
    {
      name: 'Đăng xuất',
      onClick: () => {
        console.log('Logging out...');
      },
      icon: <LogOut className="text-red-500 w-5 h-5" />,
    },
  ];
  
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Image
        src={user.avatar}
        alt="avatar"
        width={42}
        height={42}
        className="rounded-full cursor-pointer border border-gray-300"
      />
      <DropdownMenu
        items={dropdownItems}
        isActive={isDropdownOpen}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        className="right-0 left-auto top-full"
      />
    </div>
  );
};

export default AvatarDropdown;
