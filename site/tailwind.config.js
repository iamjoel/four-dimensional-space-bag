/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [ // 一定会加载的类名。无视 css Purge
    'w-6',
    'h-6'
  ],
  plugins: [],
}
