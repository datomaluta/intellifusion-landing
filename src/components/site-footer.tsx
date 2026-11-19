import { navLinks } from "@/lib/site";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";
import { Container } from "./ui";

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookies Settings", href: "#cookies" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.16]">
      <Container className="pt-8 pb-[46px] lg:pt-20 lg:pb-[78px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo className="gap-4 [&_span]:text-[22.5px]" markClassName="size-8" />
            <nav aria-label="Footer" className="mt-[30px] lg:mt-6">
              <ul className="font-display flex flex-col gap-4 text-base lg:flex-row lg:gap-8 lg:text-[17px]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-brand-text transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.18] pt-5 text-sm lg:mt-[54px] lg:flex-row lg:items-center lg:justify-between lg:pt-[33px]">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-[34px]">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-brand-text underline underline-offset-4 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-snow">
            &copy; {year} IntelliFusion. All rights reserved.{" "}
            <span className="text-muted">
              Design by{" "}
              <a
                href="https://www.figma.com/community/file/1437972491862974036/saas-website-landing-page"
                className="hover:text-brand-text underline underline-offset-4"
                rel="noopener"
                target="_blank"
              >
                Zanubio
              </a>
              .
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
