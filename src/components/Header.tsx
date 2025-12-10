import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Consulta<span className="text-secondary">Umidità</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#soluzioni" className="text-primary hover:text-secondary transition-colors font-medium">
              Soluzioni
            </a>
            <a href="#tipi-umidita" className="text-primary hover:text-secondary transition-colors font-medium">
              Tipi di Umidità
            </a>
            <a href="#faq" className="text-primary hover:text-secondary transition-colors font-medium">
              FAQ
            </a>
            <Button 
              onClick={scrollToContact}
              className="bg-secondary hover:bg-aqua-dark text-secondary-foreground font-semibold px-6 py-2 rounded-full"
            >
              Contattaci
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <a 
              href="#soluzioni" 
              className="text-primary hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Soluzioni
            </a>
            <a 
              href="#tipi-umidita" 
              className="text-primary hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tipi di Umidità
            </a>
            <a 
              href="#faq" 
              className="text-primary hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              onClick={scrollToContact}
              className="bg-secondary hover:bg-aqua-dark text-secondary-foreground font-semibold px-6 py-2 rounded-full w-full"
            >
              Contattaci
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
