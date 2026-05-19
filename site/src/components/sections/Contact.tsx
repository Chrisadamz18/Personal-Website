"use client";

import { useActionState } from "react";
import { site } from "@/lib/data";
import { submitContactForm } from "@/app/actions";

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    error: null as string | null,
  });

  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--card)]/50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--accent)] mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              Let&apos;s connect
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              Prefer a quick chat? Reach out on WhatsApp or email. I typically reply within 24 hours.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors text-base"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors text-base"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-[var(--muted-foreground)] text-base">{site.location}</li>
            </ul>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity shadow-md shadow-[#25D366]/20"
            >
              WhatsApp — Quick connect
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
            {state.success ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl ring-4 ring-green-500/5">
                  ✓
                </div>
                <p className="text-[var(--foreground)] font-bold text-lg">
                  Thank You!
                </p>
                <p className="text-[var(--muted-foreground)] text-sm mt-2 leading-relaxed">
                  Your message was sent successfully. I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    disabled={isPending}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    disabled={isPending}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can I help?"
                    disabled={isPending}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none transition-all disabled:opacity-50"
                  />
                </div>
                
                {state.error && (
                  <p className="text-red-500 text-xs font-semibold mt-2" role="alert">
                    ⚠️ {state.error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-[var(--accent)] py-3 text-sm font-bold text-black hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isPending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
