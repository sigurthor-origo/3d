module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/views/**/*.tsx",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#667761",
      secondary: "#545e56",
      tertiary: "#917c78",
      base: "#eae1df",
    },
    extend: {},
  },
  plugins: [],
};
