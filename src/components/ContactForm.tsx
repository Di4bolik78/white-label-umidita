import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  // Reset submitAttempted on mount to ensure clean state
  useEffect(() => {
    setSubmitAttempted(false);
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^[0-9]{6,15}$/.test(phone.replace(/\s/g, ''));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.nome || !formData.cognome || !formData.email) {
        toast({ title: "Compila tutti i campi", variant: "destructive" });
        return;
      }
      if (!isValidEmail(formData.email)) {
        toast({ title: "Inserisci un'email valida", variant: "destructive" });
        return;
      }
    }
    if (step === 2) {
      if (!formData.cap || !formData.telefono) {
        toast({ title: "Compila tutti i campi", variant: "destructive" });
        return;
      }
      if (!isValidPhone(formData.telefono)) {
        toast({ title: "Inserisci un numero di telefono valido", variant: "destructive" });
        return;
      }
    }
    setSubmitAttempted(false);
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setSubmitAttempted(false);
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    if (!privacyAccepted) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Simula invio (sostituire con vera chiamata API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulazione successo
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setPrivacyAccepted(false);
    setSubmitAttempted(false);
    setSubmitStatus('idle');
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      cap: "",
      telefono: "",
      relazione: "",
      tipoUmidita: "",
      orarioContatto: "",
    });
  };

  return (
    <section id="contatto" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-8">
            Ricevi informazioni gratis e senza impegno
          </h2>

          {/* Success message */}
          {submitStatus === 'success' && (
            <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-300">
              <CheckCircle className="w-16 h-16 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Richiesta inviata con successo!</h3>
              <p className="text-muted-foreground text-center mb-6">Ti contatteremo al più presto.</p>
              <Button 
                onClick={resetForm}
                variant="outline"
                className="px-6"
              >
                Invia un'altra richiesta
              </Button>
            </div>
          )}

          {/* Error message */}
          {submitStatus === 'error' && (
            <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-300">
              <XCircle className="w-16 h-16 text-destructive mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Errore nell'invio</h3>
              <p className="text-muted-foreground text-center mb-6">Si è verificato un problema. Riprova più tardi.</p>
              <Button 
                onClick={() => setSubmitStatus('idle')}
                className="btn-glow bg-secondary text-white px-6"
              >
                Riprova
              </Button>
            </div>
          )}

          {/* Form content */}
          {submitStatus === 'idle' && (
            <>
              {/* Progress indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((num, index) => (
                  <div key={num} className="flex items-center" style={{ flex: index < 2 ? 1 : 'none' }}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                      step >= num 
                        ? "bg-secondary text-secondary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {num}
                    </div>
                    {num < 3 && (
                      <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
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
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Select onValueChange={(v) => handleChange("relazione", v)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Relazione con l'immobile" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="proprietario">Proprietario</SelectItem>
                          <SelectItem value="inquilino">Inquilino</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select onValueChange={(v) => handleChange("tipoUmidita", v)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Tipo di Umidità" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="condensa">Condensa</SelectItem>
                          <SelectItem value="infiltrazioni">Infiltrazioni Laterali</SelectItem>
                          <SelectItem value="capillarita">Risalita Capillare</SelectItem>
                          <SelectItem value="muffa">Muffa o Macchie</SelectItem>
                          <SelectItem value="salnitro">Salnitro</SelectItem>
                          <SelectItem value="altro">Altro</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select onValueChange={(v) => handleChange("orarioContatto", v)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Preferenza di Contatto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mattina">Di mattina</SelectItem>
                          <SelectItem value="pomeriggio">Di pomeriggio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Privacy checkbox */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="privacy" 
                          checked={privacyAccepted}
                          onCheckedChange={(checked) => {
                            setPrivacyAccepted(checked as boolean);
                          }}
                          className="mt-1"
                        />
                        <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                          Ho letto l'informativa sulla{" "}
                          <a 
                            href="/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-secondary underline hover:text-secondary/80"
                          >
                            privacy
                          </a>{" "}
                          e do il consenso al trattamento dei miei dati<span className="text-destructive">*</span>
                        </label>
                      </div>
                      {submitAttempted && !privacyAccepted && (
                        <p className="text-destructive text-sm ml-7">Devi accettare l'informativa sulla privacy</p>
                      )}
                    </div>
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
                      disabled={isLoading}
                    >
                      Indietro
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="btn-glow bg-secondary text-white px-8 h-12 font-semibold"
                    >
                      Avanti
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="btn-glow bg-secondary text-white px-8 h-12 font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        "Richiedi Informazioni"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
