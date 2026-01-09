import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Heart, Check, Mail, User, MapPin } from "lucide-react";

export default function Rejoindre() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    quartier: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-lg mx-auto px-4 py-12">
          <div className="text-center animate-scale-in">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-primary" />
            </div>
            <h1 className="font-display font-bold text-2xl text-foreground mb-3">
              Bienvenue parmi nous !
            </h1>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Merci de nous rejoindre. Ensemble, construisons une ville plus juste, 
              plus verte et plus solidaire.
            </p>
            <p className="text-sm text-muted-foreground">
              Un email de bienvenue arrive bientôt à{" "}
              <span className="font-medium text-foreground">{formData.email}</span>
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4 py-6">
        <section className="mb-8 animate-fade-up">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
            <Heart size={28} className="text-primary" />
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Rejoindre le mouvement
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Vous partagez notre vision d'une ville plus humaine ? 
            <span className="block mt-1 font-medium text-foreground/80">
              Venez comme vous êtes.
            </span>
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up stagger-1">
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Votre prénom
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                placeholder="Marie"
                className="w-full pl-11 pr-4 py-3 bg-card border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                data-testid="input-nom"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Votre email
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="marie@exemple.fr"
                className="w-full pl-11 pr-4 py-3 bg-card border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                data-testid="input-email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="quartier"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Votre quartier
            </label>
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <select
                id="quartier"
                name="quartier"
                value={formData.quartier}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 bg-card border border-input rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                data-testid="select-quartier"
              >
                <option value="" disabled>
                  Choisir un quartier
                </option>
                {quartiers.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-5 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg transition-colors shadow-sm"
            data-testid="button-submit"
          >
            Rejoindre utiles67
          </button>

          <p className="text-xs text-center text-muted-foreground">
            On ne spamme pas. Promis.
          </p>
        </form>
      </div>
    </Layout>
  );
}
