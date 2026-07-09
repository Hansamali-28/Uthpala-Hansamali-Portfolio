"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
}

/**
 * Base glassmorphism card with a soft gradient border glow on hover.
 * Used as the shared visual language for skill, project, and certificate cards.
 */
export function GlowCard({ children, className, hoverLift = true }: GlowCardProps) {
  return (
    <motion.div
      whileHover={
        hoverLift
          ? { y: -8, boxShadow: "0 20px 45px rgba(14,165,233,0.25)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "glass-card gradient-border p-6 md:p-7 relative overflow-hidden group",
        className
      )}
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-cyan/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
