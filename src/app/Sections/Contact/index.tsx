import Section from "@/app/components/Section";
import Form from "./Form";

export default function Contact() {
  return (
    <Section>
      <div className="text-c1 font-bold text-center mobile:text-left desktop:max-w-[463px] max-w-[340px] mb-10">
        <h2 className="text-3xl mobile:text-[38px] mb-4 leading-9">
          Cadastre-se para receber mais informações.
        </h2>
        <h3 className="max-w-[368px] text-lg leading-snug">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </h3>
      </div>
      <Form />
    </Section>
  );
}
