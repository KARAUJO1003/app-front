import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { AuthService } from "@/lib/auth-service";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sessionId")?.value;

  if (!token) {
    return Response.json({ user: null }, { status: 401 });
  }

  const verifySession = AuthService.isSessionValid();

  if (!verifySession) {
    return Response.json(
      { message: "Session expired", user: null },
      { status: 401 }
    );
  }

  const decoded = decodeJwt(token);
  if (!decoded) {
    return Response.json({ user: null }, { status: 401 });
  }
  return Response.json(
    { message: "Session ok", user: decoded },
    { status: 200 }
  );
}
