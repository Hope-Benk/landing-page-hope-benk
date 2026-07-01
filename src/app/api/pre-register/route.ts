import { NextResponse } from "next/server";
import { preRegisterSchema } from "@/schemas/pre-register";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Simulate network delay (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Validate using the shared Zod schema
    const result = preRegisterSchema.safeParse(body);
    if (!result.success) {
      // Gather Zod validation error messages
      const errors = result.error.issues.map((issue) => issue.message).join(", ");
      return NextResponse.json(
        {
          success: false,
          error: `Dados inválidos: ${errors}`,
        },
        { status: 400 }
      );
    }

    const { nome, email, cpf, telefone, cep } = result.data;

    // Mock successful response
    return NextResponse.json({
      success: true,
      message: "Pré-registro verificado e processado com sucesso!",
      receivedData: {
        nome,
        email,
        cpf: cpf.replace(/\D/g, ""), // return sanitized data
        telefone: telefone.replace(/\D/g, ""),
        cep: cep.replace(/\D/g, ""),
      },
    });
  } catch (error) {
    console.error("API error inside /api/pre-register route:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar a requisição." },
      { status: 500 }
    );
  }
}
