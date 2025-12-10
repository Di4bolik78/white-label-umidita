import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CTASection = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      toast({ title: "Inserisci il tuo numero di telefono", variant: "destructive" });
      return;
    }
    toast({ 
      title: "Richiesta inviata!", 
      description: "Un consulente ti richiamerà al più presto." 
    });
    setPhone("");
  };

  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side */}
          <div>
            <p className="text-primary-foreground/80 text-lg mb-2">
              Specialisti in Soluzioni contro l'Umidità
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary uppercase tracking-wide">
              Richiedi Informazioni
            </h2>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Button 
              onClick={scrollToContact}
              className="btn-glow bg-secondary hover:bg-aqua-dark text-white font-semibold px-8 py-6 rounded-full transition-all duration-300"
            >
              Richiedi Informazioni
            </Button>

            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <Input
                type="tel"
                placeholder="Lascia il tuo telefono, ti richiamiamo."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 min-w-[280px]"
              />
              <Button 
                type="submit"
                variant="outline"
                className="h-12 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 whitespace-nowrap"
              >
                CHIAMAMI
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
