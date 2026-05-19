import Link from "next/link";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { Magnetic } from "@/components/ui/Magnetic";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <ScrollAnimate className="section-container">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            Ready to Launch a High-Impact Digital Product?
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed text-base">
            Whether you are a startup founder scoping a mobile-first product, a global team looking for low-bandwidth UX optimization, or an investment group launching in emerging markets—let&apos;s engineer a high-performing solution together.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black hover:opacity-90 transition-opacity"
              >
                Book a Call
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
              >
                Start a Project
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
              >
                Send a Message
              </Link>
            </Magnetic>
          </div>
        </div>
      </ScrollAnimate>
    </section>
  );
}
