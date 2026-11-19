import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Metropolis is not on Google Fonts, so it is self-hosted from the
// @fontsource/metropolis package (latin subset, only the weights in use).
export const metropolis = localFont({
  src: [
    { path: "../fonts/metropolis-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/metropolis-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/metropolis-latin-600-normal.woff2", weight: "600" },
    { path: "../fonts/metropolis-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-metropolis",
  display: "swap",
});
