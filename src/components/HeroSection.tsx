import { Button } from "@/components/ui/button";
import DecorativeStripes from "@/components/DecorativeStripes";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden">
      {/* Background image */}
      <div 
        className="hero-bg absolute inset-0 bg-no-repeat md:bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: '65% center'
        }}
      />
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/20" />

      {/* White transparent container - full height, half width, left aligned */}
      <div className="relative z-10 w-full md:w-[45%] bg-white/20 md:bg-white/35 backdrop-blur-sm flex items-center">
        <div className="p-6 pt-24 md:p-12 md:pt-28 md:pl-16 lg:p-16 lg:pt-32 lg:pl-20 w-full stagger-children">
          {/* Decorative stripes */}
          <DecorativeStripes className="mb-4 md:mb-6" />

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
