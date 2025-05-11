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

export const metadata: Metadata = {
  title: "Metas Financeiras",
  description: "Sistema de gestão de metas financeiras para casais",
};

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Gestão de Metas Financeiras para Casais
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Planeje e acompanhe suas metas financeiras em conjunto. Defina
                  objetivos, parcele valores e monitore o progresso.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/metas/nova">
                  <Button className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Meta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
              Metas Ativas
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Viagem de Férias</CardTitle>
                  <CardDescription>Meta mensal - 12 parcelas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Progresso</span>
                        <span className="text-sm font-medium">
                          3/12 parcelas
                        </span>
                      </div>
                      <Progress value={25} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Valor Total
                        </span>
                        <p className="text-lg font-bold">R$ 6.000,00</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Valor Acumulado
                        </span>
                        <p className="text-lg font-bold">R$ 1.500,00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/metas/1"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reserva de Emergência</CardTitle>
                  <CardDescription>Meta semanal - 24 parcelas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Progresso</span>
                        <span className="text-sm font-medium">
                          8/24 parcelas
                        </span>
                      </div>
                      <Progress value={33} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Valor Total
                        </span>
                        <p className="text-lg font-bold">R$ 12.000,00</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Valor Acumulado
                        </span>
                        <p className="text-lg font-bold">R$ 4.000,00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/metas/2"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
