"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

/**
 * Tracks the current mouse position on the window.
 * Used by the cursor glow and mouse follower effects.
 */
export function useMousePosition(): Position {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
