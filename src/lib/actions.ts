/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";
import { cookies } from "next/headers";

// Simulação de ações do servidor - em produção, estas funções interagiriam com o banco de dados

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await axios.post("http://localhost:3000/api/auth/register", {
    ...data,
  });
  return response.data;
}

export async function loginUser(data: { email: string; password: string }) {
  const res = await axios
    .post("http://localhost:3000/api/auth/login", {
      ...data,
    })
    .then(async (response) => {
      const { value, expires } = response.data?.token || {};

      if (!value || !expires) {
        throw new Error("Invalid token received from login");
      }

      (await cookies()).set("sessionId", value, {
        expires: new Date(expires).getTime() * 1000,
        path: "/",
        httpOnly: true,
      });

      return response;
    });

  if (res.status !== 200) {
    throw new Error("Login failed");
  }

  return res.data;
}

export async function logoutUser() {
  // Simulação de logout
  return true;
}

export async function createGoal(data: any) {
  // Simulação de criação de meta
  return { id: "new-goal-id", ...data };
}

export async function updateGoal(id: string, data: any) {
  // Simulação de atualização de meta
  return { id, ...data };
}

export async function deleteGoal(id: string) {
  // Simulação de exclusão de meta
  return true;
}

export async function shareGoal(goalId: string, email: string) {
  // Simulação de compartilhamento de meta
  return true;
}

export async function addDeposit(goalId: string, amount: number) {
  // Simulação de adição de depósito
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
  return true;
}

export async function markNotificationAsRead(id: string) {
  // Simulação de marcação de notificação como lida
  return true;
}
