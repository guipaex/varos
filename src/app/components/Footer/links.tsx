import { Link, LinksGroup, LinksHeader } from "./styles";

export default function Links() {
  return (
    <div className='min-h-[296px] flex gap-6 justify-between flex-wrap mt-6'>
      <section>
        <LinksHeader>Cursos</LinksHeader>
        <LinksGroup>
          <Link>Valuation do Zero ao Avançado 2.0 </Link>
          <Link>Código.py </Link>
          <Link>Minicurso Reels </Link>
          <Link>Enciclopédia de FII </Link>
        </LinksGroup>
      </section>
      <section>
        <LinksHeader>Carteiras</LinksHeader>
        <LinksGroup>
          <Link>Carteira FATOR</Link>
          <Link>Carteira Seleção</Link>
          <Link>Carteira Small Caps</Link>
          <Link>Carteira Dividendos</Link>
          <Link>Carteira de FIIs</Link>
        </LinksGroup>
      </section>
      <section>
        <LinksHeader>Sobre</LinksHeader>
        <LinksGroup>
          <Link>Quem somos</Link>
        </LinksGroup>
      </section>
      <section>
        <LinksHeader>Redes Sociais</LinksHeader>
        <LinksGroup>
          <Link>Instagram</Link>
          <Link>Twitter</Link>
          <Link>Youtube</Link>
        </LinksGroup>
      </section>
    </div>
  );
}
