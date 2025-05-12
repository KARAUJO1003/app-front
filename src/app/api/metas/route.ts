/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import prisma from '@/lib/prisma';
import { NextResponse } from "next/server";
import { criarMetaSchema, metaSchema, ParcelaType } from "./schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Body da requisição:", body);

    // Validação do corpo da requisição
    const dadosValidados = criarMetaSchema.parse(body);

    // Cálculo do valor da parcela se não fornecido
    const valorParcela =
      dadosValidados.valorParcela ||
      dadosValidados.valorTotal / dadosValidados.numParcelas;

    // Criação da meta
    const metaId = `meta_${Date.now()}`;
    const novaMeta = {
      id: metaId,
      titulo: dadosValidados.titulo,
      descricao: dadosValidados.descricao || null,
      categoria: dadosValidados.categoria || "outro",
      valorTotal: dadosValidados.valorTotal,
      valorParcela,
      numParcelas: dadosValidados.numParcelas,
      recorrente: dadosValidados.recorrente || false,
      frequencia: dadosValidados.frequencia,
      diaVencimento: dadosValidados.diaVencimento,
      diaSemana: dadosValidados.diaSemana,
      horario: dadosValidados.horario,
      dataInicio:
        dadosValidados.dataInicio || new Date().toISOString().split("T")[0],
      dataFim: dadosValidados.dataFim,
      numExecucoes: dadosValidados.numExecucoes,
      usuarioCriador: dadosValidados.usuarioCriador,
      participantes: dadosValidados.participantes,
      dataCriacao: new Date().toISOString(),
    };

    // Validação da meta criada
    metaSchema.parse(novaMeta);

    // Criação das parcelas

    console.log("Dados validados:", dadosValidados);

    const createParcelas = dadosValidados.parcelas?.map((parcela: ParcelaType, index) => ({
      id: `parcela_${Date.now()}_${index}`, // Gera um ID único para cada parcela
      metaId: metaId, // Associa a parcela à meta
      numero: parcela.numero,
      valor: parcela.valor,
      dataVencimento: parcela.dataVencimento,
      status: parcela.status,
      valorPago: parcela.valorPago || null,
      responsavelId: Array.isArray(parcela.responsavel)
        ? parcela.responsavel.join(",") // Converte array para string, se necessário
        : parcela.responsavel,
      dataPagamento: parcela.dataPagamento || null,
    }));

    console.log("Parcelas criadas:", createParcelas);
    let createdParcelas = [];
    if (createParcelas) {
      createdParcelas = await prisma.parcela.createMany({
        data: createParcelas,
      }) as any

    }

    // Vincula os IDs das parcelas criadas à meta
    const parcelasIds = await prisma.parcela.findMany({
      where: { metaId: metaId },
      select: { id: true },
    });

    // Salva a meta no banco de dados com os IDs das parcelas associadas
    const createdMeta = await prisma.meta.create({
      data: {
        ...novaMeta,
        parcelas: {
          connect: parcelasIds.map((parcela) => ({ id: parcela.id })),
        },
      } as any,
    });

    return NextResponse.json(
      {
        meta: createdMeta,
        parcelas: parcelasIds,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error("Erro ao criar meta:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
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
          }
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
