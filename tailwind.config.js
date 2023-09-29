/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.tsx"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#212121",
        "dark-popup": "#3b3b3b",
        "dark-buttons": "#00FFBB",
        "dark-buttons-active": "#02ba8a",
        "dark-text-active": "#FFFFFF",
      }
    },
  },
  plugins: [],
}

