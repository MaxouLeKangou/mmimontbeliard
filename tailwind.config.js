/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./slices/**/*.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {

    colors: {

      transparent: 'transparent',
      
      light: {
        100: '#E5E7EB',
        200: '#A1A1AA',
      },

      dark: {
        100: '#3F4045',
        200: '#18181B',
        300: '#0C0C0D',
      },

      purple: '#6C70FF',
      pink: '#FF307F',
    },


    extend: {
      fontFamily: {
        marker: ['imp-marker', 'cursive'],
        poppins: ['imp-poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}