import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const regions = [
  "Lombardia", "Piemonte", "Liguria", "Valle D'Aosta", "Veneto", 
  "Trentino Alto Adige", "Emilia Romagna", "Marche", "Umbria", "Toscana", "Lazio"
];

const humidityTypes = [
  "Umidità da risalita capillare",
  "Umidità da condensa",
  "Umidità da infiltrazione",
  "Umidità da perdite",
  "Non sono sicuro"
];

const contactTimes = [
  "Mattina (9:00 - 12:00)",
  "Pomeriggio (12:00 - 18:00)",
  "Sera (18:00 - 21:00)",
  "Qualsiasi orario"
];

const SurveySection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    hasIssue: null as boolean | null,
    region: "",
    humidityType: "",
    ownerType: "",
    postalCode: "",
    phone: "",
    contactTime: "",
    firstName: "",
    lastName: ""
  });
  const [completed, setCompleted] = useState(false);

  const totalSteps = 9;
  const progress = (step / totalSteps) * 100;

  const handleAnswer = (key: string, value: string | boolean) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step === 0 && answers.hasIssue === false) {
      setCompleted(true);
      return;
    }
    if (step < totalSteps - 1) {
      setStep(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0: return answers.hasIssue !== null;
      case 1: return answers.region !== "";
      case 2: return answers.humidityType !== "";
      case 3: return answers.ownerType !== "";
      case 4: return answers.postalCode.length >= 5;
      case 5: return answers.phone.length >= 9;
      case 6: return answers.contactTime !== "";
      case 7: return answers.firstName.trim().length >= 2 && answers.lastName.trim().length >= 2;
      case 8: return true; // Summary step
      default: return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              Hai problemi di umidità in casa?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg bg-secondary text-white hover:bg-secondary/80 hover-lift"
                onClick={() => {
                  handleAnswer("hasIssue", true);
                  setStep(1);
                }}
              >
                Sì
              </Button>
              <Button
                size="lg"
                className="px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 hover-lift"
                onClick={() => {
                  handleAnswer("hasIssue", false);
                  setCompleted(true);
                }}
              >
                No
              </Button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              In quale regione ti trovi?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto">
              {regions.map((region) => (
                <Button
                  key={region}
                  className={`py-3 sm:py-4 text-sm sm:text-base ${answers.region === region ? "bg-secondary text-white hover:bg-secondary/80" : "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"}`}
                  onClick={() => handleAnswer("region", region)}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              Che tipo di umidità hai?
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3 max-w-md mx-auto">
              {humidityTypes.map((type) => (
                <Button
                  key={type}
                  className={`py-3 sm:py-4 text-sm sm:text-base ${answers.humidityType === type ? "bg-secondary text-white hover:bg-secondary/80" : "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"}`}
                  onClick={() => handleAnswer("humidityType", type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              Sei inquilino o proprietario?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className={`px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg ${answers.ownerType === "proprietario" ? "bg-secondary text-white hover:bg-secondary/80" : "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"}`}
                onClick={() => handleAnswer("ownerType", "proprietario")}
              >
                Proprietario
              </Button>
              <Button
                size="lg"
                className={`px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg ${answers.ownerType === "inquilino" ? "bg-secondary text-white hover:bg-secondary/80" : "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"}`}
                onClick={() => handleAnswer("ownerType", "inquilino")}
              >
                Inquilino
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              Qual è il tuo codice postale?
            </h3>
            <div className="max-w-xs mx-auto">
              <Input
                type="text"
                placeholder="Es. 20121"
                value={answers.postalCode}
                onChange={(e) => handleAnswer("postalCode", e.target.value.replace(/\D/g, "").slice(0, 5))}
                className="text-center text-base sm:text-lg py-5 sm:py-6 bg-primary/10 border-primary/30 text-primary placeholder:text-primary/50"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              Qual è il tuo numero di telefono?
            </h3>
            <div className="max-w-xs mx-auto">
              <Input
                type="tel"
                placeholder="Es. 333 1234567"
                value={answers.phone}
                onChange={(e) => handleAnswer("phone", e.target.value.replace(/[^\d\s]/g, ""))}
                className="text-center text-base sm:text-lg py-5 sm:py-6 bg-primary/10 border-primary/30 text-primary placeholder:text-primary/50"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              Quando preferisci essere contattato?
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3 max-w-md mx-auto">
              {contactTimes.map((time) => (
                <Button
                  key={time}
                  className={`py-3 sm:py-4 text-sm sm:text-base ${answers.contactTime === time ? "bg-secondary text-white hover:bg-secondary/80" : "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"}`}
                  onClick={() => handleAnswer("contactTime", time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4 sm:space-y-6 w-full px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center">
              Qual è il tuo nome e cognome?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground text-center">
              Così possiamo rivolgerci a te correttamente
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">Nome</label>
                <Input
                  type="text"
                  placeholder="Mario"
                  value={answers.firstName}
                  onChange={(e) => handleAnswer("firstName", e.target.value)}
                  className="text-base sm:text-lg py-5 sm:py-6 bg-primary/10 border-primary/30 text-primary placeholder:text-primary/50"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">Cognome</label>
                <Input
                  type="text"
                  placeholder="Rossi"
                  value={answers.lastName}
                  onChange={(e) => handleAnswer("lastName", e.target.value)}
                  className="text-base sm:text-lg py-5 sm:py-6 bg-primary/10 border-primary/30 text-primary placeholder:text-primary/50"
                />
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4 sm:space-y-6 w-full max-w-lg mx-auto px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-4 sm:mb-8">
              Riepilogo
            </h3>
            <div className="bg-primary/5 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-primary/10">
                <span className="text-sm sm:text-base text-muted-foreground">Nome</span>
                <span className="text-sm sm:text-base font-medium text-primary">{answers.firstName} {answers.lastName}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/10">
                <span className="text-sm sm:text-base text-muted-foreground">Regione</span>
                <span className="text-sm sm:text-base font-medium text-primary">{answers.region}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/10">
                <span className="text-sm sm:text-base text-muted-foreground">Tipo di umidità</span>
                <span className="text-sm sm:text-base font-medium text-primary text-right max-w-[50%]">{answers.humidityType}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/10">
                <span className="text-sm sm:text-base text-muted-foreground">Tipologia</span>
                <span className="text-sm sm:text-base font-medium text-primary capitalize">{answers.ownerType}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/10">
                <span className="text-sm sm:text-base text-muted-foreground">CAP</span>
                <span className="text-sm sm:text-base font-medium text-primary">{answers.postalCode}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/10">
                <span className="text-sm sm:text-base text-muted-foreground">Telefono</span>
                <span className="text-sm sm:text-base font-medium text-primary">{answers.phone}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm sm:text-base text-muted-foreground">Orario contatto</span>
                <span className="text-sm sm:text-base font-medium text-primary text-right">{answers.contactTime}</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (completed) {
    return (
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
          </div>
          {answers.hasIssue === false ? (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3 sm:mb-4">
                Grazie per il tuo interesse!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                Purtroppo, al momento offriamo solo servizi relativi all'umidità. Speriamo di poterti aiutare in futuro!
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3 sm:mb-4">
                Grazie per aver completato il sondaggio!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                Un nostro esperto ti contatterà al più presto per offrirti la migliore soluzione.
              </p>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        {/* Question content */}
        <div className="min-h-[280px] md:min-h-[300px] flex items-center justify-center">
          {renderStep()}
        </div>

        {/* Progress bar - only after first question */}
        {step > 0 && (
          <div className="mt-8 md:mt-10 mb-4 md:mb-6">
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-2">
              <span>Domanda {step + 1} di {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-primary/20" />
          </div>
        )}

        {/* Navigation - only after first question */}
        {step > 0 && (
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={prevStep}
              className="border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
              Indietro
            </Button>
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="bg-secondary text-white hover:bg-secondary/80 disabled:opacity-50 px-4 sm:px-8 py-4 sm:py-5 font-semibold text-sm sm:text-base"
            >
              {step === totalSteps - 1 ? "Invia" : "Avanti"}
              {step < totalSteps - 1 && <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurveySection;
