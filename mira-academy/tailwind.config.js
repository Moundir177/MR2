/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-roboto)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-amiri)', 'serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        // Unique color palette for MIRA ACADEMY
        'secondary': {
          50: '#FFF8F0',
          100: '#FFE3CC',
          200: '#FFD2A8',
          300: '#FFC284',
          400: '#FFB160',
          500: '#FF953C', // Secondary brand color
          600: '#FF7A18',
          700: '#F56000',
          800: '#CC4D00',
          900: '#A33D00',
        },
        'accent': {
          50: '#F6F0FF',
          100: '#EAD9FF',
          200: '#D5B3FF',
          300: '#BF8DFF',
          400: '#AA66FF',
          500: '#9540FF', // Accent color
          600: '#801AFF',
          700: '#6600E0',
          800: '#5000AA',
          900: '#390075',
        },
        'neutral': {
          50: '#F7F7F9',
          100: '#E3E3E9',
          200: '#C8C8D4',
          300: '#ADADBF',
          400: '#9292AA',
          500: '#77778F', // Neutral color
          600: '#5C5C75',
          700: '#46465A',
          800: '#303040',
          900: '#1A1A25',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#4f46e5',
              '&:hover': {
                color: '#4338ca',
              },
            },
            '.font-arabic': {
              fontFamily: 'var(--font-amiri), serif',
              direction: 'rtl',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}; 