import { NextResponse } from "next/server";
import { events, addEvent, replaceEvents, type EventItem } from "@/lib/events";

export const revalidate = 60;

export function GET() {
  return NextResponse.json({ events });
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const incoming: EventItem = {
    title: (body.title || "").toString().trim(),
    date: (body.date || "").toString().trim(),
    location: (body.location || "").toString().trim(),
    tag: (body.tag || "").toString().trim(),
    link: body.link ? body.link.toString().trim() : undefined,
  };

  if (!incoming.title || !incoming.date || !incoming.location || !incoming.tag) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  addEvent(incoming);
  return NextResponse.json({ events });
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Expected array" }, { status: 400 });
    }
    const normalized: EventItem[] = body.map((item) => ({
      title: (item.title || "").toString().trim(),
      date: (item.date || "").toString().trim(),
      location: (item.location || "").toString().trim(),
      tag: (item.tag || "").toString().trim(),
      link: item.link ? item.link.toString().trim() : undefined,
    }));

    if (normalized.some((e) => !e.title || !e.date || !e.location || !e.tag)) {
      return NextResponse.json({ error: "Each event requires title, date, location, tag" }, { status: 400 });
    }

    replaceEvents(normalized);
    return NextResponse.json({ events });
  } catch (err) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
