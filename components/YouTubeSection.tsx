"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "@/components/icons";
import { Modal } from "@/components/Modal";
import type { YoutubeVideo } from "@/lib/youtube";

type Props = {
  videos: YoutubeVideo[];
  updatedAt?: string;
};

const formatYoutubeDate = (value: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function YouTubeSection({ videos, updatedAt }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = "coslat-modal-title";
  const descriptionId = "coslat-modal-description";

  const items = useMemo(() => {
    if (!videos?.length) return [];
    return videos.map((video, index) => ({
      ...video,
      displayTitle: index === videos.length - 1 ? "ayer" : video.title,
      primaryThumb: `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
      fallbackThumb: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    }));
  }, [videos]);

  return (
    <section id="videos" className="bg-white text-coslat-blue py-20 border-b-8 border-coslat-yellow">
      <div className="container mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <div>
              <p className="font-mono uppercase text-xs tracking-[0.2em] text-coslat-dark">YouTube</p>
              <h3 className="font-title text-4xl md:text-5xl">Últimos shorts</h3>
            </div>
            <p className="font-mono text-sm md:text-base text-coslat-dark/80 max-w-xl">
              Lo más reciente del canal de COSLAT. También puedes compartir tu video, imagen o pieza artística
              para nuestras redes sociales.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 font-mono uppercase border-2 border-coslat-blue px-4 py-2 hover:bg-coslat-blue hover:text-white transition-colors w-fit"
            >
              Sube tu contenido
            </button>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a
              href="https://www.youtube.com/@COS_LAT"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono uppercase border-2 border-coslat-blue px-4 py-2 hover:bg-coslat-blue hover:text-white transition-colors"
            >
              Ver canal <ExternalLink size={16} />
            </a>
            {updatedAt && (
              <span className="font-mono text-xs text-coslat-dark/70">
                Actualizado {formatYoutubeDate(updatedAt)}
              </span>
            )}
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {items.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-coslat-blue">
                  <img
                    src={video.primaryThumb}
                    alt={video.displayTitle}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(event) => {
                      const img = event.currentTarget;
                      if (img.dataset.fallback !== "true") {
                        img.dataset.fallback = "true";
                        img.src = video.fallbackThumb;
                      }
                    }}
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h4 className="font-pixel text-xl leading-tight">{video.displayTitle}</h4>
                  <span className="font-mono text-xs text-coslat-dark/80">
                    {formatYoutubeDate(video.published)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-coslat-blue p-6 font-mono text-sm text-coslat-dark/80">
            En breve publicamos los últimos shorts.
          </div>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} titleId={titleId} descriptionId={descriptionId}>
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 id={titleId} className="font-title text-2xl">
                Comparte tu contenido
              </h4>
              <p id={descriptionId} className="font-mono text-sm text-black/70 mt-2">
                El material debe estar alineado con los <a href="/#principios" className="underline">principios de COSLAT</a> y ser
                aprobado por la mayoría simple del colectivo.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="border border-black px-2 py-1 text-xs uppercase"
            >
              Cerrar
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://discord.gg/hsNkj4aWh8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coslat-blue text-white font-mono uppercase px-4 py-2 hover:bg-black transition-colors"
            >
              Ir al Discord
            </a>
            <a
              href="/#principios"
              className="inline-flex items-center justify-center gap-2 border-2 border-coslat-blue font-mono uppercase px-4 py-2 hover:bg-coslat-blue hover:text-white transition-colors"
            >
              Ver principios
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
