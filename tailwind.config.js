/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
theme: {
                extend: {
                    colors: {
                        primary: "#FF6B4A", // Matching the orange from the screenshot/prompt
                        "background-light": "#FAFAFA",
                        "background-dark": "#111111",
                        "surface-light": "#FFFFFF",
                        "surface-dark": "#1E1E1E",
                        "text-light": "#1A1A1A",
                        "text-dark": "#EDEDED",
                        "text-muted-light": "#666666",
                        "text-muted-dark": "#A3A3A3",
                    },
                    fontFamily: {
                        sans: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.75rem",
                        'xl': "1rem",
                        '2xl': "1.5rem",
                    },
                    boxShadow: {
                        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                        'glow': '0 0 20px rgba(255, 107, 74, 0.3)',
                        'card': '0 10px 40px -10px rgba(0,0,0,0.08)',
                    }
                },
            },
  plugins: [],
};
