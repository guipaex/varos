"use client";

import DesktopHeaderContent from "./DesktopHeader";
import MobileHeaderContent from "./MobileHeaderContent";
import MobileHeaderTEST from "./MobileHeaderTEST";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { useState } from "react";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <header className='flex w-full h-[88px] px-[49px] desktop:px-36 desktop:h-16 items-center mx-auto justify-between'>
      <a href='#'>
        <Image src={logo} alt='Varos' width={80} height={14.36} className='z-50' />
      </a>
      <DesktopHeaderContent />
      <MobileHeaderTEST />
    </header>
  );
}
