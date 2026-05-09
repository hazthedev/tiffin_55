/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Legacy aliases (mapped to new palette so untouched files still render)
        charcoal: '#0E1430',
        'coal-brown': '#1c3aa9',
        bone: '#fff5e1',
        cream: '#fff5e1',
        copper: '#f6c343',
        'mustard-gold': '#f6c343',
        'concrete-grey': '#c9c9c9',
        // New retro-futuristic palette
        chrome: '#c9c9c9',
        turmeric: '#f6c343',
        chili: '#d83d2c',
        cobalt: '#1c3aa9',
        cardamom: '#6b8e4e',
        'cream-paper': '#fff5e1',
        'ink-blue': '#0E1430',
      },
      fontFamily: {
        display: ['Bungee', '"Monoton"', 'system-ui', 'sans-serif'],
        sign: ['Monoton', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        accent: ['"Caveat"', 'cursive'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'slide-up': 'slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        marquee: 'marquee 38s linear infinite',
        'marquee-rev': 'marqueeRev 44s linear infinite',
        'bounce-soft': 'bounceSoft 4s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'chrome-sweep': 'chromeSweep 2.4s ease-in-out infinite',
        'pop-in': 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(28px) scale(0.96)' },
          '60%': { opacity: '1', transform: 'translateY(-4px) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        chromeSweep: {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.7) rotate(-6deg)' },
          '70%': { opacity: '1', transform: 'scale(1.08) rotate(2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0)' },
        },
      },
      boxShadow: {
        'block-cobalt': '6px 6px 0 0 #1c3aa9',
        'block-chili': '6px 6px 0 0 #d83d2c',
        'block-ink': '6px 6px 0 0 #0E1430',
        'chrome-rim': 'inset 0 0 0 2px #c9c9c9, 0 6px 18px rgba(14,20,48,0.35)',
      },
    },
  },
  plugins: [],
};
