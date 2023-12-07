import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'core-red': '#B0121A',
        'dark-red': '#630A0E',
        'pink-2': '#FFDAD6',
        salmon: '#FFB4AC',
        'dark-green': '085047',
        'red-brick': '#8C0E14',
        charcoal: '#404040',
        'light-gray': '#404040'
      }
    }
  },
  plugins: []
}
export default config
