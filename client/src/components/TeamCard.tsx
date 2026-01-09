import { User } from "lucide-react";
import type { TeamMember } from "@/data";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  const staggerClass = `stagger-${Math.min(index + 1, 6)}`;
  const hasPhoto = member.photo && member.photo.trim() !== "";

  return (
    <article
      className={`bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up ${staggerClass}`}
      data-testid={`card-team-${member.id}`}
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
          <h3 className="font-display font-semibold text-foreground">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {member.quartier}
            {member.role && <span className="text-muted-foreground/60"> · {member.role}</span>}
          </p>
        </div>
      </div>

      <blockquote className="mt-4 text-foreground/80 italic leading-relaxed">
        "{member.quote}"
      </blockquote>
    </article>
  );
}
