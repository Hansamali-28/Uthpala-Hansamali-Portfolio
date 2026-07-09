"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { CERTIFICATES } from "@/lib/data";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications & training"
          description="Courses and certifications that back up the skills above."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.05}>
              <GlowCard className="p-0 overflow-hidden h-full">
                <div className="relative w-full h-40">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-teal/15 flex items-center justify-center text-primary-teal shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
