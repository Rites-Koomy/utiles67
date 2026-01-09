import { Calendar, Clock, MapPin, Plus } from "lucide-react";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import type { Event } from "@/data";

interface EventCardProps {
  event: Event;
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const staggerClass = `stagger-${Math.min(index + 1, 6)}`;
  const date = parseISO(event.date);
  const dayNumber = format(date, "d", { locale: fr });
  const monthShort = format(date, "MMM", { locale: fr }).replace(".", "");

  const handleAddToCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    const startDate = `${event.date.replace(/-/g, "")}T${event.time.replace(":", "")}00`;
    const endDate = `${event.date.replace(/-/g, "")}T${String(parseInt(event.time.split(":")[0]) + 2).padStart(2, "0")}${event.time.split(":")[1]}00`;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.address)}`;
    window.open(url, "_blank");
  };

  return (
    <article
      className={`bg-card rounded-2xl border border-card-border p-5 opacity-0 animate-fade-up ${staggerClass}`}
      data-testid={`card-event-${event.id}`}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-primary leading-none">
            {dayNumber}
          </span>
          <span className="text-xs font-medium text-primary/70 uppercase">
            {monthShort}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground mb-2 leading-snug">
            {event.title}
          </h3>

          <div className="space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock size={14} className="flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>

      <button
        onClick={handleAddToCalendar}
        className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl text-sm font-medium transition-colors"
        data-testid={`button-calendar-${event.id}`}
      >
        <Plus size={16} />
        Ajouter à mon agenda
      </button>
    </article>
  );
}
