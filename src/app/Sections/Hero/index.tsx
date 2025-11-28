import Image from "next/image";
import cardHero from "../../assets/Cards-Hero.svg";
import Section from "@/app/components/Section";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <Section>
      <HeroContent />
      <Image src={cardHero} alt="products" className="flex" />
    </Section>
  );
}
