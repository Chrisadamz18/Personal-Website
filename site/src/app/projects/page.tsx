"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { QRCodePopover } from "@/components/ui/QRCodePopover";
import { motion, AnimatePresence } from "framer-motion";

type CategoryFilter = "all" | "web" | "mobile" | "design";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  // Determine if a project belongs to a filtered category
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return (project.types as readonly string[]).includes(filter);
  });

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All Products" },
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "design", label: "UI/UX Designs" },
  ];

  return (
    <main className="pt-24 pb-20 md:pb-28">
      <div className="section-container">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-2">My Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
            Flagship Products & Case Studies
          </h1>
          <p className="mt-4 text-[var(--muted-foreground)] text-base leading-relaxed">
            A comprehensive index of live, production-grade applications, custom portals, and user experience strategies engineered for business scale.
          </p>
        </div>

        {/* Dynamic Categories Tab Filters */}
        <div className="flex flex-wrap gap-2 border-b border-[var(--border)] pb-6 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFilter(cat.value)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "text-black font-bold"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-[var(--accent)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Case Studies Grid List */}
        <ul className="space-y-16 md:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className={`relative overflow-hidden rounded-2xl border border-[var(--border)] group ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="aspect-video relative bg-[var(--card)] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        priority={i === 0}
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
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold text-black hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        Read Case Study
                      </Link>

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
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </main>
  );
}
