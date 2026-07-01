import { z } from "zod";
import { ERROR_MESSAGES } from "@/constants/errors";

export function validaCPF(cpf: string): boolean {
  let Soma = 0;
  let Resto;

  const strCPF = String(cpf).replace(/[^\d]/g, "");

  if (strCPF.length !== 11) return false;

  if (
    [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
    ].indexOf(strCPF) !== -1
  ) {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }

  if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;

  for (let i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }

  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }

  if (Resto !== parseInt(strCPF.substring(10, 11))) return false;

  return true;
}

export function validaCNPJ(cnpj: string): boolean {
  const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const c = String(cnpj).replace(/[^\d]/g, "");

  if (c.length !== 14) return false;

  if (/0{14}/.test(c)) return false;

  let n = 0;
  for (let i = 0; i < 12; ) {
    n += parseInt(c[i], 10) * b[++i];
  }
  if (parseInt(c[12], 10) !== (n % 11 < 2 ? 0 : 11 - (n % 11))) return false;

  n = 0;
  for (let i = 0; i <= 12; ) {
    n += parseInt(c[i], 10) * b[i++];
  }
  if (parseInt(c[13], 10) !== (n % 11 < 2 ? 0 : 11 - (n % 11))) return false;

  return true;
}

export const preRegisterSchema = z.object({
  // Step 1
  nome: z
    .string()
    .min(1, ERROR_MESSAGES.NOME_REQUERIDO)
    .refine((val) => val.trim().split(/\s+/).length >= 2, ERROR_MESSAGES.NOME_INVALIDO),
  email: z.string().min(1, ERROR_MESSAGES.EMAIL_REQUERIDO).email(ERROR_MESSAGES.EMAIL_INVALIDO),
  cpf: z
    .string()
    .min(1, ERROR_MESSAGES.CPF_REQUERIDO)
    .refine(validaCPF, ERROR_MESSAGES.CPF_INVALIDO),
  telefone: z
    .string()
    .min(1, ERROR_MESSAGES.TELEFONE_REQUERIDO)
    .refine((val) => val.replace(/\D/g, "").length >= 10, ERROR_MESSAGES.TELEFONE_INVALIDO),
  dataNascimento: z
    .string()
    .min(1, ERROR_MESSAGES.DATA_NASCIMENTO_REQUERIDA)
    .refine((val) => {
      const parts = val.split("-");
      if (parts.length !== 3) return false;
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);

      const birthDate = new Date(year, month, day);
      return (
        !isNaN(birthDate.getTime()) &&
        birthDate.getFullYear() === year &&
        birthDate.getMonth() === month &&
        birthDate.getDate() === day
      );
    }, ERROR_MESSAGES.DATA_NASCIMENTO_INVALIDA)
    .refine((val) => {
      const parts = val.split("-").map((p) => parseInt(p, 10));
      const birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return birthDate <= today;
    }, ERROR_MESSAGES.DATA_NASCIMENTO_FUTURA)
    .refine((val) => {
      const parts = val.split("-").map((p) => parseInt(p, 10));
      const birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
      const today = new Date();
      const ageLimitDate = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
      return birthDate <= ageLimitDate;
    }, ERROR_MESSAGES.DATA_NASCIMENTO_MENOR_18),
  // Step 2
  cep: z
    .string()
    .min(1, ERROR_MESSAGES.CEP_REQUERIDO)
    .refine((val) => val.replace(/\D/g, "").length === 8, ERROR_MESSAGES.CEP_INVALIDO),
  endereco: z.string().min(1, ERROR_MESSAGES.ENDERECO_REQUERIDO),
  numero: z.string().min(1, ERROR_MESSAGES.NUMERO_REQUERIDO),
  complemento: z.string().optional(),
  bairro: z.string().min(1, ERROR_MESSAGES.BAIRRO_REQUERIDO),
  cidade: z.string().min(1, ERROR_MESSAGES.CIDADE_REQUERIDA),
  estado: z
    .string()
    .min(1, ERROR_MESSAGES.ESTADO_REQUERIDO)
    .min(2, ERROR_MESSAGES.ESTADO_INVALIDO)
    .max(2, ERROR_MESSAGES.ESTADO_INVALIDO),
  // Step 3
  businessInfo: z.object({
    cnpj: z.string().refine(validaCNPJ, "CNPJ inválido"),
    tradeName: z.string().min(2, "Nome fantasia obrigatório"),
  }),
  businessAddress: z.object({
    zipCode: z.string().min(8, "CEP inválido"),
    city: z.string().min(2, "Cidade obrigatória"),
    street: z.string().min(3, "Logradouro obrigatório"),
    number: z.string().min(1, "Número obrigatório"),
    neighborhood: z.string().min(2, "Bairro obrigatório"),
    complement: z.string().optional(),
  }),
});

export type FormValues = z.infer<typeof preRegisterSchema>;
