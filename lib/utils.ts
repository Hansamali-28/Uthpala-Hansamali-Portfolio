import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely, resolving conflicting utility classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a section by its id, accounting for the sticky navbar height.
 */
export function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  const navbarOffset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
