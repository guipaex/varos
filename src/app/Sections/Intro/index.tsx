import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import cardHero from "../../assets/Cards-Hero.svg";

export default function Intro() {
  return (
    <section className="flex flex-wrap justify-around pt-24 pb-16 mb-16 mx-auto desktop:mx-36 mobile:mx-6'">
      <div className='text-center mobile:text-left'>
        <h1 className='max-w-[564px] text-4xl font-extrabold text-c1 md:text-5xl lg:text-6xl'>
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <p className='max-w-[469px] mt-6 text-lg font-semibold text-c2 md:max-w-md'>
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.
        </p>
        <button className='bg-flGreen mobile:mx-0 mx-auto bg-opacity-40 hover:bg-opacity-70 transition mt-8 text-sGreen text-lg font-semibold w-[263px] h-14 px-12 py-4 rounded-[48px] flex justify-between items-center gap-2.5'>
          Comprar agora <FaArrowRightLong />
        </button>
        <div className='bg-blue-700 rounded-xl flex w-fit mobile:mx-0 mx-auto'>
          <p>Visto em</p>
          <div> icones </div>
        </div>
      </div>
      <div>
        <Image src={cardHero} alt='products' className='hidden mobile:flex' />
      </div>
    </section>
  );
}
