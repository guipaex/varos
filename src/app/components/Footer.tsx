import Image from "next/image";
import logo from "../assets/logo-footer.svg";

export default function Footer() {
  return (
    <footer className='flex flex-col py-14 px-4 mobile:px-8 tablet:px-36 mx-auto '>
      <div className='flex justify-between flex-wrap items-start mb-12'>
        <Image src={logo} alt='logo' className='mb-14' />
        <div className='flex gap-6 flex-wrap items-start max-w-[858px]'>
          <section className=' w-[172px] flex flex-col gap-6 mb-12'>
            <h3 className='text-slate-100 text-xl font-bold'>Cursos</h3>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Valuation do Zero ao Avançado 2.0
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Código.py
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Minicurso Reels
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Enciclopédia de FII
            </a>
          </section>
          <section className=' w-[172px] flex flex-col gap-6 mb-12'>
            <h3 className='text-slate-100 text-xl font-bold'>Carteiras</h3>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Carteira FATOR
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Carteira Seleção
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Carteira Essencial
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Carteira Small Caps
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Carteira Dividendos
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Carteira de FIIs
            </a>
          </section>
          <section className=' w-[172px] flex flex-col gap-6'>
            <h3 className='text-slate-100 text-xl font-bold'>Sobre</h3>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Quem somos
            </a>
          </section>
          <section className=' w-[172px] flex flex-col gap-6'>
            <h3 className='text-slate-100 text-xl font-bold'>Redes Sociais</h3>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Instagram
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Twitter
            </a>
            <a href='#' className='text-slate-100 text-base font-medium'>
              Youtube
            </a>
          </section>
        </div>
      </div>
      <div>
        <p>Varos 2023</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
