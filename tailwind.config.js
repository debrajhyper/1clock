/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple': {
          850: '#5b1b90',
          1000: '#320755'
        },
      }
    },
  },
  plugins: [],
}

