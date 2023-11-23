import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      fontFamily: {
        heebo: ['var(--font-heebo)', 'monospace'],
      },
    boxShadow : {
      'button' : '8px 0px 68px 7px rgba(106, 90, 205, 0.4)'
    }
    },
  },
  plugins: [],
}
export default config
