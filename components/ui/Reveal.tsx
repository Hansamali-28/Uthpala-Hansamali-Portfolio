"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

const buildVariants = (y: number, x: number): Variants => ({
  hidden: { opacity: 0, y, x },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

/**
 * Wraps children in a fade + slide reveal animation that triggers once
 * the element scrolls into the viewport. Used throughout every section.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  direction = "up",
}: RevealProps) {
  const x = direction === "left" ? -32 : direction === "right" ? 32 : 0;
  const variants = buildVariants(direction === "up" ? y : 0, x);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
