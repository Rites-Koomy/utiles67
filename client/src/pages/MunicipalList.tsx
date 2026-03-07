import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { team } from "@/data";

export default function MunicipalList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
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
            Composition complète de la liste, présentée dans l'ordre numéroté.
          </p>
        </header>

        <section className="rounded-2xl border border-card-border bg-card p-4 opacity-0 animate-fade-up stagger-1">
          <ol className="space-y-3">
            {team.map((member, index) => (
              <li
                key={member.id}
                className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{member.name.trim()}</p>
                  <p className="text-xs text-muted-foreground">
                    {member.utilesRole || "Membre de la liste"}
                    {member.quartier ? ` - ${member.quartier}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </Layout>
  );
}
