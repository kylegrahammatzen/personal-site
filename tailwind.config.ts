import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)'
      },
      fontFamily: {
        sans: ['var(--font-metro-sans)']
      },
    },
  },
  darkMode: 'class',
  plugins: []
} satisfies Config;
