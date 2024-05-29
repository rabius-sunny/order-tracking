import type { Config } from 'tailwindcss'
import colors, { black } from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#722ed1',
      white: colors.white,
      black: colors.black,
      danger: colors.red[500]
    }
  },
  plugins: []
}
export default config
