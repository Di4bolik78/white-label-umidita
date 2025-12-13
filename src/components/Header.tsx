import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoEliminaUmidita from "@/assets/logo-elimina-umidita.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-1" 
          : "bg-white py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logoEliminaUmidita} 
              alt="Elimina Umidità" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* CTA Button */}
          <Button 
            onClick={scrollToContact}
            className="btn-glow bg-secondary text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base shadow-lg transition-all duration-300"
          >
            Contattaci
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
