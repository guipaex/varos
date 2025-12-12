import { BsCaretRightFill } from "react-icons/bs";
import Option from "./Option";

interface SelectorProps {
  //   category: string;
  //   items: any;
  options?: any[];
  head: string;
  //   handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Selector({ head, options = [] }: SelectorProps) {
  //   const selectors = Object.keys(items);

  return (
    <div className="flex flex-col gap-4">
      {options.map((element, index) => (
        <Option key={index} product={element} />
      ))}
    </div>
    // <div className="bg-c9 py-5 px-8 border-c8 border-[1px] rounded-[2rem] flex flex-col gap-5">
    // </div>
  );
}
