import { useState } from "react";
import { X, Send, Check, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuestionsModal({ isOpen, onClose }: QuestionsModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("utiles67_questions") || "[]");
    localStorage.setItem("utiles67_questions", JSON.stringify([
      ...existing,
      { message, timestamp: new Date().toISOString(), id: Date.now() }
    ]));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage("");
      onClose();
    }, 2000);
  };

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
            className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-lg text-foreground">
                    Votre question
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-questions"
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
                    <p className="font-medium">Question envoyée !</p>
                    <p className="text-sm text-muted-foreground">On vous répond rapidement.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Une question sur notre programme ? Écrivez-nous, on répond vite.
                  </p>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Votre question..."
                    className="w-full px-4 py-3 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    data-testid="textarea-question"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-colors"
                    data-testid="button-send-question"
                  >
                    <Send size={18} />
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
