import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MeasureCard } from "@/components/MeasureCard";
import { PriorityPill } from "@/components/PriorityPill";
import { priorities, measures, getMeasuresByPriority } from "@/data";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredMeasures = activeFilter
    ? getMeasuresByPriority(activeFilter)
    : measures;

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4">
        <section className="py-6">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2 animate-fade-up">
            Des mesures concrètes
          </h1>
          <p className="text-muted-foreground animate-fade-up stagger-1">
            Pour améliorer le quotidien à Strasbourg
          </p>
        </section>

        <div className="sticky top-14 z-30 -mx-4 px-4 py-3 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-1">
            <button
              onClick={() => setActiveFilter(null)}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 whitespace-nowrap ${
                activeFilter === null
                  ? "bg-foreground text-background border-foreground"
                  : "bg-muted text-muted-foreground border-border hover:border-foreground/30"
              }`}
              data-testid="pill-all"
            >
              Toutes
            </button>
            {priorities.map((priority) => (
              <PriorityPill
                key={priority.id}
                id={priority.id}
                title={priority.title}
                icon={priority.icon}
                isActive={activeFilter === priority.id}
                onClick={() =>
                  setActiveFilter(activeFilter === priority.id ? null : priority.id)
                }
              />
            ))}
          </div>
        </div>

        <section className="py-6">
          <div className="grid gap-4">
            {filteredMeasures.map((measure, index) => (
              <MeasureCard key={measure.id} measure={measure} index={index} />
            ))}
          </div>

          {filteredMeasures.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              Aucune mesure trouvée
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
