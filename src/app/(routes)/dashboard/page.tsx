"use client";
import { useUser } from "@/context/user-context";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useUser();

  console.log("user", user);

  if (user) {
    // Redirecionar ou mostrar uma mensagem se o usuário já estiver logado
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Você já está logado!</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Bem-vindo, {user.name}! Você pode acessar seu painel de controle.
          email: {user.email}
          avatar: {user.avatar}
        </p>

        <Link
          href="/"
          className="mt-4 underline"
        >
          Voltar para a página inicial
        </Link>
      </div>
    );
  }
  return <div>hdhdjfgjfgjf</div>;
}
