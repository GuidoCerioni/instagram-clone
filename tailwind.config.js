module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({ red: theme('colors.red.primary') }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#0095f6',
      },
      black: {
        light: '#005c98',
        faded: '00000059',
      },
      gray: {
        base: '#8e8e8e',
        background: '#fafafa',
        primary: '#dbdbdb',
      },
      red: {
        primary: '#ed4956',
      },
    },
    extend: {
      screens: {
        phone: '450px',
      },
      maxWidth: {
        xxxs: '11rem',
        xxs: '15rem',
      },
    },
  },
};
