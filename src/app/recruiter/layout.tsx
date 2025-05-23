import RecruiterHeader from '@/components/recruiterHeader/recruiterHeader';
import React from 'react';

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <RecruiterHeader />

      {/* Main Content */}
      <main className="flex-1 lg:p-6 overflow-auto bg-gray-100 ">{children}</main>
      
    </div>
  );
}


