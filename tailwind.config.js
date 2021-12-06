module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'christmas': "url('https://www.tuexperto.com/wp-content/uploads/2020/12/zoom-navidad-01-1080x608.jpg')",
      },
      fontFamily: {
        'christmas': '"Mountains of Christmas", cursive'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
