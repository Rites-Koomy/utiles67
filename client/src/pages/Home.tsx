import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/HeroSection";
import { MeasureCard } from "@/components/MeasureCard";
import { PriorityPill } from "@/components/PriorityPill";
import { TeamSection } from "@/components/TeamSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { QuestionsBlock } from "@/components/QuestionsBlock";
import { YouthSection } from "@/components/YouthSection";
import { priorities, measures, getMeasuresByPriority } from "@/data";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredMeasures = activeFilter
    ? getMeasuresByPriority(activeFilter)
    : measures;

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4">
        <HeroSection />

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

        <YouthSection />

        <TeamSection />

        <FeedbackSection />

        <QuestionsBlock />

        <section className="py-8 text-center opacity-0 animate-fade-up">
          <p className="text-sm text-muted-foreground">
            Venez comme vous êtes. Ensemble, construisons demain.
          </p>
        </section>
      </div>
    </Layout>
  );
}
