import logoEliminaUmidita from "@/assets/logo-elimina-umidita.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white border-t-2 border-[#333333] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <img 
              src={logoEliminaUmidita} 
              alt="Elimina Umidità" 
              className="h-16 md:h-20 w-auto"
            />
            <span className="text-[#333333] text-base font-medium">
              800 123 456
            </span>
          </div>
          
          <p className="text-[#333333]/60 text-sm">
            © {new Date().getFullYear()} Elimina Umidità. Tutti i diritti riservati.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-[#333333]/60 hover:text-secondary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#333333]/60 hover:text-secondary transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
