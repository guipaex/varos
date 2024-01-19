import Links from "./links";
import Image from "next/image";
import footerLogo from "../../assets/logoFooter.svg";
import { Signature } from "./styles";

export default function Footer() {
  return (
    <footer className='flex flex-wrap justify-between pt-24 pb-16 mb-16 px-4 mx-auto desktop:mx-36 mobile:mx-6 relative'>
      <div className='tablet:max-w-[100px] w-full flex-col justify-between text-c1'>
        <Image src={footerLogo} alt='Varos' className='mb-6' />
        <section className='mobile:hidden mb-6'>
          <Signature />
        </section>
      </div>
      <Links />
      <section className='hidden mobile:block absolute bottom-4'>
        <Signature />
      </section>
    </footer>
  );
}
