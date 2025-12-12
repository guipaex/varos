"use client";

import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

export default function MenuHeaderContent() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className='flex desktop:hidden relative p-x[49px]'>
      {menuVisible ? (
        <>
          <button className='z-10'>
            <IoClose onClick={() => setMenuVisible(!menuVisible)} size={32} />{" "}
          </button>
          <MobileMenu open={menuVisible} />
        </>
      ) : (
        <>
          <button className='z-10'>
            <IoMenu onClick={() => setMenuVisible(!menuVisible)} size={32} />{" "}
          </button>
          <MobileMenu open={menuVisible} />
        </>
      )}
    </div>
  );
}
