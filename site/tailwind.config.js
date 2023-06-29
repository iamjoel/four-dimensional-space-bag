/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25: '#F5F8FF',
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#528BFF',
          600: '#1C64F2',
          700: '#1A56DB',
        },
      },
    },
  },
  safelist: [ // 一定会加载的类名。无视 css Purge
    'relative', 'absolute',
    'space-x-1',
    'w-6', 'w-12', 'w-24',
    'h-6', 'h-8',
    'leading-8',
    'px-2',
    'bg-green-500', 'bg-green-600',
    'text-white',
  ],
  plugins: [],
}
