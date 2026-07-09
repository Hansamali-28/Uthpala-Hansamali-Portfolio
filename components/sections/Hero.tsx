"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, FolderGit2, HeartPulse, Laptop, BrainCircuit, Database, Cloud } from "lucide-react";
import { HERO_ROLES, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";
import { ParticlesBackground } from "@/components/layout/ParticlesBackground";
import { scrollToSection } from "@/lib/utils";

/**
 * Typing animation that cycles through an array of role strings,
 * typing each one out, pausing, then deleting it before moving to the next.
 */
function useTypingEffect(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 40 : 80;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const FLOATING_ICONS = [
  { Icon: HeartPulse, top: "8%", left: "5%", delay: 0 },
  { Icon: Laptop, top: "18%", left: "78%", delay: 0.6 },
  { Icon: BrainCircuit, top: "60%", left: "82%", delay: 1.2 },
  { Icon: Database, top: "72%", left: "8%", delay: 1.8 },
  { Icon: Cloud, top: "42%", left: "88%", delay: 0.9 },
];

export function Hero() {
  const typedRole = useTypingEffect(HERO_ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-28 pb-16"
    >
      <ParticlesBackground />
      <AnimatedBlobs />

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{SITE.name}</span>
          </h1>
          <div className="h-9 mb-6">
            <span className="hero-role-text text-xl sm:text-2xl font-medium text-gray-300">
              {typedRole}
              <span className="inline-block w-0.5 h-6 bg-accent-cyan ml-1 animate-pulse align-middle" />
            </span>
          </div>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
            {SITE.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button as="a" href={SITE.cvUrl} variant="primary" icon={<Download className="w-4 h-4" />}>
              Download CV
            </Button>
            <Button
              variant="outline"
              icon={<FolderGit2 className="w-4 h-4" />}
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary-cyan to-primary-teal blur-2xl opacity-40"
            />
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_60px_rgba(14,165,233,0.35)]">
              <Image
                src="/images/profile1.png"
                alt={`Portrait placeholder of ${SITE.name}`}
                fill
                priority
                sizes="(max-width: 768px) 256px, 384px"
                className="object-cover"
              />
            </div>

            {FLOATING_ICONS.map(({ Icon, top, left, delay }, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-accent-cyan animate-float"
                style={{ top, left, animationDelay: `${delay}s` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + delay }}
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-500 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1.5">
          <div className="w-1 h-1.5 rounded-full bg-accent-cyan" />
        </div>
      </motion.div>
    </section>
  );
}
