/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      musky: ["Musky"],
      Poppins: ["Poppins"],
      Quicksand: ["Quicksand"],
      Cursive: ["Sacramento"],
    },
    keyframes: {
      wiggle: {
        "0%": { letterSpacing: "1em", filter: "blur(20px)", opacity: "0" },
        "100%": { filter: "blur(0px)", opacity: "1" },
      },
      fadeIn: {
        "0%": { transform: "translateY(50px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
    },
    animation: {
      wiggle: "wiggle 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      fadeIn: "fadeIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    },
  },
  plugins: [],
};
