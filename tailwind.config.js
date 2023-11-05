/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'primary-btn': '#FB3502'
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  darkMode: "class"
}

