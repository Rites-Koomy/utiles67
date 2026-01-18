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

import { ExpandableInfoBox } from "@/components/ExpandableInfoBox";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const presentationText = `UTILES 67 est un mouvement citoyen local implanté dans le Bas-Rhin et profondément ancrée dans les réalités de terrain, issu de l’émancipation locale de la dynamique portée au niveau national par le groupe parlementaire LIOT.

UTILES 67 rassemble des citoyennes et des citoyens aux parcours, origines et sensibilités diverses, unis par l’envie de construire des solutions concrètes, utiles et applicables au quotidien.

Notre démarche repose sur l’écoute, la méthode est la participation citoyenne : cahiers de doléances, rencontres de quartier, cafés citoyens et ateliers participatifs nourrissent nos propositions.

Nous croyons en une écologie de solutions, une démocratie locale vivante, une solidarité active et une ville qui fait confiance à ses habitants.

UTILES 67 n’est ni un parti traditionnel ni un mouvement hors-sol, c’est un collectif ouvert, indépendant et engagé, qui place l’intérêt général, la transparence et l’humain au cœur de l’action.`;

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
      const el = scrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const duration = 4000;
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;
      let animationId: ReturnType<typeof setTimeout>;
      let cancelled = false;

      const handleInteraction = () => {
        cancelled = true;
        setHasAnimated(true);
      };

      el.addEventListener("touchstart", handleInteraction, { passive: true });
      el.addEventListener("mousedown", handleInteraction);

      const animateScroll = () => {
        if (cancelled || !scrollRef.current) return;
        
        currentStep++;
        const progress = currentStep / steps;
        const eased = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        scrollRef.current.scrollLeft = eased * maxScroll;
        
        if (currentStep < steps) {
          animationId = setTimeout(animateScroll, stepTime);
        } else {
          setTimeout(() => {
            if (!cancelled && scrollRef.current) {
              let returnStep = 0;
              const animateReturn = () => {
                if (cancelled || !scrollRef.current) return;
                returnStep++;
                const p = returnStep / steps;
                const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
                scrollRef.current.scrollLeft = maxScroll * (1 - e);
                if (returnStep < steps) {
                  setTimeout(animateReturn, stepTime);
                } else {
                  setHasAnimated(true);
                }
              };
              animateReturn();
            }
          }, 800);
        }
      };

      const startTimer = setTimeout(() => {
        if (!cancelled) animateScroll();
      }, 1000);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(animationId);
        el.removeEventListener("touchstart", handleInteraction);
        el.removeEventListener("mousedown", handleInteraction);
      };
    }
  }, [hasAnimated]);

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4">
        <HeroSection />

        <div className="sticky top-14 z-30 -mx-4 py-3 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="flex items-center gap-1">
            <button
              onClick={() => scroll("left")}
              className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all ${
                showLeftArrow ? "opacity-100" : "opacity-30 pointer-events-none"
              }`}
              aria-label="Défiler vers la gauche"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto hide-scrollbar flex-1"
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

            <button
              onClick={() => scroll("right")}
              className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all ${
                showRightArrow ? "opacity-100" : "opacity-30 pointer-events-none"
              }`}
              aria-label="Défiler vers la droite"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <section className="py-6">
          <ExpandableInfoBox 
            title="Présentation du mouvement"
            content={presentationText}
          />

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
