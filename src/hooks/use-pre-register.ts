import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { preRegisterSchema, FormValues } from "@/schemas/pre-register";
import { submitPreRegister } from "@/services/pre-register";

export function usePreRegister() {
  const [step, setStep] = useState(1);

  const methods = useForm<FormValues>({
    resolver: zodResolver(preRegisterSchema),
    mode: "onTouched",
    defaultValues: {
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      dataNascimento: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      businessInfo: {
        cnpj: "",
        tradeName: "",
      },
      businessAddress: {
        zipCode: "",
        city: "",
        street: "",
        number: "",
        neighborhood: "",
        complement: "",
      },
    },
  });

  const { handleSubmit, trigger } = methods;

  const mutation = useMutation({
    mutationFn: submitPreRegister,
    onSuccess: () => {
      setStep(4);
    },
  });

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();
    let fieldsToValidate: Array<keyof FormValues> = [];

    if (step === 1) {
      fieldsToValidate = ["nome", "email", "cpf", "telefone", "dataNascimento"];
    } else if (step === 2) {
      fieldsToValidate = ["cep", "endereco", "numero", "bairro", "cidade", "estado"];
    } else if (step === 3) {
      fieldsToValidate = ["businessInfo", "businessAddress"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      if (step === 3) {
        handleSubmit(onSubmit)();
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return {
    methods,
    step,
    mutation,
    handleNext,
    handleBack,
  };
}
