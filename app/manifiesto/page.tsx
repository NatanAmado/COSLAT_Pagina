"use client";

export default function ManifiestoPage() {
  return (
    <main className="min-h-screen bg-white text-coslat-blue px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="border-b-4 border-coslat-yellow pb-6">
          <p className="font-mono uppercase text-xs tracking-[0.2em] text-coslat-dark">Fundamentos</p>
          <h1 className="font-title text-5xl md:text-6xl mt-3">Manifiesto COSLAT</h1>
          <p className="font-mono text-sm md:text-base text-coslat-dark/80 mt-3">
            Un llamado a la soberanía tecnológica latinoamericana: comunal, abierta y segura.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="font-title text-3xl md:text-4xl">1. Soberanía tecnológica</h2>
          <p className="font-mono text-base leading-relaxed text-coslat-dark">
            No aceptamos depender de infraestructuras, chips o modelos económicos dictados desde fuera. Construimos y
            auditamos nuestros propios sistemas, para que el conocimiento y el control permanezcan en manos de la gente.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-title text-3xl md:text-4xl">2. Código abierto y transparencia</h2>
          <p className="font-mono text-base leading-relaxed text-coslat-dark">
            El conocimiento es un bien común. Abrimos diseños, software y hardware para que cualquier persona pueda
            replicar, mejorar y redistribuir sin permisos centralizados.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-title text-3xl md:text-4xl">3. Privacidad como derecho</h2>
          <p className="font-mono text-base leading-relaxed text-coslat-dark">
            Protegemos los datos personales como una extensión de la dignidad humana. Rechazamos la vigilancia masiva y
            promovemos herramientas cifradas, descentralizadas y auditables.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-title text-3xl md:text-4xl">4. Descentralización y resiliencia</h2>
          <p className="font-mono text-base leading-relaxed text-coslat-dark">
            Apostamos por redes distribuidas, economías cooperativas y gobernanza sin puntos únicos de fallo. Cada nodo
            importa, cada comunidad es soberana.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-title text-3xl md:text-4xl">5. Unidad latina</h2>
          <p className="font-mono text-base leading-relaxed text-coslat-dark">
            Creemos en la integración regional para ganar fuerza geopolítica. Cooperamos entre territorios, idiomas y
            disciplinas para construir tecnologías que nos pertenezcan.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-title text-3xl md:text-4xl">6. Futuro post-laboral justo</h2>
          <p className="font-mono text-base leading-relaxed text-coslat-dark">
            Ante la automatización, defendemos economías que distribuyan abundancia y aseguren el acceso a educación,
            salud y energía. La tecnología debe liberar, no precarizar.
          </p>
        </section>

        <section className="space-y-4 border-t-4 border-coslat-blue pt-6">
          <h3 className="font-title text-2xl md:text-3xl">Súmate</h3>
          <p className="font-mono text-base leading-relaxed text-coslat-dark">
            Si compartes estos principios, únete a nuestra comunidad y construyamos juntos la infraestructura soberana
            de Latinoamérica.
          </p>
          <a
            href="https://discord.gg/hsNkj4aWh8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-coslat-accent text-white font-mono uppercase px-6 py-3 border-2 border-coslat-accent hover:bg-white hover:text-coslat-accent transition-colors"
          >
            Únete al Discord
          </a>
        </section>
      </div>
    </main>
  );
}
