import type { Metadata } from "next";
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
import { PlusCircle, ArrowRight } from "lucide-react";
import { Parcela } from "@/lib/types";

async function getData() {
  const res = await fetch("http://localhost:3000/api/metas");
  const data = await res.json();
  return data;
}

export const metadata: Metadata = {
  title: "Metas Financeiras",
  description: "Sistema de gestão de metas financeiras para casais",
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 w-full">
          <div className="px-4 md:px-6 container">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter">
                  Gestão de Metas Financeiras para Casais
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Planeje e acompanhe suas metas financeiras em conjunto. Defina
                  objetivos, parcele valores e monitore o progresso.
                </p>
              </div>
              <div className="space-y-2 w-full max-w-sm">
                <Link href="/metas/nova">
                  <Button className="w-full">
                    <PlusCircle className="mr-2 w-4 h-4" />
                    Nova Meta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary/20 py-12 md:py-24 lg:py-32 w-full">
          <div className="px-4 md:px-6 container">
            <h2 className="mb-8 font-bold text-2xl sm:text-3xl tracking-tighter">
              Metas Ativas
            </h2>
            <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
              {data.metas.map((meta: any) => (
                <Card key={meta.id}>
                  <CardHeader>
                    <CardTitle>{meta.titulo}</CardTitle>
                    <CardDescription>{meta.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">Progresso</span>
                          <span className="font-medium text-sm">
                            {
                              meta.parcelas.filter(
                                (p: Parcela) => p.status === "Paga"
                              ).length
                            }
                            /{meta.parcelas.length} parcelas
                          </span>
                        </div>
                        <Progress
                          value={Math.round(
                            (meta.parcelas.filter(
                              (p: Parcela) => p.status === "Paga"
                            ).length /
                              meta.parcelas.length) *
                              100
                          )}
                        />
                      </div>
                      <div className="gap-4 grid grid-cols-2">
                        <div>
                          <span className="font-medium text-gray-500 text-sm">
                            Valor Total
                          </span>
                          <p className="font-bold text-lg">
                            R$ {meta.valorTotal}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-500 text-sm">
                            Valor Acumulado
                          </span>
                          <p className="font-bold text-lg">
                            R${" "}
                            {meta.parcelas.reduce(
                              (acc: number, parcela: Parcela) =>
                                parcela.status === "Paga"
                                  ? acc + (parcela?.valorPago ?? 0)
                                  : acc,
                              0
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/metas/${meta.id}`}
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        Ver Detalhes
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
