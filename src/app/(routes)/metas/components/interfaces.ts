/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "../../../../../generated/prisma/client";

export interface Root {
  meta: Meta;
  parcelas: Parcela[];
  resumo: Resumo;
}

export interface Parcela {
  id: string;
  metaId: string;
  numero: number;
  valor: number;
  dataVencimento: string;
  status: string;
  valorPago: number;
  responsavelId: string;
  dataPagamento: any;
  createdAt: string;
  updatedAt: string;
}

export interface Resumo {
  valorPago: number;
  parcelasPagas: number;
  progresso: number;
}
