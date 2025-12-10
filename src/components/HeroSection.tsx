import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-4 py-16 relative z-10 flex justify-end">
        {/* White transparent container on the right */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-xl shadow-2xl">
          {/* Decorative stripes */}
          <div className="flex gap-1 mb-6">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-6 bg-secondary transform -skew-x-12"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <p className="text-primary font-medium text-lg mb-4 tracking-wide">
            Specialisti in Soluzioni contro l'Umidità
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
            Consulta<br />Umidità
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
            Disponiamo di professionisti in tutta Italia per risolvere i vostri problemi di umidità e offrirvi una soluzione definitiva.
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="bg-secondary hover:bg-gold-hover text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
          >
            Richiedi Informazioni Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
