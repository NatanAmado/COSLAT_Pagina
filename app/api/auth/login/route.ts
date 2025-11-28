import { NextResponse } from "next/server";

const USER = process.env.ADMIN_USER;
const PASS = process.env.ADMIN_PASS;
const COOKIE_NAME = "admin_auth";
const TOKEN = USER && PASS ? `${USER}:${PASS}` : null;

export async function POST(request: Request) {
  if (!USER || !PASS || !TOKEN) {
    return NextResponse.json({ error: "Admin credentials not configured" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const username = (body.username || "").toString();
  const password = (body.password || "").toString();

  if (username !== USER || password !== PASS) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
