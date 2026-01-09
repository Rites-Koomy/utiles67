import { useState, useEffect, useRef } from "react";
import { Heart, HandHelping, Send, Check, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  saveContribution,
  hasUserVoted,
  markUserVoted,
  getBaseCountForMeasure,
  getLocalIncrements,
} from "@/lib/contributions";
import { isHoneypotFilled } from "@/lib/forms";

interface EngagementBlockProps {
  measureId: string;
  measureTitle: string;
  baseSupportCount?: number;
  baseReactionCount?: number;
}

const quartiers = [
  "Centre-ville", "Neudorf", "Krutenau", "Orangerie", "Robertsau",
  "Hautepierre", "Koenigshoffen", "Elsau", "Meinau", "Neuhof", "Port du Rhin", "Autre"
];

export function EngagementBlock({
  measureId,
  measureTitle,
  baseSupportCount,
  baseReactionCount,
}: EngagementBlockProps) {
  const [hasSupported, setHasSupported] = useState(false);
  const [hasHelped, setHasHelped] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [comment, setComment] = useState("");
  const [helpForm, setHelpForm] = useState({ name: "", email: "", quartier: "", website: "" });
  const [canSubmitHelp, setCanSubmitHelp] = useState(false);
  
  const baseSupport = baseSupportCount ?? getBaseCountForMeasure(measureId, "support");
  const baseReaction = baseReactionCount ?? getBaseCountForMeasure(measureId, "reaction");
  
  const [displaySupports, setDisplaySupports] = useState(baseSupport);
  const [displayReactions, setDisplayReactions] = useState(baseReaction);
  
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setHasSupported(hasUserVoted(measureId, "support"));
    setHasHelped(hasUserVoted(measureId, "help"));
    
    const increments = getLocalIncrements(measureId);
    setDisplaySupports(baseSupport + increments.supports);
    setDisplayReactions(baseReaction + increments.reactions);
  }, [measureId, baseSupport, baseReaction]);

  useEffect(() => {
    if (showHelpModal) {
      setCanSubmitHelp(false);
      const timer = setTimeout(() => setCanSubmitHelp(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [showHelpModal]);

  useEffect(() => {
    const tick = () => {
      const delay = 45000 + Math.random() * 75000;
      tickRef.current = setTimeout(() => {
        if (Math.random() > 0.5) {
          setDisplaySupports(s => s + 1);
        }
        tick();
      }, delay);
    };
    tick();
    return () => {
      if (tickRef.current) clearTimeout(tickRef.current);
    };
  }, []);

  const showFeedback = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSupport = async () => {
    if (hasSupported) return;
    
    await saveContribution({
      type: "support",
      measureId,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    });
    
    markUserVoted(measureId, "support");
    setHasSupported(true);
    setDisplaySupports(s => s + 1);
    showFeedback("Merci pour votre soutien !");
  };

  const handleHelpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isHoneypotFilled(helpForm.website)) {
      markUserVoted(measureId, "help");
      setHasHelped(true);
      setShowHelpModal(false);
      showFeedback("Merci ! On vous recontacte bientôt.");
      return;
    }
    
    await saveContribution({
      type: "help",
      measureId,
      timestamp: new Date().toISOString(),
      contact: {
        name: helpForm.name || undefined,
        email: helpForm.email || undefined,
        quartier: helpForm.quartier || undefined,
      },
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    });
    
    markUserVoted(measureId, "help");
    setHasHelped(true);
    setShowHelpModal(false);
    setDisplayReactions(r => r + 1);
    showFeedback("Merci ! On vous recontacte bientôt.");
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    await saveContribution({
      type: "comment",
      measureId,
      timestamp: new Date().toISOString(),
      text: comment,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    });
    
    setComment("");
    setDisplayReactions(r => r + 1);
    showFeedback("Merci. Votre contribution compte.");
  };

  return (
    <>
      <section className="mt-10 pt-8 border-t border-border">
        <h3 className="font-display font-semibold text-lg text-foreground mb-4">
          Cette mesure vous parle ?
        </h3>

        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={handleSupport}
            disabled={hasSupported}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              hasSupported
                ? "bg-primary/10 text-primary cursor-default"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}
            aria-label={hasSupported ? "Vous soutenez cette mesure" : "Soutenir cette mesure"}
            data-testid="button-support"
          >
            <Heart size={18} className={hasSupported ? "fill-current" : ""} />
            {hasSupported ? "Soutenu !" : "Je soutiens cette idée"}
          </button>

          <button
            onClick={() => setShowHelpModal(true)}
            disabled={hasHelped}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all border ${
              hasHelped
                ? "bg-muted text-muted-foreground border-border cursor-default"
                : "bg-card hover:bg-muted text-foreground border-border hover:border-primary/30"
            }`}
            aria-label={hasHelped ? "Inscription reçue" : "Je veux aider à porter cette mesure"}
            data-testid="button-help"
          >
            <HandHelping size={18} />
            {hasHelped ? "Inscription reçue" : "Je veux aider à la porter"}
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <Heart size={14} className="text-primary" />
            <strong className="text-foreground">{displaySupports.toLocaleString("fr-FR")}</strong> soutiens
          </span>
          <span className="flex items-center gap-1.5">
            <Send size={14} className="text-primary" />
            <strong className="text-foreground">{displayReactions.toLocaleString("fr-FR")}</strong> contributions
          </span>
        </div>

        <form onSubmit={handleCommentSubmit} className="flex gap-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Un mot, une idée, un ressenti ?"
            aria-label="Ajouter un commentaire"
            className="flex-1 px-4 py-2.5 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
            data-testid="input-comment"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            aria-label="Envoyer le commentaire"
            className="px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-send-comment"
          >
            <Send size={16} />
          </button>
        </form>
      </section>

      <AnimatePresence>
        {showHelpModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowHelpModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="help-modal-title"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 id="help-modal-title" className="font-display font-bold text-lg text-foreground">
                      Aider à porter cette mesure
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Laissez-nous vos coordonnées, on vous recontacte.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowHelpModal(false)}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Fermer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <form onSubmit={handleHelpSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="help-name" className="block text-sm font-medium text-foreground mb-1.5">
                      Prénom <span className="text-muted-foreground">(optionnel)</span>
                    </label>
                    <input
                      type="text"
                      id="help-name"
                      value={helpForm.name}
                      onChange={(e) => setHelpForm({ ...helpForm, name: e.target.value })}
                      placeholder="Votre prénom"
                      className="w-full px-4 py-2.5 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="help-email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email <span className="text-muted-foreground">(recommandé)</span>
                    </label>
                    <input
                      type="email"
                      id="help-email"
                      value={helpForm.email}
                      onChange={(e) => setHelpForm({ ...helpForm, email: e.target.value })}
                      placeholder="votre@email.fr"
                      className="w-full px-4 py-2.5 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="help-quartier" className="block text-sm font-medium text-foreground mb-1.5">
                      Quartier <span className="text-muted-foreground">(optionnel)</span>
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      <select
                        id="help-quartier"
                        value={helpForm.quartier}
                        onChange={(e) => setHelpForm({ ...helpForm, quartier: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-muted border border-input rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Non précisé</option>
                        {quartiers.map((q) => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="website"
                    value={helpForm.website}
                    onChange={(e) => setHelpForm({ ...helpForm, website: e.target.value })}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute -left-[9999px] opacity-0 h-0 w-0"
                  />

                  <button
                    type="submit"
                    disabled={!canSubmitHelp}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Check size={18} />
                    {canSubmitHelp ? "Valider" : "Chargement..."}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-4 right-4 z-50 flex justify-center pointer-events-none"
          >
            <div className="bg-foreground text-background px-5 py-3 rounded-xl shadow-lg font-medium text-sm flex items-center gap-2">
              <Check size={16} />
              {toastMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
