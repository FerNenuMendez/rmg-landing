/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hero': "url('/src/assets/bg-hero.svg')",
      },
      colors: {
        text: '#140d0d',
        background: '#FAF9F6',
        darkbg: '#1d1c1c',        
        primary: '#a60827',
        secondary: '#487030',
        accent: '#bacc67',
        gold: '#FFD700',
        darkgold: "#B69D74",
      },
      fontFamily: {        
        roboto: ['Roboto', 'sans-serif'],
        slab: ['Roboto Slab Variable', 'serif']        
      },
    },
  },
  plugins: [],
};
