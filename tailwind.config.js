/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E88E5',
          light: '#64B5F6',
          dark: '#0D47A1',
        },
        secondary: {
          DEFAULT: '#26A69A',
          light: '#80CBC4',
          dark: '#00796B',
        },
        accent: {
          DEFAULT: '#FF8F00',
          light: '#FFB74D',
          dark: '#EF6C00',
        },
        success: {
          DEFAULT: '#43A047',
          light: '#81C784',
          dark: '#2E7D32',
        },
        warning: {
          DEFAULT: '#FFA000',
          light: '#FFCA28',
          dark: '#F57C00',
        },
        error: {
          DEFAULT: '#E53935',
          light: '#EF5350',
          dark: '#C62828',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};