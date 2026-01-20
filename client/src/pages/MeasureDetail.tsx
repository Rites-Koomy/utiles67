import { useParams, Link } from "wouter";
import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { QuestionsModal } from "@/components/QuestionsModal";
import { EngagementBlock } from "@/components/EngagementBlock";
import { getMeasureById, getPriorityById, MeasureProposition } from "@/data";
import { ArrowLeft, Play, MessageCircle, UserPlus, CheckCircle2, Target, Wrench, BarChart3 } from "lucide-react";

export default function MeasureDetail() {
  const { id } = useParams<{ id: string }>();
  const measure = getMeasureById(id || "");
  const priority = measure ? getPriorityById(measure.priorityId) : null;
  const [showQuestions, setShowQuestions] = useState(false);

  // Scroll to top when the component mounts or when the measure ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!measure) {
    return (
      <Layout>
        <div className="max-w-lg mx-auto px-4 py-12 text-center">
          <h1 className="text-xl font-semibold mb-4">Mesure introuvable</h1>
          <Link href="/">
            <span className="text-primary hover:underline">Retour à l'accueil</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const tagColors: Record<string, string> = {
    "Mobilité": "bg-teal-50 text-teal-700 border-teal-200",
    "Logement": "bg-amber-50 text-amber-700 border-amber-200",
    "Écologie": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Solidarité": "bg-rose-50 text-rose-700 border-rose-200",
    "Démocratie": "bg-violet-50 text-violet-700 border-violet-200",
  };

  const hasCover = measure.coverImage && measure.coverImage.trim() !== "";

  const renderSectionContent = (content: string | string[] | MeasureProposition[]) => {
    if (typeof content === "string") {
      return <p className="text-muted-foreground leading-relaxed">{content}</p>;
    }
    
    if (Array.isArray(content)) {
      if (content.length === 0) return null;
      
      // Check if it's an array of objects (MeasureProposition)
      if (typeof content[0] === 'object') {
         return (
          <ul className="space-y-4">
            {(content as MeasureProposition[]).map((item, i) => (
              <li key={i} className="flex gap-3">
                 <div className="min-w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                 <div>
                    <span className="font-semibold text-foreground block mb-1">{item.title}</span>
                    <span className="text-muted-foreground leading-relaxed">{item.description}</span>
                 </div>
              </li>
            ))}
          </ul>
        );
      }

      // Standard string array (Mise en oeuvre, Indicateurs)
      return (
        <ul className="space-y-2">
          {(content as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <div className="min-w-1.5 h-1.5 mt-2 rounded-full bg-primary/60 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4 py-6">
        <Link href="/">
          <span
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            data-testid="link-back"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Retour</span>
          </span>
        </Link>

        {hasCover && (
          <div className="mb-6 -mx-4 sm:mx-0 sm:rounded-2xl overflow-hidden animate-fade-up">
            <img
              src={measure.coverImage}
              alt={measure.coverAlt || measure.title}
              className="w-full h-48 sm:h-56 object-cover"
              loading="eager"
            />
          </div>
        )}

        <header className="mb-8 animate-fade-up stagger-1">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${
                tagColors[measure.tag] || "bg-muted text-muted-foreground"
              }`}
            >
              {measure.tag}
            </span>
            {priority && (
              <span className="text-xs text-muted-foreground">
                {priority.title}
              </span>
            )}
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 leading-tight">
            {measure.title}
          </h1>

          <p className="text-lg text-primary font-medium">
            {measure.impact}
          </p>
        </header>

        <div className="space-y-6 mb-6">
          <section className="bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up stagger-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target size={18} className="text-primary" />
              </div>
              <h2 className="font-display font-semibold text-foreground">Le constat</h2>
            </div>
            {renderSectionContent(measure.constat)}
          </section>

          <section className="bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up stagger-3">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-primary" />
                </div>
                <h2 className="font-display font-semibold text-foreground">Nos propositions</h2>
              </div>
              {renderSectionContent(measure.proposition)}
          </section>

          <section className="bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up stagger-4">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wrench size={18} className="text-primary" />
                </div>
                <h2 className="font-display font-semibold text-foreground">Mise en œuvre</h2>
              </div>
              {renderSectionContent(measure.miseEnOeuvre)}
          </section>

           <section className="bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up stagger-5">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 size={18} className="text-primary" />
                </div>
                <h2 className="font-display font-semibold text-foreground">Indicateurs de suivi</h2>
              </div>
              {renderSectionContent(measure.indicateur)}
          </section>
        </div>

        <EngagementBlock
          measureId={measure.id}
          measureTitle={measure.title}
          baseSupportCount={measure.baseSupportCount}
          baseReactionCount={measure.baseReactionCount}
        />

        <div className="space-y-3 mt-10 opacity-0 animate-fade-up stagger-6">
          {measure.videoId && (
            <a
              href={`https://www.youtube.com/watch?v=${measure.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-medium transition-colors"
              data-testid="button-video"
            >
              <Play size={18} />
              Voir la vidéo explicative
            </a>
          )}

          <button
            onClick={() => setShowQuestions(true)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 border border-border hover:border-primary/30 hover:bg-muted rounded-xl font-medium transition-colors"
            data-testid="button-question"
          >
            <MessageCircle size={18} />
            Une question ? Écrivez-nous
          </button>

          <Link href="/rejoindre">
            <span
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-colors"
              data-testid="button-rejoindre"
            >
              <UserPlus size={18} />
              Rejoindre le mouvement
            </span>
          </Link>
        </div>
      </div>

      <QuestionsModal isOpen={showQuestions} onClose={() => setShowQuestions(false)} />
    </Layout>
  );
}
