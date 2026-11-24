/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme variables mapped to CSS custom properties
        surface: {
          light: '#F7F7F2',
          'light-card': '#FFFFFF',
          'light-muted': '#EFEFEA',
          dark: '#080B19',
          'dark-card': '#111526',
          'dark-muted': '#192038',
        },
        sage: {
          DEFAULT: '#A8BE91',
          50: '#F4F7F1',
          100: '#E6EFE1',
          200: '#D0E1C5',
          300: '#B8D3A8',
          400: '#A8BE91',
          500: '#8DA674',
          600: '#6E8557',
        },
        limeBio: {
          DEFAULT: '#D5F27A',
          neon: '#C9F66D',
        },
        tealBio: {
          DEFAULT: '#63B7AA',
          cyan: '#69E4DB',
          deep: '#4F9DCA',
        },
        charcoal: {
          DEFAULT: '#181A18',
          text: '#181A18',
          muted: '#777C78',
        },
        midnight: {
          DEFAULT: '#080B19',
          card: '#111526',
          border: '#1E2538',
          text: '#F2F3F1',
          muted: '#A7ADBF',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Space Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
