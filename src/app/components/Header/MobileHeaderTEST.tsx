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
    <div className='flex desktop:hidden relative p-x[49px]'>
      {menuVisible ? (
        <>
          <button>
            {" "}
            <IoClose onClick={() => setMenuVisible(!menuVisible)} size={32} />{" "}
          </button>
          <MobileMenu open={menuVisible} />
        </>
      ) : (
        <>
          <button>
            <IoMenu onClick={() => setMenuVisible(!menuVisible)} size={32} />{" "}
          </button>
          <MobileMenu open={menuVisible} />
        </>
      )}
    </div>
  );
}
