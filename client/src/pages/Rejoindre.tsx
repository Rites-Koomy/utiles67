import { Layout } from "@/components/layout/Layout";
import { Heart, Phone } from "lucide-react";
import { config } from "@/config";

export default function Rejoindre() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4 py-6">
        <section className="mb-6 animate-fade-up">
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

        <div className="bg-card rounded-2xl border border-card-border p-5 mb-6 animate-fade-up stagger-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">
                Contact direct
              </h3>
              <p className="text-xs text-muted-foreground">{config.phoneHours}</p>
            </div>
          </div>
          <a
            href={`tel:${config.phoneNumber.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 mt-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
            data-testid="link-phone-rejoindre"
          >
            📞 {config.phoneNumber}
          </a>
        </div>

        <div className="animate-fade-up stagger-2 bg-card rounded-2xl border border-card-border overflow-hidden">
          <iframe
            data-tally-src={`${config.tally.rejoindreUrl}?transparentBackground=1`}
            loading="lazy"
            width="100%"
            height="400"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulaire Rejoindre"
            className="w-full"
            data-testid="iframe-tally-rejoindre"
          />
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          On ne spamme pas. Promis.
        </p>
      </div>
    </Layout>
  );
}
