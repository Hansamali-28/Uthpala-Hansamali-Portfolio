"use client";

import { Trophy, FolderKanban, GitBranch, Award, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ACHIEVEMENTS } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";
import type { Achievement } from "@/types";

const ICONS: LucideIcon[] = [Trophy, FolderKanban, GitBranch, Award];

function AchievementCard({ item, Icon }: { item: Achievement; Icon: LucideIcon }) {
  const { ref, value } = useCountUp(item.value);
  return (
    <div
      ref={ref}
      className="glass-card gradient-border p-8 text-center flex flex-col items-center gap-3"
    >
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-teal/20 flex items-center justify-center text-accent-cyan">
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-3xl md:text-4xl font-bold gradient-text">
        {value}
        {item.suffix}
      </p>
      <p className="text-gray-400 text-sm">{item.label}</p>
    </div>
  );
}

export function Achievements() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Achievements" title="Numbers that tell a story" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <AchievementCard item={item} Icon={ICONS[i % ICONS.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
