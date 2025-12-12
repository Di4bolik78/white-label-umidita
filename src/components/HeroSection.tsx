import { Button } from "@/components/ui/button";
import DecorativeStripes from "@/components/DecorativeStripes";
import heroBg from "@/assets/hero-bg.jpg";
import { Facebook, Instagram, Phone } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* White transparent container - full height, half width, left aligned */}
      <div className="relative z-10 w-full md:w-[45%] bg-white/60 md:bg-white/50 backdrop-blur-sm flex items-center">
        {/* Vertical social icons */}
        <div className="hidden md:flex flex-col items-center gap-8 absolute left-6 top-1/2 -translate-y-1/2">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={22} strokeWidth={1.5} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={22} strokeWidth={1.5} />
          </a>
          <a 
            href="tel:+39000000000"
            className="text-primary hover:text-secondary transition-colors duration-300"
            aria-label="Telefono"
          >
            <Phone size={22} strokeWidth={1.5} />
          </a>
        </div>

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
