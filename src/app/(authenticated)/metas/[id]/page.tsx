"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  Edit,
  Share2,
  Trash2,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function MetaDetalhes({ params }: { params: { id: string } }) {
  const [parcelas, setParcelas] = useState([
    {
      id: 1,
      numero: 1,
      valor: 500,
      dataVencimento: "10/01/2025",
      status: "Paga",
      valorPago: 500,
      responsavel: "ambos",
      dataPagamento: "08/01/2025",
    },
    {
      id: 2,
      numero: 2,
      valor: 500,
      dataVencimento: "10/02/2025",
      status: "Paga",
      valorPago: 550,
      responsavel: "usuario1",
      dataPagamento: "09/02/2025",
    },
    {
      id: 3,
      numero: 3,
      valor: 500,
      dataVencimento: "10/03/2025",
      status: "Paga",
      valorPago: 450,
      responsavel: "usuario2",
      dataPagamento: "10/03/2025",
    },
    {
      id: 4,
      numero: 4,
      valor: 500,
      dataVencimento: "10/04/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "usuario1",
      dataPagamento: null,
    },
    {
      id: 5,
      numero: 5,
      valor: 500,
      dataVencimento: "10/05/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "usuario2",
      dataPagamento: null,
    },
    {
      id: 6,
      numero: 6,
      valor: 500,
      dataVencimento: "10/06/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "ambos",
      dataPagamento: null,
    },
    {
      id: 7,
      numero: 7,
      valor: 500,
      dataVencimento: "10/07/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "usuario1",
      dataPagamento: null,
    },
    {
      id: 8,
      numero: 8,
      valor: 500,
      dataVencimento: "10/08/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "usuario2",
      dataPagamento: null,
    },
    {
      id: 9,
      numero: 9,
      valor: 500,
      dataVencimento: "10/09/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "ambos",
      dataPagamento: null,
    },
    {
      id: 10,
      numero: 10,
      valor: 500,
      dataVencimento: "10/10/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "usuario1",
      dataPagamento: null,
    },
    {
      id: 11,
      numero: 11,
      valor: 500,
      dataVencimento: "10/11/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "usuario2",
      dataPagamento: null,
    },
    {
      id: 12,
      numero: 12,
      valor: 500,
      dataVencimento: "10/12/2025",
      status: "Pendente",
      valorPago: null,
      responsavel: "ambos",
      dataPagamento: null,
    },
  ]);

  const [parcelaAtual, setParcelaAtual] = useState<any>(null);
  const [valorPago, setValorPago] = useState("");

  const totalParcelas = parcelas.length;
  const parcelasPagas = parcelas.filter((p) => p.status === "Paga").length;
  const valorTotal = parcelas.reduce((acc, p) => acc + p.valor, 0);
  const valorPagoTotal = parcelas.reduce(
    (acc, p) => acc + (p.valorPago || 0),
    0
  );
  const progresso = (parcelasPagas / totalParcelas) * 100;

  const handleMarcarPago = (parcela: any) => {
    setParcelaAtual(parcela);
    setValorPago(parcela.valor.toString());
  };

  const confirmarPagamento = () => {
    if (parcelaAtual) {
      const novasParcelas = parcelas.map((p) => {
        if (p.id === parcelaAtual.id) {
          return {
            ...p,
            status: "Paga",
            valorPago: Number.parseFloat(valorPago),
            dataPagamento: new Date().toLocaleDateString("pt-BR"),
          };
        }
        return p;
      });

      setParcelas(novasParcelas);
      setParcelaAtual(null);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Viagem de Férias</h1>
        <div className="ml-auto flex space-x-2">
          <Button
            variant="outline"
            size="sm"
          >
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
          <Button
            variant="outline"
            size="sm"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Compartilhar
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Resumo da Meta</CardTitle>
              <CardDescription>
                Acompanhe o progresso da sua meta financeira
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Progresso</span>
                  <span className="text-sm font-medium">
                    {parcelasPagas}/{totalParcelas} parcelas
                  </span>
                </div>
                <Progress value={progresso} />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-100 rounded-full dark:bg-green-900">
                        <DollarSign className="h-6 w-6 text-green-700 dark:text-green-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Valor Total
                        </p>
                        <p className="text-2xl font-bold">
                          R$ {valorTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900">
                        <CheckCircle2 className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Valor Acumulado
                        </p>
                        <p className="text-2xl font-bold">
                          R$ {valorPagoTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Categoria
                  </p>
                  <div className="flex items-center">
                    <Badge
                      variant="outline"
                      className="mr-2"
                    >
                      Viagem
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Frequência
                  </p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Mensal (todo dia 10)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Valor por Parcela
                  </p>
                  <p className="font-medium">R$ 500,00</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Participantes
                  </p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="ml-3">Você e Maria</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Parcelas</CardTitle>
              <CardDescription>
                Gerencie as parcelas da sua meta financeira
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="todas">
                <TabsList className="mb-4">
                  <TabsTrigger value="todas">
                    Todas ({parcelas.length})
                  </TabsTrigger>
                  <TabsTrigger value="pendentes">
                    Pendentes (
                    {parcelas.filter((p) => p.status === "Pendente").length})
                  </TabsTrigger>
                  <TabsTrigger value="pagas">
                    Pagas ({parcelas.filter((p) => p.status === "Paga").length})
                  </TabsTrigger>
                  <TabsTrigger value="minhas">
                    Minhas (
                    {
                      parcelas.filter((p) => p.responsavel === "usuario1")
                        .length
                    }
                    )
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="todas"
                  className="space-y-4"
                >
                  {parcelas.map((parcela) => (
                    <Card key={parcela.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`p-2 rounded-full ${
                                parcela.status === "Paga"
                                  ? "bg-green-100 dark:bg-green-900"
                                  : "bg-gray-100 dark:bg-gray-800"
                              }`}
                            >
                              {parcela.status === "Paga" ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                              ) : (
                                <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">
                                Parcela {parcela.numero}
                              </p>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>
                                  Vencimento: {parcela.dataVencimento}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="font-medium">
                                R$ {parcela.valor.toFixed(2)}
                              </p>
                              {parcela.status === "Paga" && (
                                <p className="text-sm text-muted-foreground">
                                  Pago: R$ {parcela.valorPago?.toFixed(2)}
                                </p>
                              )}
                            </div>

                            <div>
                              {parcela.status === "Pendente" ? (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleMarcarPago(parcela)}
                                    >
                                      Marcar como pago
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>
                                        Marcar parcela como paga
                                      </DialogTitle>
                                      <DialogDescription>
                                        Informe o valor que foi depositado para
                                        esta parcela.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="valorPago">
                                          Valor pago (R$)
                                        </Label>
                                        <Input
                                          id="valorPago"
                                          type="number"
                                          min="0"
                                          step="0.01"
                                          value={valorPago}
                                          onChange={(e) =>
                                            setValorPago(e.target.value)
                                          }
                                        />
                                      </div>

                                      <div className="flex items-center space-x-2">
                                        <div
                                          className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800`}
                                        >
                                          <DollarSign className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">
                                            Valor esperado
                                          </p>
                                          <p className="font-medium">
                                            R$ {parcela.valor.toFixed(2)}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <Button onClick={confirmarPagamento}>
                                        Confirmar pagamento
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                                >
                                  Pago em {parcela.dataPagamento}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent
                  value="pendentes"
                  className="space-y-4"
                >
                  {parcelas
                    .filter((p) => p.status === "Pendente")
                    .map((parcela) => (
                      <Card key={parcela.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                                <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                              </div>
                              <div>
                                <p className="font-medium">
                                  Parcela {parcela.numero}
                                </p>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>
                                    Vencimento: {parcela.dataVencimento}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <p className="font-medium">
                                  R$ {parcela.valor.toFixed(2)}
                                </p>
                              </div>

                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleMarcarPago(parcela)}
                                  >
                                    Marcar como pago
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>
                                      Marcar parcela como paga
                                    </DialogTitle>
                                    <DialogDescription>
                                      Informe o valor que foi depositado para
                                      esta parcela.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="valorPago">
                                        Valor pago (R$)
                                      </Label>
                                      <Input
                                        id="valorPago"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={valorPago}
                                        onChange={(e) =>
                                          setValorPago(e.target.value)
                                        }
                                      />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                      <div
                                        className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800`}
                                      >
                                        <DollarSign className="h-4 w-4 text-gray-500" />
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">
                                          Valor esperado
                                        </p>
                                        <p className="font-medium">
                                          R$ {parcela.valor.toFixed(2)}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button onClick={confirmarPagamento}>
                                      Confirmar pagamento
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent
                  value="pagas"
                  className="space-y-4"
                >
                  {parcelas
                    .filter((p) => p.status === "Paga")
                    .map((parcela) => (
                      <Card key={parcela.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <p className="font-medium">
                                  Parcela {parcela.numero}
                                </p>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>
                                    Vencimento: {parcela.dataVencimento}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <p className="font-medium">
                                  R$ {parcela.valor.toFixed(2)}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Pago: R$ {parcela.valorPago?.toFixed(2)}
                                </p>
                              </div>

                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                              >
                                Pago em {parcela.dataPagamento}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent
                  value="minhas"
                  className="space-y-4"
                >
                  {parcelas
                    .filter((p) => p.responsavel === "usuario1")
                    .map((parcela) => (
                      <Card key={parcela.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`p-2 rounded-full ${
                                  parcela.status === "Paga"
                                    ? "bg-green-100 dark:bg-green-900"
                                    : "bg-gray-100 dark:bg-gray-800"
                                }`}
                              >
                                {parcela.status === "Paga" ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                                ) : (
                                  <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">
                                  Parcela {parcela.numero}
                                </p>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>
                                    Vencimento: {parcela.dataVencimento}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <p className="font-medium">
                                  R$ {parcela.valor.toFixed(2)}
                                </p>
                                {parcela.status === "Paga" && (
                                  <p className="text-sm text-muted-foreground">
                                    Pago: R$ {parcela.valorPago?.toFixed(2)}
                                  </p>
                                )}
                              </div>

                              <div>
                                {parcela.status === "Pendente" ? (
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                          handleMarcarPago(parcela)
                                        }
                                      >
                                        Marcar como pago
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>
                                          Marcar parcela como paga
                                        </DialogTitle>
                                        <DialogDescription>
                                          Informe o valor que foi depositado
                                          para esta parcela.
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                          <Label htmlFor="valorPago">
                                            Valor pago (R$)
                                          </Label>
                                          <Input
                                            id="valorPago"
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={valorPago}
                                            onChange={(e) =>
                                              setValorPago(e.target.value)
                                            }
                                          />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                          <div
                                            className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800`}
                                          >
                                            <DollarSign className="h-4 w-4 text-gray-500" />
                                          </div>
                                          <div>
                                            <p className="text-sm text-muted-foreground">
                                              Valor esperado
                                            </p>
                                            <p className="font-medium">
                                              R$ {parcela.valor.toFixed(2)}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <DialogFooter>
                                        <Button onClick={confirmarPagamento}>
                                          Confirmar pagamento
                                        </Button>
                                      </DialogFooter>
                                    </DialogContent>
                                  </Dialog>
                                ) : (
                                  <Badge
                                    variant="outline"
                                    className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                                  >
                                    Pago em {parcela.dataPagamento}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Participantes</CardTitle>
              <CardDescription>Pessoas envolvidas nesta meta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">João Doe</p>
                    <p className="text-sm text-muted-foreground">Você</p>
                  </div>
                </div>
                <Badge>Criador</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Maria Costa</p>
                    <p className="text-sm text-muted-foreground">
                      maria@exemplo.com
                    </p>
                  </div>
                </div>
                <Badge variant="outline">Participante</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
              >
                <Users className="mr-2 h-4 w-4" />
                Convidar Participante
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Ações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Edit className="mr-2 h-4 w-4" />
                Editar Meta
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar Meta
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Meta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
