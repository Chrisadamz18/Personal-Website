import Link from "next/link";
import { site } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function BeyondCode() {
  return (
    <section id="beyond" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollAnimate className="max-w-3xl">
          <p className="text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-4">Beyond Code</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            The things that inspire me outside of work
          </h2>
          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed text-base">
            When I&apos;m not writing code or designing, you&apos;ll find me in the kitchen experimenting with new recipes cooking is my favorite way to unwind and get creative off-screen. I also love to <strong className="text-[var(--foreground)]">travel</strong> and immerse myself in different cultures, cuisines, and perspectives that shape how I think about design and problem-solving. Community is at the heart of everything I do whether it&apos;s mentoring emerging creators, volunteering, or simply connecting with people who share a passion for building and learning together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {/* <a
              href={site.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
            >
              Read Insights on Medium
            </a> */}
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
