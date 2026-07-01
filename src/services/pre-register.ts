import { FormValues } from "@/schemas/pre-register";

export async function submitPreRegister(data: FormValues) {
  const res = await fetch("/api/pre-register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Erro ao processar pré-registro.");
  }

  return res.json();
}
