import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden pt-16 md:pt-12">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 flex justify-center md:justify-start h-full">
        {/* White transparent container - occupies half the hero section */}
        <div className="bg-white/60 md:bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-2xl w-full md:w-1/2 flex flex-col justify-center">
          {/* Decorative stripes */}
          <div className="flex gap-1 mb-4 md:mb-6">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-5 md:h-6 bg-secondary transform -skew-x-12"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <p className="text-primary font-medium text-base md:text-lg mb-3 md:mb-4 tracking-wide">
            Specialisti in Soluzioni contro l'Umidità
          </p>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6 leading-tight">
            Consulenza Personalizzata<br />Contro Umidità
          </h1>
          
          <p className="text-primary text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
            Disponiamo di professionisti sul territorio nazionale per rispondere ai tuoi problemi di umidità e offrirti una soluzione definitiva.
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="btn-glow bg-secondary text-white font-semibold px-6 md:px-10 py-5 md:py-6 text-lg md:text-xl rounded-md transition-all duration-300 w-full sm:w-auto"
          >
            Richiedi informazioni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
