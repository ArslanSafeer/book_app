/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                urdu: ['Noto Nastaliq Urdu', 'serif'],
              },
        },
    },
    plugins: [require("daisyui")],
};