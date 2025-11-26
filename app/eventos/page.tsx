export default function EventosPage() {
  const events = [
    { title: "Conversatorio de Autonomía Digital", date: "15 JUN 2024", location: "Online", tag: "charla" },
    { title: "Taller de Hardware Libre", date: "22 JUN 2024", location: "Buenos Aires", tag: "taller" },
    { title: "Mesa Abierta de Gobernanza", date: "29 JUN 2024", location: "Online", tag: "debate" },
  ];

  return (
    <main className="min-h-screen bg-coslat-blue text-white p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b-4 border-coslat-yellow pb-6">
          <p className="font-mono uppercase text-sm tracking-[0.2em] text-coslat-yellow">Calendario</p>
          <h1 className="font-pixel text-5xl mt-2">Eventos COSLAT</h1>
          <p className="font-mono text-sm md:text-base text-white/80 mt-3">
            Encuentros, talleres y debates para impulsar la soberanía tecnológica latinoamericana.
          </p>
        </header>

        <div className="grid gap-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white text-coslat-blue p-5 md:p-6 border-4 border-coslat-yellow shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-coslat-dark">{event.tag}</p>
                  <h2 className="font-pixel text-2xl mt-1">{event.title}</h2>
                </div>
                <div className="text-right">
                  <p className="font-pixel text-lg text-coslat-accent">{event.date}</p>
                  <p className="font-mono text-xs text-coslat-dark">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
