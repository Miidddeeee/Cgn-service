/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',  
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'heroImage': "url('img/heroImage.jpg')",
      },
      colors: {
        "transparenBlue": "rgba(33, 101, 227, 0.799)",
      },
    },
  },
  plugins: [],
}

