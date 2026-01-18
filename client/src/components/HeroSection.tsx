export function HeroSection() {
  return (
    <section className="relative -mx-4 mb-6 animate-fade-up">
      <div className="relative h-64 sm:h-96 overflow-hidden rounded-b-2xl shadow-lg">
        <img
          src="/measures/hero-new.jpg"
          alt="Mouvement Utiles pour Strasbourg - Mohamed Sylla"
          className="w-full h-full object-cover object-[50%_20%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col items-center text-center">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border border-primary/10 max-w-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <h1 className="font-display font-black text-2xl sm:text-4xl text-primary mb-2 uppercase tracking-tight leading-tight">
              MOUVEMENT "UTILES" POUR STRASBOURG
            </h1>
            <div className="h-1 w-24 bg-primary/20 mx-auto mb-3 rounded-full"></div>
            <p className="text-primary font-bold text-base sm:text-lg">
              Municipales 2026 : Notre programme pour Strasbourg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
