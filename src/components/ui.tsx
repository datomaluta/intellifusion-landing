import type { ComponentProps, ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-16", className)}
      {...props}
    />
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6 shrink-0", className)}
    >
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  icon?: boolean;
  children: ReactNode;
};

const buttonBase =
  "group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border font-display font-bold transition-[filter,background-color,color,box-shadow] duration-200";

const buttonVariants = {
  primary:
    "border-[#9a7cc4] bg-linear-to-r from-brand to-brand-deep text-white shadow-[0_0_24px_-8px_rgba(125,91,166,0.7)] hover:brightness-125",
  outline: "border-brand text-brand-text hover:bg-brand/10 hover:text-white",
};

const buttonSizes = {
  md: "h-10 px-4 text-base lg:h-[41px]",
  lg: "h-[38px] px-4 text-sm lg:h-[49px] lg:px-6 lg:text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "lg",
  className,
}: Pick<ButtonProps, "variant" | "size" | "className">) {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);
}

export function ButtonLink({
  variant,
  size,
  icon = true,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props}>
      {children}
      {icon && (
        <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}

export function SectionHeading({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-display text-snow text-[24.5px] leading-[1.2] font-bold lg:text-[41px]",
        className,
      )}
      {...props}
    />
  );
}

/** Dark glassy panel used by every card in the design. */
export const cardClasses =
  "rounded-[4px] border border-white/[0.16] bg-[#111111]/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm";

/** Soft purple light behind a section. Pure CSS gradient, so it costs nothing to paint. */
export function Glow({ className, strength = 0.32 }: { className?: string; strength?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10 rounded-full", className)}
      style={{
        background: `radial-gradient(closest-side, rgba(125, 91, 166, ${strength}), rgba(125, 91, 166, 0))`,
      }}
    />
  );
}

/** The thin vertical guide lines that run behind the whole page in the design. */
export function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[21px] bottom-0 -z-10 lg:top-[29px]"
    >
      <Container className="h-full">
        <div className="relative h-full">
          {["0%", "25%", "50%", "75%", "100%"].map((left, index) => (
            <span
              key={left}
              className={cn(
                "absolute inset-y-0 w-px bg-white/[0.14]",
                index % 2 === 1 && "hidden lg:block",
              )}
              style={{ left: index === 4 ? "calc(100% - 1px)" : left }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
