import Link from "next/link";
import { site } from "@/lib/data";

const socials = [
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.github, label: "GitHub" },
  { href: site.behance, label: "Behance" },
  { href: site.instagram, label: "Instagram" },
  { href: site.whatsapp, label: "WhatsApp" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-lg font-semibold text-[var(--foreground)]">{site.name}</p>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">{site.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={`mailto:${site.email}`} className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
              Email
            </a>
            <Link href="#contact" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
