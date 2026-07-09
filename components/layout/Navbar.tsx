"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { scrollToSection, cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

/**
 * Sticky, transparent, blurred navigation bar. Highlights the active
 * section, supports smooth scrolling, a mobile menu, and a dark/light toggle.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  const toggleTheme = () => {
    // The design is dark-by-default per brief; this toggle is a visual
    // affordance that dims the ambient glow for a "light" feel.
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("light-mode");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "section-container flex items-center justify-between rounded-full transition-all duration-300",
          scrolled
            ? "glass-card px-4 py-2 md:px-6"
            : "bg-transparent px-4 md:px-6"
        )}
        aria-label="Primary"
      >
        <button
          onClick={() => handleNavClick("#home")}
          className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary-teal flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.45)]"
          aria-label={`${SITE.name} — go to home`}
        >
          {SITE.initials}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeId === link.href.replace("#", "")
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle-btn w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
          >
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden section-container mt-3 overflow-hidden"
          >
            <ul className="glass-card flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-colors",
                      activeId === link.href.replace("#", "")
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
