import { cardClasses, cn, Container } from "./ui";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Head of Growth, Northwind",
    quote:
      "We replaced four reporting tools with IntelliFusion. Forecasts that used to take a week now update every morning before our standup.",
  },
  {
    name: "David Okafor",
    role: "VP of Sales, Kestrel",
    quote:
      "The churn predictions alone paid for the subscription in the first month. For the first time, the whole team trusts the numbers.",
  },
  {
    name: "Elena Rossi",
    role: "Marketing Lead, Lumen Labs",
    quote:
      "Setting up automations felt like drawing a flowchart. Our campaign budgets now rebalance themselves based on real results.",
  },
  {
    name: "James Carter",
    role: "COO, Fieldstone",
    quote:
      "Clean dashboards, quick onboarding and a support team that actually answers. It has become the first tab we open every day.",
  },
  {
    name: "Priya Nair",
    role: "Data Analyst, Orbitly",
    quote:
      "I spend far less time cleaning spreadsheets and much more time on real analysis. The data connectors simply work out of the box.",
  },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <figure className={cn(cardClasses, "p-4 lg:p-8", className)}>
      <figcaption className="flex items-center gap-[19px] lg:gap-[22px]">
        <span
          aria-hidden="true"
          className="font-display grid size-[38px] shrink-0 place-items-center rounded-full bg-[#d9d9d9] text-xs font-bold text-[#5b5b5b] lg:size-14 lg:text-base"
        >
          {initials}
        </span>
        <span>
          <span className="font-display text-brand-text block text-base leading-tight font-semibold">
            {testimonial.name}
          </span>
          <span className="text-muted block text-base leading-tight lg:mt-0.5">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
      <blockquote className="text-snow mt-[22px] text-xs leading-[1.45] lg:mt-6 lg:text-sm lg:leading-[1.5]">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="pt-16 lg:pt-[220px]">
      {/* Mobile: the design shows two stacked cards. */}
      <Container className="flex flex-col gap-4 lg:hidden">
        {testimonials.slice(0, 2).map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Container>

      {/* Desktop: an endless, slow marquee. It pauses on hover/focus and stops for reduced motion. */}
      <div className="group hidden overflow-hidden lg:block">
        <div className="animate-marquee flex w-max gap-8 group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex gap-8" aria-hidden={copy === 1 || undefined}>
              {testimonials.map((testimonial) => (
                <li key={testimonial.name} className="w-[414px]">
                  <TestimonialCard testimonial={testimonial} className="h-full" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
