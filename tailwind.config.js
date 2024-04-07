/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans'],
        dancingscript: ["Dancing Script", 'cursive']

      },
      colors:{
        'dark-txt': "#202624",
        "light-green": "#ECF3EF",
        "hero-txt": "#202624",
        "bright-yellow": "#F6D067",
        "dark-green": "#63B676"
      },
      screens: {
        "tablet": '900px'
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
      backgroundImage:{
        'hero-small': "url('/src/assets/images/boys-small.png')"
      }
    },
  },
  plugins: [],
}