import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { campaignPhotos } from "@/lib/campaignPhotos";

import "swiper/css";
import "swiper/css/pagination";

export function CampaignSlideshow() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" && campaignPhotos.length) {
      console.log("Campaign slideshow sample URL:", campaignPhotos[0].src);
    }
  }, []);

  const handleSlideClick = (src: string) => {
    if (typeof window !== "undefined") {
      window.open(src, "_blank", "noopener,noreferrer");
    }
  };

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
        {campaignPhotos.map((photo) => {
          const isFailed = failed[photo.src];
          return (
            <SwiperSlide key={photo.src}>
              <button
                type="button"
                onClick={() => handleSlideClick(photo.src)}
                className="group flex w-full flex-col items-stretch justify-start rounded-2xl outline-none"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
                  {isFailed ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 bg-neutral-200 text-center text-sm font-semibold text-muted-foreground">
                      <span>Image indisponible</span>
                      <span className="text-xs text-muted-foreground/80">{photo.caption}</span>
                    </div>
                  ) : (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      onError={(event) => {
                        setFailed((prev) => ({ ...prev, [photo.src]: true }));
                        if (process.env.NODE_ENV !== "production") {
                          console.warn("Campaign photo failed to load:", photo.src, event);
                        }
                      }}
                    />
                  )}
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl bg-gradient-to-t from-background/90 to-transparent p-3 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">{photo.caption}</p>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
