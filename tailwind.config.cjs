const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0px',
      DEFAULT: '5px',
      lg: '10px',
      full: '9999px'
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px', // 30
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px'
    },
    boxShadow: {
      DEFAULT: '0 4px 15px rgba(0, 0, 0, 0.1)',
      shifted: '4px 4px 15px rgba(0, 0, 0, 0.1)',
      none: 'none'
    },
    dropShadow: {
      DEFAULT: '0 4px 15px rgba(0, 0, 0, 0.1)',
      shifted: '4px 4px 15px rgba(0, 0, 0, 0.1)',
      none: 'none'
    },
    extend: {
      colors: {
        primary: {
          50: '#e3eef8',
          100: '#c6ddf0',
          200: '#8ebae1',
          300: '#5598d2',
          400: '#2f75b2',
          500: '#20507a',
          600: '#194061',
          700: '#133049',
          800: '#0d2030',
          900: '#061018'
        },
        success: {
          50: '#eff6e9',
          100: '#e1efd7',
          200: '#c3deb0',
          300: '#a5ce88',
          400: '#84bc5d',
          500: '#69a042',
          600: '#537e34',
          700: '#406128',
          800: '#2b411b',
          900: '#15200d'
        }
      },
      fontFamily: {
        brand: ['Museo Sans Cyrl', ...defaultTheme.fontFamily.sans],
        display: ['Rodeo', ...defaultTheme.fontFamily.serif]
      },
      minHeight: defaultTheme.height,
      minWidth: defaultTheme.width,
      maxWidth: defaultTheme.width,
      lineHeight: {
        tighter: 1.2,
        tightest: 1.15
      }
    }
  },
  corePlugins: { container: false },
  plugins: []
}
