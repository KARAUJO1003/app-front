"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";
import { useMarkAsPaidMutate } from "../hooks/useGoals";
import React from "react";

export const MarkAsPaidDialog = ({
  parcela,
}: {
  parcela: {
    id: string;
    valor: number;
    status: string;
    valorPago?: number | null;
    dataPagamento?: Date | null;
  };
}) => {
  const { mutate } = useMarkAsPaidMutate();
  const [valorPago, setValorPago] = React.useState<string | number>(
    parcela.valorPago ?? ""
  );

  const confirmarPagamento = () => {
    mutate({
      id: parcela.id,
      valorPago: Number(valorPago),
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="sm"
          >
            Marcar como pago
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Marcar parcela como paga</DialogTitle>
            <DialogDescription>
              Informe o valor que foi depositado para esta parcela.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="valorPago">Valor pago (R$)</Label>
              <Input
                id="valorPago"
                type="number"
                min="0"
                step="0.01"
                value={valorPago}
                placeholder="0.00"
                onChange={(e) => setValorPago(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <div className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800`}>
                <DollarSign className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Valor esperado</p>
                <p className="font-medium">R$ {parcela.valor.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={confirmarPagamento}>Confirmar pagamento</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
