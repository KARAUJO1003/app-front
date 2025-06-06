/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Participantes({
  participantes,
}: {
  participantes: any[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Participantes</CardTitle>
        <CardDescription>Pessoas envolvidas nesta meta</CardDescription>
      </CardHeader>
      <CardContent>
        {participantes?.map((participante: any) => (
          <div
            key={participante.id}
            className="flex justify-between items-center mb-4"
          >
            <div>
              <p className="font-medium">{participante.nome}</p>
              <p className="text-muted-foreground text-sm">
                {participante.email}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
