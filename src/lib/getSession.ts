import { cookies } from "next/headers";

export async function getSession() {
  //retornar o token de sessão do cookie
  const sessionCookie = (await cookies()).get("sessionId");
  if (sessionCookie) {
    const { value } = sessionCookie;
    return value;
  }
  return null;
}
