import logoEliminaUmidita from "@/assets/logo-elimina-umidita.jpg";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <img 
              src={logoEliminaUmidita} 
              alt="Elimina Umidità" 
              className="h-12 w-auto"
            />
            <span className="text-primary-foreground/90 text-base font-medium">
              800 123 456
            </span>
          </div>
          
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Elimina Umidità. Tutti i diritti riservati.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
