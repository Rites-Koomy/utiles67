import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import photosJson from "@/content/campaign.photos.json";

import "swiper/css";
import "swiper/css/pagination";

export interface CampaignPhoto {
  src: string;
  alt: string;
  caption: string;
}

const photos = photosJson as CampaignPhoto[];

export function CampaignSlideshow() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <div className="rounded-3xl border border-border bg-card/70 p-4 shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={14}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="rounded-3xl"
      >
        {photos.map((photo) => {
          const isFailed = failed[photo.src];
          return (
            <SwiperSlide key={photo.src}>
              <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-100">
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
                    onError={() =>
                      setFailed((prev) => ({ ...prev, [photo.src]: true }))
                    }
                  />
                )}
                <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl bg-gradient-to-t from-background/90 to-transparent p-3 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">{photo.caption}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
