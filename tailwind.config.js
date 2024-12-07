/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0F0F0F',
        darklight: '#282828'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}