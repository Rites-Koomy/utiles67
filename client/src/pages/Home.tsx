import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/HeroSection";
import { MeasureCard } from "@/components/MeasureCard";
import { PriorityPill } from "@/components/PriorityPill";
import { TeamSection } from "@/components/TeamSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { QuestionsBlock } from "@/components/QuestionsBlock";
import { YouthSection } from "@/components/YouthSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { priorities, measures, getMeasuresByPriority } from "@/data";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredMeasures = activeFilter
    ? getMeasuresByPriority(activeFilter)
    : measures;

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollPosition);
      return () => el.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  useEffect(() => {
    if (!hasAnimated && scrollRef.current) {
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ left: 60, behavior: "smooth" });
          setTimeout(() => {
            scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
            setHasAnimated(true);
          }, 400);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4">
        <HeroSection />

        <div className="sticky top-14 z-30 -mx-4 px-4 py-3 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/95 shadow-md rounded-full border border-border text-muted-foreground hover:text-foreground transition-all"
                aria-label="Défiler vers la gauche"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto hide-scrollbar px-1 pb-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
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

            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/95 shadow-md rounded-full border border-border text-muted-foreground hover:text-foreground transition-all"
                aria-label="Défiler vers la droite"
              >
                <ChevronRight size={18} />
              </button>
            )}
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
