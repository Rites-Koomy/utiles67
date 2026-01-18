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
      <div className="bg-white px-5 py-6 border-b-4 border-primary shadow-sm">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-3">
          <h1 
            className="font-display font-black text-2xl sm:text-3xl text-primary uppercase tracking-tight leading-tight" 
            style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
          >
            MOUVEMENT "UTILES" STRASBOURG
          </h1>
          
          <div className="h-1 w-16 bg-primary/20 mx-auto rounded-full"></div>
          
          <p 
            className="text-primary font-bold text-base sm:text-lg leading-snug" 
            style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
          >
            Municipales 2026 : Notre programme pour Strasbourg
          </p>
        </div>
      </div>
    </section>
  );
}
