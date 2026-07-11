import React, { useState, useEffect } from "react";
import { Copy, Check, Clock, QrCode } from "lucide-react";
import { toast } from "sonner";

interface PixPaymentProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function PixPayment({ onBack, onSubmit }: PixPaymentProps) {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  const pixKey = "00020101021226870014br.gov.bcb.pix2565pix-qr.danieldutrastudio.com/qr/v2/cobv/24838634-8c88-466d-ad72-68a83492723c5204000053039865406450.005802BR5925Daniel Dutra Retratista6009Sobradinho62070503***6304D1A2";

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      toast.success("Código PIX copiado com sucesso!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Falha ao copiar o código.");
    }
  };

  return (
    <div className="space-y-6 text-center">
      {/* Discount Badge */}
      <div className="inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs text-gold font-semibold uppercase tracking-wider">
        10% OFF Aplicado · Economia de R$ 50,00
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-xl font-bold text-gradient-gold">R$ 450,00</h3>
        <p className="text-xs text-muted-foreground">Pague via PIX para liberação imediata do seu ingresso</p>
      </div>

      {/* Styled QR Code Box */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative p-4 bg-white rounded-2xl border border-neutral-200 shadow-elegant">
          {/* Simulated QR Code using SVG for pixel perfection without extra package dependencies */}
          <svg className="h-44 w-44 text-black" viewBox="0 0 100 100">
            {/* Corner Markers */}
            <rect x="0" y="0" width="25" height="25" fill="currentColor" />
            <rect x="3" y="3" width="19" height="19" fill="white" />
            <rect x="7" y="7" width="11" height="11" fill="currentColor" />

            <rect x="75" y="0" width="25" height="25" fill="currentColor" />
            <rect x="78" y="3" width="19" height="19" fill="white" />
            <rect x="82" y="7" width="11" height="11" fill="currentColor" />

            <rect x="0" y="75" width="25" height="25" fill="currentColor" />
            <rect x="3" y="78" width="19" height="19" fill="white" />
            <rect x="7" y="82" width="11" height="11" fill="currentColor" />

            {/* Random Matrix blocks representing a real QR code */}
            <rect x="35" y="5" width="8" height="8" fill="currentColor" />
            <rect x="50" y="10" width="10" height="5" fill="currentColor" />
            <rect x="40" y="20" width="20" height="8" fill="currentColor" />
            <rect x="5" y="35" width="8" height="12" fill="currentColor" />
            <rect x="20" y="45" width="15" height="8" fill="currentColor" />
            <rect x="45" y="35" width="20" height="15" fill="currentColor" />
            <rect x="70" y="35" width="10" height="10" fill="currentColor" />
            <rect x="85" y="30" width="10" height="12" fill="currentColor" />

            <rect x="5" y="55" width="12" height="10" fill="currentColor" />
            <rect x="25" y="60" width="10" height="10" fill="currentColor" />
            <rect x="40" y="55" width="18" height="8" fill="currentColor" />
            <rect x="75" y="55" width="20" height="10" fill="currentColor" />

            <rect x="35" y="75" width="8" height="20" fill="currentColor" />
            <rect x="50" y="70" width="15" height="8" fill="currentColor" />
            <rect x="70" y="75" width="12" height="15" fill="currentColor" />
            <rect x="85" y="85" width="10" height="8" fill="currentColor" />

            {/* Center camera logo shape for branding */}
            <circle cx="50" cy="50" r="8" fill="white" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
          </svg>
          {timeLeft <= 0 && (
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl text-center p-4">
              <Clock className="h-8 w-8 text-destructive mb-2" />
              <p className="text-sm font-bold text-destructive">QR Code Expirado</p>
              <p className="text-xs text-muted-foreground">Por favor, reinicie o processo de pagamento.</p>
            </div>
          )}
        </div>
      </div>

      {/* Timer and Instructions */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium">
        <Clock className="h-3.5 w-3.5 text-gold" />
        <span>O código expira em: </span>
        <span className="text-gold font-mono font-bold tracking-wider">{formatTime(timeLeft)}</span>
      </div>

      {/* Copia e Cola Input and Copy Button */}
      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-wider text-muted-foreground text-left font-medium">
          Código PIX Copia e Cola
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={pixKey}
            className="flex-1 px-4 py-2.5 bg-background/50 border border-border rounded-xl text-xs focus:outline-none select-all truncate text-muted-foreground"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="px-4 bg-gold text-primary-foreground font-semibold rounded-xl flex items-center justify-center hover:bg-gold/90 transition-colors"
            title="Copiar código PIX"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Action / Simulation buttons */}
      <div className="space-y-3 pt-4">
        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:shadow-lg transition-all hover:scale-[1.01]"
        >
          Confirmar Pagamento Simulado
        </button>
        
        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
        >
          Voltar e Mudar Método
        </button>
      </div>
    </div>
  );
}
