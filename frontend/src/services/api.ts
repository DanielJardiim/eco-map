import axios from "axios";

export const api = axios.create({
  baseURL: (import.meta as any).env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
