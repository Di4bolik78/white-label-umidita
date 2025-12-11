import { Droplets, ArrowUp, CloudRain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const humidityTypes = [
  {
    number: "01",
    title: "Umidità da Condensa",
    description: "Eccesso di vapore acqueo sulle tue finestre o macchie di muffa sulle pareti.",
    icon: Droplets,
    gradient: "from-cyan-500/20 via-secondary/30 to-teal-500/20",
  },
  {
    number: "02",
    title: "Umidità da Risalita",
    description: "Macchie di umidità nelle parti basse delle tue pareti.",
    icon: ArrowUp,
    gradient: "from-emerald-500/20 via-secondary/30 to-green-500/20",
  },
  {
    number: "03",
    title: "Umidità da Infiltrazioni Laterali",
    description: "Compaiono o aumentano quando piove. I luoghi più comuni sono i piani terra, i seminterrati, gli interrati e i garage.",
    icon: CloudRain,
    gradient: "from-blue-500/20 via-secondary/30 to-cyan-500/20",
  },
];

const HumidityCard = ({ type, index }: { type: typeof humidityTypes[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = type.icon;

  return (
    <div
      ref={ref}
      className={`relative group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow effect behind card */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
      
      {/* Main card */}
      <div className="relative bg-background rounded-2xl p-6 md:p-8 border border-border/50 overflow-hidden h-full">
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${type.gradient} transform rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500`} />
        </div>

        {/* Floating icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-secondary relative z-10" strokeWidth={1.5} />
          </div>
          
          {/* Number badge */}
          <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform duration-300">
            <span className="text-sm font-bold text-secondary-foreground">{type.number}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
          {type.title}
        </h3>
        
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {type.description}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

const HumidityTypesSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-muted relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-3 md:mb-4 animate-fade-in-up">
          Qual è il tuo tipo di umidità?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center mb-10 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Scopri le più comuni
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {humidityTypes.map((type, index) => (
            <HumidityCard key={index} type={type} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumidityTypesSection;
