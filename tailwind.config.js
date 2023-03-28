/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      primary: {
        DEFAULT: "#002244"
      },
      secondary: {
        DEFAULT: "#8391A1"
      },
      whitewash: {
        DEFAULT: "#d9dddc"
      },
      quaternary: {
        DEFAULT: "#DCDCDC"
      },
      black: {
        DEFAULT: "#363636"
      },
      gold: {
        DEFAULT: "#D4AF37"
      },
      gold1: {
        DEFAULT: "#D4AF37"
      },
      gold2: {
        DEFAULT: "#D7BE69"
      }



    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

  },
  plugins: [],
}
