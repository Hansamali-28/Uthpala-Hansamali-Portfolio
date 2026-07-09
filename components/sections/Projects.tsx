"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Featured", "Next.js", "Python", "React"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    if (filter === "Featured") return PROJECTS.filter((p) => p.featured);
    return PROJECTS.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of healthcare-focused and general software projects, from full-stack systems to AI experiments."
        />

        <Reveal className="flex flex-wrap justify-center gap-3 mt-12 mb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium border transition-colors",
                filter === f
                  ? "bg-gradient-to-r from-primary to-primary-teal border-transparent text-white"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/25"
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <GlowCard className="h-full flex flex-col p-0 overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    {project.featured && (
                      <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary-teal/90 text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-github-btn flex-1 inline-flex items-center justify-center gap-2 rounded-full border py-2.5 text-sm font-medium transition-colors"
                        >
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-teal py-2.5 text-sm font-medium text-white"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
