import { decodeJwt } from "jose";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sessionId")?.value;

  if (!token) {
    return Response.json({ user: null }, { status: 401 });
  }

  // try {
  //   const { payload } = await jwtVerify(
  //     token,
  //     new TextEncoder().encode(process.env.JWT_SECRET)
  //   );
  //   return Response.json({ user: payload });
  // } catch {
  //   return Response.json({ user: null }, { status: 401 });
  // }
  const decoded = decodeJwt(token);
  if (!decoded) {
    return Response.json({ user: null }, { status: 401 });
  }
  return Response.json({ user: decoded }, { status: 200 });
  // return Response.json({ user: decoded }, { status: 200 });
}
