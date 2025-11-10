/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed"
      },
      fontFamily: {
        gregular: ["Gabarito-Regular", "sans-serif"],
        gmedium: ["Gabarito-Medium", "sans-serif"],
        gsemibold: ["Gabarito-SemiBold", "sans-serif"],
        gbold: ["Gabarito-Bold", "sans-serif"],
        gextrabold: ["Gabarito-ExtraBold", "sans-serif"],
        gblack: ["Gabarito-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}