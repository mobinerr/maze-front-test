import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './error.vue',
    './app.vue',
  ],

  theme: {
    container: {
      center: true,

      screens: {
        DEFAULT: '1380px',
      },

      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
    },

    borderRadius: {
      none: '0',
      sm: 'calc(var(--radius) - 4px)',
      DEFAULT: 'var(--radius)',
      md: 'calc(var(--radius) + 2px)',
      lg: 'calc(var(--radius) + 4px)',
      full: '9999px',
    },

    extend: {
      colors: {
        // Compelete Later Based on Figma Design System
      },

      fontFamily: {
        sans: ['var(--font-sans)'],
      },

      lineHeight: {
        heading: '1.7',
        paragraph: '2',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
        1000: '1000ms',
      },

      zIndex: {
        header: '100',
        drawer: '200',
        modal: '300',
      },

      boxShadow: {
        card: '0 6px 24px rgba(15,23,42,.08)',
        dropdown: '0 8px 30px rgba(15,23,42,.12)',
      },
    },
  },

  plugins: [],
}
