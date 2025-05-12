import axios from "axios";
import { parseCookies } from "nookies";

const session = parseCookies()["sessionId"] || null;

const axiosInstance = axios.create({
  baseURL: "https://localhost:3002/api", // Replace with your API base URL
  timeout: 10000, // Set a timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${session}`, // Replace with your token if needed
  },
});

export default axiosInstance;
