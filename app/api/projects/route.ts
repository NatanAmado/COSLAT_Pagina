import { NextResponse } from "next/server";
import { projects, addProject, replaceProjects, type ProjectItem } from "@/lib/projects";

export const revalidate = 60;

export function GET() {
  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const incoming: ProjectItem = {
    name: (body.name || "").toString().trim(),
    status: (body.status || "").toString().trim(),
    focus: (body.focus || "").toString().trim(),
    color: (body.color || "").toString().trim() || "border-coslat-blue text-coslat-blue",
    link: body.link ? body.link.toString().trim() : undefined,
  };

  if (!incoming.name || !incoming.status || !incoming.focus) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  addProject(incoming);
  return NextResponse.json({ projects });
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Expected array" }, { status: 400 });
    }
    const normalized: ProjectItem[] = body.map((item) => ({
      name: (item.name || "").toString().trim(),
      status: (item.status || "").toString().trim(),
      focus: (item.focus || "").toString().trim(),
      color: ((item.color || "").toString().trim()) || "border-coslat-blue text-coslat-blue",
      link: item.link ? item.link.toString().trim() : undefined,
    }));

    if (normalized.some((p) => !p.name || !p.status || !p.focus)) {
      return NextResponse.json({ error: "Each project requires name, status, focus" }, { status: 400 });
    }

    replaceProjects(normalized);
    return NextResponse.json({ projects });
  } catch (err) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
