/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  
  theme: {
    extend: {
      fontFamily:{
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors:{
        customRed: '#B60A08',
        overRed: '#D24545',
        newRed:'#dcdcdc'
      },
    },
  },
  plugins: [],
}

