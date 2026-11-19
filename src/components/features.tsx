import Image from "next/image";
import { Reveal } from "./motion";
import { cardClasses, cn, Container, SectionHeading } from "./ui";

const features = [
  {
    icon: "/images/icon-analytics.svg",
    title: "Insightful Analytics",
    text: "Live dashboards bring every channel into one view. Filter by segment, region or campaign and see what really drives revenue.",
  },
  {
    icon: "/images/icon-automate.svg",
    title: "Automate Tasks",
    text: "Build workflows with drag and drop. Reports, alerts and hand-offs run on schedule, so your team can focus on the decisions.",
  },
  {
    icon: "/images/icon-strategies.svg",
    title: "Data-Backed Strategies",
    text: "Predictive models score every lead and campaign, giving you a clear, evidence-based plan for where to invest next quarter.",
  },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title">
      <Container className="pt-[66px] lg:pt-[91px]">
        <Reveal>
          <SectionHeading id="features-title" className="lg:text-center">
            Everything You Need to Scale
          </SectionHeading>
        </Reveal>
        <ul className="mt-[31px] grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {features.map((feature, index) => (
            <Reveal
              as="li"
              key={feature.title}
              delay={index * 0.1}
              className={cn(cardClasses, "p-4 lg:px-[46px] lg:pt-8 lg:pb-[33px] lg:text-center")}
            >
              <Image
                src={feature.icon}
                alt=""
                width={64}
                height={64}
                className="size-12 lg:mx-auto lg:size-16"
              />
              <h3 className="font-display mt-4 text-lg leading-tight font-bold lg:mt-[35px] lg:text-[25px] lg:leading-none">
                {feature.title}
              </h3>
              <p className="text-muted mt-1.5 text-sm leading-[1.36] lg:mt-2.5 lg:leading-[1.55]">
                {feature.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
