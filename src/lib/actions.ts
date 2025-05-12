/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

// Simulação de ações do servidor - em produção, estas funções interagiriam com o banco de dados

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await axios.post(
    "http://localhost:3002/api/users/register",
    {
      ...data,
    }
  );
  return response.data;
}

export async function loginUser(data: { email: string; password: string }) {
  await axios
    .post("http://localhost:3002/api/users/login", {
      ...data,
    })
    .then(async (res) => {
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
      }

      const token = jwt.sign(
        { id: res?.data?.user?.id },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      (await cookies()).set("sessionId", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return {
        status: res.status,
        message: res.data.message,
        data: {
          ...res.data.data,
          token,
        },
      };
    });
}

export async function logoutUser() {
  // Simulação de logout
  console.log("Fazendo logout");
  return true;
}

export async function createGoal(data: any) {
  // Simulação de criação de meta
  console.log("Criando meta:", data);
  return { id: "new-goal-id", ...data };
}

export async function updateGoal(id: string, data: any) {
  // Simulação de atualização de meta
  console.log("Atualizando meta:", id, data);
  return { id, ...data };
}

export async function deleteGoal(id: string) {
  // Simulação de exclusão de meta
  console.log("Excluindo meta:", id);
  return true;
}

export async function shareGoal(goalId: string, email: string) {
  // Simulação de compartilhamento de meta
  console.log("Compartilhando meta:", goalId, "com", email);
  return true;
}

export async function addDeposit(goalId: string, amount: number) {
  // Simulação de adição de depósito
  console.log("Adicionando depósito:", amount, "para meta", goalId);
  return {
    id: "new-deposit-id",
    goalId,
    amount,
    date: new Date(),
    userId: "current-user-id",
  };
}

export async function completeGoal(goalId: string, data: any) {
  // Simulação de conclusão de meta
  console.log("Concluindo meta:", goalId, "com dados", data);
  return true;
}

export async function markNotificationAsRead(id: string) {
  // Simulação de marcação de notificação como lida
  console.log("Marcando notificação como lida:", id);
  return true;
}
