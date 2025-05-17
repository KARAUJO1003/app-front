/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ResumoMeta({ data }: { data: any }) {
  const totalParcelas = data.parcelas.length;
  const parcelasPagas = data.parcelas.filter(
    (p: any) => p.status === "Paga"
  ).length;
  const valorTotal = data.parcelas.reduce(
    (acc: number, p: any) => acc + p.valor,
    0
  );
  const valorPagoTotal = data.parcelas.reduce(
    (acc: number, p: any) => acc + (p.valorPago || 0),
    0
  );
  const progresso = (parcelasPagas / totalParcelas) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo da Meta</CardTitle>
        <CardDescription>
          Acompanhe o progresso da sua meta financeira
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium text-sm">Progresso</span>
            <span className="font-medium text-sm">
              {parcelasPagas}/{totalParcelas} parcelas
            </span>
          </div>
          <Progress value={progresso} />
        </div>
        <div className="gap-6 grid grid-cols-2">
          <div>
            <p className="font-medium text-sm">Valor Total</p>
            <p className="font-bold text-2xl">R$ {valorTotal.toFixed(2)}</p>
          </div>
          <div>
            <p className="font-medium text-sm">Valor Acumulado</p>
            <p className="font-bold text-2xl">R$ {valorPagoTotal.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
