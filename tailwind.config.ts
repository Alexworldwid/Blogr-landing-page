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
        LightRedCTAText: 'hsl(var(--Light-red-CTA-text))',
        VeryLightRedCTAHoverBackground: 'hsl(var(--Very-light-red-CTA-hover-background))', 
        VeryDarkBlueHeadings: 'hsl(var(--Very-dark-blue-headings))',
        WhiteText: 'hsl(var(--White-text))',
        GrayishBlueFooterText: 'hsl(var( --Grayish-blue-footer-text))',
        VeryDarkGrayishBlueBodyCopy: 'hsl(var(--Very-dark-grayish-blue-body-copy))', 
        VeryDarkBlackBlueFooterBackground: 'hsl(var(--Very-dark-black-blue-footer-background))', 
        VeryLightRed: 'hsl(var(--Very-light-red))', 
        LightRed: 'hsl(var(--Light-red))',
        VeryDarkGrayBlue: 'hsl(var(--Very-dark-gray-blue))', 
        VeryDarkDesaturatedBlue: 'hsl(var(--Very-dark-desaturated-blue))', 
      },
    },
  },
  plugins: [],
};
export default config;
