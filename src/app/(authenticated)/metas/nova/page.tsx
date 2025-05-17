/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Separator } from "@/components/ui/separator";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { metaSchema, type MetaFormValues } from "@/lib/schemas";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  ArrowLeft,
  Info,
  Users,
  AlertCircle,
  HelpCircle,
  Loader2,
} from "lucide-react";
import { RepetitionConfig } from "@/components/repetition-config";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type IResponsavel = {
  id?: string;
  usuarioId: string;
  nome: string;
  email: string;
  percentual: number;
};

type Parcela = {
  numero: number;
  valor: number;
  dataVencimento: string;
  status: string;
  valorPago: number | null;
  responsavel: IResponsavel;
  dataPagamento: string | null;
};

export default function NovaMeta() {
  const router = useRouter();
  const [previewParcelas, setPreviewParcelas] = useState<Parcela[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [incluirParceiro, setIncluirParceiro] = useState(true);

  const form = useForm<MetaFormValues>({
    resolver: zodResolver(metaSchema),
    defaultValues: {
      titulo: "",
      descricao: "",
      categoria: "viagem",
      valorTotal: 0,
      metodoCalculo: "total",
      valorParcela: 0,
      numParcelas: 12,
      recorrente: false,
      dataInicio: format(new Date(), "yyyy-MM-dd"),
      distribuicaoTipo: "igual",
      usuarioCriador: "cmakc29i40000tn7ss2kh3bsd",
      participantes: [
        {
          id: "cmakc29i40000tn7ss2kh3bsd",
          usuarioId: "usuario1",
          nome: "João Doe",
          email: "joao@exemplo.com",
          avatar: "JD",
          percentual: 50,
        },
        {
          id: "cmakc29m50001tn7senqs30th",
          usuarioId: "usuario2",
          nome: "Maria Costa",
          email: "maria@exemplo.com",
          avatar: "MC",
          percentual: 50,
        },
      ],
      repeticao: {
        frequencia: "mensal",
        intervalo: 1,
        diaVencimento: 10,
        diaSemana: "quarta-feira",
        horario: "12:00",
        terminoTipo: "execucoes",
        numExecucoes: 12,
        dataFim: "",
        fusoHorario: "GMT-3",
      },
    },
  });

  const { control, watch, setValue, handleSubmit } = form;

  const metodoCalculo = watch("metodoCalculo");
  const recorrente = watch("recorrente");
  const valorTotal = watch("valorTotal");
  const valorParcela = watch("valorParcela");
  const numParcelas = watch("numParcelas");
  const distribuicaoTipo = watch("distribuicaoTipo");
  const valorMinParcela = watch("valorMinParcela") || 100;
  const valorMaxParcela = watch("valorMaxParcela") || 500;
  const participantes = watch("participantes");

  // Configurar o field array para participantes
  const { fields: participantesFields, update: updateParticipante } =
    useFieldArray({
      control,
      name: "participantes",
      keyName: "_id",
    });

  // Atualiza o número de execuções quando o número de parcelas muda
  useEffect(() => {
    if (form.getValues("repeticao")) {
      form.setValue("repeticao.numExecucoes", numParcelas);
    }
  }, [numParcelas, form]);

  // Atualiza os percentuais dos participantes quando o parceiro é incluído/removido
  useEffect(() => {
    if (incluirParceiro) {
      // Se incluir parceiro, divide igualmente
      const novoPercentual = 100 / participantesFields.length;
      participantesFields.forEach((p, index) => {
        updateParticipante(index, {
          ...p,
          percentual: Number(novoPercentual.toFixed()),
        });
      });
    } else {
      // Se remover parceiro, o usuário principal fica com 100%
      participantesFields.forEach((p, index) => {
        updateParticipante(index, {
          ...p,
          percentual: p.usuarioId === "usuario1" ? 100 : 0,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incluirParceiro]);

  // Atualiza o valor da parcela quando o valor total ou número de parcelas muda
  useEffect(() => {
    if (metodoCalculo === "total" && valorTotal > 0 && numParcelas > 0) {
      setValue("valorParcela", valorTotal / numParcelas);
    }
  }, [valorTotal, numParcelas, metodoCalculo, setValue]);

  // Atualiza o valor total quando o valor da parcela ou número de parcelas muda
  useEffect(() => {
    if (metodoCalculo === "parcela" && valorParcela > 0 && numParcelas > 0) {
      setValue("valorTotal", valorParcela * numParcelas);
    }
  }, [valorParcela, numParcelas, metodoCalculo, setValue]);

  // Função para atualizar o percentual de um participante
  const handlePercentualChange = (id: string, percentual: number) => {
    // Atualiza o percentual do participante selecionado
    const participanteIndex = participantesFields.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (p: any) => p.usuarioId === id
    );
    if (participanteIndex === -1) return;

    const outroParticipanteIndex = participantesFields.findIndex(
      (p) => p.usuarioId !== id
    );
    if (outroParticipanteIndex === -1) return;

    // Calcula o novo percentual do outro participante
    const novoPercentualOutro = 100 - percentual;

    // Atualiza os participantes
    updateParticipante(participanteIndex, {
      ...participantesFields[participanteIndex],
      percentual,
    });

    updateParticipante(outroParticipanteIndex, {
      ...participantesFields[outroParticipanteIndex],
      percentual: novoPercentualOutro,
    });
  };

  // Função para gerar valores de parcelas de acordo com o tipo de distribuição
  const gerarValoresParcelas = (
    numParcelas: number,
    valorTotal: number,
    tipo: string
  ): number[] => {
    const valores: number[] = [];

    if (tipo === "igual") {
      // Distribuição igual
      const valorParcela = valorTotal / numParcelas;
      for (let i = 0; i < numParcelas; i++) {
        valores.push(valorParcela);
      }
    } else if (tipo === "crescente") {
      // Distribuição crescente
      const amplitude = valorMaxParcela - valorMinParcela;
      const incremento = amplitude / (numParcelas - 1 || 1);

      let somaValores = 0;
      for (let i = 0; i < numParcelas; i++) {
        const valor = valorMinParcela + i * incremento;
        valores.push(valor);
        somaValores += valor;
      }

      // Ajusta os valores para que a soma seja igual ao valor total
      const fatorAjuste = valorTotal / somaValores;
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste;
      }
    } else if (tipo === "decrescente") {
      // Distribuição decrescente
      const amplitude = valorMaxParcela - valorMinParcela;
      const decremento = amplitude / (numParcelas - 1 || 1);

      let somaValores = 0;
      for (let i = 0; i < numParcelas; i++) {
        const valor = valorMaxParcela - i * decremento;
        valores.push(valor);
        somaValores += valor;
      }

      // Ajusta os valores para que a soma seja igual ao valor total
      const fatorAjuste = valorTotal / somaValores;
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste;
      }
    } else if (tipo === "aleatoria") {
      // Distribuição aleatória entre min e max
      let somaValores = 0;
      for (let i = 0; i < numParcelas; i++) {
        const valor =
          valorMinParcela + Math.random() * (valorMaxParcela - valorMinParcela);
        valores.push(valor);
        somaValores += valor;
      }

      // Ajusta os valores para que a soma seja igual ao valor total
      const fatorAjuste = valorTotal / somaValores;
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste;
      }
    }

    return valores;
  };

  // Função para gerar prévia das parcelas
  const gerarPreviewParcelas = () => {
    // Gera os valores das parcelas de acordo com o tipo de distribuição
    const valoresParcelas = gerarValoresParcelas(
      numParcelas,
      valorTotal,
      distribuicaoTipo
    );

    // Gera as parcelas para cada participante
    const parcelas: Parcela[] = [];
    const dataInicio = new Date(form.getValues("dataInicio"));

    // Filtra participantes ativos (com percentual > 0)
    const participantesAtivos = participantes.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (p: any) => p.percentual > 0
    );

    for (let i = 0; i < numParcelas; i++) {
      const dataVencimento = new Date(dataInicio);

      if (recorrente) {
        const repeticao = form.getValues("repeticao");
        if (repeticao) {
          if (repeticao.frequencia === "diaria") {
            dataVencimento.setDate(
              dataVencimento.getDate() + i * repeticao.intervalo
            );
          } else if (repeticao.frequencia === "semanal") {
            dataVencimento.setDate(
              dataVencimento.getDate() + i * 7 * repeticao.intervalo
            );
          } else if (repeticao.frequencia === "mensal") {
            dataVencimento.setMonth(
              dataVencimento.getMonth() + i * repeticao.intervalo
            );
            if (repeticao.diaVencimento) {
              dataVencimento.setDate(repeticao.diaVencimento);
            }
          }
        }
      } else {
        // Para metas não recorrentes, apenas incrementa o mês
        dataVencimento.setMonth(dataVencimento.getMonth() + i);
      }

      // Cria uma parcela para cada participante ativo
      for (const participante of participantesAtivos) {
        // Calcula o valor da parcela para este participante
        const valorParcelaParticipante =
          valoresParcelas[i] * (participante.percentual / 100);

        parcelas.push({
          numero: i + 1,
          valor: valorParcelaParticipante,
          dataVencimento: format(dataVencimento, "dd/MM/yyyy"),
          status: "Pendente",
          valorPago: 0,
          responsavel: participante,
          dataPagamento: "",
        });
      }
    }

    setPreviewParcelas(parcelas);
  };

  // Função para lidar com a submissão do formulário
  const onSubmit = async (data: MetaFormValues) => {
    try {
      setIsSubmitting(true);

      // Gera as parcelas finais se ainda não foram geradas
      if (previewParcelas.length === 0) {
        gerarPreviewParcelas();
      }

      console.log("Dados do formulário:", data);
      // Enviar dados para a API
      const response = await fetch("/api/metas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          parcelas: [
            ...previewParcelas.map((parcela) => ({
              ...parcela,
              responsavel: parcela.responsavel.id,
            })),
          ],
          participantes: data.participantes,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao criar meta");
      }

      const metaCriada = await response.json();

      // Redireciona para a página de detalhes da meta
      router.push(`/metas/${metaCriada.id}`);
    } catch (error) {
      console.error("Erro ao criar meta:", error);
      // Aqui você poderia mostrar uma mensagem de erro para o usuário
    } finally {
      setIsSubmitting(false);
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
        <h1 className="ml-4 font-bold text-2xl">Nova Meta Financeira</h1>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gap-8 grid md:grid-cols-3">
            <div className="space-y-8 md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                  <CardDescription>
                    Defina os detalhes da sua meta financeira
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={control}
                    name="titulo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Título da Meta <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Viagem de Férias"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="descricao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição (opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva o objetivo desta meta"
                            rows={3}
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="categoria"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="viagem">Viagem</SelectItem>
                            <SelectItem value="emergencia">
                              Reserva de Emergência
                            </SelectItem>
                            <SelectItem value="imovel">Imóvel</SelectItem>
                            <SelectItem value="veiculo">Veículo</SelectItem>
                            <SelectItem value="educacao">Educação</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="dataInicio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de Início</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="recorrente"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Meta Recorrente</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configuração Financeira</CardTitle>
                  <CardDescription>
                    Defina como você quer calcular sua meta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="metodoCalculo"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            value={field.value}
                            onValueChange={(value) => {
                              field.onChange(value);
                              if (value === "valorTotal") {
                                setValue("valorParcela", 0);
                              } else {
                                setValue("valorTotal", 0);
                              }
                            }}
                            className="space-y-4"
                          >
                            <div className="flex items-start space-x-2">
                              <RadioGroupItem
                                value="total"
                                id="total"
                              />
                              <div className="gap-1.5 grid w-full">
                                <Label
                                  htmlFor="total"
                                  className="font-medium"
                                >
                                  Definir valor total
                                </Label>
                                <p className="text-muted-foreground text-sm">
                                  Defina o valor total da meta e divida em
                                  parcelas
                                </p>

                                {metodoCalculo === "total" && (
                                  <div className="gap-4 grid mt-4">
                                    <FormField
                                      control={control}
                                      name="valorTotal"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>
                                            Valor Total (R$){" "}
                                            <span className="text-red-500">
                                              *
                                            </span>
                                          </FormLabel>
                                          <FormControl>
                                            <Input
                                              type="number"
                                              min="0"
                                              step="0.01"
                                              placeholder="0,00"
                                              {...field}
                                              onChange={(e) =>
                                                field.onChange(
                                                  Number.parseFloat(
                                                    e.target.value
                                                  ) || 0
                                                )
                                              }
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />

                                    <FormField
                                      control={control}
                                      name="numParcelas"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>
                                            Número de Parcelas{" "}
                                            <span className="text-red-500">
                                              *
                                            </span>
                                          </FormLabel>
                                          <FormControl>
                                            <Input
                                              type="number"
                                              min="1"
                                              {...field}
                                              onChange={(e) =>
                                                field.onChange(
                                                  Number.parseInt(
                                                    e.target.value
                                                  ) || 1
                                                )
                                              }
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />

                                    {valorTotal > 0 && numParcelas > 0 && (
                                      <div className="bg-muted p-3 rounded-md">
                                        <div className="flex justify-between items-center">
                                          <span className="font-medium text-sm">
                                            Valor por parcela:
                                          </span>
                                          <span className="font-bold">
                                            R${" "}
                                            {(valorTotal / numParcelas).toFixed(
                                              2
                                            )}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="flex items-start space-x-2">
                              <RadioGroupItem
                                value="parcela"
                                id="parcela"
                              />
                              <div className="gap-1.5 grid w-full">
                                <Label
                                  htmlFor="parcela"
                                  className="font-medium"
                                >
                                  Definir valor da parcela
                                </Label>
                                <p className="text-muted-foreground text-sm">
                                  Defina quanto pode pagar por parcela e o
                                  número de parcelas
                                </p>

                                {metodoCalculo === "parcela" && (
                                  <div className="gap-4 grid mt-4">
                                    <FormField
                                      control={control}
                                      name="valorParcela"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>
                                            Valor da Parcela (R$){" "}
                                            <span className="text-red-500">
                                              *
                                            </span>
                                          </FormLabel>
                                          <FormControl>
                                            <Input
                                              type="number"
                                              min="0"
                                              step="0.01"
                                              placeholder="0,00"
                                              {...field}
                                              onChange={(e) =>
                                                field.onChange(
                                                  Number.parseFloat(
                                                    e.target.value
                                                  ) || 0
                                                )
                                              }
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />

                                    <FormField
                                      control={control}
                                      name="numParcelas"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>
                                            Número de Parcelas{" "}
                                            <span className="text-red-500">
                                              *
                                            </span>
                                          </FormLabel>
                                          <FormControl>
                                            <Input
                                              type="number"
                                              min="1"
                                              {...field}
                                              onChange={(e) =>
                                                field.onChange(
                                                  Number.parseInt(
                                                    e.target.value
                                                  ) || 1
                                                )
                                              }
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />

                                    {valorParcela > 0 && numParcelas > 0 && (
                                      <div className="bg-muted p-3 rounded-md">
                                        <div className="flex justify-between items-center">
                                          <span className="font-medium text-sm">
                                            Valor total:
                                          </span>
                                          <span className="font-bold">
                                            R${" "}
                                            {(
                                              valorParcela * numParcelas
                                            ).toFixed(2)}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="font-medium">
                        Distribuição de Valores
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-6 h-6"
                            >
                              <HelpCircle className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Define como os valores das parcelas serão
                              distribuídos ao longo do tempo.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <FormField
                      control={control}
                      name="distribuicaoTipo"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="gap-4 grid grid-cols-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="igual"
                                  id="igual"
                                />
                                <Label htmlFor="igual">Parcelas iguais</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="crescente"
                                  id="crescente"
                                />
                                <Label htmlFor="crescente">Crescente</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="decrescente"
                                  id="decrescente"
                                />
                                <Label htmlFor="decrescente">Decrescente</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="aleatoria"
                                  id="aleatoria"
                                />
                                <Label htmlFor="aleatoria">Aleatória</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {distribuicaoTipo !== "igual" && (
                      <div className="space-y-4 bg-muted mt-2 p-4 rounded-md">
                        <FormField
                          control={control}
                          name="valorMinParcela"
                          render={({ field }) => (
                            <FormItem className="space-y-2">
                              <div className="flex justify-between items-center">
                                <FormLabel>
                                  Valor mínimo da parcela (R$)
                                </FormLabel>
                                <span className="font-medium text-sm">
                                  {field.value?.toFixed(2) || "0.00"}
                                </span>
                              </div>
                              <FormControl>
                                <Slider
                                  min={10}
                                  max={valorTotal / 2 || 1000}
                                  step={10}
                                  value={[field.value || 100]}
                                  onValueChange={(value) =>
                                    field.onChange(value[0])
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={control}
                          name="valorMaxParcela"
                          render={({ field }) => (
                            <FormItem className="space-y-2">
                              <div className="flex justify-between items-center">
                                <FormLabel>
                                  Valor máximo da parcela (R$)
                                </FormLabel>
                                <span className="font-medium text-sm">
                                  {field.value?.toFixed(2) || "0.00"}
                                </span>
                              </div>
                              <FormControl>
                                <Slider
                                  min={valorMinParcela + 10 || 20}
                                  max={valorTotal * 2 || 2000}
                                  step={10}
                                  value={[field.value || 500]}
                                  onValueChange={(value) =>
                                    field.onChange(value[0])
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Participantes</CardTitle>
                  <CardDescription>
                    Defina quem participará desta meta financeira e a
                    distribuição de responsabilidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
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
                      <Checkbox
                        id="incluirParceiro"
                        checked={incluirParceiro}
                        onCheckedChange={(checked) =>
                          setIncluirParceiro(!!checked)
                        }
                      />
                    </div>

                    {incluirParceiro && (
                      <div className="space-y-4 bg-muted p-4 rounded-md">
                        <Label className="font-medium">
                          Distribuição de Responsabilidades
                        </Label>
                        <p className="mb-4 text-muted-foreground text-sm">
                          Defina a porcentagem do valor total que cada
                          participante será responsável
                        </p>

                        <div className="space-y-6">
                          {participantesFields.map((participante) => (
                            <div
                              key={participante.id}
                              className="space-y-2"
                            >
                              <div className="flex justify-between items-center">
                                <Label
                                // htmlFor={`percentual-${participante.id}`}
                                >
                                  {participante.nome} ({participante.percentual}
                                  %)
                                </Label>
                              </div>
                              <Slider
                                // id={`percentual-${participante.id}`}
                                min={0}
                                max={100}
                                step={5}
                                value={[participante.percentual]}
                                onValueChange={(value) =>
                                  handlePercentualChange(
                                    participante.usuarioId,
                                    value[0]
                                  )
                                }
                                disabled={participante.usuarioId !== "usuario1"}
                              />
                            </div>
                          ))}
                        </div>

                        <Alert className="mt-4">
                          <Info className="w-4 h-4" />
                          <AlertDescription>
                            Cada participante terá suas próprias parcelas para
                            pagar de acordo com sua porcentagem.
                          </AlertDescription>
                        </Alert>
                      </div>
                    )}

                    <Button
                      variant="outline"
                      className="mt-2 w-full"
                    >
                      <Users className="mr-2 w-4 h-4" />
                      Convidar Outro Participante
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {recorrente && (
                <Card>
                  <CardHeader>
                    <CardTitle>Configuração de Repetição</CardTitle>
                    <CardDescription>
                      Defina como a meta se repetirá ao longo do tempo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Controller
                      control={control}
                      name="repeticao"
                      render={({ field }) => (
                        <RepetitionConfig
                          config={{
                            ...(field.value as any),
                            numExecucoes: numParcelas,
                          }}
                          onChange={field.onChange}
                          fixedExecutions={true}
                        />
                      )}
                    />
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card className="top-4 sticky">
                <CardHeader>
                  <CardTitle>Prévia das Parcelas</CardTitle>
                  <CardDescription>
                    Visualize como ficarão suas parcelas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {previewParcelas.length === 0 ? (
                    <div className="flex flex-col justify-center items-center py-8 text-center">
                      <Info className="mb-4 w-10 h-10 text-muted-foreground" />
                      <p className="mb-4 text-muted-foreground text-sm">
                        Configure sua meta para visualizar as parcelas
                      </p>
                      <Button
                        variant="outline"
                        onClick={gerarPreviewParcelas}
                      >
                        Gerar Prévia
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Alert>
                        <AlertCircle className="w-4 h-4" />
                        <AlertDescription>
                          Cada participante terá suas próprias parcelas para
                          pagar.
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-3 pr-2 max-h-[400px] overflow-y-auto">
                        <Tabs defaultValue="todas">
                          <TabsList className="w-full">
                            <TabsTrigger
                              value="todas"
                              className="flex-1"
                            >
                              Todas ({previewParcelas.length})
                            </TabsTrigger>
                            <TabsTrigger
                              value="minhas"
                              className="flex-1"
                            >
                              Minhas (
                              {
                                previewParcelas.filter(
                                  (p) => p.responsavel.usuarioId === "usuario1"
                                ).length
                              }
                              )
                            </TabsTrigger>
                            {incluirParceiro && (
                              <TabsTrigger
                                value="parceiro"
                                className="flex-1"
                              >
                                Parceiro (
                                {
                                  previewParcelas.filter(
                                    (p) =>
                                      p.responsavel.usuarioId === "usuario2"
                                  ).length
                                }
                                )
                              </TabsTrigger>
                            )}
                          </TabsList>

                          <TabsContent
                            value="todas"
                            className="space-y-3 mt-3"
                          >
                            {previewParcelas.map((parcela, index) => (
                              <div
                                key={`${parcela.numero}-${parcela.responsavel}-${index}`}
                                className={`p-3 border rounded-md ${
                                  parcela.responsavel.usuarioId === "usuario1"
                                    ? "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800"
                                    : "bg-pink-50 border-pink-200 dark:bg-pink-950 dark:border-pink-800"
                                }`}
                              >
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium">
                                    Parcela {parcela.numero}
                                  </span>
                                  <Badge variant="outline">
                                    {parcela.responsavel.usuarioId ===
                                    "usuario1"
                                      ? "Você"
                                      : "Maria"}
                                  </Badge>
                                </div>
                                <div className="gap-2 grid grid-cols-2 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">
                                      Valor:
                                    </span>
                                    <p>R$ {parcela.valor.toFixed(2)}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">
                                      Vencimento:
                                    </span>
                                    <p>{parcela.dataVencimento}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </TabsContent>

                          <TabsContent
                            value="minhas"
                            className="space-y-3 mt-3"
                          >
                            {previewParcelas
                              .filter(
                                (p) => p.responsavel.usuarioId === "usuario1"
                              )
                              .map((parcela, index) => (
                                <div
                                  key={`${parcela.numero}-${parcela.responsavel}-${index}`}
                                  className="bg-blue-50 dark:bg-blue-950 p-3 border border-blue-200 dark:border-blue-800 rounded-md"
                                >
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium">
                                      Parcela {parcela.numero}
                                    </span>
                                    <Badge variant="outline">Você</Badge>
                                  </div>
                                  <div className="gap-2 grid grid-cols-2 text-sm">
                                    <div>
                                      <span className="text-muted-foreground">
                                        Valor:
                                      </span>
                                      <p>R$ {parcela.valor.toFixed(2)}</p>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">
                                        Vencimento:
                                      </span>
                                      <p>{parcela.dataVencimento}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </TabsContent>

                          {incluirParceiro && (
                            <TabsContent
                              value="parceiro"
                              className="space-y-3 mt-3"
                            >
                              {previewParcelas
                                .filter(
                                  (p) => p.responsavel.usuarioId === "usuario2"
                                )
                                .map((parcela, index) => (
                                  <div
                                    key={`${parcela.numero}-${parcela.responsavel}-${index}`}
                                    className="bg-pink-50 dark:bg-pink-950 p-3 border border-pink-200 dark:border-pink-800 rounded-md"
                                  >
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="font-medium">
                                        Parcela {parcela.numero}
                                      </span>
                                      <Badge variant="outline">Maria</Badge>
                                    </div>
                                    <div className="gap-2 grid grid-cols-2 text-sm">
                                      <div>
                                        <span className="text-muted-foreground">
                                          Valor:
                                        </span>
                                        <p>R$ {parcela.valor.toFixed(2)}</p>
                                      </div>
                                      <div>
                                        <span className="text-muted-foreground">
                                          Vencimento:
                                        </span>
                                        <p>{parcela.dataVencimento}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </TabsContent>
                          )}
                        </Tabs>
                      </div>

                      {previewParcelas.length > 0 && (
                        <div className="space-y-2 pt-3 border-t">
                          <div className="flex justify-between font-medium text-sm">
                            <span>Total de parcelas:</span>
                            <span>{previewParcelas.length}</span>
                          </div>

                          <div className="flex justify-between font-medium text-sm">
                            <span>Valor total:</span>
                            <span>R$ {valorTotal.toFixed(2)}</span>
                          </div>

                          {incluirParceiro && (
                            <>
                              <div className="flex justify-between text-sm">
                                <span>Sua responsabilidade:</span>
                                <span>
                                  R${" "}
                                  {(
                                    (valorTotal *
                                      participantes.find(
                                        (p) => p.usuarioId === "usuario1"
                                      )!.percentual) /
                                    100
                                  ).toFixed(2)}
                                </span>
                              </div>

                              <div className="flex justify-between text-sm">
                                <span>Responsabilidade do parceiro:</span>
                                <span>
                                  R${" "}
                                  {(
                                    (valorTotal *
                                      participantes.find(
                                        (p) => p.usuarioId === "usuario2"
                                      )!.percentual) /
                                    100
                                  ).toFixed(2)}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <Link href="/">
              <Button
                type="button"
                variant="outline"
              >
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              )}
              Criar Meta
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
