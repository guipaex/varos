import ProductsList from "@/app/components/ProductList";
import Section from "@/app/components/Section";

export default function ProductsSection() {
  return (
    <Section className="flex-wrap">
      <div className="w-full mb-12">
        <h2 className="font-bold text-[38px] leading-[120%] text-c1 mb-4 desktop:max-w-[600px] tablet:max-w-[480px] mobile:max-w-[360px]">
          Simplifique seus investimentos e alcance seus objetivos.
        </h2>
        <p className="font-medium text-lg leading-[120%] text-c5 tablet:max-w-[480px]">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </div>

      <ProductsList />
    </Section>
  );
}
