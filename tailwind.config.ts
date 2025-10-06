import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add other paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode for theme toggling
};

export default config;