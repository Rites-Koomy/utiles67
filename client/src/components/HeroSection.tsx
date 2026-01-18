export function HeroSection() {
  return (
    <section className="relative -mx-4 mb-6 animate-fade-up">
      <div className="relative w-full aspect-[12/5] overflow-hidden shadow-lg">
        <img
          src="/measures/hero-new.jpg"
          alt="Mouvement Utiles pour Strasbourg - Mohamed Sylla"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="bg-white px-6 py-4 rounded-b-2xl shadow-lg border-t-0 border-b-4 border-primary">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h1 className="font-display font-black text-xl sm:text-3xl text-primary uppercase tracking-tight leading-none">
              MOUVEMENT "UTILES"
              <span className="block sm:inline text-lg sm:text-2xl font-bold sm:ml-2 text-primary/80">STRASBOURG</span>
            </h1>
          </div>
          <div className="hidden sm:block h-8 w-px bg-primary/20"></div>
          <div>
             <p className="text-primary font-bold text-sm sm:text-lg leading-snug">
              Municipales 2026 : Notre programme pour Strasbourg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
