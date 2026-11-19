import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#1B2430", paper: "#F5F6F2", teal: { DEFAULT: "#0E5A60", soft: "#DCE8E6" }, sun: "#F0B33E", mute: "#5B6672" },
      fontFamily: { display: ["var(--font-display)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
