"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  icon?: ReactNode;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * Premium call-to-action button. Renders as either a <button> or an <a>
 * (for external links like "Download CV" / "View on GitHub").
 */
export function Button({
  children,
  variant = "primary",
  icon,
  className,
  as = "button",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm md:text-base transition-all duration-300 focus-visible:outline-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-primary-cyan text-white shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(20,184,166,0.55)] hover:-translate-y-0.5",
    outline:
      "border border-white/20 text-white hover:border-accent-cyan hover:text-accent-cyan bg-white/5 backdrop-blur-sm",
    ghost: "text-gray-300 hover:text-white",
  };

  const content = (
    <motion.span
      whileTap={{ scale: 0.96 }}
      className={cn(base, variants[variant], className)}
    >
      {icon}
      {children}
    </motion.span>
  );

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...props} className="contents">
      {content}
    </button>
  );
}
