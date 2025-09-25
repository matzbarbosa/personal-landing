module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 3.5s steps(9, end) forwards, blink .75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '9ch' }, // Adjust based on the width of "Developer"
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'currentColor' },
        },
      },
    },
  },
  plugins: [],
}