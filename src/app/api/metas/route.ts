/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { criarMetaSchema } from "./schemas";

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
    const responsaveisIds = [
      ...new Set(
        dadosValidados.parcelas
          ?.map((parcela) => parcela.responsavel?.id)
          .filter((id) => !!id)
      ),
    ]; // Remove duplicados

    if (responsaveisIds && responsaveisIds.length > 0) {
      const responsaveisExistentes = await prisma.user.findMany({
        where: { id: { in: responsaveisIds } },
      });

      if (responsaveisExistentes.length !== responsaveisIds.length) {
        const idsExistentes = responsaveisExistentes.map((p) => p.id);
        const idsAusentes = responsaveisIds.filter(
          (id) => !idsExistentes.includes(id)
        );

        return NextResponse.json(
          {
            error: "Um ou mais responsáveis das parcelas não foram encontrados",
            idsAusentes,
          },
          { status: 400 }
        );
      }
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
    if (
      dadosValidados.parcelas &&
      novaMeta.id &&
      dadosValidados.parcelas.length > 0
    ) {
      console.log("Criando parcelas para a meta:", novaMeta.id);
      await prisma.parcela.createMany({
        data: (dadosValidados.parcelas as any).map((parcela: any) => {
          // Corrige dataVencimento e dataPagamento
          let dataVencimento: Date | null = null;
          if (parcela.dataVencimento) {
            // Aceita tanto ISO quanto dd/MM/yyyy
            if (parcela.dataVencimento.includes("/")) {
              const [dia, mes, ano] = parcela.dataVencimento.split("/");
              dataVencimento = new Date(`${ano}-${mes}-${dia}T00:00:00`);
            } else {
              dataVencimento = new Date(parcela.dataVencimento);
            }
          }

          let dataPagamento: Date | null = null;
          if (parcela.dataPagamento && parcela.dataPagamento !== "") {
            if (parcela.dataPagamento.includes("/")) {
              const [dia, mes, ano] = parcela.dataPagamento.split("/");
              dataPagamento = new Date(`${ano}-${mes}-${dia}T00:00:00`);
            } else {
              dataPagamento = new Date(parcela.dataPagamento);
            }
          }

          return {
            metaId: novaMeta.id,
            numero: parcela.numero,
            valor: parcela.valor,
            dataVencimento,
            status: parcela.status,
            valorPago: parcela.valorPago || 0,
            responsavelId: parcela.responsavel?.id || null,
            dataPagamento,
          };
        }),
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
    // console.error("Erro ao criar meta:", error);
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
