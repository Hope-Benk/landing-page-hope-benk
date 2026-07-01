import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Input from "@/components/atoms/Input";
import { FormValues } from "@/schemas/pre-register";

export default function StepAddress() {
  const [isSearchingCep, setIsSearchingCep] = useState(false);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();

  const maskCEP = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .substring(0, 9);
  };

  const handleCepLookup = async (cepVal: string) => {
    const cleanCep = cepVal.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      setIsSearchingCep(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setValue("endereco", data.logradouro || "", { shouldValidate: true });
          setValue("bairro", data.bairro || "", { shouldValidate: true });
          setValue("cidade", data.localidade || "", { shouldValidate: true });
          setValue("estado", data.uf || "", { shouldValidate: true });
        }
      } catch (err) {
        console.error("Erro ao buscar CEP", err);
      } finally {
        setIsSearchingCep(false);
      }
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* CEP & Endereço */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-1">
          <Input
            label="CEP"
            placeholder="00000-000"
            error={errors.cep?.message}
            {...register("cep", {
              onChange: (e) => {
                const masked = maskCEP(e.target.value);
                e.target.value = masked;
                handleCepLookup(masked);
              },
            })}
          />
          {isSearchingCep && (
            <span className="material-symbols-outlined absolute right-3 top-[34px] text-primary animate-spin text-sm select-none">
              sync
            </span>
          )}
        </div>

        <Input
          label="Endereço"
          placeholder="Rua, Avenida, etc."
          containerClassName="md:col-span-2"
          error={errors.endereco?.message}
          disabled={isSearchingCep}
          {...register("endereco")}
        />
      </div>

      {/* Número & Complemento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Número"
          placeholder="123"
          error={errors.numero?.message}
          {...register("numero")}
        />

        <Input
          label="Complemento"
          placeholder="Apt, Bloco, Sala (opcional)"
          containerClassName="md:col-span-2"
          {...register("complemento")}
        />
      </div>

      {/* Bairro, Cidade & Estado */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Bairro"
          placeholder="Ex: Centro"
          error={errors.bairro?.message}
          disabled={isSearchingCep}
          {...register("bairro")}
        />

        <Input
          label="Cidade"
          placeholder="Ex: São Paulo"
          error={errors.cidade?.message}
          disabled={isSearchingCep}
          {...register("cidade")}
        />

        <Input
          label="Estado"
          placeholder="Ex: SP"
          maxLength={2}
          className="uppercase"
          error={errors.estado?.message}
          disabled={isSearchingCep}
          {...register("estado")}
        />
      </div>
    </div>
  );
}
