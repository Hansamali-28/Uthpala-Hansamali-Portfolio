"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_INTRO, ABOUT_STATS, ABOUT_TIMELINE } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div ref={ref} className="glass-card gradient-border p-6 text-center">
      <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {count}
        {suffix}
      </p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Where healthcare meets code"
          description="A quick look at who I am, what drives me, and how my academic path led here."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          {/* Intro + stats */}
          <Reveal className="lg:col-span-2 flex flex-col gap-8" direction="left">
            <p className="about-intro-text text-gray-300 leading-relaxed text-base md:text-lg">
              {ABOUT_INTRO}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="lg:col-span-3 relative pl-8">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary-cyan to-primary-teal" />
            <ol className="space-y-10">
              {ABOUT_TIMELINE.map((entry, i) => (
                <Reveal key={entry.year} delay={i * 0.08}>
                  <li className="relative">
                    <motion.span
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      viewport={{ once: true }}
                      className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary-teal shadow-[0_0_12px_rgba(20,184,166,0.7)]"
                    />
                    <div className="glass-card p-5 md:p-6">
                      <span className="text-sm font-semibold text-accent-cyan">
                        {entry.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold mt-1 mb-2">
                        {entry.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
