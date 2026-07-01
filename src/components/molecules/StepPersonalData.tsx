import { useFormContext } from "react-hook-form";
import Input from "@/components/atoms/Input";
import { FormValues } from "@/schemas/pre-register";

export default function StepPersonalData() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const getMaxBirthDateFor18 = () => {
    const today = new Date();
    const year = today.getFullYear() - 18;
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const maskCPF = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const maskPhone = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .substring(0, 15);
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* Nome Completo */}
      <Input
        label="Nome Completo"
        iconName="person"
        error={errors.nome?.message}
        placeholder="Como no seu documento"
        {...register("nome")}
      />

      {/* E-mail */}
      <Input
        label="E-mail"
        iconName="mail"
        type="email"
        error={errors.email?.message}
        placeholder="seu@email.com"
        {...register("email")}
      />

      {/* CPF & Telefone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="CPF"
          placeholder="000.000.000-00"
          error={errors.cpf?.message}
          {...register("cpf", {
            onChange: (e) => {
              e.target.value = maskCPF(e.target.value);
            },
          })}
        />

        <Input
          label="Telefone"
          placeholder="(11) 99999-9999"
          error={errors.telefone?.message}
          {...register("telefone", {
            onChange: (e) => {
              e.target.value = maskPhone(e.target.value);
            },
          })}
        />
      </div>

      <Input
        label="Data de Nascimento"
        type="date"
        max={getMaxBirthDateFor18()}
        error={errors.dataNascimento?.message}
        {...register("dataNascimento")}
      />
    </div>
  );
}
