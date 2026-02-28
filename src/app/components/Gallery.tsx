import React, { useState, useCallback, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Gallery = () => {
  // Current event photos
  const eventImages = [
    "/event pic1.jpeg",
    "/eventpic2.jpeg",
    "/eventpic3.jpeg",
    "/eventpic4.jpeg",
    "/eventpic5.jpeg",
    "/eventpic6.jpeg",
  ];

  // Founding year photos from 2009
  const foundingImages = [
    { src: "/Journey/seen12009.jpeg", caption: "COPS Journey — 2009" },
    { src: "/Journey/seen22009.jpeg", caption: "Early Days — 2009" },
    { src: "/Journey/seen32009.jpeg", caption: "Building the Community — 2009" },
    { src: "/Journey/seen52009.jpeg", caption: "Growing Together — 2009" },
    { src: "/Journey/seen62009.jpeg", caption: "The Spark — 2009" },
    { src: "/Journey/seen72009.jpeg", caption: "Our Roots — 2009" },
  ];

  const allImages = [
    ...foundingImages.map((img) => img.src),
    ...eventImages,
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % allImages.length);
  }, [lightboxIndex, allImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
  }, [lightboxIndex, allImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Moments</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our past events, hackathons, and social gatherings.
          </p>
        </div>

        {/* Founding Year Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">
              Est. 2009 — Our Journey
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {foundingImages.map((img, i) => (
              <div
                key={`founding-${i}`}
                className="overflow-hidden rounded-2xl group relative h-48 sm:h-56 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white font-semibold text-lg drop-shadow-lg">{img.caption}</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                    View Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Gallery */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">
            Events & Hackathons
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventImages.map((src, i) => {
            const globalIndex = foundingImages.length + i;
            return (
              <div
                key={`event-${i}`}
                className="overflow-hidden rounded-2xl group relative h-72 sm:h-80 cursor-pointer"
                onClick={() => openLightbox(globalIndex)}
              >
                <ImageWithFallback
                  src={src}
                  alt={`Event photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                    View Photo
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-gray-300 transition-colors bg-black/40 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 hover:text-gray-300 transition-colors bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 hover:text-gray-300 transition-colors bg-black/40 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Next"
          >
            ›
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
};
