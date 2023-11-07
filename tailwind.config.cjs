/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ['./src/**/*.{ts,tsx}', './index.html', './src/main.tsx'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // corePlugins: {
  //   preflight: false,
  // }
}
