const gray = {
  100: '#eeeeee',
  200: '#e0e0e0',
  300: '#bbbbbb',
  400: '#666666',
  500: '#444444',
  650: '#333',
  600: '#2a2a2a',
  700: '#1f1f1f',
  800: '#181818',
  900: '#0f0f0f',
}
const brand = {
  100: '#c5ffff',
  200: '#c5ffff',
  300: '#9fffff',
  400: '#65ffff',
  500: '#2480B4',
  600: '#3880B4',
  700: '#1c80B4',
  800: '#1080B4',
  900: '#1080B4',
}

const blueGray = {
  50: '#F8FAFC',
  100: '#F1F5F9',
  200: '#E2E8F0',
  300: '#CBD5E1',
  400: '#94A3B8',
  500: '#64748B',
  600: '#475569',
  700: '#334155',
  800: '#1E293B',
  900: '#0F172A',
}

const coolGray = {
  50: '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
}

module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  darkMode: 'class',
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: '#f0f2f5',
      // note: default border not working
      // temp workaround is to use variations below
      lightmode: '#f0f2f5',
      darkmode: theme('colors.gray.600', 'currentColor'),
    }),
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
          },
        },
      }),
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',

        gray: { ...gray },
        brand: { ...brand },
        blueGray: { ...blueGray },
        coolGray: { ...coolGray },

        dark: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },

        'secondary-text': {
          light: '#71767F',
          dark: '#878787',
        },

        brand: {
          50: '#82ffff',
          100: '#82ffff',
          200: '#69ffff',
          300: '#50ffff',
          400: '#C5ffff',
          500: '#9Fffff',
          600: '#65ffff',
          700: '#3Effff',
          800: '#2480B4', // green-500 in dashboard
          900: '#2c80B4',
        },

        /* 
          typography
        */
        'typography-body': {
          light: coolGray[600],
          dark: gray[100],
        },
        'typography-body-secondary': {
          light: coolGray[500],
          dark: gray[100],
        },
        'typography-body-strong': {
          light: coolGray[100],
          dark: 'white',
        },
        'typography-body-faded': {
          light: coolGray[400],
          dark: gray[100],
        },

        /* 
          app backgrounds
        */
        'bg-primary': {
          light: 'white',
          dark: gray[800],
        },
        'bg-secondary': {
          light: blueGray[100],
          dark: gray[700],
        },
        'bg-alt': {
          light: blueGray[50], // gray[100],
          dark: gray[600],
        },

        /* 
          Forms
        */
        'input-value': {
          light: coolGray[600],
          dark: gray[100],
        },
        'input-placeholder': {
          light: coolGray[300],
          dark: gray[400],
        },
        'input-border': {
          light: coolGray[300],
          dark: gray[500],
        },
        'input-label': {
          light: coolGray[100],
          dark: gray[100],
        },
        'input-border-hover': {
          light: coolGray[400],
          dark: gray[400],
        },
        'input-border-focus': {
          light: brand[300],
          dark: brand[300],
        },
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
