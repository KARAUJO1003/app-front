import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const isAuthRoute = pathname.startsWith("/auth");
  const isApiRoute = pathname.startsWith("/api");
  const isLoginRoute = pathname.startsWith("/login");
  const isRegisterRoute = pathname.startsWith("/register");

  const token = request.cookies.get("sessionId")?.value;

  if (
    !token &&
    !isLoginRoute &&
    !isRegisterRoute &&
    !isApiRoute &&
    !isAuthRoute
  ) {
    const urlNext = request.nextUrl.clone();
    urlNext.pathname = "/login";
    return NextResponse.redirect(urlNext);
  }

  // if (isAuthRoute || isApiRoute) {
  //   return;
  // }

  return NextResponse.next();
}
