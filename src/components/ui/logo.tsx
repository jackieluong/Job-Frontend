import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/assets/logo.jpg" alt="TopCV Logo" width={120} height={40} />
    </div>
  );
};

export default Logo;