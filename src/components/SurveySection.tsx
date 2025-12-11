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
    contactTime: ""
  });
  const [completed, setCompleted] = useState(false);

  const totalSteps = 7;
  const progress = ((step + 1) / totalSteps) * 100;

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
      default: return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center">
              Hai problemi di umidità in casa?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant={answers.hasIssue === true ? "default" : "outline"}
                className={`px-12 py-6 text-lg ${answers.hasIssue === true ? "bg-secondary text-white" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
                onClick={() => handleAnswer("hasIssue", true)}
              >
                Sì
              </Button>
              <Button
                size="lg"
                variant={answers.hasIssue === false ? "default" : "outline"}
                className={`px-12 py-6 text-lg ${answers.hasIssue === false ? "bg-secondary text-white" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
                onClick={() => handleAnswer("hasIssue", false)}
              >
                No
              </Button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center">
              In quale regione ti trovi?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={answers.region === region ? "default" : "outline"}
                  className={`py-4 ${answers.region === region ? "bg-secondary text-white" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
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
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center">
              Che tipo di umidità hai?
            </h3>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              {humidityTypes.map((type) => (
                <Button
                  key={type}
                  variant={answers.humidityType === type ? "default" : "outline"}
                  className={`py-4 ${answers.humidityType === type ? "bg-secondary text-white" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
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
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center">
              Sei inquilino o proprietario?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant={answers.ownerType === "proprietario" ? "default" : "outline"}
                className={`px-12 py-6 text-lg ${answers.ownerType === "proprietario" ? "bg-secondary text-white" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
                onClick={() => handleAnswer("ownerType", "proprietario")}
              >
                Proprietario
              </Button>
              <Button
                size="lg"
                variant={answers.ownerType === "inquilino" ? "default" : "outline"}
                className={`px-12 py-6 text-lg ${answers.ownerType === "inquilino" ? "bg-secondary text-white" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
                onClick={() => handleAnswer("ownerType", "inquilino")}
              >
                Inquilino
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center">
              Qual è il tuo codice postale?
            </h3>
            <div className="max-w-xs mx-auto">
              <Input
                type="text"
                placeholder="Es. 20121"
                value={answers.postalCode}
                onChange={(e) => handleAnswer("postalCode", e.target.value.replace(/\D/g, "").slice(0, 5))}
                className="text-center text-lg py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center">
              Qual è il tuo numero di telefono?
            </h3>
            <div className="max-w-xs mx-auto">
              <Input
                type="tel"
                placeholder="Es. 333 1234567"
                value={answers.phone}
                onChange={(e) => handleAnswer("phone", e.target.value.replace(/[^\d\s]/g, ""))}
                className="text-center text-lg py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center">
              Quando preferisci essere contattato?
            </h3>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              {contactTimes.map((time) => (
                <Button
                  key={time}
                  variant={answers.contactTime === time ? "default" : "outline"}
                  className={`py-4 ${answers.contactTime === time ? "bg-secondary text-white" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
                  onClick={() => handleAnswer("contactTime", time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (completed) {
    return (
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          {answers.hasIssue === false ? (
            <>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Grazie per la risposta!
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Se in futuro dovessi avere problemi di umidità, saremo qui per aiutarti.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Grazie per aver completato il sondaggio!
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Un nostro esperto ti contatterà al più presto per offrirti la migliore soluzione.
              </p>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-3xl">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-primary-foreground/60 mb-2">
            <span>Domanda {step + 1} di {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-primary-foreground/20" />
        </div>

        {/* Question content */}
        <div className="min-h-[300px] flex items-center justify-center">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={step === 0}
            className="text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Indietro
          </Button>
          <Button
            onClick={nextStep}
            disabled={!canProceed()}
            className="bg-secondary text-white hover:bg-secondary/90 disabled:opacity-50"
          >
            {step === totalSteps - 1 ? "Invia" : "Avanti"}
            {step < totalSteps - 1 && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;
