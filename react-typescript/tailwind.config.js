module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        base: '#b6b6b6',
        100: '#f2f2f2',
        200: '#ebebeb',
        300: '#dcdcdc',
        400: '#b6b6b6',
        500: '#767676',
        600: '#6e6e6e',
        700: '#373737',
        800: '#333333',
        900: '#222222',
      },
      red: {
        base: '#cc0000',
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        base: '#fc9003',
        100: '#ffebcc',
        200: '#ffd699',
        300: '#fec267',
        400: '#ecac2d',
        500: '#fc9003',
      },
      yellow: {
        base: '#fed100',
        100: '#fff9d7',
        200: '#fff4ae',
        300: '#ffee86',
        400: '#ffe335',
        500: '#fed100',
      },
      green: {
        base: '#1aac1e',
        100: '#d1eed2',
        200: '#a3dea5',
        300: '#76cd78',
        400: '#4abc4b',
        500: '#1aac1e',
        600: '#128024',
        700: '#0e5b10',
      },
      blue: {
        base: '#3c85df',
        100: '#d8e7f9',
        200: '#b1cef2',
        300: '#8ab6ec',
        400: '#67a9f1',
        500: '#3c85df',
        600: '#336dc2',
        700: '#2a5e9d',
        800: '#183559',
      }
    },
    fontFamily: {
      sans: [
        '"Roboto"', '"Helvetica Neue"', 'Arial', 'sans-serif'
      ],
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
