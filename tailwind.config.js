const { colors, fontFamily } = require('tailwindcss/defaultTheme');

// spacing by 4 up to a multiple of 10
// 0 index is 0, 11 index is 40
const spacing = new Array(11)
  .fill()
  .reduce((result, _, index) => Object.assign(result, { [index]: `${index * 4}px` }), {});

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing,
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', ...fontFamily.sans],
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '16px',
        lg: '18px',
        xl: '22px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '44px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          ...colors.gray,
          100: '#606e85',
        },
        red: {
          ...colors.red,
          100: '#DD405D',
          200: '#DC2E4E',
        },
        yellow: {
          ...colors.amber,
          100: '#ECA922',
          200: '#EC9E0E',
        },
        cyan: {
          100: '#52BED1',
          200: '#40B9CE',
        },
        blue: {
          ...colors.blue,
          100: '#5671F5',
          200: '#4865F4',
          300: '#2A46C0',
        },
        indigo: {
          ...colors.indigo,
          100: '#3B4363',
          200: '#1F3756',
          300: '#141539',
        },
        purple: {
          ...colors.violet,
          100: '#8C5DE5',
          200: '#834FE3',
        },
      },
      screens: {
        desktop: '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
