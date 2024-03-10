import type { Config } from "tailwindcss";

// color pallette lightest to darkest  #ffe9f6 #f4c6de #ea90bc #e00914 #f67728

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-rose": "#ffe9f6",
        "medium-rose": "#f4c6de",
        "dark-rose": "#ea90bc",
        "orange-accent": "#f67728",
        "period-red": "#e00914",
      },
      fontFamily: {
        gabriela: ['Gabriela', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;