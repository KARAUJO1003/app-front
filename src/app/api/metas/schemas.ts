import { z } from "zod"

// Schema para validar os dados de uma parcela
export const parcelaSchema = z.object({
  id: z.string(),
  metaId: z.string(),
  numero: z.number(),
  valor: z.number(),
  dataVencimento: z.string(),
  status: z.enum(["Pendente", "Paga"]),
  valorPago: z.number().nullable(),
  responsavel: z.enum(["usuario1", "usuario2", "ambos"]),
  dataPagamento: z.string().nullable(),
})

// Schema para validar os dados de uma meta
export const metaSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  descricao: z.string().nullable(),
  categoria: z.string(),
  valorTotal: z.number(),
  valorParcela: z.number(),
  numParcelas: z.number(),
  recorrente: z.boolean(),
  frequencia: z.enum(["diaria", "semanal", "mensal"]).optional(),
  diaVencimento: z.number().optional(),
  diaSemana: z.string().optional(),
  horario: z.string().optional(),
  dataInicio: z.string(),
  dataFim: z.string().optional(),
  numExecucoes: z.number().optional(),
  usuarioCriador: z.string(),
  participantes: z.array(z.string()),
  dataCriacao: z.string(),
})

// Schema para validar o corpo da requisição de criação de uma meta
export const criarMetaSchema = z.object({
  titulo: z.string(),
  descricao: z.string().nullable().optional(),
  categoria: z.string().optional(),
  valorTotal: z.number(),
  valorParcela: z.number().optional(),
  numParcelas: z.number(),
  recorrente: z.boolean().optional(),
  frequencia: z.enum(["diaria", "semanal", "mensal"]).optional(),
  diaVencimento: z.number().optional(),
  diaSemana: z.string().optional(),
  horario: z.string().optional(),
  dataInicio: z.string().optional(),
  dataFim: z.string().optional(),
  numExecucoes: z.number().optional(),
  usuarioCriador: z.string().optional(),
  participantes: z.array(z.string()).optional(),
})