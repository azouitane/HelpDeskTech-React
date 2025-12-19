import type { LoginDto } from "../interfaces/auth.interface";
import api from "./api";



export const login = (data: LoginDto) => api.post("/auth/login", data);

export const register = (data: LoginDto) =>
  api.post("/auth/register", data);
