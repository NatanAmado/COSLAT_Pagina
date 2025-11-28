"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Lock, Users, Share2, Code, ShieldCheck, Globe, MessageCircle, ExternalLink } from "lucide-react";
import { events } from "@/lib/events";

const INCA_PATTERN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M5 0h6v5h5v6h-5v5H5v-5H0V5h5z' fill='%23FECF01'/%3E%3C/svg%3E";

export default function Home() {
  const [asciiIndio, setAsciiIndio] = useState("");

  useEffect(() => {
    fetch("/ascii_indio.txt")
      .then((res) => res.text())
      .then((text) => setAsciiIndio(text))
      .catch(() => setAsciiIndio(""));
  }, []);

  return (
    <div className="bg-white selection:bg-coslat-yellow selection:text-coslat-blue">
      
      {/* --- HERO SECTION (Based on Image 1 & 2) --- */}
      <section id="hero" className="min-h-screen flex flex-col relative bg-coslat-blue text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-dither opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-coslat-yellow opacity-10 hidden lg:block skew-x-12 transform translate-x-20"></div>
        {asciiIndio && (
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end pr-4 md:pr-10 pb-4">
            <pre className="mr-[-96px] md:mr-[-140px] lg:mr-[-180px] text-coslat-yellow/50 font-mono text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] leading-[6px] sm:leading-[7px] md:leading-[8px] lg:leading-[9px] whitespace-pre text-right mix-blend-screen drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] opacity-85 max-h-full overflow-hidden">
              {asciiIndio}
            </pre>
          </div>
        )}

        <div className="container mx-auto px-6 py-20 flex flex-col items-start justify-center gap-12 flex-1 relative z-10">
          <div className="flex-1 w-full">

            
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-title leading-none mb-3 glitch-text" 
              data-text="Soberanía"
            >
              Soberanía
            </h1>
            <h2 className="text-4xl md:text-6xl font-title italic mb-8 max-w-4xl leading-tight">
              Latinoamericana del Futuro
            </h2>

            <p className="font-mono text-lg md:text-xl max-w-2xl mb-12 border-l-4 border-coslat-yellow pl-6 py-2">
              "Somos un colectivo de desarrolladores, artistas y revolucionarios dispuestos
              a reinventar un futuro para Latinoamérica que no venga de afuera. Creemos en
              volvernos actores y no testigos de las nuevas revoluciones tecnológicas."
            </p>

            <div className="flex flex-col md:flex-row gap-4 flex-wrap z-10">
              <a
                href="https://discord.gg/hsNkj4aWh8"
                target="_blank"
                rel="noreferrer"
                className="bg-coslat-yellow text-coslat-blue font-pixel text-xl px-8 py-4 hover:bg-white transition-colors uppercase border-b-4 border-black active:border-b-0 active:translate-y-1 inline-flex items-center justify-center"
              >
                Reimaginar el Futuro
              </a>
              <a
                href="/manifiesto"
                className="border-2 border-white text-white font-mono px-8 py-4 hover:bg-white hover:text-coslat-blue transition-colors uppercase flex items-center gap-2"
              >
                Leer Manifiesto <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Running Banner at bottom */}
        <div className="bg-coslat-yellow text-coslat-blue py-2  overflow-hidden whitespace-nowrap font-pixel text-2xl">
          <div className="animate-marquee inline-block">
            DESCENTRALIZADO +++ ABIERTO +++ SOBERANO +++ UNIDAD LATINA +++ OTRA TECNOLOGÍA ES POSIBLE +++ 
            DESCENTRALIZADO +++ ABIERTO +++ SOBERANO +++ UNIDAD LATINA +++ OTRA TECNOLOGÍA ES POSIBLE +++
          </div>
        </div>
      </section>

      {/* --- UPCOMING EVENTS --- */}
      <section className="bg-white text-coslat-blue py-16 border-b-8 border-coslat-yellow">
        <div className="container mx-auto px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-mono uppercase text-xs tracking-[0.2em] text-coslat-dark">Calendario</p>
              <h3 className="font-title text-4xl md:text-5xl">Próximos eventos</h3>
              <p className="font-mono text-sm md:text-base text-coslat-dark/80 mt-2">
                Sigue las acciones del colectivo y súmate a la próxima sesión.
              </p>
            </div>
            <a
              href="/eventos"
              className="inline-flex items-center gap-2 font-mono uppercase border-2 border-coslat-blue px-4 py-2 hover:bg-coslat-blue hover:text-white transition-colors"
            >
              Ver todos <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <div
                key={event.title}
                className="bg-coslat-light text-white p-5 border-4 border-coslat-yellow shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] flex flex-col gap-2"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">{event.tag}</p>
                <div className="flex items-center gap-2">
                  <h4 className="font-pixel text-2xl">{event.title}</h4>
                  {event.link && (
                    <a href={event.link} target="_blank" rel="noreferrer" className="text-coslat-yellow hover:underline flex items-center gap-1">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <div className="font-mono text-sm flex flex-col gap-1">
                  <span className="text-coslat-yellow">{event.date}</span>
                  <span className="text-white/80">{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (Based on Image 2) --- */}
      <section id="estructura" className="relative bg-white text-coslat-blue py-20 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-title text-4xl md:text-5xl mb-6">Llamamos a artistas,<br/>desarrolladores,<br/>revolucionarios.</h3>
            <div className="bg-coslat-blue text-white p-6 inline-block transform -rotate-1 mb-8">
              <span className="font-pixel text-2xl md:text-3xl">A reimaginar el futuro de América Latina.</span>
            </div>
            <p className="font-mono text-lg leading-relaxed mb-6">
              Sé parte de nuestro Colectivo Autónomo Descentralizado.
              Construyamos chips, infraestructura digital y sistemas económicos que nos pertenezcan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center z-10">
              <a
                href="https://discord.gg/hsNkj4aWh8"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center bg-coslat-accent text-white font-mono px-6 py-3 uppercase flex items-center justify-center gap-2 border-2 border-coslat-accent hover:bg-white hover:text-coslat-accent transition-colors"
              >
                Únete al Discord <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div className="relative w-full min-h-[18rem] md:min-h-[30rem] flex items-end justify-center md:justify-end">
            <img
              src="/Antorcha.png"
              alt="Antorcha COSLAT"
              className="w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[32rem] h-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* --- BASES & PRINCIPLES --- */}
      <section id="principios" className="py-24 bg-coslat-light text-white relative">
        <div className="container mx-auto px-6">
          <div className="flex items-end gap-4 mb-16 border-b border-gray-700 pb-4">
             <h2 className="text-6xl font-title text-white">BASES</h2>
             <span className="font-mono text-black-400 mb-2">/ Estructura Organizativa v1.0</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <PrincipleCard 
              title="Colectivismo" 
              icon={<Users />}
              desc="Propiedad comunal de la infraestructura digital." 
            />
             {/* Principle 2 */}
            <PrincipleCard 
              title="Código Abierto" 
              icon={<Code />}
              desc="Transparencia total. El conocimiento es libre." 
            />
             {/* Principle 3 */}
            <PrincipleCard 
              title="Soberanía" 
              icon={<ShieldCheck />}
              desc="Independencia tecnológica de potencias extranjeras." 
            />
             {/* Principle 4 */}
            <PrincipleCard 
              title="Privacidad" 
              icon={<Lock />}
              desc="Protección de datos como derecho humano fundamental." 
            />
             {/* Principle 5 */}
            <PrincipleCard 
              title="Descentralización" 
              icon={<Share2 />}
              desc="Redes distribuidas. Sin puntos únicos de fallo." 
            />
             {/* Principle 6 */}
            <PrincipleCard 
              title="Unidad Latina" 
              icon={<Globe />}
              desc="Integración regional para la fortaleza geopolítica." 
            />
          </div>
        </div>
      </section>

      {/* --- FINES (Based on the flow chart ends) --- */}
      <section id="fines" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-title text-coslat-blue mb-12 text-center">Nuestros Fines</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-coslat-blue z-0"></div>

            <GoalStep 
              number="I" 
              title="Independencia Tecnológica"
              desc="Acabar con la dependencia tecnológica de Latinoamérica."
            />
            <GoalStep 
              number="II" 
              title="Economía Post-Laboral"
              desc="Crear las bases para un sistema económico justo tras la automatización."
            />
            <GoalStep 
              number="III" 
              title="Política Regional"
              desc="Crear las bases para un sistema político regional descentralizado."
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative bg-coslat-dark text-white pt-16 pb-12 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-16"
          style={{ backgroundImage: `url("${INCA_PATTERN}")`, backgroundRepeat: "repeat-x", backgroundSize: "16px 16px" }}
        ></div>
        <div className="container mx-auto px-6 text-center">
          <h4 className="font-pixel text-4xl mb-4">COSLAT</h4>
          <p className="font-mono text-sm opacity-70">
            Colectivo por la Soberanía Latinoamericana del Futuro.
            <br/>Copyleft 2025.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-sm">
            <a href="https://www.instagram.com/cos.lat/" className="underline underline-offset-4 hover:text-coslat-yellow transition-colors" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583295762837" className="underline underline-offset-4 hover:text-coslat-yellow transition-colors" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://github.com/NatanAmado/COSLAT_Pagina" className="underline underline-offset-4 hover:text-coslat-yellow transition-colors" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components for cleanliness
function PrincipleCard({ title, icon, desc }: { title: string, icon: any, desc: string }) {
  return (
    <div className="border border-gray-700 hover:border-coslat-yellow p-6 transition-all hover:-translate-y-1 group bg-black/50">
      <div className="text-coslat-yellow mb-4 group-hover:scale-110 transition-transform origin-left">
        {icon}
      </div>
      <h3 className="font-pixel text-2xl mb-2">{title}</h3>
      <p className="font-mono text-sm text-gray-400">{desc}</p>
    </div>
  )
}

function GoalStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
        <div className="relative z-10 bg-white p-6 border-2 border-coslat-blue w-full md:w-1/3 shadow-[8px_8px_0px_0px_#FECF01]">
      <div className="w-12 h-12 bg-coslat-blue text-white font-pixel text-xl flex items-center justify-center mb-4">
        {number}
      </div>
      <h3 className="font-serif font-bold text-xl mb-3">{title}</h3>
      <p className="font-mono text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}
