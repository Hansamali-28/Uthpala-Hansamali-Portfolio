"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Server,
  HeartPulse,
  BrainCircuit,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { SKILL_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Server,
  HeartPulse,
  BrainCircuit,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-surface-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="A blend of software engineering fundamentals, web technologies, and healthcare-focused data skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {SKILL_CATEGORIES.map((category, i) => {
            const Icon = ICON_MAP[category.icon] ?? Code2;
            return (
              <Reveal key={category.title} delay={i * 0.05}>
                <GlowCard className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-teal/20 flex items-center justify-center text-accent-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>

                  <ul className="space-y-4">
                    {category.items.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-primary via-primary-cyan to-primary-teal"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
