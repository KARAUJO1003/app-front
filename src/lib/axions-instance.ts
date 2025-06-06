import axios from "axios";
import { parseCookies } from "nookies";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar token do localStorage (client-side)
if (typeof window !== "undefined") {
  axiosInstance.interceptors.request.use((config) => {
    const token = parseCookies()["sessionId"]; // Obtém o token do cookie
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
}

export const api = axiosInstance;
