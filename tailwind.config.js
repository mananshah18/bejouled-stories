/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pearl': {
          50: '#fdfbfa',
          100: '#f9f6f3',
          200: '#f5efe9',
          300: '#e9dfd3',
          400: '#d8c7b7',
          500: '#c4ad99',
          600: '#ab917a',
          700: '#8c7561',
          800: '#6d5c4c',
          900: '#4e4237',
        },
        'gold': {
          50: '#fefbea',
          100: '#fdf7d5',
          200: '#fbefaa',
          300: '#f8e27f',
          400: '#f5d454',
          500: '#f1c12a',
          600: '#e0a81e',
          700: '#ba851a',
          800: '#95681c',
          900: '#77541c',
        },
        'rose': {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'sans': ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 