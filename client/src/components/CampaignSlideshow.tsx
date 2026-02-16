import { useEffect, useMemo, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { campaignPhotos } from "@/lib/campaignPhotos";
import { Link } from "wouter";

import "swiper/css";
import "swiper/css/pagination";

export function CampaignSlideshow() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const [invalidFiles, setInvalidFiles] = useState<Set<string>>(new Set());

  const validPhotos = useMemo(
    () =>
      campaignPhotos.filter(
        (photo) => !invalidFiles.has(photo.file) && !failed[photo.src],
      ),
    [invalidFiles, failed],
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" && validPhotos.length) {
      console.log("Campaign slideshow sample URL:", validPhotos[0].src);
    }
  }, [validPhotos]);

  const handleSlideClick = (src: string) => {
    if (typeof window !== "undefined") {
      window.open(src, "_blank", "noopener,noreferrer");
    }
  };

  const markInvalid = (file: string) => {
    setInvalidFiles((prev) => new Set(prev).add(file));
  };

  if (!validPhotos.length) {
    return (
      <div className="rounded-3xl border border-border bg-card/70 p-6 text-center text-sm text-muted-foreground">
        <p>Aucune photo disponible pour le moment.</p>
        <Link
          href="/photos"
          className="mt-4 inline-flex justify-center rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/5"
        >
          Voir toutes les photos
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card/70 p-4 shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={8}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        allowTouchMove
        className="rounded-3xl"
      >
        {validPhotos.map((photo) => (
          <SwiperSlide key={photo.src}>
            <button
              type="button"
              onClick={() => handleSlideClick(photo.src)}
              className="group flex w-full flex-col items-stretch justify-start rounded-2xl outline-none"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(event) => {
                    setFailed((prev) => ({ ...prev, [photo.src]: true }));
                    markInvalid(photo.file);
                    if (process.env.NODE_ENV !== "production") {
                      console.warn("Campaign photo failed to load:", photo.src, event);
                    }
                  }}
                />
                <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl bg-gradient-to-t from-background/90 to-transparent p-3 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">{photo.caption}</p>
                </div>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
