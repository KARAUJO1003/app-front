import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sessionId")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload;
  } catch {
    return null;
  }
}
