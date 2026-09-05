/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ruby: '#AB3940',
        rhodonite: '#AC515F',
        opal: '#FE9DA7',
        cookie: '#E4D1C0',
        jeans: '#5A7A99',
        ink: '#2B1013',
      },
      fontFamily: {
        hn: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
