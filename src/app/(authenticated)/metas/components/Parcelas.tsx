/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Parcelas({ parcelas }: { parcelas: any[] }) {
  return (
    <Card>
      <CardContent>
        <h2 className="mb-4 font-bold text-xl">Parcelas</h2>
        {parcelas?.map((parcela) => (
          <div
            key={parcela.id}
            className="mb-4"
          >
            <p>Parcela {parcela.numero}</p>
            <p>Status: {parcela.status}</p>
            <p>Valor: R$ {parcela.valor.toFixed(2)}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
