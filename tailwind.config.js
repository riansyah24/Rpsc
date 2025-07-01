/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./game.html","./www/index.html","./www/game.html"],
  theme: {
    extend: {
      "-100vh" : "-100vh",
      "90vh" : "90vh"
    }
  },
  plugins: [],
}

