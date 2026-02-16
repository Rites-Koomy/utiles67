import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import photosJson from "@/content/campaign.photos.json";
import { CampaignPhoto } from "@/components/CampaignSlideshow";
import { Link } from "wouter";

const photos = photosJson as CampaignPhoto[];

export default function Photos() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Photos
          </p>
          <h1 className="text-3xl font-semibold text-foreground">Toutes les photos</h1>
          <p className="text-sm text-muted-foreground">
            Galerie complète des temps forts, organisée pour le web avec des images hébergées sur notre CDN R2.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <a
              key={photo.src}
              href={photo.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-3xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative h-52 overflow-hidden rounded-2xl bg-neutral-100">
                {!failed[photo.src] && (
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
                {failed[photo.src] && (
                  <div className="flex h-full flex-col items-center justify-center text-sm font-semibold text-muted-foreground">
                    <span>Image indisponible</span>
                  </div>
                )}
              </div>
              <div className="text-sm font-semibold text-foreground">{photo.caption}</div>
              <p className="text-xs text-muted-foreground">{photo.alt}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-start">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-primary transition hover:text-primary/80"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
}
