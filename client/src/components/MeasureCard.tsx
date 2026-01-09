import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { Measure } from "@/data";

interface MeasureCardProps {
  measure: Measure;
  index?: number;
}

const tagColors: Record<string, string> = {
  "Mobilité": "bg-teal-50 text-teal-700 border-teal-200",
  "Logement": "bg-amber-50 text-amber-700 border-amber-200",
  "Écologie": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Solidarité": "bg-rose-50 text-rose-700 border-rose-200",
  "Démocratie": "bg-violet-50 text-violet-700 border-violet-200",
};

export function MeasureCard({ measure, index = 0 }: MeasureCardProps) {
  const tagColor = tagColors[measure.tag] || "bg-muted text-muted-foreground";
  const staggerClass = `stagger-${Math.min(index + 1, 6)}`;

  return (
    <Link href={`/mesure/${measure.id}`}>
      <article
        className={`group bg-card rounded-2xl border border-card-border p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up ${staggerClass}`}
        data-testid={`card-measure-${measure.id}`}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full border ${tagColor}`}
          >
            {measure.tag}
          </span>
          <ArrowRight
            size={18}
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-0.5 flex-shrink-0"
          />
        </div>

        <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {measure.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {measure.impact}
        </p>
      </article>
    </Link>
  );
}
