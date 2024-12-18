/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E5A1C',
        secondary: '#D4AF37',
        accent: '#E8F3E5',
        success: '#4A8C3B',
        danger: '#DC3545',
      },
    },
  },
  plugins: [],
}
