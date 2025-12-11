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
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          Qual è il tuo tipo di umidità?
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          Scopri le più comuni
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {humidityTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <span className="text-6xl font-heading font-bold text-secondary/30 group-hover:text-secondary transition-colors duration-300">
                {type.number}.
              </span>
              <h3 className="text-xl font-heading font-semibold text-primary mt-4 mb-4">
                {type.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
