import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";import { NextResponse } from "next/server";

// Endpoint para popular o banco de dados com dados iniciais
export async function POST() {
  try {
    // Criar usuários
    const usuario1 = await prisma.user.upsert({
      where: { email: "joao@exemplo.com" },
      update: {},
      create: {
        name: "João Doe",
        email: "joao@exemplo.com",
        avatar: "JD",
      },
    });

    const usuario2 = await prisma.user.upsert({
      where: { email: "maria@exemplo.com" },
      update: {},
      create: {
        name: "Maria Costa",
        email: "maria@exemplo.com",
        avatar: "MC",
      },
    });

    // Criar uma meta de exemplo
    const meta = await prisma.meta.create({
      data: {
        titulo: "Viagem de Férias",
        descricao: "Viagem para a praia no final do ano",
        categoria: "viagem",
        valorTotal: 6000,
        valorParcela: 500,
        numParcelas: 12,
        recorrente: true,
        frequencia: "mensal",
        intervalo: 1,
        diaVencimento: 10,
        horario: "12:00",
        dataInicio: new Date("2025-01-10"),
        numExecucoes: 12,
        distribuicaoTipo: "igual",
        usuarioCriadorId: usuario1.id,
        participantes: {
          create: [
            {
              usuarioId: usuario1.id,
              percentual: 50,
            },
            {
              usuarioId: usuario2.id,
              percentual: 50,
            },
          ],
        },
      },
    });

    // Criar parcelas para a meta
    const parcelas = [];

    for (let i = 0; i < 12; i++) {
      const dataVencimento = new Date("2025-01-10");
      dataVencimento.setMonth(dataVencimento.getMonth() + i);

      // Parcela para o usuário 1
      parcelas.push({
        metaId: meta.id,
        numero: i + 1,
        valor: 250,
        dataVencimento,
        status: i < 3 ? "Paga" : "Pendente",
        valorPago: i < 3 ? 250 : null,
        responsavelId: usuario1.id,
        dataPagamento: i < 3 ? new Date(`2025-0${i + 1}-08`) : null,
      });

      // Parcela para o usuário 2
      parcelas.push({
        metaId: meta.id,
        numero: i + 1,
        valor: 250,
        dataVencimento,
        status: i < 3 ? "Paga" : "Pendente",
        valorPago: i < 3 ? 250 : null,
        responsavelId: usuario2.id,
        dataPagamento: i < 3 ? new Date(`2025-0${i + 1}-09`) : null,
      });
    }

    await prisma.parcela.createMany({
      data: parcelas,
    });

    return NextResponse.json({
      message: "Dados iniciais criados com sucesso",
      usuarios: [usuario1, usuario2],
      meta,
    });
  } catch (error) {
    console.error("Erro ao criar dados iniciais:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
