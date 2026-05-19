"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-mesh overflow-hidden">
      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-bold tracking-wider uppercase text-[var(--accent)] mb-4"
            >
              Founder-Minded Product Designer & Systems Engineer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.15]"
            >
              Designing & Building Scalable Digital Products for Emerging Markets.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-6 text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed"
            >
              Hi, I&apos;m Christopher. A creative technologist and systems thinker engineering low-bandwidth mobile user flows, transaction gateways, and startup systems that build digital trust globally.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Magnetic strength={0.25}>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black hover:opacity-90 transition-opacity block"
                >
                  View Projects
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)] transition-colors block"
                >
                  Let&apos;s Work Together
                </Link>
              </Magnetic>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-2xl">
              <Image
                src="/images/img-1.png"
                alt="Christopher Dzorkpui — Product Designer & Software Engineer"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
