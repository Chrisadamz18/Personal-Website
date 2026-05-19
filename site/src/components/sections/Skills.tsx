import { skills } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { GlowCard } from "@/components/ui/GlowCard";

const domains = [
  { key: "design", label: "Design", items: skills.design },
  { key: "frontend", label: "Frontend", items: skills.frontend },
  { key: "backend", label: "Backend", items: skills.backend },
  { key: "mobile", label: "Mobile", items: skills.mobile },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <ScrollAnimate className="mb-14">
          <p className="text-sm font-medium text-[var(--accent)] mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Technologies & practices
          </h2>
        </ScrollAnimate>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, i) => (
            <ScrollAnimate
              key={domain.key}
              yOffset={12}
              delay={i * 0.06}
              duration={0.35}
            >
              <GlowCard>
                <h3 className="text-sm font-semibold text-[var(--accent)] mb-4">{domain.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {domain.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-[var(--accent-muted)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
