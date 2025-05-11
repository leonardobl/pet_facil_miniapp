/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-100": "#15378F",
        "custom-blue-90": "#144098",
        "custom-blue-50": "#03B3FF",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeout: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadein: "fadein 0.5s ease-in forwards",
        fadeout: "fadeout 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
