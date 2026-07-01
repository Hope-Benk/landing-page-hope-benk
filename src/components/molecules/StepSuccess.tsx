import { useFormContext } from "react-hook-form";
import { FormValues } from "@/schemas/pre-register";

interface StepSuccessProps {
  onClose: () => void;
}

export default function StepSuccess({ onClose }: StepSuccessProps) {
  const { watch } = useFormContext<FormValues>();
  const nomeCompleto = watch("nome");
  const primeiroNome = nomeCompleto ? nomeCompleto.split(/\s+/)[0] : "Cliente";

  return (
    <div className="grow flex flex-col items-center justify-center text-center py-6 px-4 animate-in fade-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <span className="material-symbols-outlined text-emerald-500 text-5xl">
          check_circle
        </span>
      </div>
      <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-4">
        Pré-registro Concluído!
      </h2>
      <p className="text-sm text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed font-body">
        Parabéns, <strong className="text-primary">{primeiroNome}</strong>! Seu
        pré-cadastro na conta private banking da <strong>Hope Benk</strong> foi
        enviado com sucesso. Analisaremos sua documentação e retornaremos em
        breve.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="px-10 py-4 bg-linear-to-br from-primary to-primary-container text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:brightness-105 transition-all active:scale-95 duration-200 cursor-pointer text-center"
      >
        Ir para o Início
      </button>
    </div>
  );
}
