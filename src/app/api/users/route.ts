import prisma from "@/lib/prisma";

export async function GET() {
  const response = await prisma.user.findMany({});

  return Response.json({
    status: 200,
    message: "Users fetched successfully",
    data: response,
  });
}
