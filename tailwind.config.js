/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".glassCard": {
          width: "1200px",
          height: "800px",
          backdropFilter: "blur(20px)",
          padding: "32px",
          borderRadius: "24px",
          position: "absolute",
          top: "50px",
          left: "50%",
          transform: "translate(-50%,0)"
        },
        ".glassCardLight": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 80px rgba(0, 0, 0, 0.1)",
        },
        ".glassCardDark": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          border: "2px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 0 80px rgba(255, 255, 255, 0.1)",
        },
        ".inputListLight input[type=radio]+label,.inputListDark input[type=radio]:checked+label": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 80px rgba(0, 0, 0, 0.1)",
        },
        ".inputListLight input[type=radio]:checked+label,.inputListDark input[type=radio]+label": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          border: "2px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 0 80px rgba(255, 255, 255, 0.1)",
        },
      });
    },
  ],
  darkMode: 'class'
}

