/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F8FAFC',
          alt: '#F1F5F9',
          ice: '#F0F8FA',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          ice: '#EDF7F9',
          card: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#034665',
          dark: '#013150',
          light: '#0a6e90',
        },
        teal: {
          DEFAULT: '#0A8FB6',
          light: '#61BBC5',
          soft: '#E6F6F8',
          subtle: '#F0F9FB',
        },
        navy: {
          DEFAULT: '#0D3D5A',
          dark: '#04121F',
          muted: '#2D4F68',
        },
        accent: {
          DEFAULT: '#0A8FB6',
          glow: 'rgba(10, 143, 182, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'card-light': '0 4px 20px rgba(3, 70, 101, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 12px 36px rgba(3, 70, 101, 0.12), 0 2px 6px rgba(10, 143, 182, 0.06)',
        'btn-light': '0 4px 14px rgba(3, 70, 101, 0.2)',
        'btn-teal': '0 4px 18px rgba(10, 143, 182, 0.28)',
        'nav-light': '0 2px 16px rgba(3, 70, 101, 0.06)',
        'glass-light': '0 8px 32px rgba(10, 143, 182, 0.08)',
      },
      backgroundImage: {
        'kevalon-gradient': 'linear-gradient(137deg, #0A8FB6 0%, #034665 100%)',
        'kevalon-gradient-hover': 'linear-gradient(137deg, #034665 0%, #0A8FB6 100%)',
        'kevalon-hero-light': 'linear-gradient(180deg, #F0F8FA 0%, #F8FAFC 100%)',
        'kevalon-ice-light': 'linear-gradient(135deg, #F4FBFC 0%, #EDF7F9 50%, #E8F5F8 100%)',
        'radial-light-teal': 'radial-gradient(circle at 50% 0%, rgba(10, 143, 182, 0.12) 0%, transparent 65%)',
      },
    },
  },
  plugins: [],
};
