import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { Magnetic } from "@/components/ui/Magnetic";

export default function Home() {
  // Filter for featured projects on the landing page
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="pt-16">
      <Hero />
      <TrustBar />

      {/* Compact Biography Preview */}
      <section className="py-20 md:py-28 border-t border-[var(--border)]">
        <div className="section-container">
          <ScrollAnimate className="max-w-3xl">
            <p className="text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-4">Biography</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              Designing & building high-impact digital systems globally
            </h2>
            <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed text-base">
              I am a multidisciplinary Product Designer and Software Engineer who acts as a strategic tech partner for seed-to-scale startups. After recovering from losing my left arm in November 2023, I chose to translate that personal milestone into absolute engineering grit, specializing in low-bandwidth UX designs and robust transactional systems.
            </p>
            <div className="mt-8">
              <Magnetic>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black hover:opacity-90 transition-opacity"
                >
                  Read My Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Magnetic>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Featured Projects Preview Grid */}
      <section className="py-20 md:py-28 bg-[var(--card)]/50 border-t border-[var(--border)]">
        <div className="section-container">
          <ScrollAnimate className="mb-14">
            <p className="text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-2">Featured Work</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              Impactful digital products built for scale
            </h2>
          </ScrollAnimate>

          <ul className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <li key={project.id}>
                <ScrollAnimate
                  yOffset={16}
                  delay={i * 0.05}
                  duration={0.35}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-[var(--border)]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{project.category}</p>
                      <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">{project.title}</h3>
                      <p className="mt-3 text-sm text-[var(--muted-foreground)] line-clamp-3 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline group/link"
                    >
                      View Case Study
                      <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </Link>
                  </div>
                </ScrollAnimate>
              </li>
            ))}
          </ul>

          <ScrollAnimate className="mt-14 text-center">
            <Magnetic>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-sm font-bold text-[var(--foreground)] hover:bg-[var(--card)] transition-all"
              >
                Explore All Projects
              </Link>
            </Magnetic>
          </ScrollAnimate>
        </div>
      </section>

      <CTA />
    </main>
  );
}
