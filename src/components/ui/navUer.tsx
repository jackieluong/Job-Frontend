"use client"
import React from 'react';
import Link from 'next/link';
import NotificationDropdown from '../notification/Notification';
import { useAuth } from '@/store/userStore';
import { MessageSquare } from 'lucide-react';
import AvatarDropdown  from './avatarUser'


const NavUser = () => {

  const {isAuthenticated} = useAuth();
  return (
    
    <nav className="flex justify-end space-x-4 p-4">
      {!isAuthenticated ? 
      <>
      <Link href="/login">
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-green-50 transition">
          Đăng nhập
        </button>
      </Link>
      
      <Link href="/register">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Đăng ký
        </button>
      </Link>

      <Link href="/recruit">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
          Đăng tuyển & tìm hồ sơ
        </button>
      </Link>
      </>
      :

      <div className="flex items-center gap-4">
        <Link href="/chat" className="relative p-2 rounded-full bg-green-200 hover:bg-green-400 transition">
          <MessageSquare className="w-7 h-7 text-green-700 " />
        </Link>
        <NotificationDropdown />
        <AvatarDropdown/>
      </div>

      }
    </nav>

  );
};

export default NavUser;
