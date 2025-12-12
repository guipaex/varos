import DesktopHeaderContent from "./DesktopHeader";
import MobileHeaderTEST from "./MobileHeaderTEST";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <Header>
      <a href="#">
        <Image
          src={logo}
          alt="Lototipo Varos"
          width={100}
          height={18}
          className="z-50"
        />
        <Navigation />
      </a>
      <DesktopHeaderContent />
      <MobileHeaderTEST />
    </Header>
  );
}
