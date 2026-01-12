import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
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
          <a href="/" className="flex items-center h-10 sm:h-12 md:h-14 overflow-hidden">
            <img 
              src={logoEliminaUmidita} 
              alt="Elimina Umidità" 
              className="h-[140%] w-auto object-contain"
            />
          </a>

          {/* Phone & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:800932636"
              className="flex items-center gap-1 sm:gap-2 text-[#005691] hover:text-[#009ADA] font-bold transition-colors duration-300"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base md:text-lg">800 932 636</span>
            </a>
            <Button 
              onClick={scrollToContact}
              className="btn-glow bg-secondary text-white font-semibold px-3 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base shadow-lg transition-all duration-300"
            >
              Contattaci
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
