import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { Check, Calendar, MapPin, Ticket, Mail, User, ArrowUpRight } from "lucide-react";

interface SuccessStateProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    cpf: string;
    paymentMethod: "pix" | "card";
  };
  onClose: () => void;
  pagseguroLink: string;
}

export function SuccessState({ formData, onClose }: SuccessStateProps) {
  // Fire confetti bursts on mount
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Confetti shoots from the left side and right side
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const ticketCode = `WD-${Math.floor(100000 + Math.random() * 900000)}`;
  const displayPrice = formData.paymentMethod === "pix" ? "R$ 450,00" : "R$ 598,80";

  return (
    <div className="space-y-8 animate-fade-up text-center">
      {/* Circular Success Check */}
      <div className="flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <Check className="h-8 w-8 stroke-[3]" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-display text-2xl font-bold text-white">Inscrição Iniciada!</h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Você foi redirecionado para o PagSeguro para finalizar o pagamento. Assim que concluir a transação, sua vaga estará oficialmente garantida e enviaremos o acesso ao seu e-mail.
        </p>
      </div>

      {/* Elegant Visual Ticket */}
      <div className="relative max-w-sm mx-auto rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-elegant">
        {/* Top Ticket Section */}
        <div className="p-6 pb-4 space-y-4 text-left">
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
              Ingresso Oficial
            </span>
            <span className="font-mono text-xs font-bold text-muted-foreground tracking-wide">
              {ticketCode}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="font-display text-lg font-bold text-white leading-tight">
              Workshop Vivendo de Audiovisual
            </h3>
            <p className="text-[11px] text-gold font-medium uppercase tracking-wider">
              Daniel Dutra · Edição Presencial
            </p>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-border/40 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold/80" />
              <span>12 de Setembro · 08h às 18h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold/80" />
              <span>GODigital Business Hub — Sobradinho/DF</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gold/80" />
              <span className="truncate text-white font-medium">{formData.fullName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold/80" />
              <span className="truncate">{formData.email}</span>
            </div>
          </div>
        </div>

        {/* Ticket Perforated Cut line and Holes */}
        <div className="relative h-4 flex items-center justify-between pointer-events-none">
          <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-r border-gold/30" />
          <div className="w-full border-b border-dashed border-border/60 mx-4" />
          <div className="absolute right-0 translate-x-1/2 w-4 h-4 rounded-full bg-background border-l border-gold/30" />
        </div>

        {/* Bottom Ticket Section */}
        <div className="p-6 pt-4 space-y-4">
          <div className="flex justify-between items-center text-xs text-left">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground block">
                Valor Pago
              </span>
              <span className="font-bold text-white text-sm">{displayPrice}</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground block">
                Método
              </span>
              <span className="font-semibold text-gold uppercase tracking-wider">
                {formData.paymentMethod === "pix" ? "PIX" : "Cartão"}
              </span>
            </div>
          </div>

          {/* Barcode drawing using CSS divs for barcode look without external deps */}
          <div className="bg-white/95 p-3.5 rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-full flex items-center justify-between px-1">
              {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 4, 1, 2, 2, 1, 3, 1, 2, 4, 1, 2].map((w, idx) => (
                <div
                  key={idx}
                  className="h-full bg-black"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
            <span className="font-mono text-[9px] text-black tracking-[0.35em] font-semibold">
              {ticketCode.replace("-", "")}9826354
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-sm mx-auto">
        <a
          href={pagseguroLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
        >
          <span>Ir para o PagSeguro</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
