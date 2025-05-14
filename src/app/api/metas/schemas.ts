import { z } from 'zod';

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