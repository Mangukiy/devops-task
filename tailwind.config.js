/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: '#141516',
        gray: '#979797',
        'light-gray': '#D9D9D9',
        'dark-gray': '#2A2A2A',
        'main-bg': '#F9F5F5',
        'dark-gray2': '#5F5F5F',
        // light: '#F6FFF8',
        purple: '#210040',
        purple3: '#210040',
        'odds-red': '#F5DAD7',
        'odds-blue': '#E7EEF8',
        light: '#FBF6FF',
        'table-green': '#BEFFBE',
        green2: '#01B11A',
        blue: '#2E70E8',
        'dark-green': '#356D28',
        'red-text': '#FF1616',
        brown: '#804100',
        'dark-blue': '#000080',
        pink: '#F246A2',
        'green-shade': '#837800',
        'grayish-blue': '#67727E',
        'light-purple': '#66269E',
        'odd-pink': {
          100: '#FDD4DD',
          300: '#FBBFCB',
          500: '#FAA9BA',
        },
        'odd-blue': {
          100: '#B9DDF7',
          300: '#95CCF3',
          500: '#72BBEF',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: 0,
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: 0,
          },
        },
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        'fade-out': {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        'slide-in-from-top': {
          from: {
            transform: 'translateY(-100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        'slide-in-from-bottom': {
          from: {
            transform: 'translateY(100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        'slide-in-from-left': {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        'slide-in-from-right': {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-out',
        'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
        'slide-in-from-left': 'slide-in-from-left 0.3s ease-out',
        'slide-in-from-right': 'slide-in-from-right 0.3s ease-out',
      },
      fontFamily: {
        poppins: ['Poppins'],
        rokkit: ['Rokkitt', 'serif'],
      },
      backgroundImage: {
        'purple-gradient':
          'linear-gradient(178.66deg, #E6BAFF 1%, #4C0089 89.83%),linear-gradient(178.66deg, color(display-p3 0.875 0.737 1.000) 1%, color(display-p3 0.271 0.000 0.514) 89.83%)',
        'purple-gradient-light':
          'linear-gradient(171.43deg, rgba(230, 186, 255, 0.98) 5.73%, rgba(76, 0, 137, 0.98) 153.92%), linear-gradient(171.43deg, color(display-p3 0.875 0.737 1.000 / 0.98) 5.73%, color(display-p3 0.271 0.000 0.514 / 0.98) 153.92%)',
      },
      boxShadow: {
        'white-shadow': '0px 0px 4px 0px #F6FFF8',
        'black-shadow': '1px 2px 1px 0px #000000',
        'green-shadow': '0px 0px 7px 0px #07DC24',
        'black-shadow2': '0px 0px 6px 0px #00000040',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
