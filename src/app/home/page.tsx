import Banner from "@/components/ui/banner";
import CvSamplesList from "@/components/ui/CvSampleList";
import Header from "@/components/ui/header";
import React from 'react';




export default function HomeLayout({ children }: { children: React.ReactNode }) {
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