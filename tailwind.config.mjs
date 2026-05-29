/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Cores baseadas na identidade visual da Novo Tempo */
        "nt-verde": "#006B75",
        "nt-cinza": "#E5E7EB",
        "nt-cinza-escuro": "#374151",
      },
    },
  },
  plugins: [],
};
