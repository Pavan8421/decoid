/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors : {
        custom_grey:'#787878',
        custom_grey2:'#7f7f7f'
      },
      fontSize : {
        '16':'1rem',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      }
      
    },
  },
  plugins: [],
}

