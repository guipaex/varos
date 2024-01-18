import Header from "./components/Header/Header";
import SectionI from "./sections/Section1";

export default function Home() {
  return (
    <main className='min-h-[100vh] w-full overflow-x-hidden'>
      <Header />
      <SectionI />
    </main>
  );
}
