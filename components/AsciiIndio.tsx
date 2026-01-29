"use client";

import { useEffect, useState } from "react";

export default function AsciiIndio() {
  const [asciiIndio, setAsciiIndio] = useState("");

  useEffect(() => {
    fetch("/ascii_indio.txt")
      .then((res) => res.text())
      .then((text) => setAsciiIndio(text))
      .catch(() => setAsciiIndio(""));
  }, []);

  if (!asciiIndio) return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-end justify-end pr-4 md:pr-10 pb-4">
      <pre className="mr-[-96px] md:mr-[-140px] lg:mr-[-180px] text-coslat-yellow/50 font-mono text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] leading-[6px] sm:leading-[7px] md:leading-[8px] lg:leading-[9px] whitespace-pre text-right mix-blend-screen drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] opacity-85 max-h-full overflow-hidden">
        {asciiIndio}
      </pre>
    </div>
  );
}
