module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_99: "#ffffff99",
          A700_ab: "#ffffffab",
          A700: "#ffffff",
        },
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_66": "#00000066",
          "900_00": "#00000000",
          "900_0c": "#0000000c",
          "900_33": "#00000033",
          "900_19": "#00000019",
        },
        cyan: {
          900: "#135f76",
          "900_33": "#135f7633",
          "900_ab": "#135f76ab",
          "900_19": "#135f7619",
          "900_0c": "#135f760c",
          "900_7f": "#135f767f",
        },
        red: { 600: "#e04243", A700: "#fc040a" },
        gray: {
          50: "#f8f8f8",
          100: "#f2f2f6",
          300: "#dedde4",
          500: "#9a9a9a",
          600: "#6d6d6e",
          700: "#5d5a6f",
          900: "#0a033c",
          "700_99": "#5d5a6f99",
          "600_01": "#7f8284",
          "900_00": "#0a023c00",
        },
        green: { "300_19": "#91ba8319" },
        teal: { 300: "#4890a6", 900: "#0a3b49", A700: "#00b59b" },
        blue_gray: {
          100: "#d9d9d9",
          400: "#828fa2",
          800: "#3e4756",
          900: "#2d2d2d",
          "800_01": "#36414f",
        },
        deep_orange: { 300: "#ff8b6a", 400: "#ff6652" },
        indigo: { 50: "#e2e8ed" },
        orange: { 200: "#eebc74" },
      },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs2: "0px 4px  120px 0px #91ba8319",
        bs1: "0px 4px  120px 0px #0000000c",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000000,#6d6d6e,#00000000)",
        gradient1: "linear-gradient(180deg ,#0a023c00,#0a033c,#0a023c00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};