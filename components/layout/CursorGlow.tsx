"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Renders a soft radial glow that follows the mouse cursor on desktop
 * viewports. Hidden on touch devices where there is no real cursor.
 */
export function CursorGlow() {
  const [isTouch, setIsTouch] = useState(true);
  const x = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[55] w-[420px] h-[420px] rounded-full mix-blend-screen hidden md:block"
      style={{
        translateX: x,
        translateY: y,
        x: "-50%",
        y: "-50%",
        background:
          "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(20,184,166,0.08) 45%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
