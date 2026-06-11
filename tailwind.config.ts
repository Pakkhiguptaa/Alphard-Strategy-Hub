import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070b16",
          900: "#0b1020",
          850: "#111827",
          800: "#172033",
        },
        violetBrand: "#7c3aed",
        blueBrand: "#2563eb",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 11, 22, 0.24)",
        card: "0 18px 50px rgba(9, 15, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
