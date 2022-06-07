const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1500px",
    },
    extend: {
      colors: {
        header_bg: "#002138",
      },
      dropShadow: {
        themeShowdow: "0px 1px 11px rgba(37, 52, 119, 0.13)",
      },
    },
    fontFamily : {
      'oswald' : "'Oswald', sans-serif",
      'teko' : "'Teko', sans-serif",
      'roboto' : "'Roboto', sans-serif",
      'barlow' : "'Barlow Semi Condensed', sans-serif"
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin (function ({addComponents}) {
      addComponents ({
        '.btn' : {
          fontSize: '14px',
          color : '#fff',
          padding : '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight : '600',
          background: 'linear-gradient(175.35deg, #028FF0 3.32%, #0DC1D9 95.85%)'
        }
      })
    })
  ],
};
