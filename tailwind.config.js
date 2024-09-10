/** @type {import('tailwindcss').Config} */
export default {
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
