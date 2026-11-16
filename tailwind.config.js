/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#111722',
          800: '#17202f',
          700: '#233044',
          600: '#334155',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        accent: {
          DEFAULT: '#0284c7', // Precision tech blue
          hover: '#0369a1',
          subtle: '#e0f2fe',
          dark: '#075985',
        },
        copper: {
          DEFAULT: '#c2410c',
          hover: '#9a3412',
          subtle: '#ffedd5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
      }
    },
  },
  plugins: [],
}
