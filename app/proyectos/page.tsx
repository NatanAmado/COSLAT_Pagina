import { projects } from "@/lib/projects";
import { ExternalLink } from "@/components/icons";

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-coslat-light text-coslat-dark p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b-4 border-coslat-accent pb-6">
          <p className="font-mono uppercase text-sm tracking-[0.2em] text-coslat-accent">Roadmap</p>
          <h1 className="font-pixel text-5xl mt-2">Proyectos COSLAT</h1>
          <p className="font-mono text-sm md:text-base text-coslat-dark/80 mt-3">
            Iniciativas abiertas que construyen soberanía tecnológica desde Latinoamérica.
          </p>
        </header>

        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <h2 className="font-pixel text-2xl text-coslat-blue">{project.name}</h2>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-coslat-accent hover:underline flex items-center gap-1">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-[0.08em]">
                <span className={`px-2 py-1 border-2 ${project.color}`}>
                  {project.status}
                </span>
                <span className="px-2 py-1 border-2 border-coslat-yellow text-coslat-dark">
                  {project.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
