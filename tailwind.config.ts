import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        active: "rgba(34,39,41,0.5)",
        sGreen: "#00F700",
        flGreen: "#19C819",
        cBlack: "#131313",
        doc: "#FAFAFA",
        c1: "#F2F4F8",
        c2: "#E2E5EB",
        c3: "#D3D6DF",
        c4: "#C6CAD2",
        c5: "#B0B7BE",
        c6: "#878D96",
        c7: "#4D5358",
        c8: "#222729",
        c9: "#131516",
      },
      screens: {
        mobile: "390px",
        tablet: "900px",
        desktop: "1440px",
      },
    },
    animation: {
      menuIn: "menu 200ms ease-in-out",
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      menuIn: {
        "0%": { right: "100vw" },
        "100%": { right: "0" },
      },
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
};
export default config;
