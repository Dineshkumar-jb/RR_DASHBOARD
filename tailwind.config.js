/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#050B18',
          subtle: '#081022',
          surface: '#0B1630',
          elevated: '#101F42',
        },
        navy: {
          900: '#060E1F',
          800: '#0B1630',
          700: '#112247',
          600: '#1B3264',
          500: '#264585',
        },
        royal: {
          blue: '#071B45',
          'blue-light': '#0D2D73',
          pink: '#E90074',
          'pink-hover': '#FF1A8C',
          'pink-subtle': 'rgba(233, 0, 116, 0.12)',
          'pink-glow': 'rgba(233, 0, 116, 0.25)',
          gold: '#E5A93C',
          cyan: '#00D2FF',
          emerald: '#10B981',
          rose: '#F43F5E',
        },
        text: {
          primary: '#F7F8FC',
          secondary: '#A7B2C5',
          tertiary: '#6B7A99',
          muted: '#4A5568',
        },
        glass: {
          surface: 'rgba(11, 22, 48, 0.65)',
          border: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(16, 31, 66, 0.5)',
          active: 'rgba(233, 0, 116, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'pink-glow': '0 0 20px -2px rgba(233, 0, 116, 0.4)',
        'blue-glow': '0 0 25px -3px rgba(7, 27, 69, 0.6)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
