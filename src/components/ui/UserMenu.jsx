import React from 'react';
import { Bell, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition">
        <Bell className="text-green-600 w-5 h-5" />
      </button>

      <button className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition">
        <MessageCircle className="text-green-600 w-5 h-5" />
      </button>

      {/* Avatar
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <Image src="/avatar.png" alt="User Avatar" width={32} height={32} />
      </div> */}
    </div>
  );
};

export default UserMenu;
