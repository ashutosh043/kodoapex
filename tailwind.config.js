/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
       colors:{
        'orange':'#49c5b6',
        'white':'#FFF',
        'blue':'#005fab',
        'slate':'#ffffff1a',
       }
     },

     screens: {
      sm:'480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },

     fontSize:{
        lg_h1:'50px',
        md_h1:'40px',
        sm_h1:'30px',
        sm: '0.8rem',
       base: '1rem',
       xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
     }
  },
 
  plugins: [
    require('@tailwindcss/forms')
  ],
}

