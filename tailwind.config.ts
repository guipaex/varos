import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sGreen': '#00F700 ',
        'flGreen': '#19C819',
        'cBlack': '#131313',
        'doc': '#FAFAFA',
        'c1': '#F2F4F8',
        'c2': '#E2E5EB',
        'c5':'#B0B7BE',
        'c8': '#222729',
      },
      screens: {
        'mobile': '390px',
        'tablet': '900px',
        'desktop': '1024px',
      }
    },animation: {
      menuIn: 'menu 200ms ease-in-out',
    },
    keyframes: {
      menuIn: {
        '0%': { right: '100vw'},
        '100%': { right: '0' },
      }
    }
  },
  plugins: [],
}
export default config
