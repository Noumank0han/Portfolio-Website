/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function ({ addUtilities }){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  darkMode:"class",
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        'big': '32rem',
        'vbig': '45rem',
      },
  
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      }
    },
    fontFamily:{
      Nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [Myclass],
}
