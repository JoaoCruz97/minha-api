/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                offwhite: "#FAF9F6",
                branco: "#FFFFFF",
                pretosuave: "#222222",
                cinza: "#777777",
                begeclaro: "#EDE8E0",
                dourado: "#B69A67",
            },
            fontFamily: {
                serif: ["Cormorant Garamond", "Playfair Display", "serif"],
                sans: ["Inter", "Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
}
