/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',

        'gray-100': '#E1E1E6',
        'gray-300': '#C4C4CC',
        'gray-400': '#8D8D99',
        'gray-500': '#7C7C8A',
        'gray-600': '#323238',
        'gray-700': '#29292E',
        'gray-800': '#202024',
        'gray-900': '#121214',

        'green-light': '#00B37E',
        green: '#00875F',
        'green-dark': '#015F43',

        red: '#F75A68',
        'red-dark': '#AA2834'
      }
    }
  },
  plugins: []
}
