/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
      Poppin: ["Poppins", "sans-serif"],
      Rubik: ["Rubik"],
    },
    extend: {
      colors: {
        blueDark: "#2F1893",
        blueBlack: "#1E0E62",
        Dark: "#0B132A",
      },
      backgroundImage: {
        // bgBird: "url('../images/bird.png')",
      },
    },
  },

  plugins: [
    // include Flowbite as a plugin in your Tailwind CSS project
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
  ],
};
