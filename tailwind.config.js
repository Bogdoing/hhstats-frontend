/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        
        ocean : '#2dd4bf',
        
        
        bg: '#ff0000',
        text: '#ff0000',
        acsent: '#ff0000',
        
        bgDark: '#ff0000',
        textDark: '#ff0000',
        acsentDark: '#ff0000',
        

        //

        // myColor: '#ff0000',
        // gray : '#353535',
        // darkGreen : '#3C6E71',
        // wite: '#FFFFFF',
        // milk: '#D9D9D9',
        // darkBlue: '#284B63',

        //

        bgDtfDark: '#161617',
        bgTyDtfDark: '#232324',
        btnBlueDark: '#418af4',
        btnTyBlueDark: '#598fde',
        TxtDark: '#c9cccf',
        //
        bgDtf: '#f2f2f2',
        bgTyDtf: '#ffffff',
        btnBlue: '#0b5dd7',
        btnTyBlue: '#2664bf',
        darkTxt: '#000000'
      },
    },  
  },
  plugins: [
    // require('flowbite/plugin')({
    //   // charts: true,
    // })
  ],
}

