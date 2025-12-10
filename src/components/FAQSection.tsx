import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Come faccio a sapere se è umidità da condensa?",
    answer: "I primi sintomi dell'umidità da condensa sono piccole macchie nere di muffa negli angoli e sulle pareti, specchi appannati o gocce d'acqua sulle finestre. Questo tipo di umidità si verifica quando il vapore acqueo dell'aria interna entra in contatto con una superficie fredda e passa allo stato liquido, bagnando così la superficie.",
  },
  {
    question: "Come eliminare l'umidità da risalita capillare?",
    answer: "Questo tipo di umidità si verifica quando l'acqua sotterranea entra in contatto con le fondamenta degli edifici. Per risolvere un problema di umidità da risalita capillare si perforano due file di fori nella parte interna del muro e si inietta una soluzione chimica per creare una barriera che impedisce all'acqua di risalire attraverso la parete.",
  },
  {
    question: "Quali problemi può causare l'umidità?",
    answer: "L'esposizione costante all'umidità e alla muffa negli edifici è stata associata a sintomi respiratori, asma, polmonite da ipersensibilità (HP), rinosinusite, bronchite e infezioni respiratorie.",
  },
  {
    question: "Qual è la migliore azienda per risolvere problemi di umidità?",
    answer: "Ti aiutiamo a metterti in contatto con i migliori professionisti esperti in umidità della tua zona, in base al tuo tipo di problema specifico.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
          Domande Frequenti
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-background hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-secondary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
