import { useState, useEffect } from "react";
import { X, Send, Check, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitQuestionForm, isHoneypotFilled } from "@/lib/forms";

interface QuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuestionsModal({ isOpen, onClose }: QuestionsModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  useEffect(() => {
    if (isOpen) {
      setCanSubmit(false);
      const timer = setTimeout(() => setCanSubmit(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isHoneypotFilled(formData.website)) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
        onClose();
      }, 2000);
      return;
    }

    await submitQuestionForm({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      resetForm();
      onClose();
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", website: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="questions-modal-title"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
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

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="q-name" className="block text-sm font-medium text-foreground mb-1.5">
                        Prénom <span className="text-muted-foreground text-xs">(optionnel)</span>
                      </label>
                      <input
                        type="text"
                        id="q-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Marie"
                        className="w-full px-3 py-2.5 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="q-email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email <span className="text-muted-foreground text-xs">(recommandé)</span>
                      </label>
                      <input
                        type="email"
                        id="q-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="marie@email.fr"
                        className="w-full px-3 py-2.5 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="q-message" className="block text-sm font-medium text-foreground mb-1.5">
                      Votre question
                    </label>
                    <textarea
                      id="q-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Votre question..."
                      className="w-full px-4 py-3 bg-muted border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      data-testid="textarea-question"
                    />
                  </div>

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute -left-[9999px] opacity-0 h-0 w-0"
                  />

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-send-question"
                  >
                    <Send size={18} />
                    {canSubmit ? "Envoyer" : "Envoi..."}
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
