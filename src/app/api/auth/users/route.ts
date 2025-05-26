import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  const response = await prisma.user.findMany({
    where: search
      ? {
          OR: [{ name: { contains: search } }, { email: { contains: search } }],
        }
      : undefined,
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });

  return Response.json({
    status: 200,
    message: "Users fetched successfully",
    data: response,
  });
}
