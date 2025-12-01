"use client";

const principles = [
  {
    title: "Soberanía tecnológica",
    body:
      "Rechazamos depender de infraestructuras y modelos económicos dictados desde fuera. Diseñamos, fabricamos y auditamos nuestros propios sistemas para que el control permanezca en manos de la gente.",
    badge: "Principio 01"
  },
  {
    title: "Código abierto y transparencia",
    body:
      "El conocimiento es un bien común. Abrimos software, hardware y metodologías para que cualquiera pueda replicar, mejorar y redistribuir sin pedir permiso.",
    badge: "Principio 02"
  },
  {
    title: "Privacidad como derecho",
    body:
      "La dignidad humana depende de la protección de los datos. Rechazamos la vigilancia masiva y adoptamos herramientas cifradas, descentralizadas y auditables.",
    badge: "Principio 03"
  },
  {
    title: "Descentralización y resiliencia",
    body:
      "Construimos redes distribuidas y economías cooperativas sin puntos únicos de fallo. Cada nodo importa, cada comunidad es soberana.",
    badge: "Principio 04"
  },
  {
    title: "Unidad latinoamericana",
    body:
      "Cooperamos entre territorios, idiomas y disciplinas para ganar fuerza geopolítica y crear tecnología que nos represente.",
    badge: "Principio 05"
  },
  {
    title: "Futuro post-laboral justo",
    body:
      "La automatización debe liberar, no precarizar. Exigimos economías que distribuyan abundancia y garanticen educación, salud y energía.",
    badge: "Principio 06"
  }
];

const commitments = [
  {
    title: "Infraestructura abierta",
    points: [
      "Repositorios públicos, hardware documentado y licencias libres por defecto.",
      "Auditorías comunitarias continuas para mantener la integridad del código.",
      "Protocolos y APIs diseñados para la interoperabilidad y la portabilidad de datos."
    ]
  },
  {
    title: "Gobernanza comunal",
    points: [
      "Decisiones estratégicas tomadas en asambleas digitales abiertas.",
      "Mecanismos de voto verificables y transparentes basados en identidad comunitaria.",
      "Rotación de roles y responsabilidades para evitar centralización del poder."
    ]
  },
  {
    title: "Resiliencia continental",
    points: [
      "Redes y nodos distribuidos en múltiples países para evitar bloqueos.",
      "Formación continua en seguridad digital y respuesta a incidentes.",
      "Intercambios técnicos entre colectivos latinoamericanos para compartir aprendizajes."
    ]
  }
];

const actions = [
  "Organizar laboratorios abiertos para prototipar chips, redes y sistemas económicos cooperativos.",
  "Impulsar campañas de alfabetización digital y criptográfica en comunidades locales.",
  "Financiar proyectos mediante modelos solidarios: donaciones transparentes, fondos comunes y alianzas con cooperativas.",
  "Publicar guías prácticas para replicar infraestructuras soberanas en escuelas, barrios y centros culturales.",
  "Apoyar producciones artísticas que propongan una nueva visión del futuro de latinoamérica."

];

export default function ManifiestoPage() {
  return (
    <main className="min-h-screen bg-white text-coslat-blue">
      <section className="relative overflow-hidden bg-coslat-blue text-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_left,#FECF01_0,transparent_30%)]" aria-hidden></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-coslat-yellow/40 to-transparent" aria-hidden></div>
        <div className="relative max-w-5xl mx-auto space-y-8">
          <h1 className="font-title text-4xl md:text-6xl leading-tight">Soberanía tecnológica latinoamericana, comunal y abierta.</h1>
          <p className="font-mono text-lg md:text-xl max-w-3xl text-white/90">
            Declaramos un rumbo compartido: crear infraestructura digital, económica y cultural que responda a nuestros pueblos
            y no a intereses externos. Este manifiesto guía cada línea de código, cada diseño y cada alianza del colectivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://discord.gg/hsNkj4aWh8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coslat-yellow text-black font-pixel text-lg px-6 py-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform"
            >
              Únete al colectivo
            </a>
          </div>
        </div>
      </section>

      <section id="principios" className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="font-title text-4xl md:text-5xl">Principios que nos sostienen</h2>
            <p className="font-mono text-base text-coslat-dark/80 max-w-3xl">
              Cada iniciativa del colectivo se evalúa contra estas bases. No negociamos transparencia, autonomía ni justicia
              social en la tecnología.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="group relative overflow-hidden border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-coslat-yellow/10 to-coslat-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden></div>
                <div className="relative flex items-center justify-between mb-4">
                  <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">{principle.badge}</span>
                  <span className="h-2 w-2 rounded-full bg-coslat-blue"></span>
                </div>
                <h3 className="relative font-title text-2xl mb-3">{principle.title}</h3>
                <p className="relative font-mono text-base leading-relaxed text-coslat-dark">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coslat-light text-white px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-mono uppercase text-xs tracking-[0.25em] text-white/80">Lineamientos prácticos</p>
              <h2 className="font-title text-4xl md:text-5xl">Cómo aterrizamos el manifiesto</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((commitment) => (
              <div key={commitment.title} className="border-2 border-coslat-yellow bg-white/10 p-6 space-y-3">
                <h3 className="font-title text-2xl">{commitment.title}</h3>
                <ul className="list-disc list-inside font-mono text-sm leading-relaxed text-white/90 space-y-2">
                  {commitment.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-title text-4xl md:text-5xl">Lo que estamos haciendo ahora</h2>
            <p className="font-mono text-base text-coslat-dark/80 max-w-3xl">
              El manifiesto es operativo: se convierte en proyectos, campañas y documentación replicable. Súmate en el frente que más te inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {actions.map((action) => (
              <div key={action} className="border-2 border-coslat-blue bg-white p-4 font-mono text-base leading-relaxed flex items-start gap-3">
                <span className="mt-1 h-3 w-3 bg-coslat-yellow border border-black rounded-full"></span>
                <p className="text-coslat-dark">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coslat-blue text-white px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div className="space-y-3">
            <h3 className="font-title text-3xl md:text-4xl">Si compartes estos principios, construyamos juntos.</h3>
            <p className="font-mono text-base text-white/85 max-w-2xl">
              Trae tu experiencia técnica, artística o política. Necesitamos más mentes para diseñar infraestructura soberana, segura y alegre desde Latinoamérica.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[220px]">
            <a
              href="https://discord.gg/hsNkj4aWh8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coslat-yellow text-black font-pixel text-xl px-6 py-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform"
            >
              Únete a COSLAT
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
