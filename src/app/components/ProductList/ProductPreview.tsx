import Image from "next/image";
import Option from "./Option";

export interface ProductProps {
  product: {
    iconFile: string;
    name: string;
    title: string;
    description: string;
    screenshotUrl: string;
  };
}

export default function ProductPreview({ product }: ProductProps) {
  return (
    <div className="overflow-hidden border-[1px] border-c8 bg-c9 rounded-[2rem] py-7 px-6 w-full max-w-[662px] h-[536px] relative">
      <Option product={product} />
      <div className="ml-4 mt-6 w-[80%] flex flex-col gap-4">
        <h2 className="font-semibold text-2xl leading-[120%] text-c1">
          {product.title}
        </h2>
        <p className="leading-[120%] text-base font-normal text-c3">
          {product.description}
        </p>
      </div>
      <Image
        className="ml-4 rounded-3xl mt-4 absolute"
        src={`/${product.screenshotUrl}`}
        alt={`${product.name} screenshot`}
        width={621}
        height={329}
      />
    </div>
  );
}
