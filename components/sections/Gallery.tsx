"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(GALLERY_ITEMS.map((g) => g.category)))],
    []
  );

  const items = useMemo(
    () =>
      activeCategory === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((g) => g.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-surface-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments along the way"
          description="Hackathons, workshops, and milestones captured over the years."
        />

        <Reveal className="flex flex-wrap justify-center gap-3 mt-12 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium border transition-colors",
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary to-primary-teal border-transparent text-white"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/25"
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.04}
              className={cn(item.span, "relative flex flex-col gap-2")}
            >
              <button
                onClick={() => {
                  setLightbox(item);
                  setLightboxIndex(0);
                }}
                className="relative w-full flex-1 rounded-3xl overflow-hidden focus-visible:outline-accent-cyan"
                aria-label={`View event: ${item.title}`}
              >
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain"
                />
              </button>
              <div>
                <span className="text-sm font-semibold text-white block">
                  {item.title}
                </span>
                <span className="text-xs text-slate-400 block">
                  {item.category} • {item.images.length} photo{item.images.length > 1 ? "s" : ""}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-surface-950/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main image */}
              <div className="relative w-full h-[70vh] bg-slate-950">
                <Image
                  src={lightbox.images[lightboxIndex].src}
                  alt={lightbox.images[lightboxIndex].alt}
                  fill
                  className="object-contain"
                />

                <button
                  onClick={() => setLightbox(null)}
                  aria-label="Close image preview"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-950/70 flex items-center justify-center text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                {lightbox.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setLightboxIndex((current) =>
                          current === 0 ? lightbox.images.length - 1 : current - 1
                        )
                      }
                      aria-label="Previous photo"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-950/70 flex items-center justify-center text-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setLightboxIndex((current) =>
                          current === lightbox.images.length - 1 ? 0 : current + 1
                        )
                      }
                      aria-label="Next photo"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-950/70 flex items-center justify-center text-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Event info + thumbnail strip showing ALL images of this event */}
              {lightbox.images.length > 1 && (
                <div className="bg-surface-950 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white">
                      {lightbox.title}
                    </span>
                    <span className="text-xs text-slate-400">
                      {lightboxIndex + 1} / {lightbox.images.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {lightbox.images.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setLightboxIndex(idx)}
                        aria-label={`View photo ${idx + 1}`}
                        className={cn(
                          "relative shrink-0 w-16 h-16 rounded-2xl overflow-hidden border-2 transition-colors",
                          idx === lightboxIndex
                            ? "border-accent-cyan"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        )}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}