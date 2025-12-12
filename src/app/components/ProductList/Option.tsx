import Image from "next/image";
interface OptionProps {
  product: {
    iconFile: string;
    name: string;
  };
  onClick?: () => void;
}

export default function Option({ product, onClick }: OptionProps) {
  return (
    <button
      className="flex gap-4 p-4 text-left items-center rounded-[32px] text-c1 w-fit font-semibold text-sm leading-[120%] active:bg-active focus:bg-active"
      onClick={onClick}
    >
      <Image
        src={`/icons/${product.iconFile}`}
        width={22}
        height={22}
        alt={product.name}
      />
      <h3>{product.name}</h3>
    </button>
  );
}
