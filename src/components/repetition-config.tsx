"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, Info, Lock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RepetitionConfigProps {
  config: {
    frequencia: string;
    intervalo: number;
    diaVencimento: number;
    diaSemana: string;
    horario: string;
    terminoTipo: string;
    numExecucoes: number;
    dataFim: string;
    fusoHorario: string;
  };
  onChange: (config: {
    frequencia: string;
    intervalo: number;
    diaVencimento: number;
    diaSemana: string;
    horario: string;
    terminoTipo: string;
    numExecucoes: number;
    dataFim: string;
    fusoHorario: string;
  }) => void;
  fixedExecutions?: boolean;
}

export function RepetitionConfig({
  config,
  onChange,
  fixedExecutions = false,
}: RepetitionConfigProps) {
  const prevConfigRef = useRef("");
  const [frequencia, setFrequencia] = useState(config.frequencia);
  const [terminoTipo, setTerminoTipo] = useState(config.terminoTipo);
  const [intervalo, setIntervalo] = useState(config.intervalo);
  const [diaVencimento, setDiaVencimento] = useState(config.diaVencimento);
  const [diaSemana, setDiaSemana] = useState(config.diaSemana);
  const [horario, setHorario] = useState(config.horario);
  const [numExecucoes, setNumExecucoes] = useState(config.numExecucoes);
  const [dataFim, setDataFim] = useState<Date | undefined>(
    config.dataFim ? new Date(config.dataFim) : undefined
  );
  const [fusoHorario, setFusoHorario] = useState(config.fusoHorario);

  // Atualiza os valores locais quando as props mudam
  useEffect(() => {
    setNumExecucoes(config.numExecucoes);
  }, [config.numExecucoes]);

  // Atualiza o componente pai quando os valores mudam
  useEffect(() => {
    // Create a stable object reference to prevent unnecessary re-renders
    const configData = {
      frequencia,
      intervalo,
      diaVencimento,
      diaSemana,
      horario,
      terminoTipo,
      numExecucoes,
      dataFim: dataFim ? format(dataFim, "yyyy-MM-dd") : "",
      fusoHorario,
    };

    // Use JSON.stringify to compare with previous values
    const configString = JSON.stringify(configData);

    // Only call onChange if the values actually changed
    if (configString !== prevConfigRef.current) {
      prevConfigRef.current = configString;
      onChange(configData);
    }
  }, [
    frequencia,
    intervalo,
    diaVencimento,
    diaSemana,
    horario,
    terminoTipo,
    numExecucoes,
    dataFim,
    fusoHorario,
    onChange,
  ]);

  // Calcula a próxima ocorrência
  const calcularProximaOcorrencia = () => {
    const hoje = new Date();
    const proximaData = new Date(hoje);

    if (frequencia === "diaria") {
      proximaData.setDate(hoje.getDate() + intervalo);
    } else if (frequencia === "semanal") {
      // Mapeia os dias da semana para números (0 = domingo, 1 = segunda, etc.)
      const diasSemana: Record<string, number> = {
        "domingo": 0,
        "segunda-feira": 1,
        "terca-feira": 2,
        "quarta-feira": 3,
        "quinta-feira": 4,
        "sexta-feira": 5,
        "sabado": 6,
      };

      const diaAlvo = diasSemana[diaSemana];
      const diaAtual = hoje.getDay();
      let diasParaAdicionar = diaAlvo - diaAtual;

      if (diasParaAdicionar <= 0) {
        diasParaAdicionar += 7;
      }

      proximaData.setDate(hoje.getDate() + diasParaAdicionar);
    } else if (frequencia === "mensal") {
      proximaData.setDate(diaVencimento);

      if (proximaData < hoje) {
        proximaData.setMonth(proximaData.getMonth() + 1);
      }
    }

    // Formata a data para exibição
    return format(proximaData, "d 'de' MMM. 'às' HH:mm", { locale: ptBR });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Frequência</Label>
        <RadioGroup
          defaultValue={frequencia}
          value={frequencia}
          onValueChange={(value) => setFrequencia(value)}
          className="grid grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="diaria"
              id="diaria"
            />
            <Label htmlFor="diaria">Diária</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="semanal"
              id="semanal"
            />
            <Label htmlFor="semanal">Semanal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="mensal"
              id="mensal"
            />
            <Label htmlFor="mensal">Mensal</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="aCada">A cada</Label>
            <div className="flex space-x-2">
              <Input
                id="aCada"
                type="number"
                min="1"
                value={intervalo}
                onChange={(e) =>
                  setIntervalo(Number.parseInt(e.target.value) || 1)
                }
                className="w-20"
              />
              <Select
                value={
                  frequencia === "mensal"
                    ? "mes"
                    : frequencia === "semanal"
                    ? "semana"
                    : "dia"
                }
                disabled
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {frequencia === "diaria" && (
                    <SelectItem value="dia">dia</SelectItem>
                  )}
                  {frequencia === "semanal" && (
                    <SelectItem value="semana">semana</SelectItem>
                  )}
                  {frequencia === "mensal" && (
                    <SelectItem value="mes">mês</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>

          {frequencia === "mensal" && (
            <div className="space-y-2">
              <Label htmlFor="noDia">No dia</Label>
              <Select
                value={diaVencimento.toString()}
                onValueChange={(value) =>
                  setDiaVencimento(Number.parseInt(value))
                }
              >
                <SelectTrigger id="noDia">
                  <SelectValue placeholder="Dia" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }, (_, i) => (
                    <SelectItem
                      key={i + 1}
                      value={(i + 1).toString()}
                    >
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {frequencia === "semanal" && (
            <div className="space-y-2">
              <Label htmlFor="diaSemana">Dia da semana</Label>
              <Select
                value={diaSemana}
                onValueChange={setDiaSemana}
              >
                <SelectTrigger id="diaSemana">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="domingo">Domingo</SelectItem>
                  <SelectItem value="segunda-feira">Segunda-feira</SelectItem>
                  <SelectItem value="terca-feira">Terça-feira</SelectItem>
                  <SelectItem value="quarta-feira">Quarta-feira</SelectItem>
                  <SelectItem value="quinta-feira">Quinta-feira</SelectItem>
                  <SelectItem value="sexta-feira">Sexta-feira</SelectItem>
                  <SelectItem value="sabado">Sábado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="horario">Horário</Label>
          <Input
            id="horario"
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inicio">Início</Label>
          <div className="relative">
            <Input
              id="inicio"
              type="text"
              value="Amanhã"
              readOnly
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <Label>Término</Label>
        <RadioGroup
          value={fixedExecutions ? "execucoes" : terminoTipo}
          onValueChange={setTerminoTipo}
          className="space-y-4"
          disabled={fixedExecutions}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="nunca"
              id="nunca"
              disabled={fixedExecutions}
            />
            <Label
              htmlFor="nunca"
              className={fixedExecutions ? "text-muted-foreground" : ""}
            >
              Nunca
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="execucoes"
              id="execucoes"
              className="mt-1"
              disabled={fixedExecutions}
            />
            <div className="grid gap-1.5 w-full">
              <div className="flex items-center">
                <Label
                  htmlFor="execucoes"
                  className={fixedExecutions ? "text-muted-foreground" : ""}
                >
                  Após
                </Label>
                {fixedExecutions && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-1"
                        >
                          <Lock className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          O número de execuções é definido pelo número de
                          parcelas.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              {(terminoTipo === "execucoes" || fixedExecutions) && (
                <div className="flex items-center space-x-2">
                  <Input
                    id="numExecucoes"
                    type="number"
                    min="1"
                    value={numExecucoes}
                    onChange={(e) =>
                      !fixedExecutions &&
                      setNumExecucoes(Number.parseInt(e.target.value) || 12)
                    }
                    className="w-20"
                    disabled={fixedExecutions}
                  />
                  <span>execuções</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="data"
              id="data"
              className="mt-1"
              disabled={fixedExecutions}
            />
            <div className="grid gap-1.5 w-full">
              <Label
                htmlFor="data"
                className={fixedExecutions ? "text-muted-foreground" : ""}
              >
                Em data específica
              </Label>
              {terminoTipo === "data" && !fixedExecutions && (
                <div className="relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        {dataFim ? (
                          format(dataFim, "dd/MM/yyyy")
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={dataFim}
                        onSelect={setDataFim}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            </div>
          </div>
        </RadioGroup>

        {fixedExecutions && (
          <div className="p-3 bg-muted rounded-md">
            <div className="flex items-start space-x-2">
              <Info className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <p className="text-sm">
                O término está configurado automaticamente para o número de
                parcelas definido ({numExecucoes}).
              </p>
            </div>
          </div>
        )}
      </div>

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="fusoHorario">Fuso horário</Label>
        <Select
          value={fusoHorario}
          onValueChange={setFusoHorario}
        >
          <SelectTrigger id="fusoHorario">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GMT-3">GMT-3 (Brasília)</SelectItem>
            <SelectItem value="GMT-4">GMT-4</SelectItem>
            <SelectItem value="GMT-5">GMT-5</SelectItem>
            <SelectItem value="GMT+0">GMT+0</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="p-4 bg-muted rounded-md">
        <div className="flex items-start space-x-2">
          <Info className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Próxima ocorrência:</p>
            <p className="text-sm">{calcularProximaOcorrencia()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
