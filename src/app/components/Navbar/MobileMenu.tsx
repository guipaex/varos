import { useEffect, useState } from "react";
import Image from "next/image";
import iconUser from "../../assets/User.svg";
import iconBuy from "../../assets/shopping-cart.svg";
import { IoArrowForward } from "react-icons/io5";

interface MenuProps {
  open: boolean;
}

export const MobileMenu = ({ open }: MenuProps) => {
  const [position, setPosition] = useState("");

  useEffect(() => {
    open ? setPosition("-49px") : setPosition("-110vw");
  }, [open]);

  return (
    <div
      className={`bg-cBlack flex flex-col absolute px-[49px] pt-[54px] w-screen h-fit right-[${position}] top-12 transition-[right] duration-300 ease-out border-t-[1px] border-c8`}
    >
      <section className='w-full max-w-[336px] py-7 flex flex-col gap-[1rem] mb-10 mx-auto'>
        <button className='flex justify-center gap-4 px-[13px] py-2.5 rounded border border-neutral-50 font-semibold uppercase text-lg leading-normal tracking-widest'>
          <Image src={iconUser} alt='Entrar' width={25.3} height={24} />
          <p>Entrar</p>
        </button>
        <button className='flex items-center bg-flGreen justify-center gap-4 px-[13px] py-2.5 rounded border border-neutral-50 font-semibold uppercase text-neutral-900 text-lg leading-normal tracking-widest'>
          <p>Assinar Agora</p>
        </button>
      </section>
      <section className='bg-c8 rounded-lg max-w-[336px] mx-auto mb-16 py-7 text-left divide-y divide-c5'>
        <h2 className='text-base font-bold pb-5 px-7 border-b text-doc'>Produtos</h2>
        <section className='px-7 pt-8 flex flex-col gap-6 mx-auto'>
          <a className='cursor-pointer'>
            <h3 className='flex justify-between mb-2 text-doc text-base font-semibold'>
              Carteiras <IoArrowForward size={18} />
            </h3>
            <p className='text-c5 text-xs font-normal'>
              Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro
              financeiro sólido.
            </p>
          </a>
          <a className='cursor-pointer'>
            <h3 className='flex justify-between mb-2 text-doc text-base font-semibold'>
              Cursos <IoArrowForward size={18} />
            </h3>
            <p className='text-c5 text-xs font-normal'>
              Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro
              financeiro sólido.
            </p>
          </a>
          <a className='cursor-pointer'>
            <h3 className='flex justify-between mb-2 text-doc text-base font-semibold'>
              Consultoria <IoArrowForward size={18} />
            </h3>
            <p className='text-c5 text-xs font-normal'>
              Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro
              financeiro sólido.
            </p>
          </a>
        </section>
      </section>
      <nav className='w-full mx-auto flex flex-col divide-y items-center divide-c8 text-left text-base font-bold text-doc'>
        <a className='w-full max-w-[336px] py-6 cursor-pointer'>Blog</a>
        <a className='w-full max-w-[336px] py-6 cursor-pointer'>Quem somos</a>
        <a className='w-full max-w-[336px] py-6 cursor-pointer'>Conteúdos</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
