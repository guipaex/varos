import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import ProductsSection from "./Sections/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100vh] w-full overflow-x-hidden">
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
}
