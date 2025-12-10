import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary min-h-[70vh] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          {/* Decorative stripes */}
          <div className="flex gap-1 mb-6">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-6 bg-secondary transform -skew-x-12"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <p className="text-secondary font-medium text-lg mb-4 tracking-wide">
            Specialisti in Soluzioni contro l'Umidità
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Consulta<br />Umidità
          </h1>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Disponiamo di professionisti in tutta Italia per risolvere i vostri problemi di umidità e offrirvi una soluzione definitiva.
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="bg-secondary hover:bg-gold-hover text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
          >
            Richiedi Informazioni Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
