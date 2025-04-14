import Banner from '@/components/ui/banner';
import Header from '@/components/header/header';
import React from 'react';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-100 ">
      {/* Header */}
      {/* <Header /> */}

      {/* Main Content */}
      <main className="w-full lg:mx-auto">{children}</main>
    </div>
  );
}
