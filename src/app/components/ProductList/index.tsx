"use client";

import { BsCaretRightFill } from "react-icons/bs";
import ProductPreview, { ProductProps } from "./ProductPreview";
import Option from "./Option";
import products from "@/data/products.json";
import { useState } from "react";

export default function ProductsList() {
  const [activeCategory, setActiveCategory] = useState<string>("Carteiras");
  const [selectedProduct, setSelectedProduct] = useState(
    (products[activeCategory as keyof typeof products] as Array<any>)[0]
  );

  function handleClick(category: string, selected?: string) {
    setActiveCategory(category);
  }
  function handleSelection(product: any) {
    setSelectedProduct(product);
  }
  const categories = Object.keys(products);
  const options = (products[activeCategory as keyof typeof products] ||
    []) as Array<{
    iconFile: string;
    name: string;
    title: string;
    description: string;
    screenshotUrl: string;
  }>;

  return (
    <div className="flex w-full justify-between flex-wrap">
      <div className="flex flex-col">
        {categories.map((category, index) => (
          <>
            <button
              key={index}
              onClick={() => handleClick(category)}
              className={buttonStyles}
            >
              {category}
              <BsCaretRightFill className="rotate-[90deg]" />
            </button>
            <div>
              {activeCategory === category ? (
                <div className="bg-c9 border-c8 border-[1px] rounded-[2rem] p-8 mb-4">
                  {options.map((element, index) => (
                    <Option
                      key={index}
                      product={element}
                      onClick={() => handleSelection(element)}
                    />
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        ))}
      </div>
      <ProductPreview product={selectedProduct} />
    </div>
  );
}

const buttonStyles =
  "bg-c9 py-5 px-8 mb-4 border-c8 border-[1px] rounded-[2rem] w-full min-w-[270px] font-bold text-c1 flex gap-2 items-center justify-center";
