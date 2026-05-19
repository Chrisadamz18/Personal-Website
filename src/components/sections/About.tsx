import { experience, education } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        {/* Personal Biography */}
        <ScrollAnimate duration={0.5} className="max-w-3xl mb-20">
          <p className="text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            Building scalable digital systems for emerging markets and global innovation
          </h2>
          <div className="mt-8 space-y-6 text-[var(--muted-foreground)] leading-relaxed text-base">
            <p>
              I am a multidisciplinary Product Designer and Systems Engineer who acts as a strategic tech partner for high-growth startups and global product teams. I bridge the critical gap between pixel-perfect design systems, low-bandwidth UX architectures, and full-stack technical execution. My path took an unyielding, positive turn in November 2023 when I lost my left arm—I chose to meet that physical milestone with absolute resilience, translating that focus into a rigorous discipline for clean architecture, uncompromising product execution, and unbending grit.
            </p>
            <p>
              Today, I am architecting the digital footprint for <strong className="text-[var(--foreground)]">Bloom Health</strong>, a reproductive healthcare platform engineered for emerging markets, and building <strong className="text-[var(--foreground)]">Agave Rural Bank</strong>, a micro-payments and rural banking portal. Through <strong className="text-[var(--foreground)]">KM Media Training Institute</strong>, I engineer educational platforms and run dynamic product sprints with <strong className="text-[var(--foreground)]">MEST Africa</strong> and <strong className="text-[var(--foreground)]">Node Eight</strong>.
            </p>
            <p>
              I operate with a founder&apos;s mindset. Whether designing high-converting layout templates, engineering custom educational databases, or consulting on financial inclusion platforms—I design and build digital ecosystems engineered for performance, real-world constraints, and business outcomes.
            </p>
          </div>
        </ScrollAnimate>

        {/* Experience & Growth Grid */}
        <div className="grid lg:grid-cols-2 gap-16 border-t border-[var(--border)] pt-20">
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-[var(--accent)] block" />
              Work History
            </h3>
            <ul className="space-y-10 relative border-l border-[var(--border)] pl-6 md:pl-8">
              {experience.map((job, i) => (
                <li
                  key={`${job.company}-${job.period}`}
                  className="relative"
                >
                  <span className="absolute -left-[30.5px] md:-left-[38.5px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)] z-10" />
                  <ScrollAnimate
                    xOffset={-12}
                    yOffset={0}
                    delay={i * 0.06}
                    duration={0.35}
                  >
                    <p className="text-base font-bold text-[var(--foreground)]">{job.role}</p>
                    <p className="text-sm font-semibold text-[var(--accent)]">{job.company}</p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">{job.period}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted-foreground)] list-disc list-inside">
                      {job.highlights.map((h) => (
                        <li key={h} className="leading-relaxed">{h}</li>
                      ))}
                    </ul>
                  </ScrollAnimate>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-[var(--accent)] block" />
              Education & Training
            </h3>
            <ul className="space-y-8">
              {education.map((ed, i) => (
                <li
                  key={`${ed.org}-${ed.year}`}
                >
                  <ScrollAnimate
                    yOffset={8}
                    delay={i * 0.05}
                    duration={0.35}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="font-bold text-[var(--foreground)]">{ed.title}</p>
                    <p className="text-sm font-semibold text-[var(--accent)]">{ed.org} · {ed.year}</p>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{ed.description}</p>
                  </ScrollAnimate>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
