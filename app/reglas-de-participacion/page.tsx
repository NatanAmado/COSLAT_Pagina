"use client";

const eligibility = {
  intro:
    "COSLAT recibe a cualquier persona, colectivo u organización que comparta el compromiso con la soberanía tecnológica latinoamericana, sin importar nacionalidad, disciplina o nivel de experiencia técnica. La condición para participar es la coherencia con los principios del manifiesto, no la afiliación política ni institucional.",
  exclusionsIntro: "No podrán participar quienes:",
  exclusions: [
    "Actúen en representación de intereses corporativos o estatales externos que busquen capturar, vigilar o condicionar el trabajo del colectivo.",
    "Promuevan discriminación, violencia o exclusión hacia cualquier persona o comunidad.",
    "Usen la infraestructura o el nombre de COSLAT para lucro personal sin autorización de la asamblea."
  ]
};

const nonNegotiables = {
  intro: "Toda actividad, proyecto o alianza es coherente con:",
  items: [
    {
      title: "Soberanía tecnológica",
      body: "el colectivo no depende de infraestructura ni modelos definidos fuera de la región."
    },
    {
      title: "Código abierto y transparencia",
      body: "COSLAT libera bajo licencias abiertas todo el conocimiento que produce."
    },
    {
      title: "Privacidad como derecho",
      body: "nadie recolecta ni comercializa datos de personas sin su consentimiento."
    },
    {
      title: "Descentralización y resiliencia",
      body: "el colectivo se posiciona en contra de la concentración de poder, infraestructura o decisiones en un solo nodo o persona."
    },
    {
      title: "Unidad latinoamericana",
      body: "creemos que la soberanía solo se puede construir a través de la colaboración e integración regional."
    },
    {
      title: "Futuro post-laboral justo",
      body: "el trabajo del colectivo no precariza a nadie, dentro ni fuera de COSLAT."
    }
  ],
  closing:
    "La asamblea puede vetar cualquier propuesta, campaña o pieza de comunicación que contradiga estos principios, sin importar su potencial de alcance o viralidad."
};

const rights = [
  "Proponer, votar y vetar iniciativas en las asambleas digitales abiertas.",
  "Acceder a toda la documentación técnica, financiera y de gobernanza del colectivo.",
  "Usar y modificar el software, hardware y metodologías publicados por COSLAT, respetando las licencias abiertas.",
  "Rotar por distintos roles dentro del colectivo.",
  "Retirarse en cualquier momento y llevarse el conocimiento adquirido, que es un bien común."
];

const responsibilities = [
  "Participar de forma verificable en las decisiones que le afectan directamente: voto, comentarios, revisión de propuestas.",
  "Documentar el trabajo propio de manera que otro miembro pueda replicarlo sin depender de una sola persona.",
  "Someter el código, diseño o contenido producido a auditoría comunitaria antes de publicarlo en nombre de COSLAT.",
  "Cuidar la seguridad digital propia y de la comunidad: herramientas cifradas, buenas prácticas de contraseñas, reporte responsable de vulnerabilidades.",
  "Tratar a los demás miembros con respeto, incluso en desacuerdos técnicos o ideológicos."
];

const governance = [
  "La asamblea digital abierta toma las decisiones estratégicas. COSLAT anuncia cada asamblea con anticipación suficiente para que distintos husos horarios y territorios participen.",
  "El voto es verificable, transparente y ligado a la identidad comunitaria; el anonimato total abriría la puerta a la manipulación externa.",
  "Los roles de coordinación (técnica, financiera, comunicacional) rotan para que el poder no se concentre en una persona.",
  "Las decisiones sobre alianzas externas, financiamiento o uso del nombre de COSLAT necesitan la aprobación explícita de la asamblea; ninguna persona las toma sola."
];

const infrastructure = [
  "COSLAT publica con licencia libre por defecto todo repositorio, diseño de hardware o documento producido bajo su nombre (GPL, MIT o Creative Commons, según corresponda).",
  "Los miembros diseñan el hardware documentado y las APIs para priorizar la interoperabilidad y la portabilidad de datos, y evitan el vendor lock-in.",
  "Se han de priorizar herramientas externas que estén en línea con los principios del colectivo.",
  "Nadie puede privatizar, patentar en exclusiva o cerrar el acceso a un desarrollo colectivo sin autorización de la asamblea."
];

const privacy = [
  "COSLAT no recolecta datos personales de miembros o audiencias más allá de lo necesario para operar.",
  "Toda herramienta o plataforma que use el colectivo prioriza el cifrado, la descentralización y la auditabilidad.",
  "Nadie usa datos obtenidos en el marco del colectivo (contactos, listas, comunidades) para fines ajenos a COSLAT."
];

const funding = [
  "COSLAT financia sus actividades con modelos solidarios: donaciones transparentes, fondos comunes y alianzas con cooperativas.",
  "El colectivo documenta todos los movimientos financieros y los deja accesibles para los miembros.",
  "COSLAT rechaza fondos de actores que condicionen su independencia editorial, técnica o política."
];

const communication = [
  "El contenido publicado en nombre de COSLAT (videos, publicaciones, campañas) respeta los principios del manifiesto. El tono puede ser urgente y directo, pero la desinformación y los ataques personales quedan fuera.",
  "Las piezas de comunicación pasan por la revisión de otro miembro antes de publicarse a nombre del colectivo, para asegurar precisión y coherencia con los principios.",
  "Cada miembro distingue su opinión personal de la postura oficial de COSLAT."
];

const conflictResolution = [
  "Las partes resuelven primero los desacuerdos técnicos o de proyecto por diálogo directo.",
  "Si no hay acuerdo, cualquiera de las partes lleva el caso a la asamblea, que decide por consenso o votación transparente.",
  "La asamblea puede suspender temporalmente o expulsar del colectivo a quien cometa faltas graves: discriminación, apropiación indebida de recursos o uso del nombre de COSLAT sin autorización."
];

const onboarding = [
  "La persona interesada se presenta a la comunidad e indica en qué frente quiere aportar: técnico, artístico, político, educativo.",
  "Esta persona ha de leer y adherirse a este documento y al manifiesto completo.",
  "Participa como colaborador de prueba en al menos una iniciativa activa y en al menos una asamblea."
];

export default function ReglasDeParticipacionPage() {
  return (
    <main className="min-h-screen bg-white text-coslat-blue">
      {/* Hero */}
      <section className="relative overflow-hidden bg-coslat-blue text-white px-6 py-16 md:py-24">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_left,#FECF01_0,transparent_30%)]" aria-hidden></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-coslat-yellow/40 to-transparent" aria-hidden></div>
        <div className="relative max-w-5xl mx-auto space-y-6">
          <p className="font-mono uppercase text-xs tracking-[0.25em] text-white/80">
            Colectivo por la Soberanía Latinoamericana del Futuro
          </p>
          <h1 className="font-title text-4xl md:text-6xl leading-tight">Reglas de Participación de COSLAT</h1>
          <p className="font-mono text-lg md:text-xl max-w-3xl text-white/90">
            Este documento traduce los principios del Manifiesto COSLAT en normas de convivencia, trabajo y gobernanza
            para quienes se suman al colectivo. Colaboradores técnicos, artistas, organizadores comunitarios y
            simpatizantes activos aceptan estas reglas al unirse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
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

      {/* 1. Quién puede participar / 2. Principios innegociables */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <article className="border-4 border-black bg-white p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">Sección 01</span>
            <h2 className="font-title text-2xl md:text-3xl mt-2 mb-4">Quién puede participar</h2>
            <p className="font-mono text-base leading-relaxed text-coslat-dark">{eligibility.intro}</p>
            <p className="font-mono text-base leading-relaxed text-coslat-dark mt-4">{eligibility.exclusionsIntro}</p>
            <ul className="list-disc list-inside font-mono text-base leading-relaxed text-coslat-dark space-y-2 mt-2">
              {eligibility.exclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="border-4 border-black bg-white p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">Sección 02</span>
            <h2 className="font-title text-2xl md:text-3xl mt-2 mb-4">Principios innegociables</h2>
            <p className="font-mono text-base leading-relaxed text-coslat-dark mb-2">{nonNegotiables.intro}</p>
            <ol className="list-decimal list-inside font-mono text-base leading-relaxed text-coslat-dark space-y-2">
              {nonNegotiables.items.map((item) => (
                <li key={item.title}>
                  <span className="font-bold">{item.title}:</span> {item.body}
                </li>
              ))}
            </ol>
            <p className="font-mono text-base leading-relaxed text-coslat-dark mt-4">{nonNegotiables.closing}</p>
          </article>
        </div>
      </section>

      {/* 3. Derechos / 4. Responsabilidades */}
      <section className="bg-coslat-light text-white px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <p className="font-mono uppercase text-xs tracking-[0.25em] text-white/80">Membresía</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-coslat-yellow bg-white/10 p-6 space-y-3">
              <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-yellow">Sección 03</span>
              <h3 className="font-title text-2xl">Derechos de los miembros</h3>
              <ul className="list-disc list-inside font-mono text-sm leading-relaxed text-white/90 space-y-2">
                {rights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-coslat-yellow bg-white/10 p-6 space-y-3">
              <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-yellow">Sección 04</span>
              <h3 className="font-title text-2xl">Responsabilidades de los miembros</h3>
              <ul className="list-disc list-inside font-mono text-sm leading-relaxed text-white/90 space-y-2">
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gobernanza y toma de decisiones */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <article className="border-4 border-black bg-white p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">Sección 05</span>
            <h2 className="font-title text-2xl md:text-3xl mt-2 mb-4">Gobernanza y toma de decisiones</h2>
            <ul className="list-disc list-inside font-mono text-base leading-relaxed text-coslat-dark space-y-2">
              {governance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* 6. Infraestructura, PI y licencias / 7. Privacidad y datos */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-coslat-blue bg-white p-6 space-y-3">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">Sección 06</span>
            <h3 className="font-title text-2xl">Infraestructura, propiedad intelectual y licencias</h3>
            <ul className="list-disc list-inside font-mono text-sm leading-relaxed text-coslat-dark space-y-2">
              {infrastructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-coslat-blue bg-white p-6 space-y-3">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">Sección 07</span>
            <h3 className="font-title text-2xl">Privacidad y datos</h3>
            <ul className="list-disc list-inside font-mono text-sm leading-relaxed text-coslat-dark space-y-2">
              {privacy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Financiamiento y recursos / 9. Comunicación y contenido público */}
      <section className="bg-coslat-light text-white px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-coslat-yellow bg-white/10 p-6 space-y-3">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-yellow">Sección 08</span>
            <h3 className="font-title text-2xl">Financiamiento y recursos</h3>
            <ul className="list-disc list-inside font-mono text-sm leading-relaxed text-white/90 space-y-2">
              {funding.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-coslat-yellow bg-white/10 p-6 space-y-3">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-yellow">Sección 09</span>
            <h3 className="font-title text-2xl">Comunicación y contenido público</h3>
            <ul className="list-disc list-inside font-mono text-sm leading-relaxed text-white/90 space-y-2">
              {communication.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. Resolución de conflictos */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <article className="border-4 border-black bg-white p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">Sección 10</span>
            <h2 className="font-title text-2xl md:text-3xl mt-2 mb-4">Resolución de conflictos</h2>
            <ul className="list-disc list-inside font-mono text-base leading-relaxed text-coslat-dark space-y-2">
              {conflictResolution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* 11. Incorporación de nuevos miembros */}
      <section className="bg-coslat-light text-white px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-yellow">Sección 11</span>
            <h2 className="font-title text-3xl md:text-4xl mt-2">Incorporación de nuevos miembros</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onboarding.map((step, index) => (
              <div key={step} className="border-2 border-coslat-yellow bg-white/10 p-6 space-y-3">
                <span className="font-pixel text-4xl text-coslat-yellow">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-mono text-sm leading-relaxed text-white/90">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Revisión de este documento */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <article className="border-4 border-black bg-white p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
            <span className="font-mono uppercase text-xs tracking-[0.16em] text-coslat-accent">Sección 12</span>
            <h2 className="font-title text-2xl md:text-3xl mt-2 mb-4">Revisión de este documento</h2>
            <p className="font-mono text-base leading-relaxed text-coslat-dark">
              Estas reglas evolucionan junto con el colectivo. Cualquier miembro puede proponer modificaciones; la
              asamblea las discute y aprueba con el mismo proceso de gobernanza de la sección 5.
            </p>
          </article>
          <p className="font-mono text-sm text-coslat-dark/60 text-center italic">
            Documento vivo de COSLAT — Colectivo por la Soberanía Latinoamericana del Futuro.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-coslat-blue text-white px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div className="space-y-3">
            <h3 className="font-title text-3xl md:text-4xl">Si aceptas estas reglas, súmate al colectivo.</h3>
            <p className="font-mono text-base text-white/85 max-w-2xl">
              Lee el manifiesto, preséntate a la comunidad y participa en tu primera asamblea. Construyamos juntos
              infraestructura soberana, segura y alegre desde Latinoamérica.
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
