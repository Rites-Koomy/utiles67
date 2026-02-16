import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { campaignPhotos } from "@/lib/campaignPhotos";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "wouter";

import "swiper/css";
import "swiper/css/pagination";

export default function Photos() {
  const [invalidFiles, setInvalidFiles] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(1);

  const validPhotos = useMemo(
    () =>
      campaignPhotos.filter(
        (photo) => !invalidFiles.has(photo.file),
      ),
    [invalidFiles],
  );

  const total = validPhotos.length;

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex + 1);
  };
  
  useEffect(() => {
    if (total === 0) {
      setCurrentIndex(1);
    } else if (currentIndex > total) {
      setCurrentIndex(1);
    }
  }, [total, currentIndex]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Photos
          </p>
          <h1 className="text-3xl font-semibold text-foreground">Toutes les photos</h1>
          <p className="text-sm text-muted-foreground">
            Galerie complète des temps forts, organisée pour le web avec des images hébergées sur notre CDN R2.
          </p>
        </div>

        {invalidFiles.size > 0 && (
          <div className="mb-4 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground">
            Certaines images ne sont plus disponibles dans le bucket.
          </div>
        )}

        {!total ? (
          <div className="rounded-3xl border border-border bg-card/70 p-6 text-center text-sm text-muted-foreground">
            Toutes les photos sont indisponibles pour le moment.
          </div>
        ) : (
          <>
            <div className="rounded-3xl border border-border bg-card/70 p-4 shadow-lg">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                loop
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                onSlideChange={handleSlideChange}
                className="rounded-3xl"
              >
                {validPhotos.map((photo) => (
                  <SwiperSlide key={photo.src}>
                    <div className="flex flex-col gap-4">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          onError={() => {
                            setInvalidFiles((prev) => new Set(prev).add(photo.file));
                          }}
                        />
                      </div>
                      <div className="space-y-1 pb-2">
                        <div className="text-sm font-semibold text-foreground">{photo.caption}</div>
                        <p className="text-xs text-muted-foreground">{photo.alt}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          {currentIndex}/{total}
                        </span>
                        <a
                          href={photo.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline-offset-4 transition hover:underline"
                        >
                          Ouvrir l’image
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="mt-6 flex justify-start">
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-[0.3em] text-primary transition hover:text-primary/80"
              >
                ← Retour à l’accueil
              </Link>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
