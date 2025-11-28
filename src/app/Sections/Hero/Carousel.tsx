export default function Carousel() {
  return (
    <Container>
      <p className="text-xl text-c5">Visto em</p>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li></li>
      </ul>
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
        w-fit
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
