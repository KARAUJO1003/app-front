import { z } from "zod";

// Esquema para validação de usuário
export const usuarioSchema = z.object({
  id: z.string().optional(),
  nome: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  avatar: z.string().optional(),
});

// Esquema para validação de participante
export const participanteSchema = z.object({
  id: z.string().optional(),
  usuarioId: z.string(),
  nome: z.string(),
  email: z.string().email(),
  avatar: z.string().optional(),
  percentual: z.number().min(0).max(100),
});

// Esquema para validação de configuração de repetição
export const repeticaoSchema = z.object({
  frequencia: z.enum(["diaria", "semanal", "mensal"]),
  intervalo: z.number().int().positive(),
  diaVencimento: z.number().int().min(1).max(31).optional(),
  diaSemana: z.string().optional(),
  horario: z.string(),
  terminoTipo: z.enum(["nunca", "execucoes", "data"]),
  numExecucoes: z.number().int().positive().optional(),
  dataFim: z.string().optional(),
  fusoHorario: z.string(),
});

// Esquema para validação de meta
export const metaSchema = z.object({
  titulo: z
    .string()
    .min(3, { message: "O título deve ter pelo menos 3 caracteres" }),
  descricao: z.string().optional(),
  categoria: z.string(),
  valorTotal: z
    .number()
    .positive({ message: "O valor total deve ser maior que zero" }),
  valorParcela: z
    .number()
    .positive({ message: "O valor da parcela deve ser maior que zero" }),
  numParcelas: z
    .number()
    .int()
    .positive({ message: "O número de parcelas deve ser maior que zero" }),
  recorrente: z.boolean(),
  dataInicio: z.string(),
  metodoCalculo: z.enum(["total", "parcela"]),
  distribuicaoTipo: z.enum(["igual", "crescente", "decrescente", "aleatoria"]),
  valorMinParcela: z.number().optional(),
  valorMaxParcela: z.number().optional(),
  participantes: z.array(participanteSchema),
  usuarioCriador: z.string(),
  repeticao: repeticaoSchema.optional(),
});

// Esquema para validação de parcela
export const parcelaSchema = z.object({
  numero: z.number().int().positive(),
  valor: z.number().positive(),
  dataVencimento: z.string(),
  status: z.enum(["Pendente", "Paga"]),
  valorPago: z.number().nullable(),
  responsavel: z.string(),
  dataPagamento: z.string().nullable(),
});

// Tipo para o formulário de nova meta
export type MetaFormValues = z.infer<typeof metaSchema>;

// Tipo para o formulário de participante
export type ParticipanteFormValues = z.infer<typeof participanteSchema>;

// Tipo para o formulário de repetição
export type RepeticaoFormValues = z.infer<typeof repeticaoSchema>;

// Tipo para o formulário de parcela
export type ParcelaFormValues = z.infer<typeof parcelaSchema>;
