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
import { priorities, measures, getMeasuresByPriorityId } from "@/data";

import { ExpandableInfoBox } from "@/components/ExpandableInfoBox";
import { LinkPreviewCard, type ActuPreview } from "@/components/LinkPreviewCard";
import previewsJson from "@/content/actu.previews.json";
import { Link } from "wouter";
import { CampaignSlideshow } from "@/components/CampaignSlideshow";

const actuHighlights = (previewsJson as ActuPreview[]).slice(0, 3);

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const presentationText = `Chères Strasbourgeoises, chers Strasbourgeois,
On peut naître ailleurs, parfois très loin,et aimer profondément une ville au point d’apporter sa pierre à l’édifi ce.
Strasbourg est de celles qui accueillent, qui transforment, qui donnent une place.
Elle est de celles qui ne demandent pas d’où l’on vient, mais ce que l’on est prêt à construire.
Depuis plus de vingt deux ans, je vis Strasbourg au quotidien. Je la parcours dans ses quartiers, ses rues, ses commerces, ses lieux de vie.
Je l’ai surtout écoutée. Sans posture. Sans promesses faciles. En prenant le temps de comprendre ce que vous vivez réellement.
Ces derniers mois, vous avez été nombreuses et nombreux à vous exprimer. 303 habitants ont écrit leurs attentes dans un cahier de doléances citoyen.
1 235 autres ont partagé leurs réalités lors de cafés, d’ateliers, de rencontres de proximité.
Ce programme est né là, sur le terrain, dans vos mots, vos expériences, vos espoirs.
J’y ai entendu le besoin de justice, de respect, de solutions concrètes. Le désir d’une ville plus proche, plus humaine, plus attentive à celles et ceux qui la font vivre
chaque jour : habitants, commerçants, familles, jeunes, seniors.Nous avons fait un choix simple mais exigeant : écouter avant de proposer, construire avant de
promettre.
Le projet UTILES pour Strasbourg est le fruit de ce travail collectif. Il renforce la démocratie locale, soutient le commerce de proximité, protège le logement, facilite
« On peut naître ailleurs, parfois très l
les mobilités et réconcilie écologie et quotidien. Ce programme est public, transparent et évolutif.
et aimer profondément une ville au po
Les premières mesures sont consultables en ligne : https://www.mohamed-sylla.com/programme- utiles-strasbourg-2026 Je ne viens pas d’un appareil politique.
Je viens du réel. Et c’est ce regard-là, façonné par le terrain et par l’attachement sincère à cette ville, que je souhaite mettre au service de Strasbourg. Une ville
d’accueil, de diversité et de possibles, où chacun doit pouvoir trouver sa place et contribuer au bien commun.
Ma candidature n’est pas une ambition personnelle. C’est un engagement, nourri par le travail accompli ensemble et par une conviction forte : Strasbourg peut
faire mieux, autrement,avec ses habitants. Je porterai ce projet avec constance, détermination et humilité. Et je continuerai à le construire avec vous. Parce qu’une
ville ne se dirige pas d’en haut. Elle
se bâtit ensemble.
M
Strasbourg, le 21 janvier 2026
Mohamed Sylla
Candidat UTILES pour Strasbourg-Municipales 2026`;

  const filteredMeasures = activeFilter
    ? getMeasuresByPriorityId(activeFilter)
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
            title='LE MOUVEMENT "UTILES"'
            content={presentationText}
          />

          <div className="mb-6 rounded-2xl border border-card-border bg-card p-5 opacity-0 animate-fade-up stagger-1">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Élections Municipales 2026
            </p>
            <h2 className="mt-2 text-xl font-semibold text-foreground">
              La liste UTILES Strasbourg
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Découvrez les membres de notre liste complète pour les élections municipales, présentée dans l'ordre numéroté.
            </p>
            <div className="mt-4">
              <Link
                href="/liste-utiles-strasbourg"
                className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition hover:bg-primary/5"
              >
                Voir la liste complète
              </Link>
            </div>
          </div>

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

        <section className="py-8">
          <div className="mb-4 flex items-end justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Actu
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Dernières retombées
              </h2>
            </div>
            <Link
              href="/actu"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-primary transition hover:text-primary/80"
            >
              Voir toute l’actu
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {actuHighlights.map((preview) => (
              <LinkPreviewCard
                key={preview.id}
                preview={preview}
                className="min-h-[280px]"
              />
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Photos
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Photos de campagne
              </h2>
              <p className="text-sm text-muted-foreground">
                Un aperçu des rencontres et moments forts du mouvement, mis en valeur depuis notre CDN.
              </p>
            </div>
            <Link
              href="/photos"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-primary transition hover:text-primary/80"
            >
              Voir toutes les photos
            </Link>
          </div>
          <CampaignSlideshow />
          <div className="mt-4 flex justify-end">
            <Link
              href="/photos"
              className="rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Plus de photos
            </Link>
          </div>
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
