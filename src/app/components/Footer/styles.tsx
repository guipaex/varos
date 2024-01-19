import { Children } from "react";

export const LinksHeader = ({ children }: { children: React.ReactNode }) => {
  return <h3 className='mb-6 text-xl font-bold text-c1'>{children}</h3>;
};

export const Link = ({ children }: { children: React.ReactNode }) => {
  return (
    <li>
      <a href={"#"} className='text-base font-medium text-c1'>
        {children}
      </a>
    </li>
  );
};

export const LinksGroup = ({ children }: { children: React.ReactNode }) => {
  return <ul className='flex flex-col max-w-[172px] gap-6 mb-12'>{children}</ul>;
};
export const Signature = () => {
  return (
    <p>
      Varos 2023
      <br />
      Todos os direitos reservados;
    </p>
  );
};
