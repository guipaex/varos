export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header
      className="
        max-w-[1440px] 
        bg-cBlack
        fixed
        left-0
        right-0
        m-auto
        flex 
        items-center
        justify-between
        desktop:px-36
        desktop:h-16
      "
    >
      {children}
    </header>
  );
}
