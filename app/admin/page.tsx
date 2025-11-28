"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { EventItem } from "@/lib/events";
import type { ProjectItem } from "@/lib/projects";
import { ArrowRight } from "@/components/icons";

type FormEvent = {
  title: string;
  date: string;
  location: string;
  tag: string;
  link: string;
};

type FormProject = {
  name: string;
  status: string;
  focus: string;
  color: string;
  link: string;
};

async function fetchJSON<T>(url: string): Promise<{ data: T; status: number }> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const err: any = new Error("Failed");
    err.status = res.status;
    throw err;
  }
  const json = (await res.json()) as T;
  return { data: json, status: res.status };
}

export default function AdminPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [eventForm, setEventForm] = useState<FormEvent>({ title: "", date: "", location: "", tag: "", link: "" });
  const [projectForm, setProjectForm] = useState<FormProject>({
    name: "",
    status: "",
    focus: "",
    color: "border-coslat-blue text-coslat-blue",
    link: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data: eventsData } = await fetchJSON<{ events: EventItem[] }>("/api/events");
        const { data: projectsData } = await fetchJSON<{ projects: ProjectItem[] }>("/api/projects");
        setEvents(eventsData.events);
        setProjects(projectsData.projects);
      } catch (err: any) {
        if (err.status === 401) {
          router.push("/login?redirect=/admin");
          return;
        }
        setError("No se pudieron cargar los datos (verifica que iniciaste sesión)");
      }
    })();
  }, []);

  const handleAddEvent = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventForm),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setEvents(data.events);
      setEventForm({ title: "", date: "", location: "", tag: "", link: "" });
    } catch {
      setError("No se pudo guardar el evento");
    } finally {
      setSaving(false);
    }
  };

  const handleAddProject = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectForm),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setProjects(data.projects);
      setProjectForm({ name: "", status: "", focus: "", color: "border-coslat-blue text-coslat-blue", link: "" });
    } catch {
      setError("No se pudo guardar el proyecto");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteEvent = async (title: string) => {
    const next = events.filter((e) => e.title !== title);
    setEvents(next);
    await fetch("/api/events", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
  };

  const handleDeleteProject = async (name: string) => {
    const next = projects.filter((p) => p.name !== name);
    setProjects(next);
    await fetch("/api/projects", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
  };

  return (
    <main className="min-h-screen bg-white text-coslat-blue p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="flex flex-col gap-2 border-b-4 border-coslat-yellow pb-4">
          <p className="font-mono uppercase text-xs tracking-[0.18em] text-coslat-dark">Panel</p>
          <div className="flex items-center justify-between gap-4">
            <h1 className="font-title text-4xl md:text-5xl">Admin / Contenidos</h1>
            <button
              onClick={async () => {
                await fetch("/api/auth/logout", { method: "POST" });
                router.push("/login?redirect=/admin");
              }}
              className="font-mono text-xs uppercase border border-coslat-blue px-3 py-2 hover:bg-coslat-blue hover:text-white transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
          {error && <p className="text-red-600 font-mono text-sm">{error}</p>}
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-4 border-coslat-yellow p-4 space-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
            <h2 className="font-title text-2xl mb-2">Eventos</h2>
            <div className="grid gap-2">
              <input
                className="border p-2 font-mono"
                placeholder="Título"
                value={eventForm.title}
                onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
              />
              <input
                className="border p-2 font-mono"
                placeholder="Fecha (ej: 15 JUN 2024)"
                value={eventForm.date}
                onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
              />
              <input
                className="border p-2 font-mono"
                placeholder="Lugar"
                value={eventForm.location}
                onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
              />
              <input
                className="border p-2 font-mono"
                placeholder="Tag (ej: charla)"
                value={eventForm.tag}
                onChange={(e) => setEventForm({ ...eventForm, tag: e.target.value })}
              />
              <input
                className="border p-2 font-mono"
                placeholder="Link (opcional)"
                value={eventForm.link}
                onChange={(e) => setEventForm({ ...eventForm, link: e.target.value })}
              />
              <button
                onClick={handleAddEvent}
                disabled={saving}
                className="bg-coslat-blue text-white px-4 py-2 font-mono uppercase flex items-center gap-2 hover:bg-coslat-accent transition-colors disabled:opacity-60"
              >
                Guardar evento <ArrowRight size={16} />
              </button>
            </div>

            <div className="space-y-2">
              {events.map((event) => (
                <div key={event.title} className="flex items-center justify-between border p-2 font-mono text-sm">
                  <div>
                    <p className="font-bold">{event.title}</p>
                    <p className="text-coslat-dark text-xs">{event.date} · {event.location} · {event.tag}</p>
                    {event.link && (
                      <a className="text-coslat-accent text-xs underline" href={event.link} target="_blank" rel="noreferrer">
                        Link
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteEvent(event.title)}
                    className="text-red-600 text-xs underline"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border-4 border-coslat-blue p-4 space-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
            <h2 className="font-title text-2xl mb-2">Proyectos</h2>
            <div className="grid gap-2">
              <input
                className="border p-2 font-mono"
                placeholder="Nombre"
                value={projectForm.name}
                onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
              />
              <input
                className="border p-2 font-mono"
                placeholder="Estado (ej: En curso)"
                value={projectForm.status}
                onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
              />
              <input
                className="border p-2 font-mono"
                placeholder="Enfoque (ej: Infraestructura)"
                value={projectForm.focus}
                onChange={(e) => setProjectForm({ ...projectForm, focus: e.target.value })}
              />
              <label className="flex flex-col gap-1 font-mono text-sm text-coslat-dark">
                Color (elige un estilo)
                <select
                  className="border p-2 font-mono"
                  value={projectForm.color}
                  onChange={(e) => setProjectForm({ ...projectForm, color: e.target.value })}
                >
                  <option value="border-coslat-accent text-coslat-accent">Magenta (accent)</option>
                  <option value="border-coslat-blue text-coslat-blue">Cyan (blue)</option>
                  <option value="border-coslat-dark text-coslat-dark">Marrón (dark)</option>
                  <option value="border-coslat-yellow text-coslat-dark">Amarillo</option>
                  <option value="border-coslat-light text-coslat-blue">Verde</option>
                </select>
              </label>
              <input
                className="border p-2 font-mono"
                placeholder="Link (opcional)"
                value={projectForm.link}
                onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
              />
              <button
                onClick={handleAddProject}
                disabled={saving}
                className="bg-coslat-yellow text-coslat-blue px-4 py-2 font-mono uppercase flex items-center gap-2 hover:bg-coslat-accent hover:text-white transition-colors disabled:opacity-60"
              >
                Guardar proyecto <ArrowRight size={16} />
              </button>
            </div>

            <div className="space-y-2">
              {projects.map((project) => (
                <div key={project.name} className="flex items-center justify-between border p-2 font-mono text-sm">
                  <div>
                    <p className="font-bold">{project.name}</p>
                    <p className="text-coslat-dark text-xs">{project.status} · {project.focus}</p>
                    {project.link && (
                      <a className="text-coslat-accent text-xs underline" href={project.link} target="_blank" rel="noreferrer">
                        Link
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteProject(project.name)}
                    className="text-red-600 text-xs underline"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
