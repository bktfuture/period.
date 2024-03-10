import type { Config } from "tailwindcss";

// color pallette lightest to darkest  #fff0f3 #ffb3c1 #ff758f #e00914 #f67728

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-rose": "#fff0f3",
        "medium-rose": "#ffb3c1",
        "dark-rose": "#ff758f",
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