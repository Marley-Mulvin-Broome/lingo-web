/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'jungle': {
          100: "#dde5d5",
          200: "#bacaac",
          300: "#98b082",
          400: "#759559",
          500: "#537b2f",
          600: "#426226",
          700: "#324a1c",
          800: "#213113",
          900: "#111909"
      }
      }
    },
  },
  plugins: [],
}

