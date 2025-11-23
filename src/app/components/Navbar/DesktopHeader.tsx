import Image from "next/image";
import iconUser from "../../assets/User.svg";
import iconBuy from "../../assets/shopping-cart.svg";

export default function DesktopHeaderContent() {
  return (
    <div className='hidden w-full desktop:flex items-center justify-between ml-16'>
      <nav className=' gap-4 max-w-[488px] flex justify-between grow'>
        <a href='#' className='text-neutral-50 text-sm font-semibold'>
          Produtos
        </a>
        <a href='#' className='text-neutral-50 text-sm font-semibold'>
          Blog
        </a>
        <a href='#' className='text-neutral-50 text-sm font-semibold'>
          Conteúdos
        </a>
        <a href='#' className='text-neutral-50 text-sm font-semibold'>
          Quem Somos
        </a>
      </nav>

      <div id='botoes' className='flex'>
        <button className='flex px-[13px] py-2.5 rounded items-center gap-4 font-semibold text-lg'>
          <Image src={iconBuy} alt='Assinar agora' width={25.3} height={24} />
          <p>Assinar Agora</p>
        </button>
        <button className='flex px-[13px] py-2.5 rounded items-center gap-4 font-semibold text-lg'>
          <Image src={iconUser} alt='Entrar' width={25.3} height={24} />
          <p>Entrar</p>
        </button>
      </div>
    </div>
  );
}
