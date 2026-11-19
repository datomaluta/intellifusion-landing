import { Reveal } from "./motion";
import { cardClasses, cn, Container, SectionHeading } from "./ui";

const steps = [
  {
    title: "Gather Data",
    text: "Connect your CRM, ad accounts and spreadsheets in a few clicks. We clean, match and merge every record for you automatically.",
  },
  {
    title: "Predict Outcomes",
    text: "Our models learn from your history to forecast revenue, demand and churn, with confidence ranges you can share with the board.",
  },
  {
    title: "Take Action",
    text: "Turn forecasts into tasks, alerts and budgets, then track every result in the same dashboard as the data behind it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title">
      <Container className="pt-16 lg:pt-[186px]">
        <Reveal>
          <SectionHeading id="how-title" className="lg:text-center">
            Turn Data into Decisions
          </SectionHeading>
        </Reveal>
        <ol className="mt-[31px] grid gap-4 md:grid-cols-3 md:gap-8 lg:mt-16 xl:gap-[145px]">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.12}
              className={cn(
                cardClasses,
                "relative p-4 lg:px-8 lg:pt-8 lg:pb-[33px] lg:text-center",
              )}
            >
              <span
                aria-hidden="true"
                className="font-display text-brand-text grid size-12 place-items-center rounded-[4px] border border-white/[0.06] bg-white/[0.04] text-2xl font-bold shadow-[inset_0_0_16px_rgba(125,91,166,0.25)] [text-shadow:0_0_12px_rgba(150,119,194,0.8)] lg:mx-auto lg:size-16 lg:text-[28px]"
              >
                {index + 1}
              </span>
              <h3 className="font-display mt-4 text-lg leading-tight font-bold lg:mt-[35px] lg:text-[22px] lg:leading-none xl:text-[25px]">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="text-muted mt-1.5 text-sm leading-[1.36] lg:mt-2.5 lg:leading-[1.55]">
                {step.text}
              </p>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="border-brand absolute top-[142px] -right-[137px] hidden w-[129px] border-t-2 border-dashed xl:block"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
