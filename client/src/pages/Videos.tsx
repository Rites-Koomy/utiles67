import { Layout } from "@/components/layout/Layout";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/data";

export default function Videos() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4">
        <section className="py-6">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2 animate-fade-up">
            Nos vidéos
          </h1>
          <p className="text-muted-foreground animate-fade-up stagger-1">
            Découvrez notre programme en images
          </p>
        </section>

        <section className="pb-8">
          <div className="grid gap-6">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
