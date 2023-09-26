import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme.colors,
      primary: "#030a38",
    }),
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/backg2.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

// <a href="https://www.freepik.com/free-vector/abstract-wave-lines-dynamic-flowing-colorful-light_19010356.htm#&position=0&from_view=search&track=ais">Image by malikadesign</a> on Freepik
