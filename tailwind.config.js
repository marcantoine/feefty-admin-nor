/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F7F8FA",
          200: "#BCCADC80",
          600: "#627D98",
        },
      },
      dropShadow: {
        lg: ["0 4px 20px rgb(0 0 0  / 0.08)"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
