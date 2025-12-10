const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-primary-foreground">
              Consulta<span className="text-secondary">Umidità</span>
            </span>
          </div>
          
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Consulta Umidità. Tutti i diritti riservati.
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
