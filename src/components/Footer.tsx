import { Phone } from "lucide-react";
import logoEliminaUmidita from "@/assets/logo-elimina-umidita.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted border-t border-[#333333]/30 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_-8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img 
              src={logoEliminaUmidita} 
              alt="Elimina Umidità" 
              className="h-20 md:h-24 w-auto"
            />
            <a 
              href="tel:800123456" 
              className="flex items-center gap-2 text-[#005691] hover:text-[#009ADA] text-xl md:text-2xl font-bold transition-colors duration-300"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              800 123 456
            </a>
          </div>
          
          <p className="text-[#333333] text-sm">
            © {new Date().getFullYear()} Elimina Umidità. Tutti i diritti riservati.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-[#333333] hover:text-secondary transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#333333] hover:text-secondary transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
