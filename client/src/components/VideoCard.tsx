import { Play } from "lucide-react";
import type { Video } from "@/data";

interface VideoCardProps {
  video: Video;
  index?: number;
}

export function VideoCard({ video, index = 0 }: VideoCardProps) {
  const staggerClass = `stagger-${Math.min(index + 1, 6)}`;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block opacity-0 animate-fade-up ${staggerClass}`}
      data-testid={`card-video-${video.id}`}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-3">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play size={24} className="text-primary ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
        {video.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {video.description}
      </p>
    </a>
  );
}
