import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foregroun'd)",
        cyan: 'hsl(176, 68%, 64%)',
        cyanBlue: 'hsl(198, 60%, 50%)',
        mainBodyBlue: 'hsl(218, 28%, 13%)',
        navbarBlue: 'hsl(217, 28%, 15%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
