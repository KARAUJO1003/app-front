import { cookies } from "next/headers";

export async function getServerSessionToken() {
  const sessionCookie = (await cookies()).get("sessionId");
  return sessionCookie?.value || null;
}

export function isAuthenticatedServer() {
  return !!getServerSessionToken();
}
