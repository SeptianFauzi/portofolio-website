/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#50c1e6",
        secondary: "#929be8",
        linkedIn: "#0077B5",
        github: "#24292E",
        instagram: "#E4405F",
        black: "#101720",
        "primary-2": "#BDDCF4",
        "primary-2-darker": "#2f99eb",
        "primary-3": "#DECFE4",
        "primary-3-darker": "#cc84e8",
        "secondary-2": "#F9F9F9",
        "portfolio-color": {
          "01": "#F2DAE8",
          "02": "#B2D9F2",
          "03": "#DED6E9",
          "04": "#CBBFD4",
          "05": "#F3DBE9",
          "06": "#CCD7EE",
        },
      },
    },
  },
  plugins: [],
};
