export function HeroSection() {
  return (
    <section className="relative -mx-4 mb-6 animate-fade-up">
      <div className="relative w-full aspect-[12/5] overflow-hidden rounded-b-2xl shadow-lg">
        <img
          src="/measures/hero-new.jpg"
          alt="Mouvement Utiles pour Strasbourg - Mohamed Sylla"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto max-w-lg">
          <div className="bg-white/95 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-2xl border-l-8 border-primary transform transition-transform duration-300 hover:scale-[1.01]">
            <h1 className="font-display font-black text-xl sm:text-3xl text-primary mb-1 uppercase tracking-tight leading-none">
              MOUVEMENT "UTILES"
              <span className="block text-lg sm:text-2xl font-bold mt-1 text-primary/80">STRASBOURG</span>
            </h1>
            <div className="h-1 w-16 bg-primary/20 my-2 sm:my-3 rounded-full"></div>
            <p className="text-primary font-bold text-xs sm:text-base leading-snug">
              Municipales 2026 :<br/>Notre programme pour Strasbourg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
