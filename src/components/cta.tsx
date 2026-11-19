import Image from "next/image";
import { Reveal } from "./motion";
import { ButtonLink, cn, Container } from "./ui";

// Positions are taken from the 1440px desktop frame and expressed in % so the
// floating icons keep their composition on any desktop width.
// `order-*` reproduces the order of the single icon row in the mobile frame.
const icons = [
  { src: "/images/cta-pie.svg", position: "order-2 lg:top-0 lg:left-[6.53%]" },
  {
    src: "/images/cta-bulb.svg",
    position: "order-4 lg:top-0 lg:right-[6.53%]",
  },
  {
    src: "/images/cta-aim.svg",
    position: "order-3 lg:top-[363px] lg:left-[27.15%]",
  },
  {
    src: "/images/cta-stat.svg",
    position: "order-1 lg:top-[363px] lg:right-[27.15%]",
  },
];

export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative pt-[70px] lg:pt-[198px]">
      <div className="relative mx-auto max-w-[1440px] lg:h-[652px]">
        <Container className="flex gap-4 lg:contents">
          {icons.map((icon, index) => (
            <Reveal
              key={icon.src}
              delay={0.1 * index}
              className={cn("w-12 lg:absolute lg:w-[13.34%] lg:max-w-48", icon.position)}
            >
              <Image src={icon.src} alt="" width={192} height={192} className="h-auto w-full" />
            </Reveal>
          ))}
        </Container>

        <Container className="relative mt-[38px] lg:mt-0 lg:pt-[31px]">
          <Reveal className="lg:mx-auto lg:max-w-[600px] lg:text-center">
            <h2
              id="cta-title"
              className="font-display text-[24.5px] leading-[1.2] font-bold lg:text-[41px]"
            >
              Ready to Make Data-Driven Decisions?
            </h2>
            <p className="text-muted mt-3 text-sm leading-[1.57] lg:mt-2 lg:text-lg lg:leading-[1.64]">
              Join 1,000+ companies that plan with IntelliFusion. Setup takes minutes and your first
              14 days are completely free.
            </p>
            <ButtonLink href="#pricing" className="mt-7 lg:mt-[30px]">
              Start Now
            </ButtonLink>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
