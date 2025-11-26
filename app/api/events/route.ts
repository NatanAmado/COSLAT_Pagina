import { NextResponse } from "next/server";
import { events } from "@/lib/events";

export const revalidate = 60;

export function GET() {
  return NextResponse.json({ events });
}
