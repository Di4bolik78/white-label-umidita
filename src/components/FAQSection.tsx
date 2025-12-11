import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Come faccio a sapere se si tratta di umidità da condensa?",
    answer: "I primi sintomi dell'umidità da condensa sono piccole macchie nere di muffa negli angoli e sulle pareti, specchi appannati o gocce d'acqua sulle finestre. Questo tipo di umidità si forma quando il vapore acqueo presente nell'aria interna entra in contatto con una superficie fredda e passa allo stato liquido, bagnando così la superficie.",
  },
  {
    question: "Come eliminare l'umidità da risalita capillare?",
    answer: "Questo tipo di umidità si verifica quando l'acqua sotterranea entra in contatto con le fondamenta degli edifici. Per risolvere un problema di umidità da capillarità si praticano delle specifiche iniezioni nella parte interna o esterna del muro (in base allo spessore della parete) e si inietta una soluzione chimica che crea una barriera in grado di impedire all'acqua di risalire lungo la parete.",
  },
  {
    question: "Quali problemi può causare l'umidità?",
    answer: "L'esposizione costante all'umidità e alla muffa negli edifici è stata associata a sintomi respiratori, asma, polmonite, rinosinusite, bronchite e infezioni respiratorie.",
  },
  {
    question: "Qual è la migliore azienda per i problemi di umidità?",
    answer: "Ti aiutiamo a entrare in contatto con i migliori professionisti esperti in umidità della tua zona, in base al tipo di problema.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto flex justify-start">
        <div className="w-full md:w-4/5 lg:w-3/4">
          {/* Header with decorative stripes */}
          <div className="flex flex-col items-start mb-12">
            {/* Decorative stripes */}
            <div className="flex gap-1 mb-4">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-5 md:h-6 bg-secondary transform -skew-x-12"
                />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-left">
              Domande Frequenti
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none rounded-lg px-6 md:px-8 bg-background shadow-sm hover:shadow-lg transition-all duration-300 data-[state=open]:shadow-lg data-[state=open]:ring-2 data-[state=open]:ring-secondary/30"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-primary hover:text-secondary py-6 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-sm font-bold text-secondary flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-11 text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
