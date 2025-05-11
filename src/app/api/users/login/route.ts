import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

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

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const session = await cookies();
  session.set("sessionId", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return Response.json({
    status: 200,
    message: "Login successful",
    data: user,
  });
}
