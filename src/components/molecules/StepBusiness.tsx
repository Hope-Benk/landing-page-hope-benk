import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Input from "@/components/atoms/Input";
import { FormValues } from "@/schemas/pre-register";

export default function StepBusiness() {
  const [isSearchingCep, setIsSearchingCep] = useState(false);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();

  const maskCNPJ = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .substring(0, 18);
  };

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
          setValue("businessAddress.street", data.logradouro || "", { shouldValidate: true });
          setValue("businessAddress.neighborhood", data.bairro || "", { shouldValidate: true });
          setValue("businessAddress.city", data.localidade || "", { shouldValidate: true });
        }
      } catch (err) {
        console.error("Erro ao buscar CEP comercial", err);
      } finally {
        setIsSearchingCep(false);
      }
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* CNPJ & Nome Fantasia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="CNPJ"
          placeholder="00.000.000/0000-00"
          error={errors.businessInfo?.cnpj?.message}
          {...register("businessInfo.cnpj", {
            onChange: (e) => {
              e.target.value = maskCNPJ(e.target.value);
            },
          })}
        />

        <Input
          label="Nome Fantasia"
          placeholder="Minha Empresa Ltda"
          error={errors.businessInfo?.tradeName?.message}
          {...register("businessInfo.tradeName")}
        />
      </div>

      {/* CEP & Logradouro Comercial */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-1">
          <Input
            label="CEP da Empresa"
            placeholder="00000-000"
            error={errors.businessAddress?.zipCode?.message}
            {...register("businessAddress.zipCode", {
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
          label="Logradouro"
          placeholder="Avenida, Rua, etc."
          containerClassName="md:col-span-2"
          error={errors.businessAddress?.street?.message}
          disabled={isSearchingCep}
          {...register("businessAddress.street")}
        />
      </div>

      {/* Número & Complemento Comercial */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Número"
          placeholder="456"
          error={errors.businessAddress?.number?.message}
          {...register("businessAddress.number")}
        />

        <Input
          label="Complemento"
          placeholder="Sala, Bloco, etc. (opcional)"
          containerClassName="md:col-span-2"
          {...register("businessAddress.complement")}
        />
      </div>

      {/* Bairro & Cidade Comercial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Bairro"
          placeholder="Ex: Pinheiros"
          error={errors.businessAddress?.neighborhood?.message}
          disabled={isSearchingCep}
          {...register("businessAddress.neighborhood")}
        />

        <Input
          label="Cidade"
          placeholder="Ex: São Paulo"
          error={errors.businessAddress?.city?.message}
          disabled={isSearchingCep}
          {...register("businessAddress.city")}
        />
      </div>
    </div>
  );
}
