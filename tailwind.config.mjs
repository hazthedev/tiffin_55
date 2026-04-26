/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1715',
        'coal-brown': '#2A2320',
        bone: '#F4EDE0',
        cream: '#EDE4D3',
        copper: '#C5642D',
        'mustard-gold': '#D9A441',
        'concrete-grey': '#5C5650',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        marquee: 'marquee 60s linear infinite',
        'bounce-soft': 'bounceSoft 4s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px) rotate(-2deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
