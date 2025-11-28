import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "./Carousel";

export default function HeroContent() {
  return (
    <div className="flex flex-col max-w-[564px]">
      <h1 className="mb-6 text-[64px] font-extrabold leading-[110%] text-c1 md:text-5xl lg:text-6xl">
        Investir de forma mais inteligente passa por aqui.
      </h1>
      <p className="text-lg font-semibold leading-[120%] text-c2 md:max-w-md">
        Fazemos de tudo para que você possa conquistar seus sonhos da melhor
        forma possível.
      </p>
      <a
        href="#"
        className="bg-flGreen mobile:mx-0 mx-auto bg-opacity-40 hover:bg-opacity-70 transition mt-8 text-sGreen text-lg font-semibold w-[263px] h-14 px-12 py-4 rounded-[48px] flex justify-between items-center gap-2.5"
      >
        Comprar agora <FaArrowRightLong />
      </a>

      <Carousel />
    </div>
  );
}
