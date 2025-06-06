import { User } from "../../generated/prisma";

export async function fetchUserData(): Promise<User | null> {
  const res = await fetch("http://localhost:3000/api/auth/me");
  const data = await res.json();
  return data;
}
