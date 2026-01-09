import { X, User, Play, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { TeamMember } from "@/data";

interface TeamProfileModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamProfileModal({ member, isOpen, onClose }: TeamProfileModalProps) {
  if (!member) return null;

  const hasPhoto = member.photo && member.photo.trim() !== "";
  const hasVideo = member.videoUrl && member.videoUrl.trim() !== "";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors"
                data-testid="button-close-modal"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-white border-4 border-card shadow-lg flex items-center justify-center">
                  {hasPhoto ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <User size={36} className="text-primary/50" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="font-display font-bold text-xl text-foreground mb-1">
                {member.name}
              </h2>
              <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-4">
                <MapPin size={14} />
                <span>{member.quartier}</span>
                {member.role && (
                  <>
                    <span className="text-muted-foreground/40">·</span>
                    <span>{member.role}</span>
                  </>
                )}
              </div>

              <blockquote className="text-foreground/80 italic mb-4">
                "{member.quote}"
              </blockquote>

              {member.bio && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
              )}

              {member.tags && member.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {hasVideo && (
                <a
                  href={member.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl text-sm font-medium transition-colors"
                  data-testid="button-member-video"
                >
                  <Play size={16} />
                  Voir sa vidéo
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
