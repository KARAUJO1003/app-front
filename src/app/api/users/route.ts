import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, password, email } = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (user) {
    return Response.json({
      message: "User already exists",
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
      email,
    },
  });

  return Response.json({
    status: 201,
    message: "User created successfully",
    data: newUser,
  });
}

export async function GET() {
  const response = await prisma.user.findMany({});

  return Response.json({
    status: 200,
    message: "Users fetched successfully",
    data: response,
  });
}
