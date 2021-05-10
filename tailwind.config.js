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
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb',
      },
      red: {
        primary: '#ed4956',
      },
    },
  },
};

// text-red-primary
// text-gray-base
// text-gray-primary
// bg-blue-medium
// text-blue-medium
