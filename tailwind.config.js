/* eslint-disable quote-props */
module.exports = {
  purge: ['./src/*.js', './src/**/*.js', './src/**/**/*.js'],
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
      white: theme('colors.white'),
    }),
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
        phonexs: '350px',
      },
      height: {
        // prettier-ignore
        '60': '60px',
      },
      maxWidth: {
        xxxs: '11rem',
        xxs: '15rem',
        // prettier-ignore
        '615': '615px',
      },
      fontSize: {
        xxs: ['0.625rem', '1rem'],
        m: ['0.935rem', '1.33rem'],
      },
      inset: {
        '1/5': '20%',
        '1/6': '16%',
        // prettier-ignore
        '105': '105px',
      },
      animation: {
        pulsefast: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulsefast: {
          '0%, 100%': { opacity: '1' },

          '50%': { opacity: '0.1' },
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};
