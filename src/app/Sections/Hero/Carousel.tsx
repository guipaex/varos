import Image from "next/image";
import logo1 from "../../assets/logos/bradvisors.svg";
import logo2 from "../../assets/logos/finclass.svg";
import logo3 from "../../assets/logos/valor.svg";
import logo4 from "../../assets/logos/tc.svg";
import logo5 from "../../assets/logos/bmec.svg";
import logo6 from "../../assets/logos/neofeed.svg";

const logos = [
  { src: logo1, alt: "Bradvisors" },
  { src: logo2, alt: "Finclass" },
  { src: logo3, alt: "Valor Econômico" },
  { src: logo4, alt: "TC" },
  { src: logo5, alt: "BM&C News" },
  { src: logo6, alt: "Neo Feed" },
];

export default function Carousel() {
  return (
    <Container>
      <p className="text-xl text-c5 shrink-0">Visto em</p>
      <div className="flex overflow-hidden group">
        <ul className="pl-[117px] flex items-center gap-[117px] justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} height={28} alt={logo.alt} />
            </li>
          ))}
        </ul>
        <ul
          className="pl-[117px] flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} height={32} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        bg-gradient-to-r 
        from-[#4D5358]
        to-[#4D535800]
        rounded-2xl
        max-w-[500px]
        p-[1px]
        mt-[88px]
        "
    >
      <div
        className="
        flex
        rounded-2xl
        bg-cBlack
        px-[46px]
        py-6
        gap-[124px]
        "
      >
        {children}
      </div>
    </div>
  );
};
