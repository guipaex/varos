import Section from "@/app/components/Section";
import Image from "next/image";

export default function TestmonialsSection() {
  return (
    <Section className="mt-[128px] mb-[160px]">
      <div className="flex flex-wrap gap-6">
        <div>
          <h2 className="font-bold text-[38px] text-c1 mb-2">
            Didática de verdade
          </h2>
          <p className="font-bold text-[18px] mb-14">
            Garantindo seu aprendizado
          </p>
          <div className="max-w-[415px] flex flex-col gap-4 rounded-[24px] border-[1px] border-c8 bg-c9 p-6">
            <span className="text-flGreen text-[40px] font-black leading-none">
              {'"'}
            </span>
            <p className="text-c5 text-lg font-medium leading-[120%] mb-4">
              Conteúdos preparados para trazer mais segurança, independente do
              seu nível. Conteúdos preparados para trazer mais segurança,
              independente do seu nível.
            </p>
            <p className="text-lg font-medium leading-[120%] italic">
              Assinante VAROS
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image src={"/socios.png"} width={416} height={295} alt="sócios" />
        <Container>
          <div className="w-full min-w-[322px] flex font-doc text-sm leading-[120%] kerning-0 text-center justify-between">
            <p className="flex flex-col items-center justify-center gap-1 max-w-[100px]">
              <span className="font-bold text-lg text-c4 kerning-[2%]">
                + 1000
              </span>
              Nota média geral das aulas
            </p>
            <p className="flex flex-col items-center justify-center gap-1 max-w-[100px]">
              <span className="font-bold text-lg text-flGreen kerning-[2%]">
                4,8/5
              </span>{" "}
              Nota média geral das aulas
            </p>
            <p className="flex flex-col items-center justify-center gap-1 max-w-[100px]">
              <span className="font-bold text-lg text-c4 kerning-[2%]">
                10k +
              </span>{" "}
              Comunidade
            </p>
          </div>
        </Container>
      </div>
    </Section>
  );
}
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        bg-gradient-to-r 
        from-[#4D5358]
        to-[#4D535800]
        rounded-[32px]
        max-w-[500px]
        p-[1px]
        mt-[88px]
        "
    >
      <div
        className="
        flex
        rounded-[32px]
        bg-cBlack
        px-8
        py-4
        gap-[124px]
        "
      >
        {children}
      </div>
    </div>
  );
};
