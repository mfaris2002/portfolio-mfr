/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        contrast: '#050505',
        accent: '#3b82f6',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
