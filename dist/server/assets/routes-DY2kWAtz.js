import { t as hero_default } from "./hero-CHKMJdN8.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Award, Calendar, Camera, Check, CheckCircle2, ChevronDown, Clock, Copy, CreditCard, Film, Lightbulb, Lock, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Shirt, Sparkles, Star, User, Users, Video, Wallet, X, Zap } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import confetti from "canvas-confetti";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/components/checkout/CreditCardForm.tsx
function CreditCardForm({ onBack, onSubmit }) {
	const { register, watch, formState: { errors } } = useFormContext();
	const [isFlipped, setIsFlipped] = useState(false);
	const cardNumber = watch("cardNumber") || "";
	const cardName = watch("cardName") || "";
	const cardExpiry = watch("cardExpiry") || "";
	const cardCvv = watch("cardCvv") || "";
	const formatCardNumber = (num) => {
		const clearNum = num.replace(/\s?/g, "");
		let formatted = "";
		for (let i = 0; i < 16; i++) {
			if (i > 0 && i % 4 === 0) formatted += " ";
			formatted += clearNum[i] || "•";
		}
		return formatted;
	};
	const getCardType = (num) => {
		if (num.startsWith("4")) return "Visa";
		if (num.startsWith("5")) return "Mastercard";
		if (num.startsWith("3")) return "Amex";
		return "Credit Card";
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-center [perspective:1000px]",
				children: /* @__PURE__ */ jsxs("div", {
					className: `relative w-full max-w-[340px] h-[200px] transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 border border-gold/30 p-6 flex flex-col justify-between text-white [backface-visibility:hidden]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-start",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-9 w-12 bg-gold/20 rounded-md border border-gold/40 flex items-center justify-center",
								children: /* @__PURE__ */ jsx("div", { className: "h-6 w-8 bg-gold/50 rounded-sm" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs uppercase tracking-widest text-gold font-bold",
								children: getCardType(cardNumber)
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-mono text-lg sm:text-xl tracking-[0.15em] text-gold-soft",
								children: formatCardNumber(cardNumber)
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between items-end",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[9px] uppercase tracking-wider text-muted-foreground block",
										children: "Titular do Cartão"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs uppercase font-medium tracking-wide truncate max-w-[160px] block",
										children: cardName || "Nome do Titular"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-1 text-right",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[9px] uppercase tracking-wider text-muted-foreground block",
										children: "Validade"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-mono block",
										children: cardExpiry || "MM/AA"
									})]
								})]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gold/30 flex flex-col justify-between py-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]",
						children: [
							/* @__PURE__ */ jsx("div", { className: "w-full h-10 bg-neutral-800 mt-2" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 flex justify-end items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[9px] uppercase tracking-wider text-muted-foreground",
									children: "CVV"
								}), /* @__PURE__ */ jsx("div", {
									className: "bg-white text-black px-3 py-1.5 rounded font-mono text-sm tracking-widest w-14 text-center font-bold",
									children: cardCvv || "•••"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 text-[8px] text-muted-foreground text-center",
								children: "Assinatura autorizada · Daniel Dutra Retratista ©"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("label", {
							className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
							children: "Número do Cartão"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx(CreditCard, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" }), /* @__PURE__ */ jsx("input", {
								...register("cardNumber", {
									required: "Número do cartão obrigatório",
									pattern: {
										value: /^[0-9]{16}$/,
										message: "Número inválido (deve conter 16 dígitos)"
									}
								}),
								maxLength: 16,
								placeholder: "0000 0000 0000 0000",
								className: "w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
							})]
						}),
						errors.cardNumber && /* @__PURE__ */ jsx("span", {
							className: "text-xs text-red-500 mt-1 block",
							children: errors.cardNumber.message
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("label", {
							className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
							children: "Nome Impresso no Cartão"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx(User, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" }), /* @__PURE__ */ jsx("input", {
								...register("cardName", { required: "Nome impresso obrigatório" }),
								placeholder: "JOSÉ SILVA",
								className: "w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors uppercase"
							})]
						}),
						errors.cardName && /* @__PURE__ */ jsx("span", {
							className: "text-xs text-red-500 mt-1 block",
							children: errors.cardName.message
						})
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
								children: "Validade (MM/AA)"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(Calendar, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" }), /* @__PURE__ */ jsx("input", {
									...register("cardExpiry", {
										required: "Validade obrigatória",
										pattern: {
											value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
											message: "Use o formato MM/AA"
										}
									}),
									placeholder: "MM/AA",
									maxLength: 5,
									className: "w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
								})]
							}),
							errors.cardExpiry && /* @__PURE__ */ jsx("span", {
								className: "text-xs text-red-500 mt-1 block",
								children: errors.cardExpiry.message
							})
						] }), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
								children: "CVV"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" }), /* @__PURE__ */ jsx("input", {
									...register("cardCvv", {
										required: "CVV obrigatório",
										pattern: {
											value: /^[0-9]{3,4}$/,
											message: "3 ou 4 dígitos"
										}
									}),
									maxLength: 4,
									placeholder: "123",
									onFocus: () => setIsFlipped(true),
									onBlur: () => setIsFlipped(false),
									className: "w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
								})]
							}),
							errors.cardCvv && /* @__PURE__ */ jsx("span", {
								className: "text-xs text-red-500 mt-1 block",
								children: errors.cardCvv.message
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-3 pt-4",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onBack,
					className: "flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all",
					children: "Voltar"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onSubmit,
					className: "flex-1 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-full text-xs uppercase tracking-wider shadow-gold transition-all hover:scale-[1.02]",
					children: "Pagar R$ 598,80"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/checkout/PixPayment.tsx
function PixPayment({ onBack, onSubmit }) {
	const [copied, setCopied] = useState(false);
	const [timeLeft, setTimeLeft] = useState(900);
	const pixKey = "00020101021226870014br.gov.bcb.pix2565pix-qr.danieldutrastudio.com/qr/v2/cobv/24838634-8c88-466d-ad72-68a83492723c5204000053039865406450.005802BR5925Daniel Dutra Retratista6009Sobradinho62070503***6304D1A2";
	useEffect(() => {
		if (timeLeft <= 0) return;
		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1e3);
		return () => clearInterval(timer);
	}, [timeLeft]);
	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
	};
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(pixKey);
			setCopied(true);
			toast.success("Código PIX copiado com sucesso!");
			setTimeout(() => setCopied(false), 2e3);
		} catch (err) {
			toast.error("Falha ao copiar o código.");
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs text-gold font-semibold uppercase tracking-wider",
				children: "10% OFF Aplicado · Economia de R$ 50,00"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-xl font-bold text-gradient-gold",
					children: "R$ 450,00"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground",
					children: "Pague via PIX para liberação imediata do seu ingresso"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col items-center justify-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative p-4 bg-white rounded-2xl border border-neutral-200 shadow-elegant",
					children: [/* @__PURE__ */ jsxs("svg", {
						className: "h-44 w-44 text-black",
						viewBox: "0 0 100 100",
						children: [
							/* @__PURE__ */ jsx("rect", {
								x: "0",
								y: "0",
								width: "25",
								height: "25",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "3",
								y: "3",
								width: "19",
								height: "19",
								fill: "white"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "7",
								y: "7",
								width: "11",
								height: "11",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "75",
								y: "0",
								width: "25",
								height: "25",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "78",
								y: "3",
								width: "19",
								height: "19",
								fill: "white"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "82",
								y: "7",
								width: "11",
								height: "11",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "0",
								y: "75",
								width: "25",
								height: "25",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "3",
								y: "78",
								width: "19",
								height: "19",
								fill: "white"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "7",
								y: "82",
								width: "11",
								height: "11",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "35",
								y: "5",
								width: "8",
								height: "8",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "50",
								y: "10",
								width: "10",
								height: "5",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "40",
								y: "20",
								width: "20",
								height: "8",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "5",
								y: "35",
								width: "8",
								height: "12",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "20",
								y: "45",
								width: "15",
								height: "8",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "45",
								y: "35",
								width: "20",
								height: "15",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "70",
								y: "35",
								width: "10",
								height: "10",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "85",
								y: "30",
								width: "10",
								height: "12",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "5",
								y: "55",
								width: "12",
								height: "10",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "25",
								y: "60",
								width: "10",
								height: "10",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "40",
								y: "55",
								width: "18",
								height: "8",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "75",
								y: "55",
								width: "20",
								height: "10",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "35",
								y: "75",
								width: "8",
								height: "20",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "50",
								y: "70",
								width: "15",
								height: "8",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "70",
								y: "75",
								width: "12",
								height: "15",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("rect", {
								x: "85",
								y: "85",
								width: "10",
								height: "8",
								fill: "currentColor"
							}),
							/* @__PURE__ */ jsx("circle", {
								cx: "50",
								cy: "50",
								r: "8",
								fill: "white"
							}),
							/* @__PURE__ */ jsx("circle", {
								cx: "50",
								cy: "50",
								r: "5",
								fill: "currentColor"
							})
						]
					}), timeLeft <= 0 && /* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl text-center p-4",
						children: [
							/* @__PURE__ */ jsx(Clock, { className: "h-8 w-8 text-destructive mb-2" }),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-bold text-destructive",
								children: "QR Code Expirado"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "Por favor, reinicie o processo de pagamento."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium",
				children: [
					/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 text-gold" }),
					/* @__PURE__ */ jsx("span", { children: "O código expira em: " }),
					/* @__PURE__ */ jsx("span", {
						className: "text-gold font-mono font-bold tracking-wider",
						children: formatTime(timeLeft)
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx("label", {
					className: "block text-xs uppercase tracking-wider text-muted-foreground text-left font-medium",
					children: "Código PIX Copia e Cola"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ jsx("input", {
						type: "text",
						readOnly: true,
						value: pixKey,
						className: "flex-1 px-4 py-2.5 bg-background/50 border border-border rounded-xl text-xs focus:outline-none select-all truncate text-muted-foreground"
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: handleCopy,
						className: "px-4 bg-gold text-primary-foreground font-semibold rounded-xl flex items-center justify-center hover:bg-gold/90 transition-colors",
						title: "Copiar código PIX",
						children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-3 pt-4",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onSubmit,
					className: "w-full py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:shadow-lg transition-all hover:scale-[1.01]",
					children: "Confirmar Pagamento Simulado"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onBack,
					className: "w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all",
					children: "Voltar e Mudar Método"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/checkout/SuccessState.tsx
function SuccessState({ formData, onClose }) {
	useEffect(() => {
		const duration = 3 * 1e3;
		const animationEnd = Date.now() + duration;
		const defaults = {
			startVelocity: 30,
			spread: 360,
			ticks: 60,
			zIndex: 1e3
		};
		const randomInRange = (min, max) => {
			return Math.random() * (max - min) + min;
		};
		const interval = setInterval(function() {
			const timeLeft = animationEnd - Date.now();
			if (timeLeft <= 0) return clearInterval(interval);
			const particleCount = 50 * (timeLeft / duration);
			confetti({
				...defaults,
				particleCount,
				origin: {
					x: randomInRange(.1, .3),
					y: Math.random() - .2
				}
			});
			confetti({
				...defaults,
				particleCount,
				origin: {
					x: randomInRange(.7, .9),
					y: Math.random() - .2
				}
			});
		}, 250);
		return () => clearInterval(interval);
	}, []);
	const ticketCode = `WD-${Math.floor(1e5 + Math.random() * 9e5)}`;
	const displayPrice = formData.paymentMethod === "pix" ? "R$ 450,00" : "R$ 598,80";
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-8 animate-fade-up text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
					children: /* @__PURE__ */ jsx(Check, { className: "h-8 w-8 stroke-[3]" })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-2xl font-bold text-white",
					children: "Inscrição Iniciada!"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground max-w-sm mx-auto",
					children: "Você foi redirecionado para o PagSeguro para finalizar o pagamento. Assim que concluir a transação, sua vaga estará oficialmente garantida e enviaremos o acesso ao seu e-mail."
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative max-w-sm mx-auto rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-elegant",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 pb-4 space-y-4 text-left",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20",
									children: "Ingresso Oficial"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs font-bold text-muted-foreground tracking-wide",
									children: ticketCode
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-bold text-white leading-tight",
									children: "Workshop Vivendo de Audiovisual"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-gold font-medium uppercase tracking-wider",
									children: "Daniel Dutra · Edição Presencial"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2.5 pt-2 border-t border-border/40 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-gold/80" }), /* @__PURE__ */ jsx("span", { children: "12 de Setembro · 08h às 18h" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gold/80" }), /* @__PURE__ */ jsx("span", { children: "GODigital Business Hub — Sobradinho/DF" })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(User, { className: "h-4 w-4 text-gold/80" }), /* @__PURE__ */ jsx("span", {
											className: "truncate text-white font-medium",
											children: formData.fullName
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-gold/80" }), /* @__PURE__ */ jsx("span", {
											className: "truncate",
											children: formData.email
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative h-4 flex items-center justify-between pointer-events-none",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-r border-gold/30" }),
							/* @__PURE__ */ jsx("div", { className: "w-full border-b border-dashed border-border/60 mx-4" }),
							/* @__PURE__ */ jsx("div", { className: "absolute right-0 translate-x-1/2 w-4 h-4 rounded-full bg-background border-l border-gold/30" })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 pt-4 space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-center text-xs text-left",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-[9px] uppercase tracking-wider text-muted-foreground block",
								children: "Valor Pago"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-bold text-white text-sm",
								children: displayPrice
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "text-right",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[9px] uppercase tracking-wider text-muted-foreground block",
									children: "Método"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-semibold text-gold uppercase tracking-wider",
									children: formData.paymentMethod === "pix" ? "PIX" : "Cartão"
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-white/95 p-3.5 rounded-xl flex flex-col items-center justify-center gap-2",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-10 w-full flex items-center justify-between px-1",
								children: [
									2,
									1,
									3,
									1,
									2,
									4,
									1,
									2,
									3,
									1,
									2,
									1,
									4,
									1,
									2,
									2,
									1,
									3,
									1,
									2,
									4,
									1,
									2
								].map((w, idx) => /* @__PURE__ */ jsx("div", {
									className: "h-full bg-black",
									style: { width: `${w}px` }
								}, idx))
							}), /* @__PURE__ */ jsxs("span", {
								className: "font-mono text-[9px] text-black tracking-[0.35em] font-semibold",
								children: [ticketCode.replace("-", ""), "9826354"]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row justify-center gap-3 max-w-sm mx-auto",
				children: [/* @__PURE__ */ jsxs("a", {
					href: pagseguroLink,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex-1 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:scale-[1.02] transition-all flex items-center justify-center gap-2",
					children: [/* @__PURE__ */ jsx("span", { children: "Ir para o PagSeguro" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					className: "flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all",
					children: "Fechar"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/Logo.tsx
function Logo({ className = "", showText = true }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `flex items-center gap-3 ${className}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative h-11 w-11 shrink-0",
			children: /* @__PURE__ */ jsxs("svg", {
				className: "h-full w-full text-foreground",
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M 6,14 V 6 H 14",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 34,6 H 42 V 14",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 6,34 V 42 H 14",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 34,42 H 42 V 34",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 13,15 L 21.5,33.5",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 21.5,33.5 L 30,15",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 30,15 L 35,33.5",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 23.5,27.5 H 31.5",
						stroke: "currentColor",
						strokeWidth: "1.8",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M 25.5,19.5 L 25.5,23.5 L 28.5,21.5 Z",
						fill: "currentColor"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "33",
						cy: "15",
						r: "2.5",
						fill: "currentColor"
					})
				]
			})
		}), showText && /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-center leading-none text-left",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "font-display text-sm font-black tracking-[0.1em] text-white",
					children: "VIVENDO"
				}),
				/* @__PURE__ */ jsx("span", {
					className: "font-display text-[9px] font-bold tracking-[0.15em] text-muted-foreground mt-0.5",
					children: "DE AUDIOVISUAL"
				}),
				/* @__PURE__ */ jsx("span", {
					className: "font-sans text-[6px] font-bold tracking-[0.2em] text-white/50 mt-0.5 uppercase",
					children: "Workshop 100% Prático"
				})
			]
		})]
	});
}
//#endregion
//#region src/components/checkout/CheckoutModal.tsx
var PAGSEGURO_CARD_LINK = "https://pagseguro.uol.com.br";
var PAGSEGURO_PIX_LINK = "https://pagseguro.uol.com.br";
function CheckoutModal({ isOpen, onClose }) {
	const [step, setStep] = useState("details");
	const methods = useForm({
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			cpf: "",
			paymentMethod: "pix",
			cardNumber: "",
			cardName: "",
			cardExpiry: "",
			cardCvv: ""
		},
		mode: "onTouched"
	});
	const { register, handleSubmit, watch, setValue, formState: { errors, isValid } } = methods;
	const paymentMethod = watch("paymentMethod");
	const fullName = watch("fullName");
	const email = watch("email");
	const phone = watch("phone");
	const cpf = watch("cpf");
	if (!isOpen) return null;
	const handleDetailsSubmit = () => {
		if (errors.fullName || errors.email || errors.phone || errors.cpf || !fullName || !email || !phone || !cpf) return;
		setStep("method");
	};
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
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md overflow-y-auto no-scrollbar",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative w-full max-w-lg rounded-3xl border border-gold/20 bg-surface p-6 sm:p-8 shadow-elegant overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/5 blur-3xl pointer-events-none" }),
				step !== "success" && step !== "processing" && /* @__PURE__ */ jsxs("div", {
					className: "flex justify-between items-center mb-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-xl font-bold text-white flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Logo, { showText: false }), /* @__PURE__ */ jsx("span", { children: "Garantir Vaga no Workshop" })]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: "Inscreva-se com segurança"
					})] }), /* @__PURE__ */ jsx("button", {
						onClick: handleClose,
						className: "p-2 text-muted-foreground hover:text-white rounded-full bg-background/40 hover:bg-background/80 transition-colors",
						children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
					})]
				}),
				step !== "success" && step !== "processing" && /* @__PURE__ */ jsxs("div", {
					className: "flex gap-2 mb-6",
					children: [
						/* @__PURE__ */ jsx("div", { className: `h-1.5 flex-1 rounded-full ${step === "details" ? "bg-gradient-gold" : "bg-gold/40"}` }),
						/* @__PURE__ */ jsx("div", { className: `h-1.5 flex-1 rounded-full ${step === "method" ? "bg-gradient-gold" : step === "payment" ? "bg-gold/40" : "bg-neutral-800"}` }),
						/* @__PURE__ */ jsx("div", { className: `h-1.5 flex-1 rounded-full ${step === "payment" ? "bg-gradient-gold" : "bg-neutral-800"}` })
					]
				}),
				/* @__PURE__ */ jsx(FormProvider, {
					...methods,
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit(handlePaymentSubmit),
						children: [
							step === "details" && /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("label", {
											className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
											children: "Nome Completo"
										}),
										/* @__PURE__ */ jsx("input", {
											...register("fullName", { required: "Nome completo é obrigatório" }),
											type: "text",
											placeholder: "Seu nome completo",
											className: "w-full px-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
										}),
										errors.fullName && /* @__PURE__ */ jsx("span", {
											className: "text-xs text-red-500 mt-1 block",
											children: errors.fullName.message
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("label", {
											className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
											children: "E-mail"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "relative",
											children: [/* @__PURE__ */ jsx(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" }), /* @__PURE__ */ jsx("input", {
												...register("email", {
													required: "E-mail é obrigatório",
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message: "Endereço de e-mail inválido"
													}
												}),
												type: "email",
												placeholder: "seu.email@exemplo.com",
												className: "w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
											})]
										}),
										errors.email && /* @__PURE__ */ jsx("span", {
											className: "text-xs text-red-500 mt-1 block",
											children: errors.email.message
										})
									] }),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
												children: "WhatsApp"
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [/* @__PURE__ */ jsx(Phone, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/60" }), /* @__PURE__ */ jsx("input", {
													...register("phone", {
														required: "WhatsApp é obrigatório",
														pattern: {
															value: /^[0-9]{10,11}$/,
															message: "Apenas números com DDD (ex: 61999999999)"
														}
													}),
													type: "tel",
													placeholder: "61999999999",
													className: "w-full pl-10 pr-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
												})]
											}),
											errors.phone && /* @__PURE__ */ jsx("span", {
												className: "text-xs text-red-500 mt-1 block",
												children: errors.phone.message
											})
										] }), /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium",
												children: "CPF"
											}),
											/* @__PURE__ */ jsx("input", {
												...register("cpf", {
													required: "CPF é obrigatório",
													pattern: {
														value: /^[0-9]{11}$/,
														message: "Apenas números (deve conter 11 dígitos)"
													}
												}),
												type: "text",
												placeholder: "00000000000",
												maxLength: 11,
												className: "w-full px-4 py-2.5 bg-background/50 border border-border rounded-xl focus:border-gold focus:outline-none text-sm transition-colors"
											}),
											errors.cpf && /* @__PURE__ */ jsx("span", {
												className: "text-xs text-red-500 mt-1 block",
												children: errors.cpf.message
											})
										] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex gap-2 items-center text-[10px] text-muted-foreground bg-background/40 p-3 rounded-xl border border-border/40 mt-6",
										children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Seus dados pessoais estão protegidos por criptografia de ponta a ponta." })]
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: handleDetailsSubmit,
										className: "w-full mt-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:scale-[1.01] transition-all flex items-center justify-center gap-2",
										children: [/* @__PURE__ */ jsx("span", { children: "Continuar para Pagamento" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							}),
							step === "method" && /* @__PURE__ */ jsxs("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-sm font-semibold text-white mb-2",
										children: "Selecione o método de pagamento"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 gap-4",
										children: [/* @__PURE__ */ jsxs("div", {
											onClick: () => setValue("paymentMethod", "pix"),
											className: `p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${paymentMethod === "pix" ? "border-gold bg-gold/5" : "border-border hover:border-gold/40 bg-background/20"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3.5",
												children: [/* @__PURE__ */ jsx("div", {
													className: "h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold",
													children: /* @__PURE__ */ jsx(Wallet, { className: "h-5 w-5" })
												}), /* @__PURE__ */ jsxs("div", {
													className: "text-left",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "text-sm font-bold text-white flex items-center gap-1.5",
														children: [/* @__PURE__ */ jsx("span", { children: "PIX" }), /* @__PURE__ */ jsx("span", {
															className: "text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-1.5 py-0.5 rounded border border-emerald-500/20",
															children: "10% OFF"
														})]
													}), /* @__PURE__ */ jsx("div", {
														className: "text-xs text-muted-foreground mt-0.5",
														children: "Liberação imediata da sua vaga"
													})]
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "text-right",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-xs text-muted-foreground line-through",
													children: "R$ 600,00"
												}), /* @__PURE__ */ jsx("div", {
													className: "text-sm font-bold text-gold",
													children: "R$ 450,00"
												})]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											onClick: () => setValue("paymentMethod", "card"),
											className: `p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${paymentMethod === "card" ? "border-gold bg-gold/5" : "border-border hover:border-gold/40 bg-background/20"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3.5",
												children: [/* @__PURE__ */ jsx("div", {
													className: "h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold",
													children: /* @__PURE__ */ jsx(CreditCard, { className: "h-5 w-5" })
												}), /* @__PURE__ */ jsxs("div", {
													className: "text-left",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-sm font-bold text-white",
														children: "Cartão de Crédito"
													}), /* @__PURE__ */ jsx("div", {
														className: "text-xs text-muted-foreground mt-0.5",
														children: "Até 12x sem juros no cartão"
													})]
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "text-right",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-xs text-muted-foreground",
													children: "Sem juros"
												}), /* @__PURE__ */ jsx("div", {
													className: "text-sm font-bold text-white",
													children: "12x R$ 49,90"
												})]
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex gap-3 pt-4",
										children: [/* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => setStep("details"),
											className: "flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all",
											children: "Voltar"
										}), /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: handlePaymentRedirect,
											className: "flex-1 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-full text-xs uppercase tracking-wider shadow-gold hover:scale-[1.01] transition-all flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ jsx("span", { children: "Prosseguir para o PagSeguro" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
										})]
									})
								]
							}),
							step === "payment" && /* @__PURE__ */ jsx("div", { children: paymentMethod === "pix" ? /* @__PURE__ */ jsx(PixPayment, {
								onBack: () => setStep("method"),
								onSubmit: handlePaymentSubmit
							}) : /* @__PURE__ */ jsx(CreditCardForm, {
								onBack: () => setStep("method"),
								onSubmit: handlePaymentSubmit
							}) }),
							step === "processing" && /* @__PURE__ */ jsxs("div", {
								className: "py-12 flex flex-col items-center justify-center space-y-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "relative flex items-center justify-center",
									children: [/* @__PURE__ */ jsx("div", { className: "h-16 w-16 animate-spin rounded-full border-4 border-gold/20 border-t-gold" }), /* @__PURE__ */ jsx(ShieldCheck, { className: "absolute h-6 w-6 text-gold animate-pulse" })]
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-center space-y-2",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-md font-bold text-white",
										children: "Processando Pagamento..."
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs text-muted-foreground max-w-xs",
										children: "Estamos validando seus dados e confirmando sua transação segura com o banco. Não saia da página."
									})]
								})]
							}),
							step === "success" && /* @__PURE__ */ jsx(SuccessState, {
								formData: {
									fullName,
									email,
									phone,
									cpf,
									paymentMethod
								},
								onClose: handleClose,
								pagseguroLink: paymentMethod === "pix" ? PAGSEGURO_PIX_LINK : PAGSEGURO_CARD_LINK
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/assets/instructor.jpg
var instructor_default = "/assets/instructor-BAJ32VRL.jpg";
//#endregion
//#region src/assets/studio.jpg
var studio_default = "/assets/studio-kcZ2dzyW.jpg";
//#endregion
//#region src/assets/videoset.jpg
var videoset_default = "/assets/videoset-Dec5QOZ-.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var EVENT_DATE = /* @__PURE__ */ new Date("2026-09-12T08:00:00-03:00");
var WHATSAPP_URL = "https://wa.me/5561981935774?text=Quero%20garantir%20minha%20vaga%20no%20Workshop";
function useCountdown(target) {
	const [t, setT] = useState({
		d: 0,
		h: 0,
		m: 0,
		s: 0
	});
	useEffect(() => {
		const tick = () => {
			const diff = Math.max(0, target.getTime() - Date.now());
			setT({
				d: Math.floor(diff / 864e5),
				h: Math.floor(diff / 36e5 % 24),
				m: Math.floor(diff / 6e4 % 60),
				s: Math.floor(diff / 1e3 % 60)
			});
		};
		tick();
		const id = setInterval(tick, 1e3);
		return () => clearInterval(id);
	}, [target]);
	return t;
}
function GoldButton({ children, href, variant = "solid", className = "", size = "md", onClick }) {
	const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer";
	const sizes = {
		md: "px-6 py-3 text-sm",
		lg: "px-8 py-4 text-base"
	};
	const styles = variant === "solid" ? "bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-[0_25px_70px_-15px_oklch(0.82_0.13_85/0.5)]" : "border border-gold/40 text-gold hover:bg-gold/10";
	return /* @__PURE__ */ jsx("a", {
		href: href || "#",
		onClick,
		className: `${base} ${sizes[size]} ${styles} ${className}`,
		children
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold",
		children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" }), children]
	});
}
function Index() {
	const { d, h, m, s } = useCountdown(EVENT_DATE);
	const [checkoutOpen, setCheckoutOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "fixed top-0 inset-x-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(Logo, {}),
						/* @__PURE__ */ jsxs("div", {
							className: "hidden md:flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-gold" }), /* @__PURE__ */ jsx("span", { children: "12 SET · Sobradinho/DF" })]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setCheckoutOpen(true),
							className: "hidden sm:inline-flex items-center rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground cursor-pointer hover:scale-[1.02] transition-transform",
							children: "Garantir vaga"
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative min-h-screen flex items-center pt-24 pb-32",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ jsx("img", {
							src: hero_default,
							alt: "",
							className: "h-full w-full object-cover opacity-50",
							width: 1920,
							height: 1280
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0",
							style: { background: "var(--gradient-hero)" }
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 pointer-events-none",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 animate-fade-up",
							children: [
								/* @__PURE__ */ jsx(SectionLabel, { children: "Workshop Presencial · Edição 2025" }),
								/* @__PURE__ */ jsxs("h1", {
									className: "mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]",
									children: [
										"Aprenda ",
										/* @__PURE__ */ jsx("span", {
											className: "text-gradient-gold",
											children: "Fotografia e Vídeo"
										}),
										" na Prática em Apenas 1 Dia"
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed",
									children: "Um treinamento 100% presencial e prático para quem deseja dominar os fundamentos da fotografia e da produção audiovisual, aprendendo diretamente em estúdio e em cenário real de gravação."
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-8 grid sm:grid-cols-2 gap-3 max-w-xl",
									children: [
										{
											i: Clock,
											t: "10 horas de imersão prática"
										},
										{
											i: Camera,
											t: "Fotografia e Vídeo no mesmo treinamento"
										},
										{
											i: Award,
											t: "Certificado incluso"
										},
										{
											i: Shirt,
											t: "Camiseta oficial inclusa"
										},
										{
											i: Zap,
											t: "Vagas limitadas"
										}
									].map(({ i: Icon, t }) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-3 text-sm",
										children: [/* @__PURE__ */ jsx("span", {
											className: "flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/5",
											children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-gold" })
										}), /* @__PURE__ */ jsx("span", {
											className: "text-foreground/90",
											children: t
										})]
									}, t))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-10 flex flex-col sm:flex-row gap-4",
									children: [/* @__PURE__ */ jsx(GoldButton, {
										onClick: () => setCheckoutOpen(true),
										size: "lg",
										children: "Quero garantir minha vaga"
									}), /* @__PURE__ */ jsx(GoldButton, {
										href: "#programa",
										variant: "outline",
										size: "lg",
										children: "Ver o programa"
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-5 animate-fade-up",
							style: { animationDelay: "0.2s" },
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative rounded-3xl border border-gold/20 bg-surface/80 backdrop-blur-xl p-8 shadow-elegant",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground",
										children: "Faltam"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-4 gap-3 mt-4",
										children: [
											{
												v: d,
												l: "Dias"
											},
											{
												v: h,
												l: "Horas"
											},
											{
												v: m,
												l: "Min"
											},
											{
												v: s,
												l: "Seg"
											}
										].map(({ v, l }) => /* @__PURE__ */ jsxs("div", {
											className: "text-center rounded-xl bg-background/60 border border-border py-4",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-display text-3xl sm:text-4xl font-bold text-gradient-gold tabular-nums",
												children: String(v).padStart(2, "0")
											}), /* @__PURE__ */ jsx("div", {
												className: "mt-1 text-[10px] uppercase tracking-widest text-muted-foreground",
												children: l
											})]
										}, l))
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-8 space-y-3 text-sm",
										children: [
											/* @__PURE__ */ jsx(Row, {
												icon: Calendar,
												label: "Data",
												value: "12 de Setembro"
											}),
											/* @__PURE__ */ jsx(Row, {
												icon: Clock,
												label: "Horário",
												value: "08h às 18h"
											}),
											/* @__PURE__ */ jsx(Row, {
												icon: MapPin,
												label: "Local",
												value: "GODigital Business Hub – Sobradinho/DF"
											}),
											/* @__PURE__ */ jsx(Row, {
												icon: Sparkles,
												label: "Modalidade",
												value: "Presencial · 100% prático"
											})
										]
									}),
									/* @__PURE__ */ jsx("div", { className: "mt-6 gold-divider" }),
									/* @__PURE__ */ jsx("button", {
										onClick: () => setCheckoutOpen(true),
										className: "mt-6 w-full py-3 bg-gold/10 hover:bg-gold/20 text-gold font-bold uppercase tracking-wider text-xs rounded-xl border border-gold/30 cursor-pointer transition-colors",
										children: "Investimento a partir de 12x R$ 49,97"
									})
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs(Section, {
				id: "para-quem",
				children: [
					/* @__PURE__ */ jsx(SectionLabel, { children: "Para Quem é" }),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-4 text-3xl sm:text-5xl font-bold max-w-3xl",
						children: [
							"Este workshop foi criado para ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "quem leva audiovisual a sério"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4",
						children: [
							"Iniciantes que desejam aprender fotografia e vídeo da forma correta",
							"Criadores de conteúdo",
							"Fotógrafos que desejam migrar para o vídeo",
							"Videomakers iniciantes",
							"Profissionais que desejam melhorar a qualidade de suas entregas",
							"Pessoas que desejam transformar o audiovisual em uma fonte de renda"
						].map((t, i) => /* @__PURE__ */ jsxs("div", {
							className: "group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-gold/40 hover:bg-surface-elevated",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all",
								children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-foreground/90",
								children: t
							})]
						}, i))
					})
				]
			}),
			/* @__PURE__ */ jsxs(Section, {
				id: "programa",
				className: "bg-surface/40",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx(SectionLabel, { children: "O Que Você Vai Aprender" }), /* @__PURE__ */ jsxs("h2", {
						className: "mt-4 text-3xl sm:text-5xl font-bold",
						children: ["4 módulos. ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "1 dia transformador."
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-16 grid md:grid-cols-2 gap-6",
					children: [
						/* @__PURE__ */ jsx(Module, {
							n: "01",
							icon: Camera,
							title: "Fundamentos da Fotografia",
							items: [
								"ISO",
								"Velocidade do obturador",
								"Abertura do diafragma",
								"Exposição",
								"Composição",
								"Enquadramento",
								"Direção de pessoas"
							]
						}),
						/* @__PURE__ */ jsx(Module, {
							n: "02",
							icon: Video,
							title: "Fundamentos do Vídeo",
							items: [
								"FPS",
								"Resolução",
								"Perfil de imagem",
								"Movimentos de câmera",
								"Captação de áudio",
								"Iluminação para vídeo"
							]
						}),
						/* @__PURE__ */ jsx(Module, {
							n: "03",
							icon: Lightbulb,
							title: "Estúdio Fotográfico",
							items: [
								"Montagem de cenário",
								"Posicionamento de luz",
								"Configuração de equipamentos",
								"Retratos profissionais",
								"Direção prática"
							]
						}),
						/* @__PURE__ */ jsx(Module, {
							n: "04",
							icon: Film,
							title: "Set de Produção Audiovisual",
							items: [
								"Montagem completa de set",
								"Organização da produção",
								"Fluxo profissional",
								"Exercícios práticos",
								"Simulação de gravações reais"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "pratica",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ jsx("img", {
							src: studio_default,
							alt: "Estúdio fotográfico",
							className: "rounded-2xl border border-border aspect-[3/4] object-cover w-full animate-fade-up",
							width: 1280,
							height: 960,
							loading: "lazy"
						}), /* @__PURE__ */ jsx("img", {
							src: videoset_default,
							alt: "Set de vídeo",
							className: "rounded-2xl border border-border aspect-[3/4] object-cover w-full mt-12 animate-fade-up",
							style: { animationDelay: "0.15s" },
							width: 1280,
							height: 960,
							loading: "lazy"
						})]
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(SectionLabel, { children: "Experiência Prática" }),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-4 text-3xl sm:text-5xl font-bold",
							children: [
								"Aqui você não vai ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gradient-gold",
									children: "apenas assistir"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: "Durante o workshop você irá:"
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-3",
							children: [
								"Configurar câmeras",
								"Trabalhar com iluminação",
								"Fotografar em estúdio",
								"Participar de gravações",
								"Entender o fluxo real de uma produção audiovisual",
								"Aprender através da prática"
							].map((t) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-gold flex-shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", {
									className: "text-foreground/90",
									children: t
								})]
							}, t))
						})
					] })]
				})
			}),
			/* @__PURE__ */ jsxs(Section, {
				id: "incluso",
				className: "bg-surface/40",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx(SectionLabel, { children: "Sua imersão completa" }), /* @__PURE__ */ jsxs("h2", {
						className: "mt-4 text-3xl sm:text-5xl font-bold",
						children: ["O que está ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "incluso"
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							i: Camera,
							t: "Workshop presencial"
						},
						{
							i: Sparkles,
							t: "Material de apoio"
						},
						{
							i: Award,
							t: "Certificado de conclusão"
						},
						{
							i: Shirt,
							t: "Camiseta oficial do evento"
						},
						{
							i: Users,
							t: "Networking com profissionais"
						},
						{
							i: Star,
							t: "Coffee Break"
						}
					].map(({ i: Icon, t }) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-gold/20 bg-surface p-6 flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: t
						})]
					}, t))
				})]
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "instrutor",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-12 gap-12 items-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" }), /* @__PURE__ */ jsx("img", {
								src: instructor_default,
								alt: "Daniel Dutra",
								className: "relative rounded-3xl border border-gold/30 w-full aspect-[4/5] object-cover",
								width: 1024,
								height: 1280,
								loading: "lazy"
							})]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ jsx(SectionLabel, { children: "Seu Instrutor" }),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-4 font-display text-4xl sm:text-6xl font-bold",
								children: "Daniel Dutra"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-2 text-gold text-sm uppercase tracking-widest",
								children: "Fotógrafo & Videomaker"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-lg text-muted-foreground leading-relaxed",
								children: "Com mais de uma década de experiência no mercado audiovisual, atua em produções corporativas, institucionais, eventos, publicidade e conteúdo digital."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground leading-relaxed",
								children: "Ao longo da carreira participou de projetos para empresas, órgãos públicos e grandes produções, acumulando experiência prática que agora será compartilhada em uma imersão presencial focada em resultados reais."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8 grid grid-cols-3 gap-4",
								children: [
									{
										v: "10+",
										l: "Anos de mercado"
									},
									{
										v: "500+",
										l: "Produções"
									},
									{
										v: "100%",
										l: "Prático"
									}
								].map(({ v, l }) => /* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border border-border bg-surface p-4 text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-display text-3xl font-bold text-gradient-gold",
										children: v
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
										children: l
									})]
								}, l))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs(Section, {
				id: "depoimentos",
				className: "bg-surface/40",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx(SectionLabel, { children: "Provas Sociais" }), /* @__PURE__ */ jsxs("h2", {
						className: "mt-4 text-3xl sm:text-5xl font-bold",
						children: ["Quem já aprendeu comigo ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "recomenda"
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						{
							n: "Marina Costa",
							r: "Criadora de conteúdo",
							t: "Saí do workshop com clareza absoluta sobre iluminação e composição. O conteúdo prático faz toda a diferença."
						},
						{
							n: "Rafael Almeida",
							r: "Fotógrafo",
							t: "Conseguir migrar pro vídeo era meu objetivo há anos. Em um único dia o Daniel me deu o mapa completo."
						},
						{
							n: "Juliana Pires",
							r: "Videomaker",
							t: "Set montado de verdade, equipamento na mão, direção real. É outro nível de aprendizado."
						},
						{
							n: "Pedro Henrique",
							r: "Empreendedor",
							t: "Hoje produzo o audiovisual da minha própria empresa com qualidade profissional. Investimento que se pagou rápido."
						},
						{
							n: "Camila Rocha",
							r: "Iniciante",
							t: "Eu não tinha câmera e mesmo assim aprendi muito. A didática do Daniel é incrível."
						},
						{
							n: "Bruno Lima",
							r: "Publicitário",
							t: "Os fluxos profissionais que aprendi mudaram a forma como nossa agência entrega projetos."
						}
					].map(({ n, r, t }) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-surface p-6 hover:border-gold/30 transition-colors",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-1 text-gold mb-4",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-sm text-foreground/90 leading-relaxed",
								children: [
									"\"",
									t,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-semibold text-sm",
									children: n.split(" ").map((p) => p[0]).slice(0, 2).join("")
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: n
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: r
								})] })]
							})
						]
					}, n))
				})]
			}),
			/* @__PURE__ */ jsxs(Section, {
				id: "inscricao",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [/* @__PURE__ */ jsx(SectionLabel, { children: "Investimento" }), /* @__PURE__ */ jsxs("h2", {
							className: "mt-4 text-3xl sm:text-5xl font-bold",
							children: ["Garanta sua vaga no ", /* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "lote atual"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-16 max-w-3xl mx-auto",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative rounded-3xl border-2 border-gold/40 bg-gradient-to-b from-surface to-surface-elevated p-8 sm:p-12 shadow-gold overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "absolute top-0 right-0 bg-gradient-gold px-6 py-2 rounded-bl-2xl text-primary-foreground text-xs font-bold uppercase tracking-widest",
									children: "Lote Atual"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 text-center",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-sm text-muted-foreground line-through",
											children: "de R$ 600,00 por"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-2 flex items-baseline justify-center gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-display text-6xl sm:text-7xl font-bold text-gradient-gold",
												children: "R$ 450"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-muted-foreground",
												children: ",00"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-2 text-sm text-gold uppercase tracking-widest font-semibold",
											children: "10% OFF · Pagamento à vista no PIX"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-6 inline-block rounded-full bg-background/60 border border-border px-6 py-2 text-sm",
											children: [
												"ou ",
												/* @__PURE__ */ jsx("span", {
													className: "font-bold text-foreground",
													children: "12x de R$ 49,90"
												}),
												" sem juros no cartão"
											]
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: "gold-divider my-10" }),
								/* @__PURE__ */ jsx("div", {
									className: "grid sm:grid-cols-2 gap-3 mb-8",
									children: [
										"Workshop presencial 100% prático",
										"Material de apoio",
										"Certificado de conclusão",
										"Camiseta oficial",
										"Networking",
										"Coffee Break"
									].map((t) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-gold flex-shrink-0" }), /* @__PURE__ */ jsx("span", { children: t })]
									}, t))
								}),
								/* @__PURE__ */ jsx(GoldButton, {
									onClick: () => setCheckoutOpen(true),
									size: "lg",
									className: "w-full",
									children: "Garantir minha vaga agora"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-center text-xs text-muted-foreground",
									children: "Pagamento seguro · Vagas limitadas"
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12 max-w-3xl mx-auto rounded-2xl border border-destructive/30 bg-destructive/5 p-6 flex gap-4 items-start",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-destructive/20 text-destructive flex-shrink-0",
							children: /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-semibold text-foreground",
							children: "Atenção: vagas limitadas"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "As vagas são limitadas para garantir acompanhamento individual durante as atividades práticas. Quando preenchidas, as inscrições serão encerradas."
						})] })]
					})
				]
			}),
			/* @__PURE__ */ jsxs(Section, {
				id: "faq",
				className: "bg-surface/40",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx(SectionLabel, { children: "Dúvidas Frequentes" }), /* @__PURE__ */ jsxs("h2", {
						className: "mt-4 text-3xl sm:text-5xl font-bold",
						children: ["Tudo o que você ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "precisa saber"
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 max-w-3xl mx-auto",
					children: /* @__PURE__ */ jsx(Accordion, {
						type: "single",
						collapsible: true,
						className: "space-y-3",
						children: [
							{
								q: "Preciso ter câmera?",
								a: "Não. Você pode participar mesmo sem equipamento próprio."
							},
							{
								q: "É para iniciantes?",
								a: "Sim. O conteúdo foi estruturado para quem está começando."
							},
							{
								q: "Receberei certificado?",
								a: "Sim. Todos os participantes receberão certificado de conclusão."
							},
							{
								q: "O workshop é teórico ou prático?",
								a: "O treinamento é predominantemente prático, com exercícios e demonstrações durante todo o dia."
							},
							{
								q: "A camiseta está inclusa?",
								a: "Sim. A camiseta oficial do evento está inclusa para todos os participantes."
							}
						].map(({ q, a }, i) => /* @__PURE__ */ jsxs(AccordionItem, {
							value: `item-${i}`,
							className: "rounded-2xl border border-border bg-surface px-6 data-[state=open]:border-gold/40",
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "text-left hover:no-underline py-5 font-semibold",
								children: /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-gold transition-transform" }), q]
								})
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "text-muted-foreground pb-5 pl-7",
								children: a
							})]
						}, i))
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative py-32 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0",
					children: [/* @__PURE__ */ jsx("img", {
						src: hero_default,
						alt: "",
						className: "h-full w-full object-cover opacity-30",
						loading: "lazy"
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0",
						style: { background: "var(--gradient-hero)" }
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-4xl px-4 sm:px-6 text-center",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, { children: "Sua próxima jornada" }),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight",
							children: [
								"Sua evolução no audiovisual ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gradient-gold",
									children: "começa aqui"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto",
							children: "Aprenda fotografia e vídeo de forma prática, presencial e aplicada ao mercado real."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-surface/60 backdrop-blur px-6 py-3",
							children: [
								/* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-gold" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-sm font-medium",
									children: "12 de Setembro"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-border",
									children: "·"
								}),
								/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gold" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-sm font-medium",
									children: "GODigital Business Hub — Sobradinho/DF"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsx(GoldButton, {
								onClick: () => setCheckoutOpen(true),
								size: "lg",
								children: "Inscrever-me no workshop"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsxs("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Workshop Vivendo de Audiovisual · Sobradinho/DF"
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: WHATSAPP_URL,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "WhatsApp",
				className: "fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform animate-float",
				children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "fixed bottom-0 inset-x-0 z-40 border-t border-gold/20 bg-background/95 backdrop-blur-xl sm:hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "Lote atual"
					}), /* @__PURE__ */ jsxs("div", {
						className: "text-sm font-bold",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "R$ 450"
							}),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground font-normal text-xs font-sans",
								children: "à vista"
							})
						]
					})] }), /* @__PURE__ */ jsx("button", {
						onClick: () => setCheckoutOpen(true),
						className: "inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground cursor-pointer",
						children: "Quero minha vaga"
					})]
				})
			}),
			/* @__PURE__ */ jsx(CheckoutModal, {
				isOpen: checkoutOpen,
				onClose: () => setCheckoutOpen(false)
			})
		]
	});
}
function Row({ icon: Icon, label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ jsx("span", {
				className: "text-xs uppercase tracking-wider",
				children: label
			})]
		}), /* @__PURE__ */ jsx("span", {
			className: "text-sm font-medium text-right",
			children: value
		})]
	});
}
function Section({ id, children, className = "" }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: `py-24 sm:py-32 ${className}`,
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children
		})
	});
}
function Module({ n, icon: Icon, title, items }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "group relative rounded-3xl border border-border bg-surface p-8 transition-all hover:border-gold/40 hover:-translate-y-1",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between mb-6",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-primary-foreground",
					children: /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7" })
				}), /* @__PURE__ */ jsx("span", {
					className: "font-display text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors",
					children: n
				})]
			}),
			/* @__PURE__ */ jsxs("h3", {
				className: "font-display text-2xl font-bold mb-4",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "text-gold text-sm uppercase tracking-widest block mb-1 font-sans",
					children: ["Módulo ", n]
				}), title]
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "space-y-2",
				children: items.map((it) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-2 text-sm text-foreground/85",
					children: [/* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" }), it]
				}, it))
			})
		]
	});
}
//#endregion
export { Index as component };
