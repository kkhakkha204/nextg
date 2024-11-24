module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #dbeafe -130%, #f4f4f5 50%, #dbeafe 230%)',
        'custom-gradient-logo': 'linear-gradient(to right, #93c5fd -140%, #f4f4f5 50%, #93c5fd 240%)',

      },
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
        ivar: ["IvarDisplay-SemiBoldItalic", "serif"],
      },
      animation: {
        scrollLoop: 'scrollLoop 4s infinite',
        spinClockwise: 'spinClockwise 20s linear infinite',
        slide: 'slide 40s linear infinite',

      },
      keyframes: {
        scrollLoop: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(5rem)' },
        },
        spinClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(23%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

