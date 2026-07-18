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
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        danger: {
          DEFAULT: 'hsl(var(--danger))',
          foreground: 'hsl(var(--danger-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--brand-foreground))',
        },
        neutral: {
          DEFAULT: 'hsl(var(--neutral))',
          foreground: 'hsl(var(--neutral-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        inputFocus: 'hsl(var(--input-focus))',
        ring: 'hsl(var(--ring))',
        hover: 'hsl(var(--hover))',
        footer: 'hsl(var(--footer))',
        footerRights: 'hsl(var(--hover-rights))',
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
};
