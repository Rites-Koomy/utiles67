export function HeroSection() {
  return (
    <section className="relative -mx-4 mb-6 animate-fade-up flex flex-col">
      {/* Image Container - Full Width */}
      <div className="w-full relative">
        <img
          src="/measures/hero-new.jpg"
          alt="Mouvement Utiles pour Strasbourg - Mohamed Sylla"
          className="w-full h-auto object-cover block"
          loading="eager"
        />
      </div>

      {/* Text Container - Below Image, White Background */}
      <div className="bg-white px-4 py-3 border-b-4 border-primary shadow-sm">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-1">
          <h1 
            className="font-display font-black text-lg sm:text-2xl text-primary uppercase tracking-tight leading-none" 
            style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
          >
            MOUVEMENT "UTILES" STRASBOURG
          </h1>
          
          <div className="h-0.5 w-12 bg-primary/20 mx-auto rounded-full my-1"></div>
          
          <p 
            className="text-primary font-bold text-xs sm:text-sm leading-tight" 
            style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
          >
            Municipales 2026 : Notre programme pour Strasbourg
          </p>
        </div>
      </div>
    </section>
  );
}
