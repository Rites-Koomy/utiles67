import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SeoMeta } from "@/components/SeoMeta";

const municipalCandidates = [
  "Mohamed Sylla, 45 ans – Responsable syndical",
  "Françoise Werckmann, 77 ans – Juriste, spécialiste de la participation citoyenne",
  "Thibaut Vinci, 39 ans – Fonctionnaire de police",
  "Colette Vallé, 94 ans – Retraitée",
  "Frédéric Cadiot, 69 ans – Retraité",
  "Mina Bezzari, 57 ans – Militante associative",
  "Ismaïl Becherirat, 37 ans – Conducteur de tramway",
  "Samira Kardouz-Talbi, 49 ans – Cadre bancaire",
  "Benyahia Meziane, 56 ans – Président d’association",
  "Khadija Arratbi, 50 ans – Cheffe d’entreprise",
  "Amar Meferedj, 49 ans – Logisticien",
  "Aurélie Royer, 46 ans – Infirmière",
  "Julien Martin, 44 ans – Avocat",
  "Jennifer Alexer, 33 ans – Esthéticienne",
  "Léo Serfati, 37 ans – Juriste",
  "Evaelle El Haïk, 22 ans – Étudiante",
  "Kevin Schott, 40 ans – Cadre du secteur digital",
  "Aminata Gueye, 51 ans – Assistante administrative",
  "Pascal Ackermann, 58 ans – Professeur des écoles",
  "Sarah Bouchair, 28 ans – Infirmière libérale",
  "Abou Diakité, 52 ans – Ancien sportif international",
  "Imane Boudahra, 24 ans – Étudiante",
  "Ouissam Fallah, 31 ans – Chef d’entreprise",
  "Hayate Taibi, 45 ans – Infirmière libérale",
  "Guillaume Devaux, 39 ans – Cadre",
  "Karen Esther El Haïk, 49 ans – Assistante administrative",
  "Habib Bentaieb, 69 ans – Artisan couturier",
  "Aziza Zouhair, 57 ans – Employée",
  "Mohamed Ouraïs, 47 ans – Commerçant",
  "Marie-Kaline Grondin, 45 ans – Employée",
  "Nabil Nachba, 41 ans – Employé",
  "Hélène Joséphine, 70 ans – Présidente d’association",
  "Nurdogan Hayta, 26 ans – Chef d’entreprise",
  "Donia Bekkouch, 27 ans – Étudiante",
  "Maxence El Haïk, 21 ans – Étudiant",
  "Marie Mbarga Ateba, 50 ans – Aide-soignante",
  "Benjamin Dominé, 29 ans – Agent de maîtrise",
  "Tugce Agdere, 25 ans – Assistante administrative",
  "Ben-Ali Mustapha, 33 ans – Ambulancier",
  "Valérie Cebokli, 57 ans – Puéricultrice",
  "Srdan Pozarac, 37 ans – Responsable d’équipe logistique",
  "Haby Badiane, 34 ans – Aide-soignante",
  "Mounir Boudra, 44 ans – Ingénieur informaticien",
  "Rania Bezzari, 23 ans – Employée",
  "Rachid Boumahdi, 39 ans – Responsable d’équipe logistique",
  "Sabine Zielonka, 47 ans – Professeure des écoles",
  "Moustafa Lkhiati, 34 ans – Employé",
  "Dounya Dinari, 32 ans – Conseillère bancaire",
  "Lenny N’Dinga, 23 ans – Étudiant",
  "Marie-Claire Naas, 67 ans – Retraitée",
  "Youssef El Arbaouin, 45 ans – Chef d’entreprise",
  "Léa Caceres Albarran, 29 ans – Étudiante",
  "Rites Massamba, 43 ans – Chef d’entreprise",
  "Marie Wagemann, 72 ans – Retraitée",
  "Jean-Marie Rubine, 74 ans – Retraité",
  "Fatima Namli, 63 ans – Assistante de direction",
  "Yao N’Guessan, 71 ans – Retraité",
  "Khadija Semhi, 61 ans – Travailleuse sociale",
  "Yassine Zouhair, 24 ans – Étudiant",
  "Makbule Agdere, 28 ans – Artisane",
  "Karim El Moussaoui, 42 ans – Opérateur",
  "Nathalie Many, 47 ans – Assistante de direction",
  "Hamidou Sissoko, 47 ans – Assistant administratif (secteur bancaire)",
  "Nora Haag, 28 ans – Coiffeuse",
  "Adil Talbaoui, 40 ans – Chef d’entreprise",
  "Danielle Stegwalt, 68 ans – Retraitée",
];

export default function MunicipalList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SeoMeta
        title="Liste UTILES Strasbourg | Municipales Strasbourg 2026"
        description="Découvrez la liste officielle UTILES Strasbourg pour les élections municipales 2026, classée dans l’ordre complet."
        path="/liste-utiles-strasbourg"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Liste UTILES pour Strasbourg",
          numberOfItems: municipalCandidates.length,
          itemListElement: municipalCandidates.map((candidate, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: candidate,
          })),
        }}
      />
      <div className="max-w-lg mx-auto px-4 py-6">
        <Link href="/">
          <span className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Retour</span>
          </span>
        </Link>

        <header className="mb-6 opacity-0 animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Élections Municipales 2026
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-foreground">
            La liste UTILES Strasbourg
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Liste UTILES pour Strasbourg, présentée dans l'ordre officiel.
          </p>
        </header>

        <section className="mb-6 overflow-hidden rounded-3xl border border-card-border bg-card opacity-0 animate-fade-up stagger-1">
          <div className="aspect-[16/10] w-full bg-muted">
            <img
              src="https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev/Image-campagne/Liste-utiles-.jpeg"
              alt="Photo de groupe des membres de la liste UTILES Strasbourg"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="border-t border-border/60 px-4 py-3">
            <p className="text-sm font-medium text-foreground">
              Les membres de la liste UTILES Strasbourg
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Une photo de groupe pour accompagner la présentation complète de la liste.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-card-border bg-card p-4 opacity-0 animate-fade-up stagger-2">
          <ol className="space-y-3">
            {municipalCandidates.map((candidate, index) => (
              <li
                key={`${index + 1}-${candidate}`}
                className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{candidate}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </Layout>
  );
}
