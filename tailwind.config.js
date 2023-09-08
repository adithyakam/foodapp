/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0 15px 40px -20px rgba(40, 44, 63, 0.15)",
      },
    },
  },
  plugins: [],
};
