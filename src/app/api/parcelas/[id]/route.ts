import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Endpoint para atualizar uma parcela específica (marcar como paga)
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validação básica
    if (!body.valorPago) {
      return NextResponse.json(
        { error: "Valor pago é obrigatório para marcar como paga" },
        { status: 400 }
      );
    }

    // Na implementação real, aqui atualizaríamos a parcela no banco de dados

    // return NextResponse.json({
    //   message: "Parcela atualizada com sucesso",
    //   id,
    //   status: "Paga",
    //   valorPago: body.valorPago,
    //   dataPagamento: new Date().toISOString(),
    // });

    const resp = await prisma.parcela.update({
      where: { id },
      data: {
        status: "Paga",
        valorPago: body.valorPago,
        dataPagamento: new Date(),
      },
    });

    return NextResponse.json({
      message: "Parcela atualizada com sucesso",
      id: resp.id,
      status: resp.status,
      valorPago: resp.valorPago,
      dataPagamento: resp.dataPagamento
        ? resp.dataPagamento.toISOString()
        : null,
    });
  } catch (error) {
    console.error("Erro ao atualizar parcela:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
