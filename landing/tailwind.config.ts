import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {

            fontFamily: {
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
            },

            colors: {
                back: "#ffffff",
                white: "#ffffff",
                black: "#1a1a1a",
                brand: {
                    DEFAULT: "#cf3130",
                    back: "#f3c7c7"
                },
                blue: {
                    DEFAULT: "#133a62",
                    back: "#afcfdb"
                },
                orange: {
                    DEFAULT: "#cd8401",
                    back: "#ffefd4"
                },
                brown: {
                    DEFAULT: "#83704d",
                    back: "#dbc293"
                },
                red: "#fb1c0a",
                success: "#c5e1c7",
                error: "#fb3858",
            }
        },
    },
    plugins: [],
};

export default config;