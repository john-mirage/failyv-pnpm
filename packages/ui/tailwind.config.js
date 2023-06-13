import sharedConfig from "tailwind-config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"],
};
