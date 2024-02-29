import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        stat: "88px",
        social: "60px",
      },
      width: {
        social: "134px",
      },
      spacing: {
        block: "90px",
      },
      colors: {
        'light-blue':"rgb(var(--background-light-blue-rgb))",
        secondary: "var(--secondary)",
        primary: "var(--text-primary)",
        icon: "var(--background-icon)",
        "brand-blue": "var(--text-blue)",
        "brand-purple": "var(--brand-purple)",
        "brand-bg": "var(--background-brand)",
        border: "var(--border-blue)",
        "brand-secondary": "var(--text-brand-secondary)",
        danger: "var(--text-danger)",
        "secondary-bg": "var(--background-secondary)",
      },
      boxShadow: {
        header: "8px 8px 56px 0px #AEAEC029",
      },
    },
  },
  plugins: [],
};
export default config;
