import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { getMeasureById, getPriorityById } from "@/data";
import { ArrowLeft, Play, MessageCircle, UserPlus, CheckCircle2, Target, Wrench, BarChart3 } from "lucide-react";

export default function MeasureDetail() {
  const { id } = useParams<{ id: string }>();
  const measure = getMeasureById(id || "");
  const priority = measure ? getPriorityById(measure.priorityId) : null;

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

  const sections = [
    { icon: Target, title: "Le constat", content: measure.constat },
    { icon: CheckCircle2, title: "Notre proposition", content: measure.proposition },
    { icon: Wrench, title: "Mise en œuvre", content: measure.miseEnOeuvre },
    { icon: BarChart3, title: "Indicateur de réussite", content: measure.indicateur },
  ];

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

        <header className="mb-8 animate-fade-up">
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

        <div className="space-y-6 mb-10">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className={`bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <section.icon size={18} className="text-primary" />
                </div>
                <h2 className="font-display font-semibold text-foreground">
                  {section.title}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="space-y-3 opacity-0 animate-fade-up stagger-5">
          {measure.videoId && (
            <a
              href={`https://www.youtube.com/watch?v=${measure.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-medium transition-colors"
              data-testid="button-video"
            >
              <Play size={18} />
              Voir la vidéo
            </a>
          )}

          <button
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 border border-border hover:border-primary/30 hover:bg-muted rounded-xl font-medium transition-colors"
            data-testid="button-question"
          >
            <MessageCircle size={18} />
            Poser une question
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
    </Layout>
  );
}
