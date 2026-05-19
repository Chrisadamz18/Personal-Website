import Image from "next/image";
import Link from "next/link";
import { projects, services } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { GlowCard } from "@/components/ui/GlowCard";
import { Magnetic } from "@/components/ui/Magnetic";
import { QRCodePopover } from "@/components/ui/QRCodePopover";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[var(--card)]/50">
      <div className="section-container">
        
        {/* Capabilities (Services) Sub-section */}
        <ScrollAnimate className="mb-14">
          <p className="text-sm font-medium text-[var(--accent)] mb-2">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            Outcomes-focused services, not just a skill list
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl text-base leading-relaxed">
            I focus on business outcomes: who it&apos;s for, what core problem it solves, and what changes for your organization.
          </p>
        </ScrollAnimate>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <li key={service.title} className="h-full">
              <ScrollAnimate
                yOffset={16}
                delay={i * 0.05}
                duration={0.35}
                className="h-full"
              >
                <GlowCard className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--foreground)]">{service.title}</h3>
                    <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-6 border-t border-[var(--border)] pt-4 space-y-1">
                    <p className="text-xs text-[var(--muted-foreground)]">
                      <span className="font-semibold text-[var(--foreground)]">For:</span> {service.for}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      <span className="font-semibold text-[var(--foreground)]">Outcome:</span> {service.outcome}
                    </p>
                  </div>
                </GlowCard>
              </ScrollAnimate>
            </li>
          ))}
        </ul>

        {/* Case Studies (Projects) Sub-section */}
        <ScrollAnimate className="mb-14 border-t border-[var(--border)] pt-20">
          <p className="text-sm font-medium text-[var(--accent)] mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            Case studies with high impact
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl text-base leading-relaxed">
            From the initial problem definition and strategic goal mapping to product design systems and fully shipped web/mobile applications.
          </p>
        </ScrollAnimate>

        <ul className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <li key={project.id}>
              <ScrollAnimate
                yOffset={24}
                delay={i * 0.08}
                duration={0.4}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className={`relative overflow-hidden rounded-2xl border border-[var(--border)] group ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-video relative bg-[var(--card)] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--foreground)] leading-tight">{project.title}</h3>
                  
                  <div className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    <p>
                      <span className="font-bold text-[var(--foreground)]">Problem:</span> {project.problem}
                    </p>
                    <p>
                      <span className="font-bold text-[var(--foreground)]">Goal:</span> {project.goal}
                    </p>
                    <p>
                      <span className="font-bold text-[var(--foreground)]">Role:</span> {project.role}
                    </p>
                    <p className="italic text-[var(--foreground)] bg-[var(--accent-muted)]/20 p-3 rounded-lg border-l-2 border-[var(--accent)]">
                      {project.process}
                    </p>
                  </div>

                  <div className="mt-4 font-semibold text-sm text-[var(--foreground)]">
                    🚀 {project.impact}
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-[var(--accent-muted)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs font-bold text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all group/link cursor-pointer"
                      >
                        View Live Website
                        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    )}

                    {("playStoreUrl" in project && project.playStoreUrl) && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs font-bold text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all cursor-pointer"
                      >
                        Android App
                      </a>
                    )}

                    {("appStoreUrl" in project && project.appStoreUrl) && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs font-bold text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all cursor-pointer"
                      >
                        iOS App
                      </a>
                    )}

                    {("playStoreUrl" in project && project.playStoreUrl) && (
                      <QRCodePopover />
                    )}
                  </div>
                </div>
              </ScrollAnimate>
            </li>
          ))}
        </ul>

        <ScrollAnimate className="mt-20 text-center">
          <Magnetic>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-bold text-black hover:opacity-90 transition-opacity block shadow-lg shadow-[var(--accent)]/20"
            >
              Start a project with me
            </Link>
          </Magnetic>
        </ScrollAnimate>
      </div>
    </section>
  );
}
