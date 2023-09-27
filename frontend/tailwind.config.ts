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
      primary: "#0f0019",
      secondary: "#110054",
    }),
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/uyuiy19.jpg')",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [],
};
export default config;

// <a href="https://www.freepik.com/free-vector/abstract-wave-lines-dynamic-flowing-colorful-light_19010356.htm#&position=0&from_view=search&track=ais">Image by malikadesign</a> on Freepik
// https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-171401.jpg?w=1380&t=st=1695787940~exp=1695788540~hmac=4ca8261a060cef6a71b7a03c49fe7b3111f5fff2e5f065bdf1a8b863df601cc6
