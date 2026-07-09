"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE, SOCIAL_LINKS } from "@/lib/data";
import type { ContactFormData, SocialLink } from "@/types";

const ICONS: Record<SocialLink["icon"], typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  facebook: Facebook,
  instagram: Instagram,
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // NOTE: Wire this up to an email service (Resend, EmailJS, Formspree, or
    // a Next.js API route + SMTP provider) to actually deliver messages.
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project, an internship opportunity, or just want to talk healthcare tech? Reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
          {/* Form */}
          <Reveal className="lg:col-span-3" direction="left">
            <form
              onSubmit={handleSubmit}
              className="glass-card gradient-border p-8 md:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent-cyan/60 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent-cyan/60 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent-cyan/60 outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent-cyan/60 outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button type="submit" variant="primary" icon={<Send className="w-4 h-4" />}>
                Send Message
              </Button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-primary-teal"
                  role="status"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent — thank you! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </Reveal>

          {/* Info + map */}
          <Reveal className="lg:col-span-2 flex flex-col gap-6" direction="right">
            <div className="glass-card p-8 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-accent-cyan shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm font-medium hover:text-accent-cyan transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-accent-cyan shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm font-medium">{SITE.location}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = ICONS[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card overflow-hidden flex-1 min-h-[220px] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-teal/10" />
              <div className="relative text-center px-6">
                <MapPin className="w-8 h-8 text-accent-cyan mx-auto mb-3" />
                <p className="text-sm text-gray-400">
                  Map preview — embed Google Maps with your NEXT_PUBLIC_MAPS_EMBED_URL
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
