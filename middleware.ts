import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 로그인/회원가입 페이지는 세션이 있으면 홈으로 리다이렉트
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    const session = await auth();
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // 보호된 경로 설정 (필요시)
  // 예: /dashboard, /profile 등
  // if (pathname.startsWith("/dashboard") || pathname.startsWith("/profile")) {
  //   const session = await auth();
  //   if (!session) {
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|icon.png).*)",
  ],
};

