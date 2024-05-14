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
        'gradient1': '#010101',
        'gradient2': '#0B0B0B',
        'gradient3': '#151515',
        'gradient4': '#1F1F1F',
        'gradient5': '#292929',
        'gradient6': '#343434',
        'gradient7': '#3E3E3E',
        'gradient8': '#484848',
        'gradient9': '#525252',
        'gradient10': '#5C5C5C',
        'gradient11': '#666',        
      },
    },
  },
  plugins: [],
};
export default config;
