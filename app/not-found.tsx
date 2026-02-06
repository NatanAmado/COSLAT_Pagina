import Link from "next/link";

const INCA_PATTERN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M5 0h6v5h5v6h-5v5H5v-5H0V5h5z' fill='%23FECF01'/%3E%3C/svg%3E";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-coslat-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dither opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FECF01_0,transparent_35%)] opacity-40 pointer-events-none" />
      <div className="absolute -right-24 top-0 h-full w-1/2 bg-coslat-yellow/10 skew-x-12 pointer-events-none hidden lg:block" />
      <div
        className="absolute bottom-0 left-0 w-full h-12 opacity-80"
        style={{
          backgroundImage: `url("${INCA_PATTERN}")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "16px 16px"
        }}
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 min-h-screen flex flex-col justify-center gap-10">
        <div className="space-y-5">
          <p className="font-mono uppercase text-xs tracking-[0.35em] text-coslat-yellow">
            Señal perdida
          </p>
          <h1
            className="text-7xl md:text-9xl font-title leading-none glitch-text"
            data-text="404"
          >
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-title italic max-w-3xl">
            Página fuera de la red soberana.
          </h2>
          <p className="font-mono text-base md:text-lg text-white/85 max-w-2xl border-l-4 border-coslat-yellow pl-6 py-2">
            La ruta que buscas no existe o fue reconfigurada por el colectivo.
            Vuelve al centro de operaciones o explora las rutas activas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] max-w-4xl">
          <div className="bg-white text-coslat-blue border-4 border-coslat-yellow p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-coslat-dark">
                Diagnóstico
              </span>
              <span className="font-pixel text-lg text-coslat-accent">
                ERR/404
              </span>
            </div>
            <p className="font-title text-2xl md:text-3xl">
              Nodo no encontrado
            </p>
            <p className="font-mono text-sm md:text-base text-coslat-dark/80">
              Si llegaste aquí desde un enlace interno, avísanos para corregir la
              ruta. Mientras tanto, retoma el mapa principal del colectivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="bg-coslat-yellow text-coslat-blue font-pixel text-xl px-6 py-3 hover:bg-white transition-colors uppercase border-b-4 border-black active:border-b-0 active:translate-y-1 inline-flex items-center justify-center"
              >
                Ir al inicio
              </Link>
              <Link
                href="/manifiesto"
                className="border-2 border-coslat-blue text-coslat-blue font-mono px-6 py-3 hover:bg-coslat-blue hover:text-white transition-colors uppercase inline-flex items-center justify-center"
              >
                Leer manifiesto
              </Link>
            </div>
          </div>

          <div className="bg-coslat-dark/90 border-2 border-coslat-yellow p-6 space-y-4">
            <p className="font-mono uppercase text-xs tracking-[0.2em] text-coslat-yellow">
              Rutas activas
            </p>
            <div className="space-y-3">
              <Link
                href="/eventos"
                className="block border border-coslat-yellow/60 px-4 py-3 font-mono text-sm hover:bg-coslat-yellow hover:text-coslat-blue transition-colors"
              >
                /eventos
              </Link>
              <Link
                href="/proyectos"
                className="block border border-coslat-yellow/60 px-4 py-3 font-mono text-sm hover:bg-coslat-yellow hover:text-coslat-blue transition-colors"
              >
                /proyectos
              </Link>
              <Link
                href="/manifiesto"
                className="block border border-coslat-yellow/60 px-4 py-3 font-mono text-sm hover:bg-coslat-yellow hover:text-coslat-blue transition-colors"
              >
                /manifiesto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
