import React from 'react';

import { Bell, MessageSquare } from "lucide-react";

import Link from 'next/link';
type IconSectionProps = {
    // Define your props here
};

export default function IconSection(props: IconSectionProps) {
    return (
        <div>
            {/* Chat and Notification Icons */}
         {/* Icons Section */}
         <div className="flex items-center gap-4">
          <Link href="/chat" className="relative p-2 rounded-full bg-green-200 hover:bg-green-400 transition">
            <MessageSquare className="w-6 h-6 text-green-700 " />
          </Link>

          <Link href="/notifications" className="relative p-2 rounded-full bg-green-200 hover:bg-green-400 transition">
            <Bell className="w-6 h-6 text-green-700 " />
          </Link>
        </div>

        </div>
    );
}