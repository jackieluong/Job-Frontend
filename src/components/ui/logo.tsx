import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/assets/logoNextJob2.png" alt="TopCV Logo" width={65} height={20} />
    </div>
  );
};

export default Logo;