import Contact from "./Sections/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className='min-h-[100vh] w-full overflow-x-hidden'>
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
