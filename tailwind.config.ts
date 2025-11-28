import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coslat: {
          blue: "#06B9CE",
          yellow: "#FECF01",
          dark: "#471D20",
          light: "#57934E",
          accent: "#E16482",
        },
      },
      fontFamily: {
        title: ["Dahlia", "Georgia", "serif"],
        pixel: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        serif: ["Georgia", "serif"],
      },
      backgroundImage: {
        'pixel-pattern': "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300158F' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1v1H5zM0 5h1v1H0z'/%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
};
export default config;
