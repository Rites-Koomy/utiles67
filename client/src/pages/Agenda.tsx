import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/EventCard";
import { events } from "@/data";

export default function Agenda() {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4">
        <section className="py-6">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2 animate-fade-up">
            Agenda
          </h1>
          <p className="text-muted-foreground animate-fade-up stagger-1">
            Rencontrons-nous près de chez vous
          </p>
        </section>

        <section className="pb-8">
          <div className="grid gap-4">
            {sortedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              Aucun événement à venir
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
