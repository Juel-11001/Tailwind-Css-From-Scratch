// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html"], // ✅ include your html files
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      mono: ['Rokkitt', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}