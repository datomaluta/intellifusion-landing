import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./ui";

// Fictional customer brands. The design used "logoipsum" placeholders; these keep the same
// look (muted icon + wordmark) and match the companies quoted in the testimonials.

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="size-10 shrink-0" fill="currentColor">
      {children}
    </svg>
  );
}

function Northwind() {
  return (
    <span className="flex items-center gap-3 text-[30px] leading-none font-semibold tracking-[-0.03em]">
      <Icon>
        <path d="M20 2 27 20 20 38 13 20Z" fillOpacity="0.45" />
        <path d="M20 2 27 20H13Z" />
      </Icon>
      Northwind
    </span>
  );
}

function Kestrel() {
  return (
    <span className="flex items-center gap-3 text-2xl leading-none font-bold tracking-[0.12em]">
      <Icon>
        <path d="M2 12 20 24 38 12 30 30 20 24 10 30Z" />
      </Icon>
      KESTREL
    </span>
  );
}

function LumenLabs() {
  return (
    <span className="flex items-center gap-3 text-[30px] leading-none font-bold tracking-[-0.03em]">
      <Image src="/images/brand-ring.svg" alt="" width={42} height={40} className="h-10 w-auto" />
      Lumen Labs
    </span>
  );
}

function Fieldstone() {
  return (
    <span className="flex items-center gap-[11px]">
      <Icon>
        <path d="M20 2 36 11v18L20 38 4 29V11Z" fillOpacity="0.45" />
        <path d="M20 11 28 15.5v9L20 29l-8-4.5v-9Z" />
      </Icon>
      <span className="text-xl leading-[17px] font-semibold tracking-[-0.03em]">
        field
        <br />
        stone
      </span>
    </span>
  );
}

function Orbitly() {
  return (
    <span className="flex items-center gap-2 text-[32px] leading-none font-bold tracking-[-0.04em]">
      <Image src="/images/brand-globe.svg" alt="" width={42} height={40} className="h-10 w-auto" />
      orbitly
    </span>
  );
}

function Haven() {
  return (
    <span className="flex items-center gap-3 text-[30px] leading-none font-semibold tracking-[-0.02em]">
      <Icon>
        <path d="M4 38V18a16 16 0 0 1 32 0v20h-9V20a7 7 0 0 0-14 0v18Z" />
      </Icon>
      Haven
    </span>
  );
}

const logos = [
  { name: "Northwind", Logo: Northwind },
  { name: "Kestrel", Logo: Kestrel },
  { name: "Lumen Labs", Logo: LumenLabs },
  { name: "Fieldstone", Logo: Fieldstone },
  { name: "Orbitly", Logo: Orbitly },
  { name: "Haven", Logo: Haven },
];

export function LogoCloud() {
  return (
    <section aria-label="Companies using IntelliFusion" className="hidden md:block">
      <Container className="pt-24">
        <ul className="font-display text-snow/50 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 xl:justify-between xl:gap-0">
          {logos.map(({ name, Logo }, index) => (
            <li
              key={name}
              className={
                index === 3 ? "hidden lg:block" : index > 3 ? "hidden xl:block" : undefined
              }
            >
              <Logo />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
