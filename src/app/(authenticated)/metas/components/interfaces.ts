/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Root {
  meta: Meta
  parcelas: Parcela[]
  resumo: Resumo
}

export interface Meta {
  id: string
  titulo: string
  descricao: string
  categoria: string
  valorTotal: number
  valorParcela: number
  numParcelas: number
  recorrente: boolean
  frequencia: string
  intervalo: number
  diaVencimento: number
  diaSemana: string
  horario: string
  dataInicio: string
  dataFim: any
  numExecucoes: number
  distribuicaoTipo: string
  valorMinParcela: number
  valorMaxParcela: number
  usuarioCriadorId: string
  createdAt: string
  updatedAt: string
}

export interface Parcela {
  id: string
  metaId: string
  numero: number
  valor: number
  dataVencimento: string
  status: string
  valorPago: number
  responsavelId: string
  dataPagamento: any
  createdAt: string
  updatedAt: string
}

export interface Resumo {
  valorPago: number
  parcelasPagas: number
  progresso: number
}
