import { ImagePlaceholder } from "./ImagePlaceholder";

interface IllustrationBlockProps {
  title?: string;
  image?: string;
  alt?: string;
  index?: number;
}

export function IllustrationBlock({ title, image, alt, index = 0 }: IllustrationBlockProps) {
  const staggerClass = `stagger-${Math.min(index + 1, 6)}`;

  return (
    <div className={`opacity-0 animate-fade-up ${staggerClass}`}>
      <ImagePlaceholder
        src={image}
        alt={alt || title || "Illustration"}
        aspectRatio="wide"
        className="shadow-sm"
      />
      {title && (
        <p className="mt-3 text-sm text-muted-foreground text-center font-medium">
          {title}
        </p>
      )}
    </div>
  );
}
