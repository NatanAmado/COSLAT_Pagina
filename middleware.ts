import { NextResponse, type NextRequest } from "next/server";

const USER = process.env.ADMIN_USER;
const PASS = process.env.ADMIN_PASS;
const COOKIE_NAME = "admin_auth";
const TOKEN = USER && PASS ? `${USER}:${PASS}` : null;

function unauthorizedJson() {
  return NextResponse.json({ error: "Auth required" }, { status: 401 });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isProtectedApi = pathname.startsWith("/api/events") || pathname.startsWith("/api/projects");
  const isAuthEndpoint = pathname.startsWith("/api/auth/login");
  const isLoginPage = pathname.startsWith("/login");

  if (isAuthEndpoint || isLoginPage) {
    return NextResponse.next();
  }

  if (!isAdminRoute && !isProtectedApi) {
    return NextResponse.next();
  }

  if (!USER || !PASS || !TOKEN) {
    if (isProtectedApi) {
      return NextResponse.json({ error: "Admin credentials not configured" }, { status: 503 });
    }
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("error", "missing_creds");
    return NextResponse.redirect(url);
  }

  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  const hasValidCookie = cookie === TOKEN;

  if (hasValidCookie) {
    return NextResponse.next();
  }

  if (isProtectedApi) {
    return unauthorizedJson();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("redirect", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/api/events",
    "/api/events/:path*",
    "/api/projects",
    "/api/projects/:path*",
    "/login",
    "/api/auth/login",
  ],
};
