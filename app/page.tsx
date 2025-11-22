'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { GlitchText } from '../components/GlitchText';
import { Modal } from '../components/Modal';
import { PixelBrand } from '../components/PixelBrand';
import { Scramble } from '../components/Scramble';
import { daysUntilTarget } from '../lib/countdown';
import { ensureAnalytics } from '../lib/firebaseClient';

const telegramInvite = process.env.NEXT_PUBLIC_TELEGRAM_INVITE ?? 'https://t.me/+OLmS8nfAo34zMTE0';

export default function HomePage() {
  const [brandLoud, setBrandLoud] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [ctaEngaged, setCtaEngaged] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [days, setDays] = useState<number | null>(() => daysUntilTarget());

  useEffect(() => {
    const tick = () => setDays(daysUntilTarget());
    const interval = setInterval(tick, 1000 * 60 * 60);
    tick();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    ensureAnalytics();
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimeout.current) {
        clearTimeout(toastTimeout.current);
      }
    };
  }, []);

  const countdownText = useMemo(() => {
    if (days === null) return 'Disponible en Telegram';
    return ``;
  }, [days]);

  const handleCopy = useCallback(async () => {
    if (toastTimeout.current) {
      clearTimeout(toastTimeout.current);
    }
    try {
      await navigator.clipboard.writeText(telegramInvite);
      setToast('Invitación copiada');
    } catch (error) {
      setToast('No se pudo copiar');
    }
    toastTimeout.current = setTimeout(() => setToast(null), 2600);
  }, []);

  const openModal = () => {
    setModalOpen(true);
    setCtaEngaged(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black">
      <PixelBrand intense={brandLoud} />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-24 px-6 py-24 lg:px-10">
        <header
          className="group flex w-full max-w-4xl flex-col gap-8 text-left"
          onMouseEnter={() => setBrandLoud(true)}
          onMouseLeave={() => setBrandLoud(false)}
          onFocusCapture={() => setBrandLoud(true)}
          onBlurCapture={() => setBrandLoud(false)}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-black/60">Conversatorio 11/2025</p>
          <h1 className="text-4xl font-bold leading-tight text-black md:text-6xl">
            <span className="flex items-start gap-5">
              <Image
                src="/Isotype_Black.svg"
                alt="Isotipo Autonomía Digital del Sur"
                width={160}
                height={160}
                className="h-[2.3em] w-auto flex-shrink-0 md:h-[2.8em]"
                priority
              />
              <GlitchText>Conversatorio: Autonomía Digital del Sur</GlitchText>
            </span>
          </h1>
          <h2 className="text-xl text-black/70 md:text-2xl">IA, soberanía tecnológica y futuro del trabajo</h2>
          <p className="text-sm text-black/70">
            Encuentro abierto y colaborativo. Fin de noviembre 2025. Para acceder a fecha y lugar, únete al Telegram del evento.
          </p>
        </header>

        <section className="grid w-full max-w-4xl gap-10 rounded-none border border-black/30 bg-black/5 p-8 text-sm md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-black/60">Fecha</span>
            <Scramble placeholder="████ — disponible en Telegram" unlocked={ctaEngaged} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-black/60">Lugar</span>
            <Scramble placeholder="████ — disponible en Telegram" unlocked={ctaEngaged} />
          </div>

        </section>

        <section className="flex w-full max-w-4xl flex-col gap-6">
          <div className="flex flex-wrap gap-5">
            <button
              type="button"
              className="border border-black bg-black px-8 py-4 text-sm uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-black"
              onClick={openModal}
            >
              Unirme al Telegram
            </button>
            <button
              type="button"
              className="text-sm uppercase tracking-[0.3em] text-black/70 underline-offset-4 hover:text-black hover:underline"
              onClick={handleCopy}
            >
              Copiar invitación
            </button>
          </div>
          <p className="text-xs text-black/60">
            La fecha y el lugar se liberan dentro del servidor. Respeto absoluto por la privacidad y la autonomía colectiva.
          </p>
        </section>

        <footer className="w-full max-w-4xl text-xs text-black/60">
          <p>Evento sin fines de lucro. Código y materiales bajo licencias abiertas.</p>
          <details className="mt-6 border border-black/30 p-6">
            <summary className="cursor-pointer text-sm uppercase tracking-[0.3em]">Ver código</summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed">
              <p>
                Bienvenidos, ciudadanos y ciudadanas del futuro. Si están leyendo esto, es por que seguramente nos une una misma inquietud: Latinoamérica no puede seguir siendo espectadora del porvenir.
              </p>
              <p>
                Estamos en un momento decisivo. La cuarta revolución industrial y la Web3 redefinen poder, conocimiento y libertad. Nuestro propósito es participar activamente en la creación de ese futuro desde nuestra identidad, creatividad y soberanía.
              </p> 
              <p>
                Durante siglos, el continente fue tratado como proveedor de materias primas y mano de obra barata. Hoy la lógica se repite en lo digital: exportamos datos crudos y minerales para chips, importamos tecnología terminada y las grandes plataformas concentran el poder.
              </p>
              <p>
                Pero esta vez contamos con herramientas, conciencia y redes para cambiar la historia. Creemos en una Latinoamérica soberana, interconectada y capaz de producir su propio conocimiento tecnológico.
              </p>
              <div>
                <p className="font-semibold">Defendemos:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>La autonomía tecnológica como derecho colectivo.</li>
                  <li>La colaboración entre comunidades, artistas, desarrolladores y diseñadores como fuerza transformadora.</li>
                  <li>La innovación abierta, descentralizada y ética al servicio del bien común.</li>
                  <li>La identidad cultural latinoamericana como motor creativo y de resistencia.</li>
                </ul>
              </div>
              <p>
                Imaginamos un continente que no solo consuma el futuro, sino que lo diseñe, programe y gobierne. Queremos construir herramientas, redes y espacios que empoderen a las comunidades locales y fortalezcan la soberanía de nuestros datos.
              </p>
              <p>
                Convocamos a programadores, diseñadores, artistas, investigadores y soñadores a sumarse al colectivo. Escuchemos, pensemos y construyamos una agenda común.
              </p>
              <p>
                Mientras tanto, difundamos esta iniciativa y llevémosla a cada espacio: TecWeek, SAIAconf, DevConnect y cualquier lugar donde la tecnología defina el mañana. Si querés sumar o colaborar, escribinos. Esto recién comienza.
              </p>
              <p className="font-semibold">
                La soberanía no se hereda, se construye. Latinoamérica tiene todo para ser protagonista del futuro digital: hagámoslo posible, juntas y juntos.
              </p>
              <p>
                Por:
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Colectivo por la Soberanía Latinoamericana del Futuro (COSLAT)</li>
                </ul>
              </p>

            </div>
          </details>
        </footer>
      </main>

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 border border-black bg-black px-4 py-2 text-sm text-white">
          {toast}
        </div>
      )}

      <Modal isOpen={modalOpen} onClose={closeModal} titleId="modal-title" descriptionId="modal-desc">
        <div className="flex flex-col gap-4 text-black">
          <div>
            <h3 id="modal-title" className="text-lg font-semibold">
              Acceso a fecha y lugar
            </h3>
            <p id="modal-desc" className="mt-2 text-sm text-black/70">
              La información completa se libera en el Telegram del evento. Únete y participa.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={telegramInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-black px-4 py-3 text-center text-sm uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
            >
              Unirme al Telegram
            </a>
            <button
              type="button"
              className="text-xs uppercase tracking-[0.3em] text-black/70 underline-offset-4 hover:text-black hover:underline"
              onClick={handleCopy}
            >
              Copiar invitación
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
