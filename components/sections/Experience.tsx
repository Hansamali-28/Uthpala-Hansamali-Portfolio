"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

const TYPE_ICON: Record<ExperienceItem["type"], typeof GraduationCap> = {
  education: GraduationCap,
  work: Briefcase,
  leadership: Users,
  certification: Award,
};

const TYPE_LABEL: Record<ExperienceItem["type"], string> = {
  education: "Education",
  work: "Work",
  leadership: "Leadership",
  certification: "Certification",
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-surface-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="My journey so far"
          description="Academic milestones, freelance work, and leadership moments that shaped how I build."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-cyan to-primary-teal hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-cyan to-primary-teal md:hidden" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => {
              const Icon = TYPE_ICON[item.type];
              const isEven = i % 2 === 0;
              return (
                <Reveal key={item.id} delay={i * 0.06}>
                  <div
                    className={cn(
                      "relative md:grid md:grid-cols-2 md:gap-10 items-center",
                      "pl-12 md:pl-0"
                    )}
                  >
                    <motion.div
                      whileInView={{ scale: [0.6, 1.15, 1] }}
                      viewport={{ once: true }}
                      className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 w-9 h-9 rounded-full bg-surface-950 border-2 border-accent-cyan flex items-center justify-center text-accent-cyan shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>

                    <div className={cn(isEven ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16")}>
                      <div className="glass-card relative p-6 inline-block text-left w-full">
                        <span className="text-xs font-semibold uppercase tracking-wide text-accent-cyan">
                          {item.period}
                        </span>
                        <div className="absolute right-4 top-3">
                          <span className="experience-type-label inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] backdrop-blur-sm">
                            {TYPE_LABEL[item.type]}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mt-1">{item.role}</h3>
                        <p className="text-sm text-gray-400 mb-2">{item.organization}</p>
                        <p className="text-sm text-sky-300 mb-2">{item.location}</p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
