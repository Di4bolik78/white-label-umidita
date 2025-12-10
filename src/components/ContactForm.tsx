import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    cap: "",
    telefono: "",
    relazione: "",
    tipoUmidita: "",
    orarioContatto: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.nome || !formData.cognome || !formData.email)) {
      toast({ title: "Compila tutti i campi", variant: "destructive" });
      return;
    }
    if (step === 2 && (!formData.cap || !formData.telefono)) {
      toast({ title: "Compila tutti i campi", variant: "destructive" });
      return;
    }
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "Richiesta inviata!", 
      description: "Ti contatteremo al più presto." 
    });
  };

  return (
    <section id="contatto" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-8">
          Ricevi informazioni gratis e senza impegno
        </h2>

        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-8 max-w-2xl">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                step >= num 
                  ? "bg-secondary text-secondary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                  step > num ? "bg-secondary" : "bg-muted"
                }`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1 */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
              <Input
                placeholder="Nome"
                value={formData.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className="h-12 border-border focus:border-secondary"
              />
              <Input
                placeholder="Cognome"
                value={formData.cognome}
                onChange={(e) => handleChange("cognome", e.target.value)}
                className="h-12 border-border focus:border-secondary"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-12 border-border focus:border-secondary"
              />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
              <Input
                placeholder="Codice Postale"
                value={formData.cap}
                onChange={(e) => handleChange("cap", e.target.value)}
                className="h-12 border-border focus:border-secondary"
              />
              <Input
                type="tel"
                placeholder="Telefono"
                value={formData.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                className="h-12 border-border focus:border-secondary"
              />
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
              <Select onValueChange={(v) => handleChange("relazione", v)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Relazione con l'immobile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proprietario">Proprietario</SelectItem>
                  <SelectItem value="inquilino">Inquilino</SelectItem>
                  <SelectItem value="altro">Altro</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(v) => handleChange("tipoUmidita", v)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Tipo di Umidità" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="condensa">Condensa</SelectItem>
                  <SelectItem value="infiltrazioni">Infiltrazioni</SelectItem>
                  <SelectItem value="capillarita">Risalita Capillare</SelectItem>
                  <SelectItem value="muffa">Muffa o Macchie di Umidità</SelectItem>
                  <SelectItem value="altro">Altro</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(v) => handleChange("orarioContatto", v)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Orario preferito" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mattina">Di mattina</SelectItem>
                  <SelectItem value="pomeriggio">Di pomeriggio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-4 justify-end">
            {step > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                className="px-8 h-12"
              >
                Indietro
              </Button>
            )}
            {step < 3 ? (
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-secondary hover:bg-gold-hover text-secondary-foreground px-8 h-12 font-semibold"
              >
                Avanti
              </Button>
            ) : (
              <Button 
                type="submit"
                className="bg-secondary hover:bg-gold-hover text-secondary-foreground px-8 h-12 font-semibold"
              >
                CONSULTA GRATIS
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
