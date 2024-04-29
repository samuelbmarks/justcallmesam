import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-10': 'rgba(0, 0, 0, 0.1)',
        'black-40': 'rgba(0, 0, 0, 0.4)',
        'off-white': 'rgb(229,227,211,1)',
        'off-white-50': 'rgb(229,227,211,0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
