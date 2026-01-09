import { Link } from "wouter";
import { Phone } from "lucide-react";
import { config } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-8">
      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <Link href="/">
            <span className="font-display font-bold text-lg text-primary">
              utiles67
            </span>
          </Link>
          <a
            href={`tel:${config.phoneNumber.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            data-testid="link-phone-footer"
          >
            <Phone size={16} />
            <span className="font-medium">{config.phoneNumber}</span>
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
          <Link href="/">
            <span className="hover:text-foreground transition-colors">Mesures</span>
          </Link>
          <Link href="/videos">
            <span className="hover:text-foreground transition-colors">Vidéos</span>
          </Link>
          <Link href="/agenda">
            <span className="hover:text-foreground transition-colors">Agenda</span>
          </Link>
          <Link href="/rejoindre">
            <span className="hover:text-foreground transition-colors">Rejoindre</span>
          </Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © 2026 utiles67 — Mouvement citoyen pour Strasbourg
        </p>
      </div>
    </footer>
  );
}
