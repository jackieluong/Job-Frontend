"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Logo = () => {
  
  const router = useRouter();
  const handleClickLogo = () => {
    router.push("/home");
  }
  return (
    <div className="flex items-center cursor-pointer" onClick={handleClickLogo}>
      
      <Image src="/assets/logoNextJob2.png" alt="TopCV Logo" width={65} height={20} />
    </div>
  );
};

export default Logo;