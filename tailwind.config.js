/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#67748E',
        'gray-200': '#3B4053',
        'gray-300': '#1c1c1c',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
