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
        primary: {
          // purple
          100: "#f5f3ff",
          200: "#ebe5ff",
          300: "#d0bfff",
          400: "#b392ff",
          500: "#9c6bff",
          600: "#7e4fff",
          700: "#6539ff",
          800: "#5125ff",
          900: "#4211ff",
        },
        secondary: {
          100: "#f4f5f7",
          200: "#e4e6eb",
          300: "#d5d6dc",
          400: "#b7b9c2",
          500: "#99a1b3",
          600: "#6e7781",
          700: "#4d5663",
          800: "#2e3744",
          900: "#141a23",
        },
        danger: {
          100: "#fff5f5",
          200: "#fed7d7",
          300: "#feb2b2",
          400: "#fc8181",
          500: "#f56565",
          600: "#e53e3e",
          700: "#c53030",
          800: "#9b2c2c",
          900: "#742a2a",
        },
        success: {
          100: "#f0fff4",
          200: "#c6f6d5",
          300: "#9ae6b4",
          400: "#68d391",
          500: "#48bb78",
          600: "#38a169",
          700: "#2f855a",
          800: "#276749",
          900: "#22543d",
        },
        warning: {
          100: "#fffaf0",
          200: "#feebc8",
          300: "#fbd38d",
          400: "#f6ad55",
          500: "#ed8936",
          600: "#dd6b20",
          700: "#c05621",
          800: "#9c4221",
          900: "#7b341e",
        },
        info: {
          100: "#f0f4ff",
          200: "#cfe0fc",
          300: "#accbfa",
          400: "#7fa5f7",
          500: "#5380f4",
          600: "#3c5da5",
          700: "#2c437e",
          800: "#1c2c57",
          900: "#0d152e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
