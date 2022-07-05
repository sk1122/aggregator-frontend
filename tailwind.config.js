module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wagpay-dark': '#101010',
        'wagpay-primary': '#FF633B',
        "wagpay-card-bg" : "#191919", 
        "wagpay-card-bg-secondary": "#464646",
        primaryDark: '#101010',
        secondaryDark: '#191919',
        wagpayPurple: '#615CCD',
        primaryLight: '#F5F5F7',
        secondaryLight: '#E8E8E8',
        tertiaryLight: '#A3A3A3',
        primaryGray: '#D8D8D8',
        secondaryGray: '#4B4B4B',
        tertiaryGray: '#1F1F1F',
        quaternaryGray: '#3A3A3A',
      },
      screens: {
        mobile: '415px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};