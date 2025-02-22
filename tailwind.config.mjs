/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#18222f",
        page: "#f5f5f5",
        card: "#fff",
        "card-hover": "#f9f9f9",
        "default-text": "#333",
        "blue-accent": "#0070f3",
        "blue-accent-hover": "#0058c7",
      },
    },
  },
  plugins: [],
};
