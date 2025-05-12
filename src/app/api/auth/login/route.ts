import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

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

  return Response.json({
    status: 200,
    message: "Login successful",
    data: user,
  });
}
