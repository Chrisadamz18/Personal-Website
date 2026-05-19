import { trustBar } from "@/lib/data";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function TrustBar() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card)] py-8">
      <div className="section-container">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trustBar.map((item, i) => (
            <li key={item.label}>
              <ScrollAnimate
                yOffset={12}
                delay={i * 0.06}
                duration={0.35}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-[var(--accent)]">{item.value}</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.label}</p>
              </ScrollAnimate>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
