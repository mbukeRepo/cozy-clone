/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
