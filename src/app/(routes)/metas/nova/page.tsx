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
import { Slider } from "@/components/ui/slider";
import {
  ArrowLeft,
  Info,
  AlertCircle,
  HelpCircle,
  Loader2,
  X,
  Plus,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@/context/user-context";
import { useQuery } from "@tanstack/react-query";

type IResponsavel = {
  id?: string;
  usuarioId: string;
  nome: string;
  email: string;
  percentual: number;
  avatar?: string;
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user, loading } = useUser();

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
      participantes: [],
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

  // Configurar o field array para participantes
  const {
    fields: participantesFields,
    append: appendParticipante,
    remove: removeParticipante,
    update: updateParticipante,
  } = useFieldArray({
    control,
    name: "participantes",
    keyName: "_id",
  });

  // Adiciona o usuário criador automaticamente quando o user estiver disponível
  useEffect(() => {
    if (user && !loading && participantesFields.length === 0) {
      // setValue("usuarioCriador", user.id);
      // appendParticipante({
      //   id: user.id,
      //   usuarioId: user.id,
      //   nome: user.name || user.email,
      //   email: user.email,
      //   avatar: user.name
      //     ? user.name
      //         .split(" ")
      //         .map((n: string) => n[0])
      //         .join("")
      //         .toUpperCase()
      //     : user.email?.[0]?.toUpperCase() || "?",
      //   percentual: 100,
      // });
      form.reset({
        usuarioCriador: user.id,
        participantes: [
          {
            id: user.id,
            usuarioId: user.id,
            nome: user.name || user.email,
            email: user.email,
            avatar: user.name
              ? user.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()
              : user.email?.[0]?.toUpperCase() || "?",
            percentual: 100,
          },
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  // Atualiza o número de execuções quando o número de parcelas muda
  useEffect(() => {
    if (form.getValues("repeticao")) {
      form.setValue("repeticao.numExecucoes", numParcelas);
    }
  }, [numParcelas, form]);

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
  const handlePercentualChange = (index: number, novoPercentual: number) => {
    const participanteAtual = participantesFields[index];
    const outrosParticipantes = participantesFields.filter(
      (_, i) => i !== index
    );

    // Calcula o percentual restante para distribuir entre os outros
    const percentualRestante = 100 - novoPercentual;
    const totalOutrosPercentuais = outrosParticipantes.reduce(
      (sum, p) => sum + p.percentual,
      0
    );

    // Atualiza o participante atual
    updateParticipante(index, {
      ...participanteAtual,
      percentual: novoPercentual,
    });

    // Redistribui proporcionalmente entre os outros participantes
    if (outrosParticipantes.length > 0 && totalOutrosPercentuais > 0) {
      outrosParticipantes.forEach((participante) => {
        const realIndex = participantesFields.findIndex(
          (p) => p.usuarioId === participante.usuarioId
        );
        if (realIndex !== -1 && realIndex !== index) {
          const proporcao = participante.percentual / totalOutrosPercentuais;
          const novoPercentualOutro = Math.round(
            percentualRestante * proporcao
          );

          updateParticipante(realIndex, {
            ...participante,
            percentual: novoPercentualOutro,
          });
        }
      });
    } else if (outrosParticipantes.length === 1) {
      // Se há apenas um outro participante, ele fica com o restante
      const outroIndex = participantesFields.findIndex(
        (p) => p.usuarioId !== participanteAtual.usuarioId
      );
      if (outroIndex !== -1) {
        updateParticipante(outroIndex, {
          ...participantesFields[outroIndex],
          percentual: percentualRestante,
        });
      }
    }
  };

  // Função para redistribuir percentuais igualmente
  const redistribuirPercentuaisIgualmente = () => {
    const percentualPorParticipante = Math.floor(
      100 / participantesFields.length
    );
    const resto = 100 - percentualPorParticipante * participantesFields.length;

    participantesFields.forEach((participante, index) => {
      const percentual =
        index === 0
          ? percentualPorParticipante + resto
          : percentualPorParticipante;
      updateParticipante(index, {
        ...participante,
        percentual,
      });
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
      const valorParcela = valorTotal / numParcelas;
      for (let i = 0; i < numParcelas; i++) {
        valores.push(valorParcela);
      }
    } else if (tipo === "crescente") {
      const amplitude = valorMaxParcela - valorMinParcela;
      const incremento = amplitude / (numParcelas - 1 || 1);

      let somaValores = 0;
      for (let i = 0; i < numParcelas; i++) {
        const valor = valorMinParcela + i * incremento;
        valores.push(valor);
        somaValores += valor;
      }

      const fatorAjuste = valorTotal / somaValores;
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste;
      }
    } else if (tipo === "decrescente") {
      const amplitude = valorMaxParcela - valorMinParcela;
      const decremento = amplitude / (numParcelas - 1 || 1);

      let somaValores = 0;
      for (let i = 0; i < numParcelas; i++) {
        const valor = valorMaxParcela - i * decremento;
        valores.push(valor);
        somaValores += valor;
      }

      const fatorAjuste = valorTotal / somaValores;
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste;
      }
    } else if (tipo === "aleatoria") {
      let somaValores = 0;
      for (let i = 0; i < numParcelas; i++) {
        const valor =
          valorMinParcela + Math.random() * (valorMaxParcela - valorMinParcela);
        valores.push(valor);
        somaValores += valor;
      }

      const fatorAjuste = valorTotal / somaValores;
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste;
      }
    }

    return valores;
  };

  // Função para gerar prévia das parcelas
  const gerarPreviewParcelas = () => {
    if (!valorTotal || !numParcelas || participantesFields.length === 0) {
      return;
    }

    const valoresParcelas = gerarValoresParcelas(
      numParcelas,
      valorTotal,
      distribuicaoTipo
    );

    const parcelas: Parcela[] = [];
    const dataInicio = new Date(form.getValues("dataInicio"));

    // Filtra participantes ativos (com percentual > 0)
    const participantesAtivos = participantesFields.filter(
      (p: any) => p?.percentual > 0
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
        dataVencimento.setMonth(dataVencimento.getMonth() + i);
      }

      // Cria uma parcela para cada participante ativo
      for (const participante of participantesAtivos) {
        const valorParcelaParticipante =
          valoresParcelas[i] * (participante.percentual / 100);

        parcelas.push({
          numero: i + 1,
          valor: valorParcelaParticipante,
          dataVencimento: format(dataVencimento, "yyyy-MM-dd"),
          status: "Pendente",
          valorPago: 0,
          responsavel: participante,
          dataPagamento: "",
        });
      }
    }

    setPreviewParcelas(parcelas);
  };

  // Gera preview automaticamente quando os dados relevantes mudam
  useEffect(() => {
    if (valorTotal > 0 && numParcelas > 0 && participantesFields.length > 0) {
      gerarPreviewParcelas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    valorTotal,
    numParcelas,
    distribuicaoTipo,
    participantesFields,
    valorMinParcela,
    valorMaxParcela,
    recorrente,
  ]);

  console.log("form values:", form.getValues());
  console.log("form erros:", form.formState.errors);

  // Função para lidar com a submissão do formulário
  const onSubmit = async (data: MetaFormValues) => {
    try {
      setIsSubmitting(true);

      // Validação adicional
      const totalPercentual = participantesFields.reduce(
        (sum, p) => sum + p.percentual,
        0
      );
      if (totalPercentual !== 100) {
        alert("A soma dos percentuais deve ser igual a 100%");
        return;
      }

      // Aqui você faria a chamada para a API
      const response = await fetch("/api/metas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          parcelas: previewParcelas,
          participantes: participantesFields,
        }),
      });

      if (!response.ok) throw new Error("Erro ao criar meta");
      const metaCriada = await response.json();
      router.push(`/metas/${metaCriada.id}`);
    } catch (error) {
      console.error("Erro ao criar meta:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  async function fetchDataAsync(query = ""): Promise<any[]> {
    try {
      const url = query
        ? `http://localhost:3000/api/auth/users?search=${encodeURIComponent(query)}`
        : `http://localhost:3000/api/auth/users`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Erro ao buscar usuários");

      const data = await response.json();
      return data?.data || [];
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return [];
    }
  }

  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchDataAsync(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  // Função para adicionar participante
  const handleAddParticipante = async () => {
    if (!selectedUserId) return;

    // Verifica se o usuário já está na lista
    if (participantesFields.find((p: any) => p.usuarioId === selectedUserId)) {
      alert("Este usuário já está na lista de participantes");
      setSelectedUserId("");
      return;
    }

    try {
      const users = await fetchDataAsync();
      const user = users.find((u) => u.id === selectedUserId);

      if (user) {
        appendParticipante({
          id: user.id,
          usuarioId: user.id,
          nome: user.name || user.email,
          email: user.email,
          avatar: user.name
            ? user.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
            : user.email?.[0]?.toUpperCase() || "?",
          percentual: 0,
        });

        // Redistribui percentuais automaticamente
        setTimeout(() => {
          redistribuirPercentuaisIgualmente();
        }, 100);
      }
    } catch (error) {
      console.error("Erro ao adicionar participante:", error);
    }

    setSelectedUserId("");
    setDialogOpen(false);
  };

  // Função para remover participante
  const handleRemoveParticipante = (index: number) => {
    const participante = participantesFields[index];

    // Não permite remover o criador da meta
    if (participante.usuarioId === user?.id) {
      alert("Não é possível remover o criador da meta");
      return;
    }

    removeParticipante(index);

    // Redistribui percentuais após remoção
    setTimeout(() => {
      redistribuirPercentuaisIgualmente();
    }, 100);
  };

  const totalPercentual = participantesFields.reduce(
    (sum, p) => sum + p.percentual,
    0
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="flex items-center mb-6">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          size="sm"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar
        </Button>
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
                              if (value === "total") {
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
                              type="button"
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
                    {/* Lista de participantes */}
                    <div className="space-y-4">
                      {participantesFields.map((participante, index) => (
                        <div
                          key={index}
                          className="bg-muted p-4 rounded-md"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarFallback>
                                  {participante.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">
                                  {participante.nome}
                                </p>
                                <p className="text-muted-foreground text-sm">
                                  {participante.email}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {participante.usuarioId === user?.id && (
                                <Badge>Criador</Badge>
                              )}
                              {participante.usuarioId !== user?.id && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  type="button"
                                  onClick={() =>
                                    handleRemoveParticipante(index)
                                  }
                                  title="Remover participante"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </div>

                          {/* Controle de percentual */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <Label>Percentual de responsabilidade</Label>
                              <span className="font-medium text-sm">
                                {participante.percentual}%
                              </span>
                            </div>
                            <Slider
                              min={0}
                              max={100}
                              step={1}
                              value={[participante.percentual]}
                              onValueChange={(value) =>
                                handlePercentualChange(index, value[0])
                              }
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0%</span>
                              <span>100%</span>
                            </div>
                          </div>

                          {/* Valor calculado */}
                          {valorTotal > 0 && (
                            <div className="mt-3 pt-3 border-t">
                              <div className="flex justify-between items-center text-sm">
                                <span>Valor de responsabilidade:</span>
                                <span className="font-medium">
                                  R${" "}
                                  {(
                                    (valorTotal * participante.percentual) /
                                    100
                                  ).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Resumo dos percentuais */}
                    <div className="bg-muted p-3 rounded-md">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">
                          Total dos percentuais:
                        </span>
                        <span
                          className={`font-bold ${totalPercentual === 100 ? "text-green-600" : "text-red-600"}`}
                        >
                          {totalPercentual}%
                        </span>
                      </div>
                      {totalPercentual !== 100 && (
                        <p className="text-red-600 text-xs mt-1">
                          A soma deve ser igual a 100%
                        </p>
                      )}
                    </div>

                    {/* Botões de ação */}
                    <div className="flex gap-2">
                      <Dialog
                        open={dialogOpen}
                        onOpenChange={setDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="flex-1"
                            type="button"
                          >
                            <Plus className="mr-2 w-4 h-4" />
                            Convidar Participante
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Convidar Participante</DialogTitle>
                            <DialogDescription>
                              Busque e selecione um usuário para adicionar à
                              meta
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Select
                              value={selectedUserId}
                              onValueChange={setSelectedUserId}
                              disabled={isLoading}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione um usuário" />
                              </SelectTrigger>

                              <SelectContent>
                                {users?.map((user) => (
                                  <SelectItem
                                    key={user.id}
                                    value={user.id}
                                  >
                                    <div className="flex items-center space-x-2">
                                      <Avatar>
                                        <AvatarFallback>
                                          {user.name?.[0] ||
                                            user.email?.[0] ||
                                            "?"}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <span>{user.name || user.email}</span>
                                        <span className="block text-xs text-muted-foreground">
                                          {user.email}
                                        </span>
                                      </div>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>

                            <div className="flex justify-end space-x-2">
                              <Button
                                variant="outline"
                                onClick={() => setDialogOpen(false)}
                                type="button"
                              >
                                Cancelar
                              </Button>
                              <Button
                                type="button"
                                onClick={handleAddParticipante}
                                disabled={!selectedUserId}
                              >
                                Adicionar
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button
                        variant="outline"
                        type="button"
                        onClick={redistribuirPercentuaisIgualmente}
                        disabled={participantesFields.length === 0}
                      >
                        Distribuir Igualmente
                      </Button>
                    </div>

                    <Alert>
                      <Info className="w-4 h-4" />
                      <AlertDescription>
                        Cada participante terá suas próprias parcelas para pagar
                        de acordo com sua porcentagem.
                      </AlertDescription>
                    </Alert>
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

            {/* Preview das Parcelas */}
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
                            {participantesFields.map(
                              (participante, idx: number) => (
                                <TabsTrigger
                                  key={idx}
                                  value={participante.usuarioId}
                                  className="flex-1"
                                >
                                  {participante.usuarioId === user?.id
                                    ? "Minhas"
                                    : participante.nome.split(" ")[0]}{" "}
                                  (
                                  {
                                    previewParcelas.filter(
                                      (p) =>
                                        p.responsavel.usuarioId ===
                                        participante.usuarioId
                                    ).length
                                  }
                                  )
                                </TabsTrigger>
                              )
                            )}
                          </TabsList>

                          <TabsContent
                            value="todas"
                            className="space-y-3 mt-3"
                          >
                            {previewParcelas.map((parcela, index) => (
                              <div
                                key={`${parcela.numero}-${parcela.responsavel.usuarioId}-${index}`}
                                className={`p-3 border rounded-md ${
                                  parcela.responsavel.usuarioId === user?.id
                                    ? "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800"
                                    : "bg-pink-50 border-pink-200 dark:bg-pink-950 dark:border-pink-800"
                                }`}
                              >
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium">
                                    Parcela {parcela.numero}
                                  </span>
                                  <Badge variant="outline">
                                    {parcela.responsavel.usuarioId === user?.id
                                      ? "Você"
                                      : parcela.responsavel.nome.split(" ")[0]}
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

                          {participantesFields.map(
                            (participante, idx: number) => (
                              <TabsContent
                                key={idx}
                                value={participante.usuarioId}
                                className="space-y-3 mt-3"
                              >
                                {previewParcelas
                                  .filter(
                                    (p) =>
                                      p.responsavel.usuarioId ===
                                      participante.usuarioId
                                  )
                                  .map((parcela, index) => (
                                    <div
                                      key={`${parcela.numero}-${parcela.responsavel.usuarioId}-${index}`}
                                      className={`p-3 border rounded-md ${
                                        parcela.responsavel.usuarioId ===
                                        user?.id
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
                                          user?.id
                                            ? "Você"
                                            : parcela.responsavel.nome.split(
                                                " "
                                              )[0]}
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
                            )
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

                          {participantesFields.map(
                            (participante, idx: number) => (
                              <div
                                key={idx}
                                className="flex justify-between text-sm"
                              >
                                <span>
                                  {participante.usuarioId === user?.id
                                    ? "Sua"
                                    : `${participante.nome.split(" ")[0]}`}{" "}
                                  responsabilidade:
                                </span>
                                <span>
                                  R${" "}
                                  {(
                                    (valorTotal * participante.percentual) /
                                    100
                                  ).toFixed(2)}{" "}
                                  ({participante.percentual}%)
                                </span>
                              </div>
                            )
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
              disabled={isSubmitting || totalPercentual !== 100}
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
