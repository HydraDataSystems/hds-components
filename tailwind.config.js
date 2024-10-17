/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html', './src/main.tsx'],
  safelist: [
    {
      pattern: /^(bg|text|border|ring)-(gray|green|blue|orange|red)-(100|300|600|800)/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /^(outline|outline-2|outline-transparent)/,
    },
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-100': '#f3f4f6',
        'gray-300': '#d1d5db',
        'green-100': '#d1fae5',
        'green-300': '#6ee7b7',
        'blue-100': '#dbeafe',
        'blue-300': '#93c5fd',
        'orange-100': '#ffedd5',
        'orange-300': '#fdba74',
        'red-100': '#fee2e2',
        'red-300': '#fca5a5',
      },
      textColor: {
        'gray-800': '#1f2937',
        'green-800': '#065f46',
        'blue-800': '#1e40af',
        'orange-800': '#9a3412',
        'red-800': '#991b1b',
      },
      borderColor: {
        'gray-300': '#d1d5db',
        'green-300': '#6ee7b7',
        'blue-300': '#93c5fd',
        'orange-300': '#fdba74',
        'red-300': '#fca5a5',
      },
      ringColor: {
        'gray-600': '#4b5563',
        'green-600': '#059669',
        'blue-600': '#2563eb',
        'orange-600': '#ea580c',
        'red-600': '#dc2626',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
