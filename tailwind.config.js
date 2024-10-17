/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        supera100: ['Supera_100', 'sans-serif'],
        supera200: ['Supera_200', 'sans-serif'],
        supera300: ['Supera_300', 'sans-serif'],
        supera400: ['Supera_400', 'sans-serif'],
        supera500: ['Supera_500', 'sans-serif'],
        supera600: ['Supera_600', 'sans-serif'],
        supera700: ['Supera_700', 'sans-serif'],
        supera800: ['Supera_800', 'sans-serif'],
        supera900: ['Supera_900', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        lexend: ["Lexend Deca", "sans-serif"],
      },
      screens: {
        'xxs': '340px',
        // => @media (min-width: 340px) { ... }

        'bxxs': '380px',
        // => @media (min-width: 380px) { ... }

        'xs': '425px',
        // => @media (min-width: 425px) { ... }

        'cxs': '500px',
        // => @media (min-width: 500px) { ... }

        'bcxs': '591px',
        // => @media (min-width: 500px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'cmd': '888px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1360px',
        // => @media (min-width: 1360px) { ... }

        '3xl': '1441px',
        // => @media (min-width: 1441px) { ... }
      }
    },
  },
  plugins: [],
}