import { projects } from "@/lib/projects";
import { ExternalLink } from "@/components/icons";

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-white text-coslat-dark p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-dither opacity-15 pointer-events-none" aria-hidden />
      <div className="relative max-w-4xl mx-auto space-y-8">
        <header className="border-b-4 border-coslat-blue pb-6">
          <p className="font-mono uppercase text-sm tracking-[0.2em] text-coslat-dark">Roadmap</p>
          <h1 className="font-pixel text-5xl mt-2 text-coslat-blue">Proyectos COSLAT</h1>
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
                {project.status && (
                  <span className={`px-2 py-1 border-2 ${project.color}`}>
                    {project.status}
                  </span>
                )}
                <span className="px-2 py-1 border-2 border-coslat-yellow text-coslat-dark">
                  {project.focus}
                </span>
              </div>
              <p className="font-mono text-sm text-coslat-dark/80">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white border-4 border-coslat-blue p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] flex flex-col gap-4">
          <h2 className="font-title text-3xl md:text-4xl text-coslat-blue">
            Propón o añade un proyecto
          </h2>
          <p className="font-mono text-sm md:text-base text-coslat-dark/80 max-w-2xl">
            ¿Tienes una idea o quieres sumar algo al roadmap? Compártelo con el
            colectivo y armamos el siguiente paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://discord.gg/X4bqQfmdv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coslat-yellow text-coslat-blue font-pixel text-xl px-6 py-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform"
            >
              Proponer en Discord
            </a>
            <a
              href="https://github.com/NatanAmado/COSLAT_Pagina"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-coslat-blue text-coslat-blue font-mono px-6 py-3 uppercase hover:bg-coslat-blue hover:text-white transition-colors"
            >
              Abrir en GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
