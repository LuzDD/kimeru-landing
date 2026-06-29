import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kimeru: {
          'verde-profundo': '#2D4640',
          'verde-claro':    '#B4CE87',
          'naranja':        '#EE751F',
          'amarillo':       '#FDC20F',
          'azul-cielo':     '#6AC8EB',
          'rojo':           '#FF2C41',
          'negro':          '#040505',
          'blanco':         '#FFFFFF',
        },
      },
      fontFamily: {
        kimeru: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
