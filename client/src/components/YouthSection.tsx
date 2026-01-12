import { useState } from "react";
import { Sparkles, MessageSquare, Rocket, X, Send, Check, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { youth } from "@/data";

const quartiers = [
  "Centre-ville", "Neudorf", "Krutenau", "Orangerie", "Robertsau",
  "Hautepierre", "Koenigshoffen", "Elsau", "Meinau", "Neuhof", "Port du Rhin", "Autre"
];

const situations = [
  "Étudiant·e",
  "Apprenti·e",
  "Jeune actif·ve",
  "En recherche d'emploi",
  "Autre"
];

export function YouthSection() {
  const [showAspirations, setShowAspirations] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    situation: "",
    quartier: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("utiles67_aspirations_jeunes") || "[]");
    localStorage.setItem("utiles67_aspirations_jeunes", JSON.stringify([
      ...existing,
      { ...formData, timestamp: new Date().toISOString(), id: Date.now() }
    ]));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ message: "", situation: "", quartier: "" });
      setShowAspirations(false);
    }, 2500);
  };

  const scrollToFeedback = () => {
    const el = document.getElementById("feedback-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="py-10 opacity-0 animate-fade-up">
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img
            src={youth}
            alt="Jeunes de Strasbourg"
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={18} className="text-white" />
              <h2 className="font-display font-bold text-xl text-white">
                Jeunes de Strasbourg
              </h2>
            </div>
            <p className="text-white/90 text-sm">
              Vos aspirations comptent. Dites-nous ce que vous voulez pour la ville.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <button
            onClick={scrollToFeedback}
            className="group bg-card rounded-2xl border border-card-border p-5 text-left hover:border-primary/20 hover:shadow-md transition-all"
            data-testid="button-youth-quotidien"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <MessageSquare size={20} className="text-secondary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                Mon quotidien
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Partagez ce que vous vivez au jour le jour.
            </p>
          </button>

          <button
            onClick={() => setShowAspirations(true)}
            className="group bg-card rounded-2xl border border-card-border p-5 text-left hover:border-primary/20 hover:shadow-md transition-all"
            data-testid="button-youth-aspirations"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Rocket size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                Mes aspirations
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Imaginez le Strasbourg de demain.
            </p>
          </button>
        </div>
      </section>

      <AnimatePresence>
        {showAspirations && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowAspirations(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Rocket size={20} className="text-primary" />
                    </div>
                    <h2 className="font-display font-bold text-lg text-foreground">
                      Vos aspirations
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowAspirations(false)}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {submitted ? (
                  <div className="flex items-center gap-3 py-8 text-primary animate-scale-in">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Merci pour votre vision !</p>
                      <p className="text-sm text-muted-foreground">Votre voix compte pour demain.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Comment voyez-vous Strasbourg dans 2-3 ans ? Qu'est-ce qui vous manque aujourd'hui ?
                    </p>

                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      placeholder="Ce que vous voulez pour Strasbourg..."
                      className="w-full px-4 py-3 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      data-testid="textarea-aspirations"
                    />

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Votre situation
                        </label>
                        <select
                          value={formData.situation}
                          onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                          required
                          className="w-full px-4 py-2.5 bg-muted border border-input rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                          data-testid="select-situation"
                        >
                          <option value="" disabled>Choisir</option>
                          {situations.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Quartier <span className="text-muted-foreground">(optionnel)</span>
                        </label>
                        <div className="relative">
                          <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                          <select
                            value={formData.quartier}
                            onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                            className="w-full pl-9 pr-4 py-2.5 bg-muted border border-input rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                            data-testid="select-youth-quartier"
                          >
                            <option value="">Non précisé</option>
                            {quartiers.map((q) => (
                              <option key={q} value={q}>{q}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-colors"
                      data-testid="button-send-aspirations"
                    >
                      <Send size={18} />
                      Partager ma vision
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
