import { heroImage } from "@/data";

export function HeroSection() {
  return (
    <section className="relative -mx-4 mb-6 animate-fade-up">
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img
          src={heroImage}
          alt="Strasbourg, ville verte et apaisée"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1 drop-shadow-lg">
            Le Strasbourg qu'on aime.
          </h1>
          <p className="text-white/90 text-sm sm:text-base drop-shadow-md">
            Des idées simples, pour la vie réelle.
          </p>
        </div>
      </div>
    </section>
  );
}
