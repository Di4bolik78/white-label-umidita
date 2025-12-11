const humidityTypes = [
  {
    number: "01",
    title: "Umidità da Condensa",
    description: "Eccesso di vapore acqueo sulle tue finestre o macchie di muffa sulle pareti.",
  },
  {
    number: "02",
    title: "Umidità da Risalita",
    description: "Macchie di umidità nelle parti basse delle tue pareti.",
  },
  {
    number: "03",
    title: "Umidità da Infiltrazioni Laterali",
    description: "Compaiono o aumentano quando piove. I luoghi più comuni sono i piani terra, i seminterrati, gli interrati e i garage.",
  },
];

const HumidityTypesSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-3 md:mb-4 animate-fade-in-up">
          Qual è il tuo tipo di umidità?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center mb-10 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Scopri le più comuni
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {humidityTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-background p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <span className="text-5xl md:text-6xl font-heading font-bold text-secondary/30 group-hover:text-secondary transition-colors duration-300">
                {type.number}.
              </span>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mt-3 md:mt-4 mb-3 md:mb-4">
                {type.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumidityTypesSection;
