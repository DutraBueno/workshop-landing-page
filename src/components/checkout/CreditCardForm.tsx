import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { CreditCard, Calendar, Lock, User } from "lucide-react";

interface CreditCardFormProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function CreditCardForm({ onBack, onSubmit }: CreditCardFormProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const [isFlipped, setIsFlipped] = useState(false);

  // Watch fields to update the visual card in real time
  const cardNumber = watch("cardNumber") || "";
  const cardName = watch("cardName") || "";
  const cardExpiry = watch("cardExpiry") || "";
  const cardCvv = watch("cardCvv") || "";

  // Format Card Number for visual display
  const formatCardNumber = (num: string) => {
    const clearNum = num.replace(/\s?/g, "");
    let formatted = "";
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) formatted += " ";
      formatted += clearNum[i] || "•";
    }
    return formatted;
  };

  // Detect card network
  const getCardType = (num: string) => {
    if (num.startsWith("4")) return "Visa";
    if (num.startsWith("5")) return "Mastercard";
    if (num.startsWith("3")) return "Amex";
    return "Credit Card";
  };

  return (
    <div className="space-y-6">
      {/* Visual Credit Card */}
      <div className="flex justify-center [perspective:1000px]">
        <div
          className={`relative w-full max-w-[340px] h-[200px] transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Card Front */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 border border-gold/30 p-6 flex flex-col justify-between text-white [backface-visibility:hidden]">
            <div className="flex justify-between items-start">
              <div className="h-9 w-12 bg-gold/20 rounded-md border border-gold/40 flex items-center justify-center">
                <div className="h-6 w-8 bg-gold/50 rounded-sm" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                {getCardType(cardNumber)}
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="font-mono text-lg sm:text-xl tracking-[0.15em] text-gold-soft">
                {formatCardNumber(cardNumber)}
              </div>
              
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block">
                    Titular do Cartão
                  </span>
                  <span className="text-xs uppercase font-medium tracking-wide truncate max-w-[160px] block">
                    {cardName || "Nome do Titular"}
                  </span>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block">
                    Validade
                  </span>
                  <span className="text-xs font-mono block">
                    {cardExpiry || "MM/AA"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Back */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gold/30 flex flex-col justify-between py-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="w-full h-10 bg-neutral-800 mt-2" />
            <div className="px-6 flex justify-end items-center gap-3">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground">CVV</span>
              <div className="bg-white text-black px-3 py-1.5 rounded font-mono text-sm tracking-widest w-14 text-center font-bold">
                {cardCvv || "•••"}
              </div>
            </div>
            <div className="px-6 text-[8px] text-muted-foreground text-center">
              Assinatura autorizada · Daniel Dutra Retratista ©
            </div>
          </div>
        </div>
      </div>

      {/* Credit Card Input Form */}
      <div className="space-y-4">
        {/* Card Number */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
            Número do Cartão
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" />
            <input
              {...register("cardNumber", {
                required: "Número do cartão obrigatório",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Número inválido (deve conter 16 dígitos)",
                },
              })}
              maxLength={16}
              placeholder="0000 0000 0000 0000"
              className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
            />
          </div>
          {errors.cardNumber && (
            <span className="text-xs text-red-500 mt-1 block">
              {errors.cardNumber.message as string}
            </span>
          )}
        </div>

        {/* Card Holder Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
            Nome Impresso no Cartão
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" />
            <input
              {...register("cardName", {
                required: "Nome impresso obrigatório",
              })}
              placeholder="JOSÉ SILVA"
              className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors uppercase"
            />
          </div>
          {errors.cardName && (
            <span className="text-xs text-red-500 mt-1 block">
              {errors.cardName.message as string}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Expiry Date */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
              Validade (MM/AA)
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" />
              <input
                {...register("cardExpiry", {
                  required: "Validade obrigatória",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: "Use o formato MM/AA",
                  },
                })}
                placeholder="MM/AA"
                maxLength={5}
                className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
              />
            </div>
            {errors.cardExpiry && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.cardExpiry.message as string}
              </span>
            )}
          </div>

          {/* CVV */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
              CVV
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" />
              <input
                {...register("cardCvv", {
                  required: "CVV obrigatório",
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                    message: "3 ou 4 dígitos",
                  },
                })}
                maxLength={4}
                placeholder="123"
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
              />
            </div>
            {errors.cardCvv && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.cardCvv.message as string}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="flex-1 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-full text-xs uppercase tracking-wider shadow-gold transition-all hover:scale-[1.02]"
        >
          Pagar R$ 598,80
        </button>
      </div>
    </div>
  );
}
