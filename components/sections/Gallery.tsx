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
              className={cn(item.span, "relative")}
            >
              <button
                onClick={() => {
                  setLightbox(item);
                  setLightboxIndex(0);
                }}
                className="relative w-full h-full rounded-3xl overflow-hidden group focus-visible:outline-accent-cyan"
                aria-label={`View event: ${item.title}`}
              >
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end gap-2">
                  <div>
                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-200 block">
                      {item.category} • {item.images.length} photo{item.images.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  {item.images.length > 1 && (
                    <div className="flex items-center gap-2">
                      {item.images.slice(0, 3).map((image, idx) => (
                        <div key={idx} className="w-10 h-10 rounded-2xl overflow-hidden border border-white/10 shadow-sm">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </button>
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
              className="relative max-w-5xl w-full max-h-[80vh] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                onClick={() =>
                  setLightboxIndex((current) =>
                    current === lightbox.images.length - 1 ? 0 : current + 1
                  )
                }
                className="relative w-full h-[80vh] bg-slate-950 cursor-pointer"
                aria-label="Next photo"
              >
                <Image
                  src={lightbox.images[lightboxIndex].src}
                  alt={lightbox.images[lightboxIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
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

              {lightbox.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {lightbox.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className={cn(
                        "w-3 h-3 rounded-full transition-colors",
                        idx === lightboxIndex ? "bg-white" : "bg-white/40"
                      )}
                      aria-label={`View photo ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
