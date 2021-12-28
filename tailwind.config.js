module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
        barlowCondesed: ['Barlow Condensed', 'sans-serif'],
        barlowSemiCondesed: ['Barlow Semi Condensed', 'sans-serif']
      },
      colors: {
        'blackSmooth': '#0B0D17',
        'gray': '#D0D6F9',
      },
      screens: {
        'tablet': '768px',
        'desktop' : '1000px'
      },
    },
  },
  plugins: [],
}
