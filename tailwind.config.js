/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#131C1B',
        surface: '#19302E',
        primary: '#DCFF78',
        accent: '#DCFF78',
        muted: '#6B8C87',
        border: 'rgba(220,255,120,0.10)',
        danger: '#EF4444',
        dark: '#131C1B',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Geist"', 'sans-serif'],
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        logo: ['"Scrib Sans"', '"Cabinet Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 24px rgba(220, 255, 120, 0.25)',
        'glow-sm': '0 0 12px rgba(220, 255, 120, 0.15)',
        'glow-lg': '0 0 40px rgba(220, 255, 120, 0.30)',
      },
    },
  },
  plugins: [],
}
