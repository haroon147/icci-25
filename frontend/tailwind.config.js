/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0b2e4d',
          dark: '#0a2642',
          light: '#1a3d5c',
        },
        accent: {
          DEFAULT: '#FDB813',
          dark: '#e6a612',
          light: '#ffc947',
        },
        text: {
          primary: '#000000',
          secondary: '#555555',
          muted: '#666666',
        },
        background: {
          light: '#f8f9fa',
          white: '#ffffff',
        }
      },
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }], // 60px
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }], // 36px
        'subheading': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }], // 24px
        'body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'small': ['0.875rem', { lineHeight: '1.4', fontWeight: '300' }], // 14px
      },
      spacing: {
        'section': '5rem', // 80px
        'section-lg': '7.5rem', // 120px
      },
      maxWidth: {
        'container': '1140px',
        'container-lg': '1200px',
      }
    },
  },
  plugins: [],
};
