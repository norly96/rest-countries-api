/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
    },
    colors: {
      'primary': {
        light: 'hsl(200, 15%, 8%)',
        dark: 'hsl(0, 0%, 100%)',
      },
      'background': {
        light: 'hsl(0, 0%, 98%)',
        dark: 'hsl(207, 26%, 17%)',
      },
      'element': {
        light: 'hsl(0, 0%, 100%)',
        dark: 'hsl(209, 23%, 22%)',
      },
      'gray': 'hsl(0, 0%, 52%)'
    },
    fontFamily: {
      'nunito': ['Nunito Sans'],
    },
    boxShadow: {
      'sm': '0px -2px 4px',
      'lg' : '0 25px 50px -12px rgb(0 0 0 / 0.25)'
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'lg': '768px',
      'xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
};

/* - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%) xxx
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%) xxx
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%) xxx
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%) xxx
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%) xxx
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%) xxx */
