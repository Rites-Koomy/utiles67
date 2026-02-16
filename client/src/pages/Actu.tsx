import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { LinkPreviewCard, type ActuPreview } from "@/components/LinkPreviewCard";
import previewsJson from "@/content/actu.previews.json";

const initialPreviews = previewsJson as ActuPreview[];

export default function Actu() {
  const [previews, setPreviews] = useState<ActuPreview[]>([]);

  useEffect(() => {
    setPreviews(initialPreviews);
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Revue de presse
          </p>
          <h1 className="text-3xl font-semibold text-foreground">Actu</h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Pour rester au fait des retombées locales, retrouvez les articles
            sélectionnés par l’équipe et illustrés avec les métadonnées
            officielles (Open Graph, Twitter).
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previews.length === 0
            ? Array.from({ length: 6 }).map((_, index) => (
                <LinkPreviewCard
                  key={`skeleton-${index}`}
                  isLoading
                  className="min-h-[360px]"
                />
              ))
            : previews.map((preview) => (
                <LinkPreviewCard
                  key={preview.id}
                  preview={preview}
                  className="min-h-[360px]"
                />
              ))}
        </div>
      </div>
    </Layout>
  );
}
