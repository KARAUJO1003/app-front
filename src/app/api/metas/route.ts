import { z } from "zod";
import { NextResponse } from "next/server";
import { criarMetaSchema, metaSchema, parcelaSchema } from "./schemas";

// Tipos para o modelo de dados
type Parcela = {
  id: string;
  metaId: string;
  numero: number;
  valor: number;
  dataVencimento: string;
  status: "Pendente" | "Paga";
  valorPago: number | null;
  responsavel: "usuario1" | "usuario2" | "ambos";
  dataPagamento: string | null;
};

type Meta = {
  id: string;
  titulo: string;
  descricao: string | null;
  categoria: string;
  valorTotal: number;
  valorParcela: number;
  numParcelas: number;
  recorrente: boolean;
  frequencia?: "diaria" | "semanal" | "mensal";
  diaVencimento?: number;
  diaSemana?: string;
  horario?: string;
  dataInicio: string;
  dataFim?: string;
  numExecucoes?: number;
  usuarioCriador: string;
  participantes: string[];
  dataCriacao: string;
};

// Simulação de banco de dados em memória
const metas: Meta[] = [];
let parcelas: Parcela[] = [];

// Função para gerar parcelas com base nas configurações da meta
function gerarParcelas(meta: Meta): Parcela[] {
  const parcelasGeradas: Parcela[] = [];
  const dataInicio = new Date(meta.dataInicio);

  for (let i = 0; i < meta.numParcelas; i++) {
    const dataVencimento = new Date(dataInicio);

    if (meta.recorrente) {
      if (meta.frequencia === "diaria") {
        dataVencimento.setDate(dataVencimento.getDate() + i);
      } else if (meta.frequencia === "semanal") {
        dataVencimento.setDate(dataVencimento.getDate() + i * 7);
      } else if (meta.frequencia === "mensal") {
        dataVencimento.setMonth(dataVencimento.getMonth() + i);
        if (meta.diaVencimento) {
          dataVencimento.setDate(meta.diaVencimento);
        }
      }
    } else {
      // Para metas não recorrentes, apenas incrementa o mês
      dataVencimento.setMonth(dataVencimento.getMonth() + i);
    }

    // Alterna responsáveis para distribuir as parcelas
    let responsavel: "usuario1" | "usuario2" | "ambos";
    if (i % 3 === 0) {
      responsavel = "ambos";
    } else if (i % 3 === 1) {
      responsavel = "usuario1";
    } else {
      responsavel = "usuario2";
    }

    parcelasGeradas.push({
      id: `parcela_${Date.now()}_${i}`,
      metaId: meta.id,
      numero: i + 1,
      valor: meta.valorParcela,
      dataVencimento: dataVencimento.toISOString().split("T")[0],
      status: "Pendente",
      valorPago: null,
      responsavel,
      dataPagamento: null,
    });
  }

  return parcelasGeradas;
}

// Endpoint para criar uma nova meta
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validação do corpo da requisição
    const dadosValidados = criarMetaSchema.parse(body);

    // Cálculo do valor da parcela se não fornecido
    const valorParcela =
      dadosValidados.valorParcela ||
      dadosValidados.valorTotal / dadosValidados.numParcelas;

    // Criação da meta
    const novaMeta = {
      id: `meta_${Date.now()}`,
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

    // Adiciona a meta ao "banco de dados"
    metas.push(novaMeta);

    // Gera as parcelas com base nas configurações da meta
    const novasParcelas = gerarParcelas(novaMeta);

    // Validação das parcelas geradas
    novasParcelas.forEach((parcela) => parcelaSchema.parse(parcela));

    parcelas = [...parcelas, ...novasParcelas];

    return NextResponse.json(
      {
        meta: novaMeta,
        parcelas: novasParcelas,
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
  try {
    // Retorna todas as metas com informações resumidas
    const metasResumidas = metas.map((meta) => {
      const metaParcelas = parcelas.filter((p) => p.metaId === meta.id);
      const parcelasPagas = metaParcelas.filter(
        (p) => p.status === "Paga"
      ).length;
      const valorPago = metaParcelas
        .filter((p) => p.status === "Paga")
        .reduce((total, parcela) => total + (parcela.valorPago || 0), 0);

      return {
        id: meta.id,
        titulo: meta.titulo,
        categoria: meta.categoria,
        valorTotal: meta.valorTotal,
        valorPago,
        numParcelas: meta.numParcelas,
        parcelasPagas,
        recorrente: meta.recorrente,
        frequencia: meta.frequencia,
        progresso: (parcelasPagas / meta.numParcelas) * 100,
      };
    });

    return NextResponse.json(metasResumidas);
  } catch (error) {
    console.error("Erro ao listar metas:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
