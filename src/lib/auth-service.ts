import * as jose from "jose";
import { cookies } from "next/headers";

async function openSessionToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jose.jwtVerify(token, secret);

  return payload;
}

async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime("7d")
    .sign(secret);

  const { exp } = await openSessionToken(token);

  return {
    token: token,
    exp: exp,
  };
}

async function isSessionValid() {
  const sessionCookie = (await cookies()).get("sessionId");
  if (sessionCookie) {
    const { value } = sessionCookie;
    const { exp } = await openSessionToken(value);
    const currentDate = new Date().getTime();

    return (exp as number) * 1000 > currentDate;
  }
  return false;
}

async function destroySession() {
  (await cookies()).delete("sessionId");
}

const AuthService = {
  openSessionToken,
  createSessionToken,
  isSessionValid,
  destroySession,
};

export { AuthService };
