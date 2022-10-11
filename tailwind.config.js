/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgD: 'url(/src/images/bg-main-desktop.png)',
        bgMobile: 'url(/src/images/bg-main-mobile.png)',
        fronCard: 'url(/src/images/bg-card-front.png)',
        BackCard: 'url(/src/images/bg-card-back.png)',
      },
      screens: {
        'celular': '375px',
        // => @media (min-width: 640px) { ... }
        'desktop': '1440px',
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        'F18': '18px',
      },
      fontFamily: {
        'Space': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        white: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(270, 3%, 87%)',
          400: 'hsl(279, 6%, 55%)',
          'violet': 'hsl(278, 68%, 11%)',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    },
  },
  plugins: [],
}
