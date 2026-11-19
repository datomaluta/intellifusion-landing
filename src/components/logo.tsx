import { cn } from "./ui";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <path d="M12 19.98v3.99a11.94 11.94 0 0 1-7.98-3.05v3.05H.03V12h3.99a7.98 7.98 0 0 0 7.98 7.98ZM23.97.03V12h-3.99a7.98 7.98 0 0 0-7.98-7.98V.03a11.94 11.94 0 0 1 7.98 3.05V.03h3.99Z" />
      <circle cx="12" cy="12" r="3.99" />
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <a
      href="#top"
      className={cn("font-display text-snow inline-flex items-center gap-4", className)}
    >
      <LogoMark className={markClassName} />
      <span className="text-[17px] leading-none font-medium">IntelliFusion</span>
    </a>
  );
}
