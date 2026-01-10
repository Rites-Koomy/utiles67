import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Mesures" },
    { href: "/videos", label: "Vidéos" },
    { href: "/agenda", label: "Agenda" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <img 
              src="/logo.png" 
              alt="utiles67" 
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    location === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/rejoindre">
              <span
                className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
                data-testid="button-rejoindre-header"
              >
                Rejoindre
              </span>
            </Link>
            <button
              className="sm:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-menu-toggle"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-14 sm:hidden"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      location === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="border-t border-border my-4" />
              <Link href="/rejoindre">
                <span
                  className="block px-4 py-3 bg-primary text-primary-foreground text-lg font-semibold rounded-xl text-center"
                  onClick={() => setMenuOpen(false)}
                  data-testid="button-rejoindre-mobile"
                >
                  Rejoindre le mouvement
                </span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
