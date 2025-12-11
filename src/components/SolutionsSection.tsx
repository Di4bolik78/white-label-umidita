import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  "Risalita Capillare",
  "Condensa",
  "Infiltrazioni",
  "Insetti dell'Umidità",
  "Muffa sul Soffitto",
  "Macchie di Umidità sulle Pareti",
];

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            {/* Decorative stripes */}
            <div className="flex gap-1 mb-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-6 bg-secondary transform -skew-x-12" />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Ti Aiutiamo a trovare
              <br />
              la giusta soluzione definitiva
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I nostri tecnici risponderanno ai tuoi problemi di umidità per offrirti una soluzione definitiva.
            </p>

            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-5 rounded-full font-semibold transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 mr-2" />
              800 123 456
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 uppercase tracking-wide">
              Soluzioni ai Problemi di Umidità
            </h3>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-primary font-medium text-lg hover:text-secondary transition-colors cursor-pointer group"
                >
                  <ChevronRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
                  <span className="border-b-2 border-transparent group-hover:border-secondary transition-all">
                    {solution.toUpperCase()}
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
