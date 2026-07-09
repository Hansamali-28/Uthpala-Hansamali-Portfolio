import { Github, Linkedin, Mail, Facebook, Instagram, HeartPulse } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/data";
import type { SocialLink } from "@/types";

const ICONS: Record<SocialLink["icon"], typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  facebook: Facebook,
  instagram: Instagram,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-surface-900/60">
      <div className="section-container py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-teal flex items-center justify-center font-bold">
              {SITE.initials}
            </div>
            <span className="font-semibold text-lg">{SITE.name}</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-accent-cyan transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Connect</h3>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICONS[social.icon];
              const isEmail = social.icon === "email";

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isEmail ? "_self" : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  onClick={isEmail ? undefined : undefined}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & built with
            <HeartPulse className="w-3.5 h-3.5 text-primary-teal" />
            for healthcare technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
