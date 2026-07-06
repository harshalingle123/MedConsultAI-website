import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F7FF",
          100: "#E0EFFE",
          200: "#BADFFD",
          300: "#7CC5FB",
          400: "#36A6F6",
          500: "#0C8CE9",
          600: "#006FC7",
          700: "#0159A1",
          800: "#064C85",
          900: "#0B406E",
          950: "#07294A",
        },
        accent: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        ink: {
          50: "#F6F8FB",
          100: "#EDF1F7",
          200: "#D9E1EC",
          300: "#B7C4D6",
          400: "#8B9DB8",
          500: "#64789A",
          600: "#4A5D7E",
          700: "#394A67",
          800: "#243450",
          900: "#12203A",
          950: "#0A1428",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        body: "rgb(var(--text-body) / <alpha-value>)",
        heading: "rgb(var(--text-heading) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(18 32 58 / 0.05)",
        "card-hover": "0 15px 30px -10px rgb(18 32 58 / 0.12)",
        lift: "0 24px 48px -16px rgb(18 32 58 / 0.16)",
        glass: "0 8px 32px rgb(11 64 110 / 0.10)",
        glow: "0 2px 12px rgb(18 32 58 / 0.28)",
        "glow-primary": "0 8px 24px -6px rgb(12 140 233 / 0.40)",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "3.5xl": "1.75rem",
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(24px, -20px) scale(1.06)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        typing: {
          "0%": { opacity: "0.2", transform: "translateY(0)" },
          "30%": { opacity: "1", transform: "translateY(-3px)" },
          "60%, 100%": { opacity: "0.2", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
