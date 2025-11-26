import { NextResponse, type NextRequest } from "next/server";

const USER = process.env.ADMIN_USER;
const PASS = process.env.ADMIN_PASS;

function unauthorized() {
  return new NextResponse("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isProtectedApi =
    pathname.startsWith("/api/events") || pathname.startsWith("/api/projects");

  if (!isAdminRoute && !isProtectedApi) {
    return NextResponse.next();
  }

  // If credentials are not configured, refuse access
  if (!USER || !PASS) {
    return new NextResponse("Admin credentials not configured", { status: 500 });
  }

  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return unauthorized();
  }

  const decoded = Buffer.from(auth.split(" ")[1], "base64").toString();
  const [user, pass] = decoded.split(":");

  if (user !== USER || pass !== PASS) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/events/:path*", "/api/projects/:path*"],
};
