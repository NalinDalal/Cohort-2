/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#146eb4"
        }
      }
    },
  },
  plugins: [],
}

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.jsx',
    ],
  },
  // ...
}