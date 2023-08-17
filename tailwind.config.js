/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,ts,js}"],
  theme: {
    extend: {
        fontFamily : {
            ubuntu: ['Ubuntu', 'sans-serif'],
            play: ['Playfair Display', 'serif']
        }
    },
  },
  plugins: [],
}

