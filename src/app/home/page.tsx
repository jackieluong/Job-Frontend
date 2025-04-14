'use client';
import Banner from '@/components/ui/banner';
import CvSamplesList from '@/components/ui/CvSampleList';
import Header from '@/components/header/header';
import { useAuth } from '@/store/userStore';
import React from 'react';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated } = useAuth();

  console.log('user: ', user);
  console.log('isAuthenticated: ', isAuthenticated);

  return (
    <>
      {/* UI chỉ có trên trang Home */}
      <Header />
      <Banner />
      <CvSamplesList />
      <main>{children}</main>
    </>
  );
}
