/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1B1B28',   // Koyu Lacivert / Siyah Ton
          red: '#E0020E',    // Ana Kırmızı
          pink: '#ED6C73',   // Açık Kırmızı / Pembe Ton
          nude: '#DAB9BC',   // Açık Pembe / Nude Ton
          gray: '#838388',   // Gri (Metin & İkincil Öğeler)
          white: '#FDFDFD',  // Beyaz
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)', 'letter-spacing': '-0.05em', filter: 'blur(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', 'letter-spacing': 'normal', filter: 'blur(0)' },
        }
      }
    },
  },
  plugins: [],
}