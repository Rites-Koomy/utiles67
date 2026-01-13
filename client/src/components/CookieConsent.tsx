import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("utiles67_cookie_consent");
    if (!consent) {
      // Show after a small delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("utiles67_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("utiles67_cookie_consent", "refused");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 lg:absolute lg:bottom-0 lg:left-0 lg:right-0"
        >
          <div className="bg-card/95 backdrop-blur-md border border-card-border rounded-2xl shadow-xl p-5 overflow-hidden">
            {!showDetails ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cookie size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground mb-1">
                      Gestion des cookies
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Nous utilisons des cookies pour mesurer l'audience et améliorer votre expérience.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleRefuse}
                    className="px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-xl text-sm font-medium transition-colors"
                  >
                    Refuser
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm font-medium transition-colors shadow-sm"
                  >
                    Accepter
                  </button>
                </div>
                
                <button 
                  onClick={() => setShowDetails(true)}
                  className="w-full text-xs text-muted-foreground hover:text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors text-center"
                >
                  En savoir plus
                </button>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-foreground">
                    Paramètres
                  </h3>
                  <button 
                    onClick={() => setShowDetails(false)}
                    className="p-1 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <div className="space-y-3 max-h-40 overflow-y-auto pr-2 scrollbar-thin">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="mt-0.5">
                      <input type="checkbox" checked disabled className="rounded border-input text-primary focus:ring-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Nécessaires</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Indispensables au fonctionnement du site (session, sécurité).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="mt-0.5">
                      <input type="checkbox" defaultChecked className="rounded border-input text-primary focus:ring-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Analytiques</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Nous aident à comprendre comment le site est utilisé.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleAccept}
                    className="w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm font-medium transition-colors"
                  >
                    Enregistrer mes choix
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
