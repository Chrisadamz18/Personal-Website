import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { QRCodePopover } from "@/components/ui/QRCodePopover";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Statically pre-render all project paths at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate dynamic, search-engine optimized title & meta tags for each case study
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Christopher Dzorkpui",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.problem,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Find next project to display teaser back-navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="pt-24 pb-20 md:pb-28">
      <div className="section-container">
        
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors mb-10 group"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
          Back to Projects
        </Link>

        {/* Title Block */}
        <div className="max-w-4xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            {project.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Banner Media Block */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] mb-12">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Three-Column Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-[var(--border)] py-8 mb-12">
          <div>
            <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">Client</p>
            <p className="mt-2 text-sm font-bold text-[var(--foreground)]">{project.client}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">Timeline</p>
            <p className="mt-2 text-sm font-bold text-[var(--foreground)]">{project.timeline}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">Role</p>
            <p className="mt-2 text-sm font-bold text-[var(--foreground)]">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">Discipline</p>
            <p className="mt-2 text-sm font-bold text-[var(--foreground)]">{project.category}</p>
          </div>
        </div>

        {/* Detailed Narrative Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Executive Summary</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">The Problem</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">The Objective</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                {project.goal}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Engineering Challenges & Solutions</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base bg-[var(--card)] p-5 rounded-2xl border border-[var(--border)]">
                {project.challenges}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Key Takeaways & Lessons</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                {project.lessons}
              </p>
            </div>
          </div>

          {/* Quick Metrics & Links Column */}
          <div className="space-y-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 md:sticky md:top-24">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">Direct Impact</h3>
              <p className="text-sm font-bold text-[var(--foreground)] leading-relaxed bg-[var(--accent-muted)]/20 p-4 rounded-xl border-l-2 border-[var(--accent)]">
                🚀 {project.impact}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">Key Deliverables</h3>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[var(--accent)] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded bg-[var(--accent-muted)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border)] space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">Launch Actions</h3>
              
              <div className="flex flex-col gap-2 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-xs font-bold text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all group/link cursor-pointer w-full"
                  >
                    View Live Project
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
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-xs font-bold text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all cursor-pointer w-full"
                  >
                    Download on Google Play
                  </a>
                )}

                {("appStoreUrl" in project && project.appStoreUrl) && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-xs font-bold text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all cursor-pointer w-full"
                  >
                    Download on App Store
                  </a>
                )}

                {("playStoreUrl" in project && project.playStoreUrl) && (
                  <div className="flex justify-center pt-1">
                    <QRCodePopover />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Next Project Navigation Teaser */}
        <div className="mt-20 pt-10 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider mb-4">Next Case Study</p>
          <Link
            href={`/projects/${nextProject.id}`}
            className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8 hover:border-[var(--accent)]/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">{nextProject.category}</p>
                <h4 className="mt-2 text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {nextProject.title}
                </h4>
              </div>
              <div className="inline-flex items-center gap-1 text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                View Next Project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </main>
  );
}
