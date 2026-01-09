import { User, ChevronRight } from "lucide-react";
import type { TeamMember } from "@/data";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
  onClick: () => void;
}

export function TeamCard({ member, index = 0, onClick }: TeamCardProps) {
  const staggerClass = `stagger-${Math.min(index + 1, 6)}`;
  const hasPhoto = member.photo && member.photo.trim() !== "";

  return (
    <article
      className={`group bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up cursor-pointer hover:border-primary/20 hover:shadow-md transition-all duration-300 ${staggerClass}`}
      data-testid={`card-team-${member.id}`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          {hasPhoto ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <User size={24} className="text-primary/50" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {member.quartier}
                {member.role && <span className="text-muted-foreground/60"> · {member.role}</span>}
              </p>
            </div>
            <ChevronRight 
              size={18} 
              className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1" 
            />
          </div>
        </div>
      </div>

      <blockquote className="mt-4 text-foreground/80 italic leading-relaxed line-clamp-2">
        "{member.quote}"
      </blockquote>
    </article>
  );
}
