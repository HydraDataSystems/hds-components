/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{ts,tsx}', './index.html', './src/main.tsx'],
  safelist: [
    {
      pattern: /^(bg|text|border|ring)-(gray|green|blue|orange|red)-(100|300|600|800)/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /^ring-(gray|green|blue|orange|red)-600\/20/,
    },
    {
      pattern: /^(outline|outline-2|outline-transparent)/,
    },
    {
      pattern: /^(bg-red-600|text-white)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        green: colors.green,
        blue: colors.blue,
        orange: colors.orange,
        red: colors.red,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}