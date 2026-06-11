export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 25px 80px rgba(34, 89, 255, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 25%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.1), transparent 20%)',
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floatUp: 'floatUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
};
