"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/**
 * Thin gradient bar fixed to the top of the viewport that fills as the
 * user scrolls down the page.
 */
export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-primary-cyan to-primary-teal"
        style={{ width: `${progress}%` }}
        transition={{ ease: "linear" }}
      />
    </div>
  );
}
