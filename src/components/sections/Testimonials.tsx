"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--card)]/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-[var(--accent)] mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            What clients say
          </h2>
        </motion.div>
        <ul className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col"
            >
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[var(--border)]">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">{t.name}</p>
                  <p className="text-xs text-[var(--muted)]">{t.role} · {t.date}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
