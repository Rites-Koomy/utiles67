import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  src,
  alt = "Illustration",
  aspectRatio = "video",
  className = "",
}: ImagePlaceholderProps) {
  const hasImage = src && src.trim() !== "";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-muted/50 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {hasImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40">
          <ImageIcon size={32} strokeWidth={1.5} />
          <span className="text-xs mt-2 font-medium">Image à venir</span>
        </div>
      )}
    </div>
  );
}
