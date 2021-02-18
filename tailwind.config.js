module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins']
    },
    colors: {
      purple: {
        light: "#654FF0",
        dark: "#5a47d6"
      },
      black: "#171123",
      yellow: "#ffc857",
      gray: "#e8ebf7",
      white: "#ffffff"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
