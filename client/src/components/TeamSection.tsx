import { useState } from "react";
import { team, TeamMember } from "@/data";
import { TeamCard } from "./TeamCard";
import { TeamProfileModal } from "./TeamProfileModal";
import { Users } from "lucide-react";

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-10 opacity-0 animate-fade-up">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users size={20} className="text-primary" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl text-foreground">
            Les visages d'UTILES
          </h2>
        </div>
      </div>
      <p className="text-muted-foreground mb-6">
        Des habitants engagés, proches de vous.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {team.map((member, index) => (
          <TeamCard 
            key={member.id} 
            member={member} 
            index={index}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      <TeamProfileModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
