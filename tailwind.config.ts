import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        'text-mono': 'var(--text-mono)',
        'text-base--small': 'var(--text-base--small)',
        'text-base': 'var(--text-base)',
        'text-base--large': 'var(--text-base--large)',
        'heading-6': 'var(--heading-6)',
        'heading-5': 'var(--heading-5)',
        'heading-4': 'var(--heading-4)',
        'heading-3': 'var(--heading-3)',
        'heading-2': 'var(--heading-2)',
        'heading-1': '50px',
        'heading-display': 'var(--heading-display)',
        'heading-body': 'var(--heading-body)',
        'heading-1--alt': 'var(--heading-1--alt)',
        'text-menu': 'var(--text-menu)',
      },
      padding: {
        'horizontal-main': 'var(--padding-horizontal--main)',
        'v': 'var(--padding-v)',
        'button': 'var(--padding-button)',
        'top-main': 'var(--padding-top--main)',
      },
      spacing: {
        'space-3xs': 'var(--space-3xs)',
        'space-2xs': 'var(--space-2xs)',
        'space-xs': 'var(--space-xs)',
        'space-sm': 'var(--space-sm)',
        'space-md': 'var(--space-md)',
        'space-lg': 'var(--space-lg)',
        'space-xl': 'var(--space-xl)',
        'space-2xl': 'var(--space-2xl)',
        'space-3xl': 'var(--space-3xl)',
        'gap-fluid': 'var(--gap-fluid)',
      },
    },
  },
  plugins: [],
};
export default config;
