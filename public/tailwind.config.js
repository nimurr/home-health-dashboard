/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    colors: {
      primary: '#3d1852',   // Example primary color (blue)
      secondary: '#F59E0B', // Example secondary color (orange)
    },
  },
  plugins: [],
}

