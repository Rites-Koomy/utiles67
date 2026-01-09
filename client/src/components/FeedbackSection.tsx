import { useState } from "react";
import { MessageSquare, Send, Check, MapPin } from "lucide-react";

const quartiers = [
  "Centre-ville",
  "Neudorf",
  "Krutenau",
  "Orangerie",
  "Robertsau",
  "Hautepierre",
  "Koenigshoffen",
  "Elsau",
  "Meinau",
  "Neuhof",
  "Port du Rhin",
  "Autre",
];

export function FeedbackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    quartier: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const existingFeedback = JSON.parse(localStorage.getItem("utiles67_feedback") || "[]");
    const newFeedback = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    };
    localStorage.setItem("utiles67_feedback", JSON.stringify([...existingFeedback, newFeedback]));
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ message: "", quartier: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="feedback-section" className="py-10 opacity-0 animate-fade-up">
      <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-3xl p-6 border border-primary/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare size={20} className="text-primary" />
          </div>
          <h2 className="font-display font-bold text-xl text-foreground">
            Parlez-nous de votre quotidien
          </h2>
        </div>
        <p className="text-muted-foreground mb-6">
          On écoute avant de décider. Dites-nous ce qui compte pour vous.
        </p>

        {submitted ? (
          <div className="flex items-center gap-3 py-6 text-primary animate-scale-in">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Check size={20} />
            </div>
            <div>
              <p className="font-medium">Merci pour votre témoignage !</p>
              <p className="text-sm text-muted-foreground">Votre voix compte.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="message" className="sr-only">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Ce que vous vivez, ce que vous voulez améliorer..."
                className="w-full px-4 py-3 bg-card border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                data-testid="textarea-feedback"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <MapPin
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <select
                  id="quartier"
                  name="quartier"
                  value={formData.quartier}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 pr-4 py-2.5 bg-card border border-input rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                  data-testid="select-feedback-quartier"
                >
                  <option value="" disabled>
                    Votre quartier
                  </option>
                  {quartiers.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium text-sm transition-colors"
                data-testid="button-feedback-submit"
              >
                <Send size={16} />
                <span className="hidden sm:inline">Envoyer</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
