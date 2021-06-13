module.exports = {
  theme: {
    fill: (theme) => ({ red: theme('colors.red.primary') }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#0082f6',
        mediumHover: '#2045f6',
      },
      black: {
        light: '#262626',
        faded: '00000059',
      },
      gray: {
        base: '#8e8e8e',
        background: '#fafafa',
        hover: '#f5f5f5',
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
      fontSize: {
        m: ['0.935rem', '1.33rem'],
      },
    },
  },
};
