import type { Config } from 'tailwindcss';

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
      none: '0px',
      DEFAULT: 'calc(var(--radius))',
      sm: 'calc(var(--radius) - 0.5rem)',
      md: 'calc(var(--radius) - 0.25rem)',
      lg: 'calc(var(--radius) + 0.25rem)',
      xl: 'calc(var(--radius) + 0.5rem)',
      full: '100vmax',
    },

    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-background))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        text: {
          DEFAULT: 'hsl(var(--text))',
          muted: 'hsl(var(--text-muted))',
        },
        footer: 'hsl(var(--footer))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        inputFocus: 'hsl(var(--input-focus))',
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

      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--reka-accordion-content-height)',
          },
        },

        'accordion-up': {
          from: {
            height: 'var(--reka-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },

        'caret-blink': {
          '0%,70%,100%': {
            opacity: '1',
          },

          '20%,50%': {
            opacity: '0',
          },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',

        'accordion-up': 'accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',

        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },

  plugins: [],
};
