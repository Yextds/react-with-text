module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      red: "#d61a0c",
      blue: "#10106a",
      light_black: "#252525",
      footer_bg: "#4d4e53",
      dark_black: "#3f4044",
      facebook: "#45619d",
      light: "#fafafa",
      green: "#348B31",
    },

    fontFamily: {
      raleway: ['"Raleway", Georgia, Arial, sans-serif'],
      bebas_neue: ['"Bebas Neue", Georgia, Arial, sans-serif'],
    },
    extend: {
      backgroundImage: {
        logo: "url('images/logo.png')",
        "icon-app-store-apple": "url('images/icon-app-store-apple.png')",
        "icon-app-store-android": "url('images/icon-app-store-android.png')",
      },
    },
  },
  plugins: [],
};
