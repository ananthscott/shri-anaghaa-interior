/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAFAF7',
        cream: '#F5EFE6',
        beige: '#E8E0D5',
        'beige-dark': '#D4C9B8',
        gold: '#C9A96E',
        'gold-light': '#E2C99A',
        'gold-dark': '#A07840',
        walnut: '#3D2B1F',
        'walnut-light': '#6B4C3B',
        olive: '#6B7C5C',
        'olive-light': '#8A9B78',
        charcoal: '#2C2C2C',
        'warm-gray': '#9B9088',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
        mono: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'marble': "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-right': 'slideRight 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
