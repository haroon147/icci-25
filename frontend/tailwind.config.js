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
          primary: '#111827',
          secondary: '#4b5563',
          muted: '#6b7280',
        },
        background: {
          light: '#f8f9fa',
          white: '#ffffff',
        }
      },
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }], // 60px
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.015em' }], // 36px
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
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(11, 46, 77, 0.07), 0 1px 2px rgba(11, 46, 77, 0.05)',
        'soft-md': '0 8px 24px rgba(11, 46, 77, 0.10), 0 2px 8px rgba(11, 46, 77, 0.06)',
        'soft-lg': '0 20px 45px rgba(11, 46, 77, 0.16), 0 8px 18px rgba(11, 46, 77, 0.08)',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
