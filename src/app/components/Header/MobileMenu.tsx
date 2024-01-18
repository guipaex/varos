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
    console.log(open);
  }, [open]);

  return (
    <div
      className={`flex flex-col absolute px-[49px] pt-[54px] w-screen h-screen right-[${position}] top-12 transition-[right] duration-300 ease-out border-t-[1px] border-c8`}
    >
      <section className='flex flex-col gap-[1rem] min-w-[336px] mx-auto mb-10'>
        <button className='flex items-center justify-center gap-4 px-[13px] py-2.5 rounded border border-neutral-50 font-semibold uppercase text-lg leading-normal tracking-widest'>
          <Image src={iconUser} alt='Entrar' width={25.3} height={24} />
          <p>Entrar</p>
        </button>
        <button className='flex items-center bg-flGreen justify-center gap-4 px-[13px] py-2.5 rounded border border-neutral-50 font-semibold uppercase text-neutral-900 text-lg leading-normal tracking-widest'>
          <p>Assinar Agora</p>
        </button>
      </section>
      <section className='bg-c8 rounded-lg  max-w-[336px] mx-auto py-7 text-left divide-y divide-c5'>
        <h2 className='text-base font-bold pb-5 px-7 border-b text-doc'>Produtos</h2>
        <section className='px-7 pt-8 flex flex-col gap-6'>
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
      <nav className='flex flex-col mx-auto divide-y divide-c8 px-7 text-left text-base font-bold text-doc'>
        <a className='px-7 py-6 min-w-[336px] cursor-pointer'>Blog</a>
        <a className='px-7 py-6 min-w-[336px] cursor-pointer'>Quem somos</a>
        <a className='px-7 py-6 min-w-[336px] cursor-pointer'>Conteúdos</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
