import Image from "next/image";
import { Reveal } from "./motion";
import { ButtonLink, cn, Container, SectionHeading } from "./ui";

export function Benefits() {
  return (
    <section id="benefits" aria-label="Benefits">
      <Container className="flex flex-col gap-16 pt-[70px] lg:gap-16 lg:pt-[192px]">
        <Row
          image={{
            src: "/images/buyer-behaviour-card.svg",
            alt: "Buyer behaviour analysis with a segment donut chart and three buyer personas",
            width: 584,
            height: 453,
          }}
          title="Stay Ahead of Your Competition with Predictive Insights"
          text="Machine-learning forecasts show which segments are growing, which customers are about to churn and where your next opportunity is."
          imageFirst
        />
        <Row
          image={{
            src: "/images/task-automation-card.svg",
            alt: "Task automation flow chaining buyer research, ad budget and ad script steps",
            width: 584,
            height: 466,
          }}
          title="Automate Mundane Tasks With Drag & Drop Platform"
          text="Chain research, budgeting and copywriting tasks into a single flow. Each step runs on its own and hands off to the next one."
          cta
        />
      </Container>
    </section>
  );
}

type RowProps = {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  text: string;
  imageFirst?: boolean;
  cta?: boolean;
};

function Row({ image, title, text, imageFirst, cta }: RowProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:gap-16",
        imageFirst
          ? "lg:grid-cols-[minmax(0,538fr)_minmax(0,710fr)]"
          : "lg:grid-cols-[minmax(0,710fr)_minmax(0,538fr)]",
      )}
    >
      <Reveal className={cn("relative", imageFirst ? "order-2 lg:order-1" : "order-2")}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="-m-[4.3%] h-auto w-[108.6%] max-w-none"
        />
      </Reveal>
      <Reveal className={imageFirst ? "order-1 lg:order-2" : "order-1"}>
        <SectionHeading>{title}</SectionHeading>
        <p className="text-muted mt-3 text-sm leading-[1.57] lg:mt-2 lg:text-lg lg:leading-[1.64]">
          {text}
        </p>
        {cta && (
          <ButtonLink href="#pricing" className="mt-7 lg:mt-[34px]">
            Start Now
          </ButtonLink>
        )}
      </Reveal>
    </div>
  );
}
