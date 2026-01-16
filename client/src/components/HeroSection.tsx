export function HeroSection() {
  return (
    <section className="relative -mx-4 mb-6 animate-fade-up">
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img
          src="/measures/hero-people.jpg"
          alt="Mouvement Utiles pour Strasbourg"
          className="w-full h-full object-cover object-[50%_35%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h1 className="font-display font-black text-2xl sm:text-3xl text-primary mb-1 uppercase tracking-tight">
            MOUVEMENT "UTILES" POUR STRASBOURG
          </h1>
          <p className="text-primary/80 font-medium text-sm sm:text-base">
            Notre programme pour Strasbourg - Municipales 2026
          </p>
        </div>
      </div>
    </section>
  );
}
