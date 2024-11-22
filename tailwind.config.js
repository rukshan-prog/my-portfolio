/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandcolor: '#5b5b5b', // Replace with your desired shade of violet
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif' ],
        'serif': ['Roboto', 'serif'],
        'mono': ['Roboto', 'monospace'],
      },
      border: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
      fontSize: {
        xs: ['0.75rem', '1rem'], // 12px font size, 16px line height
        sm: ['0.875rem', '1.25rem'], // 14px font size, 20px line height
        base: ['1rem', '1.5rem'], // 16px font size, 24px line height
        lg: ['1.125rem', '1.75rem'], // 18px font size, 28px line height
        xl: ['1.25rem', '1.75rem'], // 20px font size, 28px line height
        '2xl': ['1.5rem', '2rem'], // 24px font size, 32px line height
        '3xl': ['1.875rem', '2.25rem'], // 30px font size, 36px line height
        '4xl': ['2.25rem', '2.5rem'], // 36px font size, 40px line height
        '5xl': ['3rem', '1'], // 48px font size, normal line height
        '6xl': ['3.75rem', '1'], // 60px font size, normal line height
        '7xl': ['4.5rem', '1'], // 72px font size, normal line height
        '8xl': ['6rem', '1'], // 96px font size, normal line height
        '9xl': ['8rem', '1'], // 128px font size, normal line height
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.icon-style': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px',
          borderRadius: '12px', // Slightly rounded corners
          transition: 'background-color 0.3s, transform 0.3s',
          cursor: 'pointer',
        },
        '.icon-style:hover': {
          backgroundColor: 'rgb(0,0,0)', // Violet background on hover
          color: 'white', // White text or icon color on hover
          transform: 'scale(1.0)', // Slightly enlarge on hover
        },
        '.btn-style': {
          color: 'black', // White text or icon color
          padding: '8px 16px', // 8px padding on top and bottom, 16px on left and right
          borderRadius: '12px', // Slightly rounded corners
          transition: 'background-color 0.3s, transform 0.3s',
          cursor: 'pointer',
        },
        '.btn-style:hover': {
          backgroundColor: 'rgb(0,0,0)', // Violet background on hover
          color: 'white', // White text or icon color on hover
          transform: 'scale(1.0)', // Slightly enlarge on hover
        },
        '.btn-style:active': {
          backgroundColor: 'rgb(0,0,0)', // Violet background on hover
          color: 'white', // White text or icon color on hover
          transform: 'scale(1.0)', // Slightly enlarge on hover
        },
        '.border-default': {
          border: '3px solid black',
          borderRadius: '12px',
        }
      });
    },
  ],
}

