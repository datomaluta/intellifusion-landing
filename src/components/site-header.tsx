"use client";

import { AnimatePresence, m } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "@/lib/site";
import { Logo } from "./logo";
import { ButtonLink, cn, Container } from "./ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close automatically if the viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/[0.16] transition-colors duration-300",
        // No backdrop-filter while the menu is open: it would stop the menu panel's own blur
        // from reaching the page behind it.
        open ? "bg-[#131116]" : scrolled ? "bg-[#100f12]/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <Container className="flex h-[71px] items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-16 xl:flex">
          <nav aria-label="Main">
            <ul className="font-display text-snow/90 flex items-center gap-8 text-[17px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-8">
            <a
              href="#pricing"
              className="font-display hover:text-brand-text text-base font-bold transition-colors"
            >
              Log In
            </a>
            <ButtonLink href="#pricing" size="md">
              Sign Up
            </ButtonLink>
          </div>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-sm xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="relative block h-3.5 w-[18px]">
            <span
              className={cn(
                "bg-snow absolute left-0 h-[1.5px] w-full transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "bg-snow absolute top-1.5 left-0 h-[1.5px] w-full transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "bg-snow absolute left-0 h-[1.5px] w-full transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <m.div
            id={menuId}
            key="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] xl:hidden"
          >
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute inset-0 cursor-default bg-transparent"
              onClick={close}
            />
            <nav
              aria-label="Mobile"
              className="relative border-b border-white/[0.16] bg-[#100f12]/70 pb-[15px] backdrop-blur-[28px]"
            >
              <Container>
                <ul className="font-display flex flex-col pt-2 text-base leading-none">
                  {navLinks.map((link, index) => (
                    <li key={link.href}>
                      <a
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={link.href}
                        onClick={close}
                        className="hover:text-brand-text block py-[10.5px] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  onClick={close}
                  className="font-display hover:text-brand-text mt-4 block py-[10.5px] text-base leading-none transition-colors"
                >
                  Log In
                </a>
                <ButtonLink href="#pricing" onClick={close} className="mt-2 h-[38px] text-base">
                  Sign Up
                </ButtonLink>
              </Container>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
