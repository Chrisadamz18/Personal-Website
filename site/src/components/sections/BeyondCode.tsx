import Link from "next/link";
import { site } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function BeyondCode() {
  return (
    <section id="beyond" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollAnimate className="max-w-3xl">
          <p className="text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-4">Beyond Code & Design</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            Ecosystem leadership, community growth, and global vision
          </h2>
          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed text-base">
            I don&apos;t just build technical products—I invest in the communities that catalyze local design and technology ecosystems. Through <strong className="text-[var(--foreground)]">DesignHive</strong>, I lead design chapters across West Africa to empower, mentor, and inspire emerging digital creators. By training developers at <strong className="text-[var(--foreground)]">Node Eight</strong> and facilitating hands-on product design programs with <strong className="text-[var(--foreground)]">MEST Africa</strong>, my mission is to elevate technical talent, build digital trust, and drive sustainable innovation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
            >
              Read Insights on Medium
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-black hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
