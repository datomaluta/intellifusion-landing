"use client";

import { useState } from "react";
import { Reveal } from "./motion";
import { ButtonLink, cardClasses, cn, Container, SectionHeading } from "./ui";

type Billing = "monthly" | "yearly";

const plans = [
  {
    name: "Basic Plan",
    price: { monthly: 24, yearly: 19 },
    features: ["Up to 3 team members", "10 data sources", "Weekly forecast reports"],
  },
  {
    name: "Pro Plan",
    price: { monthly: 36, yearly: 29 },
    popular: true,
    features: [
      "Up to 15 team members",
      "Unlimited data sources",
      "Daily predictive insights",
      "Drag & drop automations",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: { monthly: 61, yearly: 49 },
    features: [
      "Unlimited team members",
      "Custom forecasting models",
      "SSO and audit logs",
      "Dedicated success manager",
      "99.9% uptime SLA",
    ],
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative">
      <Container className="pt-16 lg:pt-[196px]">
        <Reveal className="lg:text-center">
          <SectionHeading id="pricing-title">Supercharge Your Analytics</SectionHeading>
          <p className="text-muted mx-auto mt-3 max-w-[640px] text-sm leading-[1.57] lg:mt-2 lg:text-lg lg:leading-[1.64]">
            Start free for 14 days. Pick the plan that fits your team today, then upgrade, downgrade
            or cancel at any time.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex lg:mt-[63px] lg:justify-center">
          <BillingToggle value={billing} onChange={setBilling} />
        </Reveal>

        <ul className="mt-8 grid gap-4 md:mx-auto md:max-w-xl lg:mt-[94px] lg:max-w-none lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {plans.map((plan, index) => (
            <Reveal
              as="li"
              key={plan.name}
              delay={index * 0.1}
              className={cn(
                cardClasses,
                "flex flex-col px-[32px] pt-[30px] pb-[31px] lg:p-8",
                plan.popular && "border-brand/80 lg:-my-7",
              )}
            >
              <h3 className="font-display flex items-center gap-4 text-[17px] leading-none font-semibold lg:text-[25px]">
                {plan.name}
                {plan.popular && (
                  <span className="from-brand to-brand-deep rounded-full bg-linear-to-r px-3 py-1.5 font-sans text-[10px] leading-none lg:px-[17px] lg:py-[7px] lg:text-xs">
                    Popular
                  </span>
                )}
              </h3>
              <p className="font-display mt-5 leading-none font-bold lg:mt-[21px]">
                <span className="text-[30px] lg:text-[56px]">${plan.price[billing]}</span>
                <span className="text-2xl lg:text-[28px]">/mo</span>
                <span className="sr-only">
                  {billing === "yearly" ? ", billed yearly" : ", billed monthly"}
                </span>
              </p>
              <ul className="mt-[42px] mb-[42px] space-y-5 text-sm lg:mt-[45px] lg:mb-[51px] lg:space-y-[15px] lg:text-lg">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-[19px] lg:gap-[21px]">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#subscribe"
                variant={plan.popular ? "primary" : "outline"}
                className="mt-auto w-full"
              >
                Try for Free
              </ButtonLink>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function BillingToggle({
  value,
  onChange,
}: {
  value: Billing;
  onChange: (value: Billing) => void;
}) {
  const options: Array<{ value: Billing; label: string }> = [
    { value: "monthly", label: "Monthly Billing" },
    { value: "yearly", label: "Yearly Billing" },
  ];

  return (
    <fieldset className="flex w-full rounded-[4px] border border-white/30 bg-[#141315]/80 p-[7px] lg:flex lg:w-auto lg:gap-1 lg:p-[9px]">
      <legend className="sr-only">Billing period</legend>
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            "has-focus-visible:outline-brand-text flex h-[38px] flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-[4px] px-3 text-sm whitespace-nowrap transition-colors has-focus-visible:outline-2 lg:h-9 lg:flex-none lg:gap-[18px] lg:px-[22px] lg:text-[15px]",
            value === option.value ? "text-snow bg-[#1c1d1d]" : "text-snow/90 hover:text-snow",
          )}
        >
          <input
            type="radio"
            name="billing"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only"
          />
          {option.label}
          {option.value === "yearly" && (
            <span className="from-brand to-brand-deep rounded-full bg-linear-to-r px-2.5 py-1 font-sans text-[10px] leading-none lg:px-[11px] lg:py-1.5 lg:text-xs">
              -20%
            </span>
          )}
        </label>
      ))}
    </fieldset>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5 shrink-0 lg:size-6">
      <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}
