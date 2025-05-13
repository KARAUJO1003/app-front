/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const criarMetaSchema = z.object({
  titulo: z.string(),
  valorTotal: z.number(),
  numParcelas: z.number(),
  descricao: z.string().nullable().optional(),
  categoria: z.string().optional(),
  valorParcela: z.number().optional(),
  recorrente: z.boolean().optional(),
  dataInicio: z.string(),
  distribuicaoTipo: z.string(),
  valorMinParcela: z.number().nullable().optional(),
  valorMaxParcela: z.number().nullable().optional(),
  usuarioCriador: z.string(),
  repeticao: z
    .object({
      frequencia: z.string().nullable().optional(),
      intervalo: z.number().nullable().optional(),
      diaVencimento: z.number().nullable().optional(),
      diaSemana: z.string().nullable().optional(),
      horario: z.string().nullable().optional(),
      dataFim: z.string().nullable().optional(),
      numExecucoes: z.number().nullable().optional(),
    })
    .optional(),
  participantes: z.array(
    z.object({
      id: z.string(),
      usuarioId: z.string(),
      percentual: z.number(),
    })
  ),
  parcelas: z
    .array(
      z.object({
        numero: z.number(),
        valor: z.number(),
        dataVencimento: z.string(),
        status: z.string(),
        valorPago: z.number().optional(),
        responsavel: z.string().optional(),
        dataPagamento: z.string().optional(),
      })
    )
    .optional(),
});

// import { ParcelaFormValues } from "./schemas"; // Removed as it is not exported

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validação do corpo da requisição
    const dadosValidados = criarMetaSchema.parse(body);

    // Verifica se o usuário criador existe
    const usuarioCriador = await prisma.user.findUnique({
      where: { id: dadosValidados.usuarioCriador },
    });

    if (!usuarioCriador) {
      return NextResponse.json(
        { error: "Usuário criador não encontrado" },
        { status: 400 }
      );
    }

    // Verifica se todos os participantes existem
    const participantesIds =
      dadosValidados.participantes?.map((p) => p.id) || [];

    const participantesExistentes = await prisma.user.findMany({
      where: { id: { in: participantesIds } },
    });

    if (participantesExistentes.length !== participantesIds.length) {
      const idsExistentes = participantesExistentes.map((p) => p.id);
      const idsAusentes = participantesIds.filter(
        (id) => !idsExistentes.includes(id)
      );

      return NextResponse.json(
        {
          error: "Um ou mais participantes não foram encontrados",
          idsAusentes,
        },
        { status: 400 }
      );
    }

    // Verifica se todos os responsáveis das parcelas existem
    const responsaveisIds = dadosValidados.parcelas?.map(
      (parcela) => parcela.responsavel
    )[0];

    const responsaveisExistentes = await prisma.user.findFirst({
      where: { id: responsaveisIds },
    });

    if (!responsaveisIds || !responsaveisExistentes) {
      return NextResponse.json(
        {
          error: "Um ou mais responsáveis das parcelas não foram encontrados",
        },
        { status: 400 }
      );
    }

    // Criação da meta
    const novaMeta = await prisma.meta.create({
      data: {
        titulo: dadosValidados.titulo,
        descricao: dadosValidados.descricao || null,
        categoria: dadosValidados.categoria || "outro",
        valorTotal: dadosValidados.valorTotal,
        valorParcela: dadosValidados.valorParcela || 0,
        numParcelas: dadosValidados.numParcelas,
        recorrente: dadosValidados.recorrente || false,
        frequencia: dadosValidados.repeticao?.frequencia || null,
        intervalo: dadosValidados.repeticao?.intervalo || null,
        diaVencimento: dadosValidados.repeticao?.diaVencimento || null,
        diaSemana: dadosValidados.repeticao?.diaSemana || null,
        horario: dadosValidados.repeticao?.horario || null,
        dataInicio: new Date(dadosValidados.dataInicio),
        dataFim: dadosValidados.repeticao?.dataFim
          ? new Date(dadosValidados.repeticao.dataFim)
          : null,
        numExecucoes: dadosValidados.repeticao?.numExecucoes || null,
        distribuicaoTipo: dadosValidados.distribuicaoTipo,
        valorMinParcela: dadosValidados.valorMinParcela || null,
        valorMaxParcela: dadosValidados.valorMaxParcela || null,
        usuarioCriadorId: dadosValidados.usuarioCriador,
        participantes: {
          create: dadosValidados.participantes.map((participante) => ({
            usuarioId: participante.id,
            percentual: participante.percentual,
          })),
        },
      },
    });

    // Criação das parcelas
    if (dadosValidados.parcelas && dadosValidados.parcelas.length > 0) {
      await prisma.parcela.createMany({
        data: dadosValidados.parcelas.map((parcela) => ({
          metaId: novaMeta.id,
          numero: parcela.numero,
          valor: parcela.valor,
          dataVencimento: new Date(parcela.dataVencimento),
          status: parcela.status,
          valorPago: parcela.valorPago || 0,
          responsavelId: parcela.responsavel || "",
          dataPagamento: parcela.dataPagamento
            ? new Date(parcela.dataPagamento)
            : null,
        })),
      });
    }

    return NextResponse.json(
      {
        message: "Meta criada com sucesso",
        meta: novaMeta,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error("Erro ao criar meta:", error);
    return NextResponse.json(
      { err: "Erro ao processar a solicitação", error },
      { status: 500 }
    );
  }
}

// Endpoint para listar todas as metas
export async function GET() {
  const metas = await prisma.meta.findMany({
    include: {
      usuarioCriador: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
      participantes: {
        select: {
          id: true,
          usuario: {
            select: {
              id: true,
              name: true,
              email: true,
              avatar: true,
            },
          },
        },
      },
      parcelas: {
        select: {
          id: true,
          metaId: true,
          numero: true,
          valor: true,
          dataVencimento: true,
          status: true,
          valorPago: true,
          responsavel: true,
          dataPagamento: true,
        },
      },
    },
  });

  try {
    return NextResponse.json({
      message: "Metas listadas com sucesso",
      total: metas.length,
      metas,
    });
  } catch (error) {
    console.error("Erro ao listar metas:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
