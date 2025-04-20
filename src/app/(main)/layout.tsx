import React from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/Footer';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <Footer className='mt-10'/>
    </div>
  );
}