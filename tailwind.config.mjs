/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1BA0E2',
          foreground: '#FFFFFF',
        },
        secondary: '#FFFFFF',
        accent: '#E6EEFF',
        dark: '#1e2547',
        muted: {
          foreground: '#6B7280',
        },
        brand: '#1BA0E2',
        branddark: '#13709E',
        ink: '#1e2547',
        paper: '#F6F6F3',
        line: '#E3E4DE',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
