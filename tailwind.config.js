/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-100": "#15378F",
        "custom-blue-50": "#03B3FF",
      },
    },
  },
  plugins: [],
};
