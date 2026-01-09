import { X, User, MapPin, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { TeamMember } from "@/data";

interface TeamProfileModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function TeamProfileModal({ member, isOpen, onClose }: TeamProfileModalProps) {
  if (!member) return null;

  const hasPhoto = member.photo && member.photo.trim() !== "";
  const hasVideo = member.videoUrl && member.videoUrl.trim() !== "";
  const videoId = hasVideo ? getYouTubeId(member.videoUrl!) : null;

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
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-44 sm:h-52 overflow-hidden">
              {hasPhoto ? (
                <img
                  src={member.photo}
                  alt={`Photo de ${member.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/5 flex items-center justify-center">
                  <User size={64} className="text-primary/40" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-sm"
                data-testid="button-close-modal"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-5 right-5">
                <h2 className="font-display font-bold text-xl text-white drop-shadow-lg">
                  {member.name}
                </h2>
                <div className="flex items-center gap-1.5 text-sm text-white/90 drop-shadow-md">
                  <MapPin size={14} />
                  <span>{member.quartier}</span>
                  {member.role && (
                    <>
                      <span className="text-white/60">·</span>
                      <span>{member.role}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6">
              {member.utilesRole && (
                <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  UTILES – {member.utilesRole}
                </div>
              )}

              <blockquote className="text-lg text-foreground italic leading-relaxed mb-4 border-l-3 border-primary/30 pl-4">
                "{member.quote}"
              </blockquote>

              {member.bio && (
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {member.bio}
                </p>
              )}

              {member.tags && member.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {hasVideo && videoId && (
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Play size={16} className="text-primary" />
                    <h3 className="font-medium text-foreground text-sm">
                      Voir {member.name} en vidéo
                    </h3>
                  </div>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                      title={`Vidéo de ${member.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
