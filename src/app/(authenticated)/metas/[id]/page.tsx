/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default async function MetaDetalhes({
  params,
}: {
  params: { id: string };
}) {
  const fetchData = async () => {
    const res: any = await fetch(
      `http://localhost:3000/api/metas/${params.id}`
    );
    if (!res.ok) {
      throw new Error("Erro ao buscar a meta");
    }
    return res.json();
  };

  const data = await fetchData();

  console.log("fetch", data);

  // const [parcelaAtual, setParcelaAtual] = useState<any>(null);
  // const [valorPago, setValorPago] = useState("");

  const valorPago = "0";
  const setValorPago = (valor: string) => {
    console.log("Valor Pago:", valor);
  };
  const setParcelaAtual = (parcela: any) => {
    console.log("Parcela Atual:", parcela);
  };
  const parcelaAtual: any = null;
  const setParcelas = (novasParcelas: any) => {
    console.log("Novas Parcelas:", novasParcelas);
  };

  const parcelas: any[] = [];

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
    <div className="mx-auto px-4 py-8 container">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar
          </Button>
        </Link>
        <h1 className="ml-4 font-bold text-2xl">Viagem de Férias</h1>
        <div className="flex space-x-2 ml-auto">
          <Button
            variant="outline"
            size="sm"
          >
            <Edit className="mr-2 w-4 h-4" />
            Editar
          </Button>
          <Button
            variant="outline"
            size="sm"
          >
            <Share2 className="mr-2 w-4 h-4" />
            Compartilhar
          </Button>
        </div>
      </div>

      <div className="gap-8 grid md:grid-cols-3">
        <div className="space-y-8 md:col-span-2">
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
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                        <DollarSign className="w-6 h-6 text-green-700 dark:text-green-300" />
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground text-sm">
                          Valor Total
                        </p>
                        <p className="font-bold text-2xl">
                          R$ {valorTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                        <CheckCircle2 className="w-6 h-6 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground text-sm">
                          Valor Acumulado
                        </p>
                        <p className="font-bold text-2xl">
                          R$ {valorPagoTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="gap-6 grid grid-cols-2">
                <div className="space-y-2">
                  <p className="font-medium text-muted-foreground text-sm">
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
                  <p className="font-medium text-muted-foreground text-sm">
                    Frequência
                  </p>
                  <div className="flex items-center">
                    <Calendar className="mr-2 w-4 h-4 text-muted-foreground" />
                    <span>Mensal (todo dia 10)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-muted-foreground text-sm">
                    Valor por Parcela
                  </p>
                  <p className="font-medium">R$ 500,00</p>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-muted-foreground text-sm">
                    Participantes
                  </p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background w-8 h-8">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background w-8 h-8">
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
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`p-2 rounded-full ${
                                parcela.status === "Paga"
                                  ? "bg-green-100 dark:bg-green-900"
                                  : "bg-gray-100 dark:bg-gray-800"
                              }`}
                            >
                              {parcela.status === "Paga" ? (
                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                              ) : (
                                <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">
                                Parcela {parcela.numero}
                              </p>
                              <div className="flex items-center text-muted-foreground text-sm">
                                <Calendar className="mr-1 w-3 h-3" />
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
                                <p className="text-muted-foreground text-sm">
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
                                          <DollarSign className="w-4 h-4 text-gray-500" />
                                        </div>
                                        <div>
                                          <p className="text-muted-foreground text-sm">
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
                                  className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
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
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                                <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                              </div>
                              <div>
                                <p className="font-medium">
                                  Parcela {parcela.numero}
                                </p>
                                <div className="flex items-center text-muted-foreground text-sm">
                                  <Calendar className="mr-1 w-3 h-3" />
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
                                        <DollarSign className="w-4 h-4 text-gray-500" />
                                      </div>
                                      <div>
                                        <p className="text-muted-foreground text-sm">
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
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <p className="font-medium">
                                  Parcela {parcela.numero}
                                </p>
                                <div className="flex items-center text-muted-foreground text-sm">
                                  <Calendar className="mr-1 w-3 h-3" />
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
                                <p className="text-muted-foreground text-sm">
                                  Pago: R$ {parcela.valorPago?.toFixed(2)}
                                </p>
                              </div>

                              <Badge
                                variant="outline"
                                className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
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
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`p-2 rounded-full ${
                                  parcela.status === "Paga"
                                    ? "bg-green-100 dark:bg-green-900"
                                    : "bg-gray-100 dark:bg-gray-800"
                                }`}
                              >
                                {parcela.status === "Paga" ? (
                                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                                ) : (
                                  <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">
                                  Parcela {parcela.numero}
                                </p>
                                <div className="flex items-center text-muted-foreground text-sm">
                                  <Calendar className="mr-1 w-3 h-3" />
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
                                  <p className="text-muted-foreground text-sm">
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
                                            <DollarSign className="w-4 h-4 text-gray-500" />
                                          </div>
                                          <div>
                                            <p className="text-muted-foreground text-sm">
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
                                    className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
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
          <Card className="top-4 sticky">
            <CardHeader>
              <CardTitle>Participantes</CardTitle>
              <CardDescription>Pessoas envolvidas nesta meta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">João Doe</p>
                    <p className="text-muted-foreground text-sm">Você</p>
                  </div>
                </div>
                <Badge>Criador</Badge>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Maria Costa</p>
                    <p className="text-muted-foreground text-sm">
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
                <Users className="mr-2 w-4 h-4" />
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
                className="justify-start w-full"
              >
                <Edit className="mr-2 w-4 h-4" />
                Editar Meta
              </Button>
              <Button
                variant="outline"
                className="justify-start w-full"
              >
                <Share2 className="mr-2 w-4 h-4" />
                Compartilhar Meta
              </Button>
              <Button
                variant="outline"
                className="justify-start hover:bg-red-50 dark:hover:bg-red-950 w-full text-red-500 hover:text-red-600"
              >
                <Trash2 className="mr-2 w-4 h-4" />
                Excluir Meta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
