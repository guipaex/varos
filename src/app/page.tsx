import Contact from "./Sections/Contact";
import Intro from "./Sections/Intro";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className='min-h-[100vh] w-full overflow-x-hidden'>
      <Header />
      <Intro />
      <Contact />
      <Footer />
    </main>
  );
}
