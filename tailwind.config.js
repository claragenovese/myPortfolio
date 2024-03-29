/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        boxShadow: {
          '3xl': '0 25px 50px -25px rgba(0, 0, 0, 0.5)',
        }
    },
  },
  plugins: [],
}
