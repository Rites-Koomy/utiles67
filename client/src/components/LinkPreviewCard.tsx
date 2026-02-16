import { ArrowUpRight } from "lucide-react";
import { format, isValid, parseISO } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface ActuPreview {
  id: string;
  url: string;
  title: string;
  description?: string | null;
  image?: string | null;
  siteName?: string | null;
  domain: string;
  sourceLabel?: string | null;
  publishedAt?: string | null;
  pinned?: boolean;
  fetchedAt?: string;
  fallback?: boolean;
}

interface LinkPreviewCardProps {
  preview?: ActuPreview;
  isLoading?: boolean;
  className?: string;
}

const baseCardClasses =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const formattedDate = (value?: string | null) => {
  if (!value) return null;
  const parsed = parseISO(value);
  if (!isValid(parsed)) return null;
  return format(parsed, "d MMM yyyy");
};

function LinkPreviewCard({ preview, isLoading, className }: LinkPreviewCardProps) {
  if (isLoading || !preview) {
    return (
      <div className={cn(baseCardClasses, "animate-pulse", className)}>
        <Skeleton className="h-40 w-full" />
        <div className="flex flex-1 flex-col gap-2 p-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    );
  }

  const dateLabel = formattedDate(preview.publishedAt);

  if (preview.fallback) {
    return (
      <div className={cn(baseCardClasses, "flex flex-col justify-between space-y-4", className)}>
        <div className="space-y-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Actu (preview indisponible)
          </p>
          <p className="text-base font-semibold text-foreground">
            {preview.title ?? preview.sourceLabel ?? preview.domain}
          </p>
          <p className="text-sm text-muted-foreground break-words">{preview.url}</p>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border/50 p-4 text-xs text-muted-foreground">
          <span>{preview.domain}</span>
          <a
            href={preview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-primary transition hover:bg-primary/5"
          >
            Lire l’article
          </a>
        </div>
      </div>
    );
  }

  return (
    <a
      href={preview.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ouvrir l’article sur ${preview.domain}`}
      className={cn(baseCardClasses, "group", className)}
    >
      {preview.image ? (
        <div className="h-40 w-full overflow-hidden">
          <img
            src={preview.image}
            alt={preview.title}
            className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Actu
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          <span>{preview.sourceLabel ?? preview.siteName ?? preview.domain}</span>
          {dateLabel && <span>{dateLabel}</span>}
        </div>
        <h3 className="text-base font-semibold text-foreground min-h-[3rem]">
          {preview.title}
        </h3>
        {preview.description && (
          <p className="text-sm leading-relaxed text-muted-foreground max-h-[4.5rem] overflow-hidden">
            {preview.description}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-medium text-xs uppercase tracking-[0.3em]">
            {preview.domain}
          </span>
          <ArrowUpRight size={16} className="text-primary" />
        </div>
      </div>
    </a>
  );
}

export { LinkPreviewCard };
