import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { AuthService } from "@/lib/auth-service";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user || !user.password) {
    return Response.json({
      message: "User not found",
      status: 404,
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return Response.json({
      message: "Invalid password",
      status: 401,
    });
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const { token, exp } = await AuthService.createSessionToken(user);

  return Response.json({
    status: 200,
    message: "Login successful",
    token: {
      value: token,
      expires: new Date((exp || 1) * 1000),
    },
    data: user,
  });
}
