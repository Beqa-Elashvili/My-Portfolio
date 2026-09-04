/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0b0f19",
          raised: "#111827",
          card: "#151c2c",
          border: "#1e293b",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          muted: "#4f46e5",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.15), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(15,23,42,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.12)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
