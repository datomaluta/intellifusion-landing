import { Benefits } from "@/components/benefits";
import { Cta } from "@/components/cta";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { LogoCloud } from "@/components/logo-cloud";
import { Pricing } from "@/components/pricing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
import { Glow, GridLines } from "@/components/ui";

export default function Home() {
  return (
    <div id="top" className="relative isolate overflow-clip">
      <a
        href="#main"
        className="bg-brand sr-only z-[60] rounded-sm px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Glow className="-top-[420px] -left-[520px] size-[1300px]" strength={0.42} />
      <SiteHeader />
      <main id="main" className="relative">
        <GridLines />
        <Hero />
        <LogoCloud />
        <div className="relative">
          <Glow className="top-[10%] -left-[20%] h-[900px] w-[1100px]" strength={0.12} />
          <Glow className="top-[38%] -right-[560px] size-[1200px]" strength={0.34} />
          <Features />
          <Benefits />
        </div>
        <HowItWorks />
        <div className="relative">
          <Glow className="-top-[420px] -left-[640px] size-[1300px]" strength={0.32} />
          <Pricing />
        </div>
        <Testimonials />
        <div className="relative">
          <Glow
            className="-bottom-[520px] left-1/2 h-[900px] w-[1200px] -translate-x-1/2"
            strength={0.4}
          />
          <Cta />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
