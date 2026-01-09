import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { config } from "@/config";
import { getStoredContributions, clearContributions, Contribution } from "@/lib/contributions";
import { Lock, Trash2, Download, Heart, HandHelping, MessageSquare } from "lucide-react";

export default function AdminLocal() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (unlocked) {
      setContributions(getStoredContributions());
    }
  }, [unlocked]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === config.adminCode) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Code incorrect");
    }
  };

  const handleClear = () => {
    if (confirm("Supprimer toutes les contributions locales ?")) {
      clearContributions();
      setContributions([]);
    }
  };

  const handleExport = () => {
    const json = JSON.stringify(contributions, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `utiles67_contributions_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "support": return <Heart size={14} className="text-rose-500" />;
      case "help": return <HandHelping size={14} className="text-amber-500" />;
      case "comment": return <MessageSquare size={14} className="text-teal-500" />;
      default: return null;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "support": return "Soutien";
      case "help": return "Aide";
      case "comment": return "Commentaire";
      default: return type;
    }
  };

  if (!unlocked) {
    return (
      <Layout showFooter={false}>
        <div className="max-w-sm mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={28} className="text-muted-foreground" />
            </div>
            <h1 className="font-display font-bold text-xl text-foreground mb-2">
              Accès réservé
            </h1>
            <p className="text-sm text-muted-foreground">
              Cette page est réservée à l'équipe UTILES.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code d'accès"
                className="w-full px-4 py-3 bg-card border border-input rounded-xl text-foreground text-center tracking-widest placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              {error && (
                <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-colors"
            >
              Accéder
            </button>
          </form>
        </div>
      </Layout>
    );
  }

  const supports = contributions.filter(c => c.type === "support").length;
  const helps = contributions.filter(c => c.type === "help").length;
  const comments = contributions.filter(c => c.type === "comment").length;

  return (
    <Layout showFooter={false}>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display font-bold text-xl text-foreground">
            Contributions locales
          </h1>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 px-3 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg text-sm font-medium transition-colors"
            >
              <Download size={14} />
              Exporter
            </button>
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-sm font-medium transition-colors"
            >
              <Trash2 size={14} />
              Vider
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-card rounded-xl border border-card-border p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{supports}</div>
            <div className="text-xs text-muted-foreground">Soutiens</div>
          </div>
          <div className="bg-card rounded-xl border border-card-border p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{helps}</div>
            <div className="text-xs text-muted-foreground">Aides</div>
          </div>
          <div className="bg-card rounded-xl border border-card-border p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{comments}</div>
            <div className="text-xs text-muted-foreground">Commentaires</div>
          </div>
        </div>

        {contributions.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            Aucune contribution enregistrée.
          </div>
        ) : (
          <div className="space-y-3">
            {[...contributions].reverse().map((c, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-card-border p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(c.type)}
                    <span className="text-sm font-medium text-foreground">
                      {getTypeLabel(c.type)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      · {c.measureId}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(c.timestamp).toLocaleString("fr-FR")}
                  </span>
                </div>

                {c.text && (
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "{c.text}"
                  </p>
                )}

                {c.contact && (c.contact.name || c.contact.email || c.contact.quartier) && (
                  <div className="text-xs text-muted-foreground space-x-2">
                    {c.contact.name && <span>👤 {c.contact.name}</span>}
                    {c.contact.email && <span>✉️ {c.contact.email}</span>}
                    {c.contact.quartier && <span>📍 {c.contact.quartier}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
