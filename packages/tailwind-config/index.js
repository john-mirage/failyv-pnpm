import defaultTheme from "tailwindcss/defaultTheme";

const pxToRem = (px) => {
  if (typeof px === "number") {
    return `${String(px / 16)}rem`;
  }
  throw new Error("The pixels value must be a number");
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "hover-device": { raw: "(hover: hover)" },
    },
    colors: {
      "primary": "#6EE7B7",
      "on-primary": "#022C22",
    },
    spacing: {
      0: "0px",
      1: pxToRem(1),
      2: pxToRem(2),
      4: pxToRem(4),
      6: pxToRem(6),
      8: pxToRem(8),
      10: pxToRem(10),
      12: pxToRem(12),
      14: pxToRem(14),
      16: pxToRem(16),
      20: pxToRem(20),
      24: pxToRem(24),
      28: pxToRem(28),
      32: pxToRem(32),
      36: pxToRem(36),
      40: pxToRem(40),
      44: pxToRem(44),
      48: pxToRem(48),
      52: pxToRem(52),
      56: pxToRem(56),
      60: pxToRem(60),
      64: pxToRem(64),
      68: pxToRem(68),
      72: pxToRem(72),
      76: pxToRem(76),
      80: pxToRem(80),
      84: pxToRem(84),
      88: pxToRem(88),
      92: pxToRem(92),
      96: pxToRem(96),
      128: pxToRem(128),
    },
    borderRadius: {
      4: pxToRem(4),
    },
    fontSize: {
      "label-lg": [
        pxToRem(14),
        {
          lineHeight: pxToRem(24),
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button: "0 0 0 6px hsla(0, 0%, 100%, 10%)",
      },
    },
  },
  plugins: [],
};
