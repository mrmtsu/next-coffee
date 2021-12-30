module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        kfCover: {
          "0%": { left: 0, right: "100%" },
          "50%": { left: 0, right: 0 },
          "100%": { left: "100%", right: 0 },
        },
        KeyImageShow: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        KeyImage: {
          from: {
            transform: 0,
          },
          to: {
            transform: "-100%",
          },
        },
      },
      animation: {
        kfCover: "kfCover 1.6s ease-in-out",
        keyImageShow: "keyImageShow 1s",
        keyImage: "keyImage 30s infinite linear 1s both",
      },
    },
  },
  plugins: [],
};
