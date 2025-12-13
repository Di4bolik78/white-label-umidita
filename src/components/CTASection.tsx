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


  return (
    <section className="py-12 md:py-16 px-4 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left side */}
          <div className="text-center lg:text-left">
            <p className="text-primary-foreground/80 text-base md:text-lg mb-2">
              Specialisti in Soluzioni contro l'Umidità
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground uppercase tracking-wide">
              Richiedi Informazioni
            </h2>
          </div>

          {/* Right side */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <Input
              type="tel"
              placeholder="Lascia il tuo telefono, ti richiamiamo."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 w-full sm:min-w-[280px]"
            />
            <Button 
              type="submit"
              className="btn-glow bg-secondary text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 w-full sm:w-auto"
            >
              INVIA
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
