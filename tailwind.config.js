/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#ffffff',
        panel: '#f5f2ee',
        line: '#e4dfd8',
        bone: '#1a1816',
        mute: '#6b645c',
        ember: '#d9743a',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: { fadeUp: 'fadeUp .6s ease both' },
    },
  },
  plugins: [],
}
