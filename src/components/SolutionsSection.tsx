import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import DecorativeStripes from "@/components/DecorativeStripes";

const solutions = [
  "UMIDITÀ DI RISALITA",
  "CONDENSA",
  "INFILTRAZIONI LATERALI",
  "MUFFA SULLE PARETI",
  "MACCHIE DI UMIDITÀ",
  "SALNITRO",
];

const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column */}
          <div className="animate-fade-in-up">
            {/* Decorative stripes */}
            <DecorativeStripes className="mb-6" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6 leading-tight">
              Ti Aiutiamo a trovare
              <br />
              la giusta soluzione definitiva
            </h2>

            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              I nostri tecnici risponderanno ai tuoi problemi di umidità per offrirti una soluzione definitiva.
            </p>

            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-5 font-semibold transition-all duration-300 group hover-lift w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 mr-2" />
              800 123 456
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right column */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-6 md:mb-8 uppercase tracking-wide">
              Soluzioni ai Problemi di Umidità
            </h3>

            <ul className="space-y-3 md:space-y-4">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-primary font-medium text-base md:text-lg group"
                >
                  <ChevronRight className="w-5 h-5 text-secondary flex-shrink-0 group-hover:text-aqua group-hover:translate-x-1 transition-all duration-300" />
                  <span className="relative group-hover:text-secondary transition-colors duration-300">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
