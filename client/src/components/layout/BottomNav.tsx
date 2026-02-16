import { Link, useLocation } from "wouter";
import { LayoutGrid, Play, Calendar, UserPlus, Newspaper, Image } from "lucide-react";

const navItems = [
  { href: "/", label: "Mesures", icon: LayoutGrid },
  { href: "/videos", label: "Vidéos", icon: Play },
  { href: "/agenda", label: "Agenda", icon: Calendar },
  { href: "/actu", label: "Actu", icon: Newspaper },
  { href: "/photos", label: "Photos", icon: Image },
  { href: "/rejoindre", label: "Rejoindre", icon: UserPlus },
];

export function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border safe-bottom sm:hidden">
      <div className="max-w-lg mx-auto px-2 h-16 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          const isRejoindre = item.href === "/rejoindre";

          return (
            <Link key={item.href} href={item.href}>
              <span
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
                  isRejoindre
                    ? "text-primary"
                    : isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`bottomnav-${item.label.toLowerCase()}`}
              >
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={isRejoindre && !isActive ? "text-primary" : ""}
                />
                <span
                  className={`text-[10px] font-medium ${
                    isRejoindre && !isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
