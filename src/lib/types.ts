// Tipos para o modelo de dados do sistema de metas financeiras

export type Parcela = {
  id: string
  metaId: string
  numero: number
  valor: number
  dataVencimento: string
  status: "Pendente" | "Paga"
  valorPago: number | null
  responsavel: "usuario1" | "usuario2" | "ambos"
  dataPagamento: string | null
}

export type Meta = {
  id: string
  titulo: string
  descricao: string | null
  categoria: string
  valorTotal: number
  valorParcela: number
  numParcelas: number
  recorrente: boolean
  frequencia?: "diaria" | "semanal" | "mensal"
  diaVencimento?: number
  diaSemana?: string
  horario?: string
  dataInicio: string
  dataFim?: string
  numExecucoes?: number
  usuarioCriador: string
  participantes: string[]
  dataCriacao: string
}

export type MetaResumo = {
  id: string
  titulo: string
  categoria: string
  valorTotal: number
  valorPago: number
  numParcelas: number
  parcelasPagas: number
  recorrente: boolean
  frequencia?: "diaria" | "semanal" | "mensal"
  progresso: number
}

export type Usuario = {
  id: string
  nome: string
  email: string
  avatar?: string
}

export type ConfiguracaoRepeticao = {
  frequencia: "diaria" | "semanal" | "mensal"
  intervalo: number
  diaVencimento?: number
  diaSemana?: string
  horario: string
  dataInicio: string
  terminoTipo: "nunca" | "execucoes" | "data"
  numExecucoes?: number
  dataFim?: string
  fusoHorario: string
}
