import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Target, TrendingUp, Users } from "lucide-react";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container px-6 sm:px-4 flex h-14 mx-auto items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="font-bold">CoupleGoals</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                >
                  Entrar
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Cadastrar</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Alcance seus objetivos juntos
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Defina, compartilhe e acompanhe metas com seu parceiro(a).
                    Seja financeira ou pessoal, o CoupleGoals ajuda vocês a se
                    manterem no caminho e celebrar conquistas juntos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/metas">
                    <Button
                      size="lg"
                      className="w-full"
                    >
                      Começar
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                    >
                      Saiba mais
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Defina metas</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Crie metas diárias, semanais ou mensais
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Compartilhe</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Colabore com seu parceiro(a)
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Acompanhe o progresso</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Monitore suas metas financeiras
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-sm">
                    <Heart className="h-8 w-8 text-rose-500" />
                    <h3 className="text-xl font-bold">Comemore</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Alcance marcos juntos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 ">
        <div
          className="container  mx-auto
  w-full max-w-7xl flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row"
        >
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
            © 2025 CoupleGoals. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
            >
              Termos
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400"
            >
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
