/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        libreBaskerville: ['Libre Baskerville', 'serif'],
        sourceSans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};