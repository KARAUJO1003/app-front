"use client"

import { Separator } from "@/components/ui/separator"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Info, Users, AlertCircle, HelpCircle } from "lucide-react"
import { RepetitionConfig } from "@/components/repetition-config"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { format } from "date-fns"

// Tipo para participantes
type Participante = {
  id: string
  nome: string
  email: string
  avatar: string
  percentual: number
}

// Tipo para parcelas
type Parcela = {
  numero: number
  valor: number
  dataVencimento: string
  status: string
  valorPago: number | null
  responsavel: string
  dataPagamento: string | null
}

export default function NovaMeta() {
  const router = useRouter()
  const [metodoCalculo, setMetodoCalculo] = useState("valorTotal")
  const [isRecorrente, setIsRecorrente] = useState(false)
  const [previewParcelas, setPreviewParcelas] = useState<Parcela[]>([])
  const [distribuicaoTipo, setDistribuicaoTipo] = useState("igual")
  const [valorMinParcela, setValorMinParcela] = useState(100)
  const [valorMaxParcela, setValorMaxParcela] = useState(500)
  const [participantes, setParticipantes] = useState<Participante[]>([
    {
      id: "usuario1",
      nome: "João Doe",
      email: "joao@exemplo.com",
      avatar: "JD",
      percentual: 50,
    },
    {
      id: "usuario2",
      nome: "Maria Costa",
      email: "maria@exemplo.com",
      avatar: "MC",
      percentual: 50,
    },
  ])
  const [incluirParceiro, setIncluirParceiro] = useState(true)

  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "viagem",
    valorTotal: 0,
    valorParcela: 0,
    numParcelas: 12,
    dataInicio: format(new Date(), "yyyy-MM-dd"),
  })

  const [repetitionConfig, setRepetitionConfig] = useState({
    frequencia: "mensal",
    intervalo: 1,
    diaVencimento: 10,
    diaSemana: "quarta-feira",
    horario: "12:00",
    terminoTipo: "execucoes",
    numExecucoes: 12,
    dataFim: "",
    fusoHorario: "GMT-3",
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Atualiza o número de execuções quando o número de parcelas muda
  useEffect(() => {
    setRepetitionConfig((prev) => ({
      ...prev,
      numExecucoes: formData.numParcelas,
    }))
  }, [formData.numParcelas])

  // Atualiza os percentuais dos participantes quando o parceiro é incluído/removido
  useEffect(() => {
    if (incluirParceiro) {
      // Se incluir parceiro, divide igualmente
      const novoPercentual = 100 / participantes.length
      setParticipantes((prev) =>
        prev.map((p) => ({
          ...p,
          percentual: novoPercentual,
        })),
      )
    } else {
      // Se remover parceiro, o usuário principal fica com 100%
      setParticipantes((prev) =>
        prev.map((p) => ({
          ...p,
          percentual: p.id === "usuario1" ? 100 : 0,
        })),
      )
    }
  }, [incluirParceiro, participantes.length])

  // Função para atualizar o estado do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    // Converte para número quando necessário
    if (["valorTotal", "valorParcela", "numParcelas"].includes(name)) {
      const numValue = Number.parseFloat(value) || 0

      setFormData((prev) => {
        const newData = { ...prev, [name]: numValue }

        // Calculate the other value immediately to prevent useEffect loop
        if (name === "valorTotal" && numValue > 0 && prev.numParcelas > 0) {
          newData.valorParcela = numValue / prev.numParcelas
        } else if (name === "valorParcela" && numValue > 0 && prev.numParcelas > 0) {
          newData.valorTotal = numValue * prev.numParcelas
        } else if (name === "numParcelas" && numValue > 0) {
          if (metodoCalculo === "valorTotal" && prev.valorTotal > 0) {
            newData.valorParcela = prev.valorTotal / numValue
          } else if (metodoCalculo === "valorParcela" && prev.valorParcela > 0) {
            newData.valorTotal = prev.valorParcela * numValue
          }
        }

        return newData
      })
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Limpa o erro do campo quando ele é alterado
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Função para atualizar a configuração de repetição
  const handleRepetitionChange = (config: any) => {
    setRepetitionConfig((prev) => ({ ...prev, ...config }))
  }

  // Função para atualizar o percentual de um participante
  const handlePercentualChange = (id: string, percentual: number) => {
    // Atualiza o percentual do participante selecionado
    const participanteAtualizado = participantes.find((p) => p.id === id)
    if (!participanteAtualizado) return

    const outroParticipante = participantes.find((p) => p.id !== id)
    if (!outroParticipante) return

    // Calcula o novo percentual do outro participante
    const novoPercentualOutro = 100 - percentual

    setParticipantes((prev) =>
      prev.map((p) => ({
        ...p,
        percentual: p.id === id ? percentual : novoPercentualOutro,
      })),
    )
  }

  // Função para gerar valores de parcelas de acordo com o tipo de distribuição
  const gerarValoresParcelas = (numParcelas: number, valorTotal: number, tipo: string): number[] => {
    const valores: number[] = []

    if (tipo === "igual") {
      // Distribuição igual
      const valorParcela = valorTotal / numParcelas
      for (let i = 0; i < numParcelas; i++) {
        valores.push(valorParcela)
      }
    } else if (tipo === "crescente") {
      // Distribuição crescente
      const amplitude = valorMaxParcela - valorMinParcela
      const incremento = amplitude / (numParcelas - 1 || 1)

      let somaValores = 0
      for (let i = 0; i < numParcelas; i++) {
        const valor = valorMinParcela + i * incremento
        valores.push(valor)
        somaValores += valor
      }

      // Ajusta os valores para que a soma seja igual ao valor total
      const fatorAjuste = valorTotal / somaValores
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste
      }
    } else if (tipo === "decrescente") {
      // Distribuição decrescente
      const amplitude = valorMaxParcela - valorMinParcela
      const decremento = amplitude / (numParcelas - 1 || 1)

      let somaValores = 0
      for (let i = 0; i < numParcelas; i++) {
        const valor = valorMaxParcela - i * decremento
        valores.push(valor)
        somaValores += valor
      }

      // Ajusta os valores para que a soma seja igual ao valor total
      const fatorAjuste = valorTotal / somaValores
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste
      }
    } else if (tipo === "aleatoria") {
      // Distribuição aleatória entre min e max
      let somaValores = 0
      for (let i = 0; i < numParcelas; i++) {
        const valor = valorMinParcela + Math.random() * (valorMaxParcela - valorMinParcela)
        valores.push(valor)
        somaValores += valor
      }

      // Ajusta os valores para que a soma seja igual ao valor total
      const fatorAjuste = valorTotal / somaValores
      for (let i = 0; i < numParcelas; i++) {
        valores[i] = valores[i] * fatorAjuste
      }
    }

    return valores
  }

  // Função para gerar prévia das parcelas
  const gerarPreviewParcelas = () => {
    // Validação básica antes de gerar a prévia
    const errors: Record<string, string> = {}

    if (!formData.titulo.trim()) {
      errors.titulo = "O título da meta é obrigatório"
    }

    if (metodoCalculo === "valorTotal" && formData.valorTotal <= 0) {
      errors.valorTotal = "O valor total deve ser maior que zero"
    }

    if (metodoCalculo === "valorParcela" && formData.valorParcela <= 0) {
      errors.valorParcela = "O valor da parcela deve ser maior que zero"
    }

    if (formData.numParcelas <= 0) {
      errors.numParcelas = "O número de parcelas deve ser maior que zero"
    }

    if (distribuicaoTipo !== "igual" && valorMinParcela >= valorMaxParcela) {
      errors.valorMinParcela = "O valor mínimo deve ser menor que o valor máximo"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Limpa erros anteriores
    setFormErrors({})

    // Calcula o valor da parcela ou valor total se necessário
    let valorParcela = formData.valorParcela
    let valorTotal = formData.valorTotal

    if (metodoCalculo === "valorTotal") {
      valorParcela = valorTotal / formData.numParcelas
    } else {
      valorTotal = valorParcela * formData.numParcelas
    }

    // Atualiza o estado com os valores calculados
    setFormData((prev) => ({
      ...prev,
      valorParcela,
      valorTotal,
    }))

    // Gera os valores das parcelas de acordo com o tipo de distribuição
    const valoresParcelas = gerarValoresParcelas(formData.numParcelas, valorTotal, distribuicaoTipo)

    // Gera as parcelas para cada participante
    const parcelas: Parcela[] = []
    const dataInicio = new Date(formData.dataInicio)

    // Filtra participantes ativos (com percentual > 0)
    const participantesAtivos = participantes.filter((p) => p.percentual > 0)

    for (let i = 0; i < formData.numParcelas; i++) {
      const dataVencimento = new Date(dataInicio)

      if (isRecorrente) {
        if (repetitionConfig.frequencia === "diaria") {
          dataVencimento.setDate(dataVencimento.getDate() + i * repetitionConfig.intervalo)
        } else if (repetitionConfig.frequencia === "semanal") {
          dataVencimento.setDate(dataVencimento.getDate() + i * 7 * repetitionConfig.intervalo)
        } else if (repetitionConfig.frequencia === "mensal") {
          dataVencimento.setMonth(dataVencimento.getMonth() + i * repetitionConfig.intervalo)
          if (repetitionConfig.diaVencimento) {
            dataVencimento.setDate(repetitionConfig.diaVencimento)
          }
        }
      } else {
        // Para metas não recorrentes, apenas incrementa o mês
        dataVencimento.setMonth(dataVencimento.getMonth() + i)
      }

      // Cria uma parcela para cada participante ativo
      for (const participante of participantesAtivos) {
        // Calcula o valor da parcela para este participante
        const valorParcelaParticipante = valoresParcelas[i] * (participante.percentual / 100)

        parcelas.push({
          numero: i + 1,
          valor: valorParcelaParticipante,
          dataVencimento: format(dataVencimento, "dd/MM/yyyy"),
          status: "Pendente",
          valorPago: null,
          responsavel: participante.id,
          dataPagamento: null,
        })
      }
    }

    setPreviewParcelas(parcelas)
  }

  // Função para validar e enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validação completa antes de enviar
    const errors: Record<string, string> = {}

    if (!formData.titulo.trim()) {
      errors.titulo = "O título da meta é obrigatório"
    }

    if (metodoCalculo === "valorTotal" && formData.valorTotal <= 0) {
      errors.valorTotal = "O valor total deve ser maior que zero"
    }

    if (metodoCalculo === "valorParcela" && formData.valorParcela <= 0) {
      errors.valorParcela = "O valor da parcela deve ser maior que zero"
    }

    if (formData.numParcelas <= 0) {
      errors.numParcelas = "O número de parcelas deve ser maior que zero"
    }

    if (distribuicaoTipo !== "igual" && valorMinParcela >= valorMaxParcela) {
      errors.valorMinParcela = "O valor mínimo deve ser menor que o valor máximo"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Gera as parcelas finais se ainda não foram geradas
    if (previewParcelas.length === 0) {
      gerarPreviewParcelas()
    }

    // Preparar dados para envio
    const metaData = {
      ...formData,
      recorrente: isRecorrente,
      distribuicaoTipo,
      valorMinParcela,
      valorMaxParcela,
      participantes: participantes.filter((p) => p.percentual > 0),
      ...(isRecorrente && {
        frequencia: repetitionConfig.frequencia,
        intervalo: repetitionConfig.intervalo,
        diaVencimento: repetitionConfig.diaVencimento,
        diaSemana: repetitionConfig.diaSemana,
        horario: repetitionConfig.horario,
        terminoTipo: repetitionConfig.terminoTipo,
        numExecucoes: repetitionConfig.numExecucoes,
        dataFim: repetitionConfig.dataFim,
        fusoHorario: repetitionConfig.fusoHorario,
      }),
    }

    // Aqui seria implementada a lógica para salvar a meta via API
    console.log("Dados da meta a serem enviados:", metaData)
    console.log("Parcelas a serem criadas:", previewParcelas)

    // Redireciona para a página de detalhes da meta (simulando sucesso)
    router.push("/metas/1")
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Nova Meta Financeira</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>Defina os detalhes da sua meta financeira</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="titulo" className="flex items-center">
                    Título da Meta <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="titulo"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleInputChange}
                    placeholder="Ex: Viagem de Férias"
                    className={formErrors.titulo ? "border-red-500" : ""}
                  />
                  {formErrors.titulo && <p className="text-sm text-red-500">{formErrors.titulo}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição (opcional)</Label>
                  <Textarea
                    id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    placeholder="Descreva o objetivo desta meta"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoria</Label>
                  <Select
                    value={formData.categoria}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, categoria: value }))}
                  >
                    <SelectTrigger id="categoria">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="viagem">Viagem</SelectItem>
                      <SelectItem value="emergencia">Reserva de Emergência</SelectItem>
                      <SelectItem value="imovel">Imóvel</SelectItem>
                      <SelectItem value="veiculo">Veículo</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dataInicio">Data de Início</Label>
                  <div className="relative">
                    <Input
                      id="dataInicio"
                      name="dataInicio"
                      type="date"
                      value={formData.dataInicio}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="recorrente" checked={isRecorrente} onCheckedChange={setIsRecorrente} />
                  <Label htmlFor="recorrente">Meta Recorrente</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configuração Financeira</CardTitle>
                <CardDescription>Defina como você quer calcular sua meta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup
                  defaultValue="valorTotal"
                  value={metodoCalculo}
                  onValueChange={setMetodoCalculo}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="valorTotal" id="valorTotal" />
                    <div className="grid gap-1.5 w-full">
                      <Label htmlFor="valorTotal" className="font-medium">
                        Definir valor total
                      </Label>
                      <p className="text-sm text-muted-foreground">Defina o valor total da meta e divida em parcelas</p>

                      {metodoCalculo === "valorTotal" && (
                        <div className="mt-4 grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="valorTotal" className="flex items-center">
                              Valor Total (R$) <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="valorTotal"
                              name="valorTotal"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="0,00"
                              value={formData.valorTotal || ""}
                              onChange={handleInputChange}
                              className={formErrors.valorTotal ? "border-red-500" : ""}
                            />
                            {formErrors.valorTotal && <p className="text-sm text-red-500">{formErrors.valorTotal}</p>}
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="numParcelas" className="flex items-center">
                              Número de Parcelas <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="numParcelas"
                              name="numParcelas"
                              type="number"
                              min="1"
                              value={formData.numParcelas || ""}
                              onChange={handleInputChange}
                              className={formErrors.numParcelas ? "border-red-500" : ""}
                            />
                            {formErrors.numParcelas && <p className="text-sm text-red-500">{formErrors.numParcelas}</p>}
                          </div>

                          {formData.valorTotal > 0 && formData.numParcelas > 0 && (
                            <div className="p-3 bg-muted rounded-md">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Valor por parcela:</span>
                                <span className="font-bold">
                                  R$ {(formData.valorTotal / formData.numParcelas).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="valorParcela" id="valorParcela" />
                    <div className="grid gap-1.5 w-full">
                      <Label htmlFor="valorParcela" className="font-medium">
                        Definir valor da parcela
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Defina quanto pode pagar por parcela e o número de parcelas
                      </p>

                      {metodoCalculo === "valorParcela" && (
                        <div className="mt-4 grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="valorParcela" className="flex items-center">
                              Valor da Parcela (R$) <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="valorParcela"
                              name="valorParcela"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="0,00"
                              value={formData.valorParcela || ""}
                              onChange={handleInputChange}
                              className={formErrors.valorParcela ? "border-red-500" : ""}
                            />
                            {formErrors.valorParcela && (
                              <p className="text-sm text-red-500">{formErrors.valorParcela}</p>
                            )}
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="numParcelas" className="flex items-center">
                              Número de Parcelas <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="numParcelas"
                              name="numParcelas"
                              type="number"
                              min="1"
                              value={formData.numParcelas || ""}
                              onChange={handleInputChange}
                              className={formErrors.numParcelas ? "border-red-500" : ""}
                            />
                            {formErrors.numParcelas && <p className="text-sm text-red-500">{formErrors.numParcelas}</p>}
                          </div>

                          {formData.valorParcela > 0 && formData.numParcelas > 0 && (
                            <div className="p-3 bg-muted rounded-md">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Valor total:</span>
                                <span className="font-bold">
                                  R$ {(formData.valorParcela * formData.numParcelas).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </RadioGroup>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="font-medium">Distribuição de Valores</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>Define como os valores das parcelas serão distribuídos ao longo do tempo.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <RadioGroup
                    value={distribuicaoTipo}
                    onValueChange={setDistribuicaoTipo}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="igual" id="igual" />
                      <Label htmlFor="igual">Parcelas iguais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="crescente" id="crescente" />
                      <Label htmlFor="crescente">Crescente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="decrescente" id="decrescente" />
                      <Label htmlFor="decrescente">Decrescente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="aleatoria" id="aleatoria" />
                      <Label htmlFor="aleatoria">Aleatória</Label>
                    </div>
                  </RadioGroup>

                  {distribuicaoTipo !== "igual" && (
                    <div className="space-y-4 p-4 bg-muted rounded-md mt-2">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="valorMinParcela">Valor mínimo da parcela (R$)</Label>
                          <span className="text-sm font-medium">{valorMinParcela.toFixed(2)}</span>
                        </div>
                        <Slider
                          id="valorMinParcela"
                          min={10}
                          max={formData.valorTotal / 2}
                          step={10}
                          value={[valorMinParcela]}
                          onValueChange={(value) => setValorMinParcela(value[0])}
                          className={formErrors.valorMinParcela ? "border-red-500" : ""}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="valorMaxParcela">Valor máximo da parcela (R$)</Label>
                          <span className="text-sm font-medium">{valorMaxParcela.toFixed(2)}</span>
                        </div>
                        <Slider
                          id="valorMaxParcela"
                          min={valorMinParcela + 10}
                          max={formData.valorTotal * 2}
                          step={10}
                          value={[valorMaxParcela]}
                          onValueChange={(value) => setValorMaxParcela(value[0])}
                        />
                      </div>

                      {formErrors.valorMinParcela && (
                        <p className="text-sm text-red-500">{formErrors.valorMinParcela}</p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Participantes</CardTitle>
                <CardDescription>
                  Defina quem participará desta meta financeira e a distribuição de responsabilidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
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
                        <p className="text-sm text-muted-foreground">maria@exemplo.com</p>
                      </div>
                    </div>
                    <Checkbox
                      id="incluirParceiro"
                      checked={incluirParceiro}
                      onCheckedChange={(checked) => setIncluirParceiro(!!checked)}
                    />
                  </div>

                  {incluirParceiro && (
                    <div className="space-y-4 p-4 bg-muted rounded-md">
                      <Label className="font-medium">Distribuição de Responsabilidades</Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Defina a porcentagem do valor total que cada participante será responsável
                      </p>

                      <div className="space-y-6">
                        {participantes.map((participante) => (
                          <div key={participante.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`percentual-${participante.id}`}>
                                {participante.nome} ({participante.percentual}%)
                              </Label>
                            </div>
                            <Slider
                              id={`percentual-${participante.id}`}
                              min={0}
                              max={100}
                              step={5}
                              value={[participante.percentual]}
                              onValueChange={(value) => handlePercentualChange(participante.id, value[0])}
                              disabled={participante.id !== "usuario1"}
                            />
                          </div>
                        ))}
                      </div>

                      <Alert className="mt-4">
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                          Cada participante terá suas próprias parcelas para pagar de acordo com sua porcentagem.
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}

                  <Button variant="outline" className="w-full mt-2">
                    <Users className="mr-2 h-4 w-4" />
                    Convidar Outro Participante
                  </Button>
                </div>
              </CardContent>
            </Card>

            {isRecorrente && (
              <Card>
                <CardHeader>
                  <CardTitle>Configuração de Repetição</CardTitle>
                  <CardDescription>Defina como a meta se repetirá ao longo do tempo</CardDescription>
                </CardHeader>
                <CardContent>
                  <RepetitionConfig
                    config={{
                      ...repetitionConfig,
                      numExecucoes: formData.numParcelas,
                    }}
                    onChange={handleRepetitionChange}
                    fixedExecutions={true}
                  />
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Prévia das Parcelas</CardTitle>
                <CardDescription>Visualize como ficarão suas parcelas</CardDescription>
              </CardHeader>
              <CardContent>
                {previewParcelas.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Info className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">Configure sua meta para visualizar as parcelas</p>
                    <Button variant="outline" onClick={gerarPreviewParcelas}>
                      Gerar Prévia
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>Cada participante terá suas próprias parcelas para pagar.</AlertDescription>
                    </Alert>

                    <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3">
                      <Tabs defaultValue="todas">
                        <TabsList className="w-full">
                          <TabsTrigger value="todas" className="flex-1">
                            Todas ({previewParcelas.length})
                          </TabsTrigger>
                          <TabsTrigger value="minhas" className="flex-1">
                            Minhas ({previewParcelas.filter((p) => p.responsavel === "usuario1").length})
                          </TabsTrigger>
                          {incluirParceiro && (
                            <TabsTrigger value="parceiro" className="flex-1">
                              Parceiro ({previewParcelas.filter((p) => p.responsavel === "usuario2").length})
                            </TabsTrigger>
                          )}
                        </TabsList>

                        <TabsContent value="todas" className="space-y-3 mt-3">
                          {previewParcelas.map((parcela, index) => (
                            <div
                              key={`${parcela.numero}-${parcela.responsavel}-${index}`}
                              className={`p-3 border rounded-md ${
                                parcela.responsavel === "usuario1"
                                  ? "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800"
                                  : "bg-pink-50 border-pink-200 dark:bg-pink-950 dark:border-pink-800"
                              }`}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Parcela {parcela.numero}</span>
                                <Badge variant="outline">{parcela.responsavel === "usuario1" ? "Você" : "Maria"}</Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Valor:</span>
                                  <p>R$ {parcela.valor.toFixed(2)}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Vencimento:</span>
                                  <p>{parcela.dataVencimento}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>

                        <TabsContent value="minhas" className="space-y-3 mt-3">
                          {previewParcelas
                            .filter((p) => p.responsavel === "usuario1")
                            .map((parcela, index) => (
                              <div
                                key={`${parcela.numero}-${parcela.responsavel}-${index}`}
                                className="p-3 border rounded-md bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800"
                              >
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium">Parcela {parcela.numero}</span>
                                  <Badge variant="outline">Você</Badge>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">Valor:</span>
                                    <p>R$ {parcela.valor.toFixed(2)}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Vencimento:</span>
                                    <p>{parcela.dataVencimento}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </TabsContent>

                        {incluirParceiro && (
                          <TabsContent value="parceiro" className="space-y-3 mt-3">
                            {previewParcelas
                              .filter((p) => p.responsavel === "usuario2")
                              .map((parcela, index) => (
                                <div
                                  key={`${parcela.numero}-${parcela.responsavel}-${index}`}
                                  className="p-3 border rounded-md bg-pink-50 border-pink-200 dark:bg-pink-950 dark:border-pink-800"
                                >
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium">Parcela {parcela.numero}</span>
                                    <Badge variant="outline">Maria</Badge>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                      <span className="text-muted-foreground">Valor:</span>
                                      <p>R$ {parcela.valor.toFixed(2)}</p>
                                    </div>
                                    <div>
                                      <span className="text-muted-foreground">Vencimento:</span>
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
                      <div className="pt-3 border-t space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span>Total de parcelas:</span>
                          <span>{previewParcelas.length}</span>
                        </div>

                        <div className="flex justify-between text-sm font-medium">
                          <span>Valor total:</span>
                          <span>R$ {formData.valorTotal.toFixed(2)}</span>
                        </div>

                        {incluirParceiro && (
                          <>
                            <div className="flex justify-between text-sm">
                              <span>Sua responsabilidade:</span>
                              <span>
                                R${" "}
                                {(
                                  (formData.valorTotal * participantes.find((p) => p.id === "usuario1")!.percentual) /
                                  100
                                ).toFixed(2)}
                              </span>
                            </div>

                            <div className="flex justify-between text-sm">
                              <span>Responsabilidade do parceiro:</span>
                              <span>
                                R${" "}
                                {(
                                  (formData.valorTotal * participantes.find((p) => p.id === "usuario2")!.percentual) /
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

        <div className="mt-8 flex justify-end space-x-4">
          <Link href="/">
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </Link>
          <Button type="submit" size="lg">
            Criar Meta
          </Button>
        </div>
      </form>
    </div>
  )
}
