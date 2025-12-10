const humidityTypes = [
  {
    number: "01",
    title: "Umidità da Condensa",
    description: "Eccesso di vapore acqueo sulle finestre o macchie di muffa sulle pareti.",
  },
  {
    number: "02",
    title: "Umidità da Risalita Capillare",
    description: "Macchie di umidità nelle zone basse delle pareti.",
  },
  {
    number: "03",
    title: "Umidità da Infiltrazioni",
    description: "Appaiono o aumentano quando piove. I luoghi più comuni sono piani terra, cantine e garage.",
  },
];

const HumidityTypesSection = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-16">
          Qual è il tuo tipo di umidità?
        </h2>

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
