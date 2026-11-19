export const site = {
  name: "IntelliFusion",
  title: "IntelliFusion — Intelligent Insights for Agile Enterprises",
  description:
    "IntelliFusion unifies your sales, marketing and product data, forecasts what happens next and automates the busywork, so your team can make data-driven decisions faster.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://intellifusion-landing.vercel.app",
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
] as const;
