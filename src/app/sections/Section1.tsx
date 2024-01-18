import Slider from "../components/Slider";

export default function SectionI() {
  return (
    <section className='bg-green-950 min-h-[900px]'>
      <h1>Investir de forma mais inteligente passa por aqui.</h1>
      <h2>Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.</h2>
      <button>Comprar agora {"->"}</button>
      <Slider />
    </section>
  );
}
