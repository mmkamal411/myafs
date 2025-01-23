/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-chat': 'bounce-chat 10s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-chat': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-12px)' },
          '60%': { transform: 'translateY(-8px)' },
        },
      },
      colors: {
        light: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        accent: {
          DEFAULT: '#A100FF',
          50: '#F5E6FF',
          100: '#E6CCFF',
          200: '#D1A3FF',
          300: '#BD7AFF',
          400: '#A952FF',
          500: '#A100FF',
          600: '#8F00E6',
          700: '#7D00CC',
          800: '#6B00B3',
          900: '#590099',
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #A100FF 0%, #7D00CC 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #8F00E6 0%, #6B00B3 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(161, 0, 255, 0.2)',
        'glow-lg': '0 0 30px rgba(161, 0, 255, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  safelist: [
    {
      pattern: /bg-(gray|accent|light)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(gray|accent|light)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
};