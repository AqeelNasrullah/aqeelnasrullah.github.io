import Image from "next/image";
import React from "react";
import LogoWhite from "@/assets/images/an-w.png";

const Logo = () => {
  return (
    <div>
      <Image src={LogoWhite} alt="Logo not found." width={75} />
    </div>
  );
};

export default Logo;
