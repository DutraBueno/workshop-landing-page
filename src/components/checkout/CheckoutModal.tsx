import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { X, Mail, Phone, CreditCard, Sparkles, ShieldCheck, ArrowRight, Wallet } from "lucide-react";
import { CreditCardForm } from "./CreditCardForm";
import { PixPayment } from "./PixPayment";
import { SuccessState } from "./SuccessState";
import { Logo } from "@/components/Logo";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CheckoutStep = "details" | "method" | "payment" | "processing" | "success";

interface CheckoutFormInputs {
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  paymentMethod: "pix" | "card";
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
}
// Substitua pelos seus links reais do PagSeguro (gerados na sua conta PagSeguro)
// Se você usar o mesmo link para Pix e Cartão, coloque o mesmo endereço em ambos.
const PAGSEGURO_CARD_LINK = "https://pagseguro.uol.com.br";
const PAGSEGURO_PIX_LINK = "https://pagseguro.uol.com.br";
export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<CheckoutStep>("details");
  const methods = useForm<CheckoutFormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      cpf: "",
      paymentMethod: "pix",
      cardNumber: "",
      cardName: "",
      cardExpiry: "",
      cardCvv: "",
    },
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = methods;

  const paymentMethod = watch("paymentMethod");
  const fullName = watch("fullName");
  const email = watch("email");
  const phone = watch("phone");
  const cpf = watch("cpf");

  if (!isOpen) return null;

  // Handle personal details completion
  const handleDetailsSubmit = () => {
    if (errors.fullName || errors.email || errors.phone || errors.cpf || !fullName || !email || !phone || !cpf) {
      return;
    }
    setStep("method");
  };

  // Redireciona o usuário para o link de pagamento do PagSeguro
  const handlePaymentRedirect = () => {
    const link = paymentMethod === "pix" ? PAGSEGURO_PIX_LINK : PAGSEGURO_CARD_LINK;
    window.open(link, "_blank", "noopener,noreferrer");
    setStep("success");
  };

  const handleClose = () => {
    setStep("details");
    methods.reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md overflow-y-auto no-scrollbar">
      <div className="relative w-full max-w-lg rounded-3xl border border-gold/20 bg-surface p-6 sm:p-8 shadow-elegant overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Decorative ambient lights */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        
        {/* Header (unless success) */}
        {step !== "success" && step !== "processing" && (
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Logo showText={false} />
                <span>Garantir Vaga no Workshop</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-1">Inscreva-se com segurança</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-muted-foreground hover:text-white rounded-full bg-background/40 hover:bg-background/80 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Progress Bar (steps indicator) */}
        {step !== "success" && step !== "processing" && (
          <div className="flex gap-2 mb-6">
            <div className={`h-1.5 flex-1 rounded-full ${step === "details" ? "bg-gradient-gold" : "bg-gold/40"}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step === "method" ? "bg-gradient-gold" : step === "payment" ? "bg-gold/40" : "bg-neutral-800"}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step === "payment" ? "bg-gradient-gold" : "bg-neutral-800"}`} />
          </div>
        )}

        {/* Step Contents */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handlePaymentSubmit)}>
            {/* Step 1: Personal Details */}
            {step === "details" && (
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
                    Nome Completo
                  </label>
                  <input
                    {...register("fullName", { required: "Nome completo é obrigatório" })}
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.fullName.message as string}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" />
                    <input
                      {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Endereço de e-mail inválido",
                        },
                      })}
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.email.message as string}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp/Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
                      WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" />
                      <input
                        {...register("phone", {
                          required: "WhatsApp é obrigatório",
                          pattern: {
                            value: /^[0-9]{10,11}$/,
                            message: "Apenas números com DDD (ex: 61999999999)",
                          },
                        })}
                        type="tel"
                        placeholder="61999999999"
                        className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.phone.message as string}
                      </span>
                    )}
                  </div>

                  {/* CPF */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
                      CPF
                    </label>
                    <input
                      {...register("cpf", {
                        required: "CPF é obrigatório",
                        pattern: {
                          value: /^[0-9]{11}$/,
                          message: "Apenas números (deve conter 11 dígitos)",
                        },
                      })}
                      type="text"
                      placeholder="00000000000"
                      maxLength={11}
                      className="w-full px-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
                    />
                    {errors.cpf && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.cpf.message as string}
                      </span>
                    )}
                  </div>
                </div>

                {/* Privacy Badge */}
                <div className="flex gap-2 items-center text-[10px] text-muted-foreground bg-background/40 p-3 rounded-xl border border-border/40 mt-6">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Seus dados pessoais estão protegidos por criptografia de ponta a ponta.</span>
                </div>

                {/* Continue button */}
                <button
                  type="button"
                  onClick={handleDetailsSubmit}
                  className="w-full mt-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Continuar para Pagamento</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Step 2: Payment Method Choice */}
            {step === "method" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-white mb-2">Selecione o método de pagamento</h3>
                <div className="grid grid-cols-1 gap-4">
                  {/* PIX Option */}
                  <div
                    onClick={() => setValue("paymentMethod", "pix")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${
                      paymentMethod === "pix"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/40 bg-background/20"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                        <Wallet className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>PIX</span>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
                            10% OFF
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">Liberação imediata da sua vaga</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground line-through">R$ 600,00</div>
                      <div className="text-sm font-bold text-gold">R$ 450,00</div>
                    </div>
                  </div>

                  {/* Credit Card Option */}
                  <div
                    onClick={() => setValue("paymentMethod", "card")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${
                      paymentMethod === "card"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/40 bg-background/20"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white">Cartão de Crédito</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Até 12x sem juros no cartão</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Sem juros</div>
                      <div className="text-sm font-bold text-white">12x R$ 49,90</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={handlePaymentRedirect}
                    className="flex-1 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Prosseguir para o PagSeguro</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Specific Payment Information */}
            {step === "payment" && (
              <div>
                {paymentMethod === "pix" ? (
                  <PixPayment onBack={() => setStep("method")} onSubmit={handlePaymentSubmit} />
                ) : (
                  <CreditCardForm onBack={() => setStep("method")} onSubmit={handlePaymentSubmit} />
                )}
              </div>
            )}

            {/* Step 4: Loading Screen */}
            {step === "processing" && (
              <div className="py-12 flex flex-col items-center justify-center space-y-6">
                <div className="relative flex items-center justify-center">
                  <div className="h-16 w-16 animate-spin rounded-full border-4 border-gold/20 border-t-gold" />
                  <ShieldCheck className="absolute h-6 w-6 text-gold animate-pulse" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-md font-bold text-white">Processando Pagamento...</h3>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Estamos validando seus dados e confirmando sua transação segura com o banco. Não saia da página.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Success Ticket Display */}
            {step === "success" && (
              <SuccessState
                formData={{
                  fullName,
                  email,
                  phone,
                  cpf,
                  paymentMethod,
                }}
                onClose={handleClose}
                pagseguroLink={paymentMethod === "pix" ? PAGSEGURO_PIX_LINK : PAGSEGURO_CARD_LINK}
              />
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
