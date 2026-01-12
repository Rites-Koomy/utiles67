import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/config";

interface QuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuestionsModal({ isOpen, onClose }: QuestionsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="questions-modal-title"
          >
            <div className="p-6 pb-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <h2 id="questions-modal-title" className="font-display font-bold text-lg text-foreground">
                    Votre question
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fermer"
                  data-testid="button-close-questions"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Une question sur notre programme ? Écrivez-nous, on répond vite.
              </p>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: "calc(85vh - 120px)" }}>
              <iframe
                src={`${config.tally.questionsUrl}?transparentBackground=1&alignLeft=1`}
                width="100%"
                height="400"
                frameBorder="0"
                title="Formulaire Questions"
                className="w-full"
                data-testid="iframe-tally-questions"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
