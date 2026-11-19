"use client";

import { AnimatePresence, m } from "motion/react";
import { useId, useRef, useState, type FormEvent } from "react";
import { cn } from "./ui";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(value: string): string | null {
  const email = value.trim();
  if (!email) return "Please enter your email address.";
  if (!EMAIL_PATTERN.test(email))
    return "Please enter a valid email address, like name@company.com.";
  return null;
}

// There is no backend: this stands in for a request to a newsletter provider.
function fakeSubscribe(email: string) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      // Lets reviewers see the failure state: any address on example.com is "rejected".
      if (email.toLowerCase().endsWith("@example.com")) reject(new Error("rejected"));
      else resolve();
    }, 900),
  );
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const messageId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      setStatus("error");
      inputRef.current?.focus();
      return;
    }

    setError(null);
    setStatus("submitting");
    try {
      await fakeSubscribe(email.trim());
      setStatus("success");
      setEmail("");
    } catch {
      setError(
        "We couldn't subscribe this address right now. Please try another email or try again later.",
      );
      setStatus("error");
    }
  }

  const invalid = status === "error";

  return (
    <form
      id="subscribe"
      noValidate
      onSubmit={handleSubmit}
      className="w-full max-w-[402px] scroll-mt-32"
    >
      <h2 className="font-display text-base font-bold">Subscribe</h2>
      <p className="sr-only">Get product news and analytics tips once a month.</p>
      <div className="mt-[18px] flex flex-col gap-3 sm:flex-row sm:gap-[14px]">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          ref={inputRef}
          id={inputId}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "submitting") setStatus("idle");
          }}
          aria-invalid={invalid}
          aria-describedby={messageId}
          disabled={status === "submitting"}
          className={cn(
            "text-snow placeholder:text-snow/45 focus-visible:border-brand-text focus-visible:ring-brand-text/40 h-[50px] min-w-0 flex-1 rounded-[2px] border bg-transparent px-3 text-base transition-colors focus:outline-none focus-visible:ring-2 disabled:opacity-60",
            invalid ? "border-[#ff7a7a]" : "border-white/30",
          )}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-brand font-display inline-flex h-[50px] min-w-[129px] items-center justify-center gap-2 rounded-[2px] px-6 text-base font-bold text-white transition-[filter] hover:brightness-115 disabled:cursor-wait"
        >
          {status === "submitting" ? (
            <>
              <span
                aria-hidden="true"
                className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
              <span>Sending</span>
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>

      <div id={messageId} aria-live="polite" className="mt-[17px] min-h-5 text-xs">
        <AnimatePresence mode="wait" initial={false}>
          {status === "success" ? (
            <m.p
              key="success"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-[#7ee2a8]"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4 shrink-0 fill-current">
                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1.1-5.3 5-5-1.1-1.1-3.9 3.9-1.7-1.7-1.1 1.1 2.8 2.8Z" />
              </svg>
              Thanks! Please check your inbox to confirm your subscription.
            </m.p>
          ) : invalid && error ? (
            <m.p
              key="error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[#ff9a9a]"
            >
              {error}
            </m.p>
          ) : (
            <m.p key="note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              By subscribing you agree to our{" "}
              <a href="#privacy" className="hover:text-brand-text underline underline-offset-2">
                Privacy Policy
              </a>
            </m.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
