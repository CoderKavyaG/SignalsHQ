import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08080B',
        'bg-elevated': '#121218',
        border: '#232329',
        'text-primary': '#F5F0EC',
        'text-muted': '#8C8C96',
        'text-faint': '#55555E',
        'accent-cta': '#F3E3D8',
        'accent-cta-text': '#0B0B0F',
        'brand-purple': '#8B5CF6',
        'brand-pink': '#EC4899',
        'brand-blue': '#6366F1',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
