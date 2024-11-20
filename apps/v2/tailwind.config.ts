import type { Config } from "tailwindcss";

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '640px',
        '2xl': '1536px',
      },
    },
  },
  
  plugins: [],
} satisfies Config;
