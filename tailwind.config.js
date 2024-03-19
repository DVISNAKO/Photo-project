/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'es': '300px'
        // => @media (min-width: 350px) { ... }
      }
    },
  },
  plugins: [],
}

