"use client";

import React, { useRef } from "react";
import { FormProvider } from "react-hook-form";

import StepIndicator from "@/components/molecules/StepIndicator";
import StepPersonalData from "@/components/molecules/StepPersonalData";
import StepAddress from "@/components/molecules/StepAddress";
import StepBusiness from "@/components/molecules/StepBusiness";
import StepSuccess from "@/components/molecules/StepSuccess";
import { usePreRegister } from "@/hooks/use-pre-register";

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { number: 1, label: "Dados Pessoais" },
  { number: 2, label: "Residência" },
  { number: 3, label: "Dados da Empresa" },
  { number: 4, label: "Finalização" },
];

export default function PreRegisterModal({ isOpen, onClose }: PreRegisterModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { methods, step, mutation, handleNext, handleBack } = usePreRegister();

  if (!isOpen) return null;

  return (
    <FormProvider {...methods}>
      <div
        className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
        id="modal-backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          ref={modalRef}
          className="bg-surface-container-lowest w-full max-w-3xl rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] md:max-h-[85vh]"
          id="registration-modal"
        >
          {/* Left Side: Progress & Brand (Hidden on Mobile) */}
          {step < 4 && (
            <div className="hidden md:flex md:w-1/3 bg-linear-to-br from-primary to-primary-container p-10 flex-col justify-between text-white animate-in fade-in duration-300">
              <div>
                <div className="text-xl font-display font-extrabold tracking-tighter mb-12">
                  Hope Benk
                </div>
                <StepIndicator steps={steps} currentStep={step} />
              </div>
              <div className="text-xs opacity-60 leading-relaxed font-body">
                Sua jornada para uma gestão financeira de elite começa aqui com segurança total.
              </div>
            </div>
          )}

          {/* Right Side: Form Content */}
          <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-between overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors cursor-pointer select-none"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {step < 4 ? (
              <div className="grow flex flex-col justify-between">
                <div>
                  {/* Mobile Progress Bar */}
                  <div className="md:hidden flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      Passo {step} de 3
                    </span>
                    <div className="flex gap-1">
                      <div
                        className={`h-1 w-8 rounded-full transition-all ${
                          step >= 1 ? "bg-primary" : "bg-surface-container-high"
                        }`}
                      ></div>
                      <div
                        className={`h-1 w-8 rounded-full transition-all ${
                          step >= 2 ? "bg-primary" : "bg-surface-container-high"
                        }`}
                      ></div>
                      <div
                        className={`h-1 w-8 rounded-full transition-all ${
                          step >= 3 ? "bg-primary" : "bg-surface-container-high"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Step Header */}
                  <div className="mb-6">
                    <h2
                      id="modal-title"
                      className="text-2xl font-headline font-extrabold text-on-surface tracking-tight mb-2"
                    >
                      {step === 1 && "Dados Pessoais"}
                      {step === 2 && "Dados de Residência"}
                      {step === 3 && "Documentação"}
                    </h2>
                    <p className="text-sm text-on-surface-variant font-body">
                      {step === 1 && "Preencha suas informações para iniciar o pré-registro."}
                      {step === 2 && "Digite seu CEP para autopreencher os dados de endereço."}
                      {step === 3 && "Preencha as informações comerciais e endereço de sua empresa."}
                    </p>
                  </div>

                  {/* Mutation Error alert */}
                  {mutation.isError && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">error</span>
                      <span>{mutation.error.message}</span>
                    </div>
                  )}

                  {/* Form Steps */}
                  {step === 1 && <StepPersonalData />}
                  {step === 2 && <StepAddress />}
                  {step === 3 && <StepBusiness />}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-4 text-sm font-bold text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors rounded-full active:scale-95 duration-200 cursor-pointer text-center"
                      disabled={mutation.isPending}
                    >
                      Voltar
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 py-4 text-sm font-bold text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors rounded-full active:scale-95 duration-200 cursor-pointer text-center"
                    >
                      Cancelar
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={mutation.isPending}
                    className="flex-2 py-4 text-sm font-bold text-white bg-linear-to-br from-primary to-primary-container rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:brightness-105 transition-all active:scale-95 duration-200 cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    {mutation.isPending && (
                      <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                    )}
                    {step === 3 ? (mutation.isPending ? "Processando..." : "Concluir") : "Continuar"}
                  </button>
                </div>

                {step === 1 && (
                  <p className="mt-6 text-center text-[10px] text-on-surface-variant leading-relaxed">
                    Ao continuar, você concorda com nossos{" "}
                    <span className="text-primary cursor-pointer font-bold hover:underline">
                      Termos de Uso
                    </span>{" "}
                    e{" "}
                    <span className="text-primary cursor-pointer font-bold hover:underline">
                      Política de Privacidade
                    </span>
                    . Seus dados estão protegidos por criptografia de ponta a ponta.
                  </p>
                )}
              </div>
            ) : (
              <StepSuccess onClose={onClose} />
            )}
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
