"use client";

import Image from "next/image";
import logo from "../../assets/logo.svg";
import iconUser from "../../assets/User.svg";
import iconBuy from "../../assets/shopping-cart.svg";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

export default function MenuHeaderContent() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className='flex desktop:hidden relative tablet:bg-red-500 mobile:bg-blue-500' style={{ padding: "0 49px" }}>
      <MobileMenu open={menuVisible} />
      <button>
        {menuVisible ? (
          <>
            <IoClose onClick={() => setMenuVisible(!menuVisible)} />
            <div className='bg-yellow-500 absolute w-screen max-w-[768px] h-screen right-[-49px] top-12 transition-[right] duration-300 ease-out'></div>
          </>
        ) : (
          <>
            <IoMenu onClick={() => setMenuVisible(!menuVisible)} />
            <div className=' bg-yellow-500 absolute w-screen max-w-[768px] h-screen right-[-110vw] top-12 transition-[right] duration-300 ease-out'></div>
          </>
        )}
      </button>
    </div>
  );
}
