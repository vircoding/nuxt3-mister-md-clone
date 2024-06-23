/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(242, 243, 247)',
        secondary: 'rgb(153, 165, 184)',
        tertiary: 'rgb(234, 236, 240)',
        'border-accent': 'rgb(229, 231, 235)',
        balance: 'rgb(10, 129, 255)',
        coin: 'rgb(255, 212, 56)',
        hovered: 'rgb(249, 249, 251)',
      },
    },
  },
  plugins: [],
};

