/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        // uniSansHeavy: ['Uni Sans Heavy'],
        // uniSansThin: ['Uni Sans Thin'],
        inter: ['Inter-Regular'],
        augeBlack: ['Auge-Trial-Black'],
        augeBold: ['Auge-Trial-Bold'],
        augeExtraBlack: ['Auge-Trial-ExtraBlack'],
        augeExtraBlackItalic: ['Auge-Trial-ExtraBlackItalic'],
        augeLightItalic: ['Auge-Trial-LightItalic'],
        augeLight: ['Auge-Trial-Light'],
        auge: ['Auge-Trial-Regular'],
      },
    },
    screens: {
      'sm': '0px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

