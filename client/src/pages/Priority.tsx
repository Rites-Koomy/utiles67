import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { MeasureCard } from "@/components/MeasureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { IllustrationBlock } from "@/components/IllustrationBlock";
import { getPriorityById, getMeasuresByPriority } from "@/data";
import { ArrowLeft, Play, Bike, Home, Leaf, Heart, Users, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bike,
  Home,
  Leaf,
  Heart,
  Users,
};

export default function Priority() {
  const { id } = useParams<{ id: string }>();
  const priority = getPriorityById(id || "");
  const measures = priority ? getMeasuresByPriority(priority.id) : [];

  if (!priority) {
    return (
      <Layout>
        <div className="max-w-lg mx-auto px-4 py-12 text-center">
          <h1 className="text-xl font-semibold mb-4">Priorité introuvable</h1>
          <Link href="/">
            <span className="text-primary hover:underline">Retour à l'accueil</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = iconMap[priority.icon] || Leaf;
  const showMidIllustration = measures.length > 4;

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

        <div className="mb-6 animate-fade-up">
          <ImagePlaceholder
            src={priority.heroImage}
            alt={priority.heroAlt || priority.title}
            aspectRatio="video"
          />
        </div>

        <header className="mb-8 animate-fade-up stagger-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon size={22} className="text-primary" />
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              {priority.title}
            </h1>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {priority.description}
          </p>

          {priority.videoId && (
            <a
              href={`https://www.youtube.com/watch?v=${priority.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl text-sm font-medium transition-colors"
              data-testid="button-priority-video"
            >
              <Play size={16} />
              Voir la vidéo
            </a>
          )}
        </header>

        <section className="mb-10">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">
            Nos mesures
          </h2>
          <div className="grid gap-4">
            {measures.slice(0, showMidIllustration ? Math.ceil(measures.length / 2) : measures.length).map((measure, index) => (
              <MeasureCard key={measure.id} measure={measure} index={index} />
            ))}

            {showMidIllustration && (
              <IllustrationBlock
                title="Agir ensemble"
                image=""
                alt="Illustration thématique"
                index={Math.ceil(measures.length / 2)}
              />
            )}

            {showMidIllustration && measures.slice(Math.ceil(measures.length / 2)).map((measure, index) => (
              <MeasureCard key={measure.id} measure={measure} index={index + Math.ceil(measures.length / 2) + 1} />
            ))}
          </div>
        </section>

        <section className="bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up">
          <h2 className="font-display font-semibold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-foreground mb-1">Comment sont financées ces mesures ?</p>
              <p className="text-muted-foreground">Chaque mesure est budgétée dans notre programme. Nous privilégions la réallocation plutôt que l'augmentation des impôts.</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Quel est le calendrier prévu ?</p>
              <p className="text-muted-foreground">Les premières mesures seront lancées dès la première année du mandat. Le détail est dans chaque fiche mesure.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
