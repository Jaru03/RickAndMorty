/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'card-rickandmorty': '#062226',
        'pricipal' : '#05292E',
        'text-lime': '#7dbc24'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    },
    plugins: [],
  } 
}