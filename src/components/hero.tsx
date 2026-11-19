import { preload } from "react-dom";
import { CardArt } from "./card-art";
import { ButtonLink, Container } from "./ui";

// The hero chart is the LCP element on phones. Its SVG uses blur filters that are slow
// to rasterise on low-end CPUs, so it ships as pre-rendered WebP in three widths instead.
const heroCard = {
  src: "/images/sales-volume-card-720.webp",
  srcSet:
    "/images/sales-volume-card-720.webp 720w, /images/sales-volume-card-1080.webp 1080w, /images/sales-volume-card-1440.webp 1440w",
  sizes: "(min-width: 1440px) 720px, (min-width: 1024px) 50vw, 100vw",
};

export function Hero() {
  preload(heroCard.src, {
    as: "image",
    imageSrcSet: heroCard.srcSet,
    imageSizes: heroCard.sizes,
    fetchPriority: "high",
  });

  return (
    <section aria-labelledby="hero-title" className="relative">
      <Container className="grid items-center gap-[70px] pt-[34px] lg:grid-cols-[559fr_673fr] lg:gap-12 lg:pt-[100px] xl:gap-20">
        <div className="lg:order-2">
          <CardArt
            canvas={{ width: 720, height: 479 }}
            panels={[{ x: 23, y: 19, width: 674, height: 433 }]}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, responsive srcset is hand-made */}
            <img
              {...heroCard}
              alt="Sales volume analysis chart showing seasonal peaks for summer sales and Black Friday"
              width={720}
              height={479}
              fetchPriority="high"
              decoding="async"
            />
          </CardArt>
        </div>

        <div className="lg:order-1">
          <h1
            id="hero-title"
            className="font-display text-[33px] leading-[1.15] font-bold sm:text-[44px] xl:text-[56px] xl:leading-[64px]"
          >
            Intelligent Insights for Agile Enterprises
          </h1>
          <p className="text-muted mt-2 max-w-[560px] text-base leading-[1.625] lg:mt-2.5 lg:text-[22px] lg:leading-[1.6]">
            Unify sales, marketing and product data in one place. Spot trends early, forecast demand
            and act on insights before your competitors do.
          </p>
          <div className="mt-[30px] flex flex-col items-start gap-[22px] sm:flex-row sm:items-center sm:gap-8 lg:mt-[30px]">
            <ButtonLink href="#pricing">Start Now</ButtonLink>
            <SocialProof />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialProof() {
  return (
    <p className="font-display text-snow flex items-center gap-[11px] text-[14px] sm:gap-4">
      <span aria-hidden="true" className="flex">
        {["#d9d9d9", "#d9d9d9", "#d9d9d9"].map((color, index) => (
          <span
            key={index}
            className="border-ink -ml-3 size-[30px] rounded-full border-[3px] first:ml-0"
            style={{ backgroundColor: color }}
          />
        ))}
      </span>
      <span>
        <strong className="font-bold">1000+</strong> Satisfied Companies
      </span>
    </p>
  );
}
