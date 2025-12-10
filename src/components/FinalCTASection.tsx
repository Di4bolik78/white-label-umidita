import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-8">
          Hai Problemi di Umidità?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
          Richiedi una consulenza gratuita e senza impegno. I nostri esperti ti contatteranno per offrirti la soluzione migliore.
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-secondary hover:bg-gold-hover text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
        >
          Richiedi Consulenza Gratuita
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
