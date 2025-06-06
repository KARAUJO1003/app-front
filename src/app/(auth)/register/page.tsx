import Link from "next/link"
import { Target } from "lucide-react"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
        <Link href="/" className="absolute left-8 top-8 flex items-center gap-2 font-semibold md:left-12 md:top-12">
          <Target className="h-6 w-6" />
          <span>MetaShare</span>
        </Link>
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Criar conta</h1>
            <p className="text-gray-500 dark:text-gray-400">Preencha os campos abaixo para criar sua conta</p>
          </div>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
