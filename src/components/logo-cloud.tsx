import Image from "next/image";
import { Container } from "./ui";

function Globe() {
  return (
    <Image src="/images/brand-globe.svg" alt="" width={42} height={40} className="h-10 w-auto" />
  );
}

function StackedLogo() {
  return (
    <span className="flex items-center gap-[11px]">
      <Globe />
      <span className="text-[20px] leading-[17px] font-semibold tracking-[-0.03em]">
        logo—
        <br />
        ipsum<span className="relative -top-2 text-[8px]">™</span>
      </span>
    </span>
  );
}

function SplitLogo() {
  return (
    <span className="flex items-center gap-1.5 text-[34px] leading-none font-semibold tracking-[-0.03em]">
      logo
      <Globe />
      <span>
        ipsum<span className="relative -top-4 text-[10px]">™</span>
      </span>
    </span>
  );
}

function RingLogo() {
  return (
    <span className="flex items-center gap-3 text-[34px] leading-none font-bold tracking-[-0.03em]">
      <Image src="/images/brand-ring.svg" alt="" width={42} height={40} className="h-10 w-auto" />
      Logoipsum
    </span>
  );
}

const logos = [StackedLogo, SplitLogo, RingLogo, StackedLogo, SplitLogo, StackedLogo];

export function LogoCloud() {
  return (
    <section aria-label="Trusted by" className="hidden md:block">
      <Container className="pt-24">
        <ul className="font-display text-snow/50 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 xl:justify-between xl:gap-0">
          {logos.map((Logo, index) => (
            <li key={index} className={index > 3 ? "hidden lg:block" : undefined}>
              <Logo />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
