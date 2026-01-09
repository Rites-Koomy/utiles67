import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { QuestionsModal } from "./QuestionsModal";

export function QuestionsBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-6 opacity-0 animate-fade-up">
        <div className="bg-card rounded-2xl border border-card-border p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <HelpCircle size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-foreground mb-1">
                Une question sur notre programme ?
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                On vous répond en moins de 48h.
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm font-medium transition-colors"
                data-testid="button-open-questions"
              >
                Poser une question
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuestionsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
