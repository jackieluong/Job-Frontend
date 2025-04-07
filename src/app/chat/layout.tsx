"use client"

import RecruiterHeader from '@/components/recruiterHeader/recruiterHeader';
import Header from '@/components/ui/header';
import { useAuth } from '@/store/userStore';
import React from 'react';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const {user} = useAuth();
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      {
        user.role === "COMPANY" ? 
        <RecruiterHeader />
        :
        <Header />
      }
      

      {/* Main Content */}
      <main className="flex-1 lg:p-6 overflow-auto bg-gray-100 ">{children}</main>
    </div>
  );
}
