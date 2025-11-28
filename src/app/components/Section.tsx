export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="
                max-w-[1440px]
                min-w-[390px]
                h-[90vh]
                mt-16
                mx-auto
                flex
                tablet:flex-row
                items-center
                justify-between
               
                desktop:px-36
                tablet:px-6
                mobile:flex-col
                "
    >
      {children}
    </section>
  );
}
