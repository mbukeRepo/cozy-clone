/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#A44F2C",
        secondary: "#223240",
        tartiary: "#C47D57",
        lightGray: "#E4DED5",
        lightOrange: "#d4ac8e",
        rose: "#B9104B",
        darkOrange: "#B55730",
        moreLightGray: "#C4BFB8",
        lessGray: "#E4DED5",
        moreLessGray: "#B2B0AB",
        lessDarkBlue: "#2d4850",
        darkOrange: "#c47d57",
        moreDarkOrange: "#A85330",
        lessLightGray: "#D7D2CB",
      },
      backgroundImage: {
        noise:
          "url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')",
      },
      fontFamily: {
        fraunces144: ["Fraunces144ptsupersoft", "sans-serif"],
        Fraunces144ptSuperSoft: [
          "Fraunces144ptSuperSoft-Regular",
          "sans-serif",
        ],
        Fraunces72ptsupersoft: ["Fraunces72ptSuperSoft-Regular", "sans-serif"],
        "Geomanist-Regular": ["Geomanist-Regular", "sans-serif"],
        "Geomanist-Bold": ["Geomanist-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
