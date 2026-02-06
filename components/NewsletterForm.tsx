"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  className?: string;
};

export default function NewsletterForm({ className }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const endpoint =
    process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT ||
    "https://coslat-subscribe.natan-amado.workers.dev";

  return (
    <form
      className={className}
      onSubmit={async (event) => {
        event.preventDefault();
        if (!endpoint) {
          setStatus("error");
          setMessage("Suscripción no configurada.");
          return;
        }
        setStatus("loading");
        setMessage("");

        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });
          const payload = await response.json().catch(() => ({}));
          if (!response.ok) {
            throw new Error(payload?.error || "No se pudo suscribir.");
          }
          setStatus("success");
          setMessage("Listo. Te sumamos a la lista.");
          setEmail("");
        } catch (error) {
          setStatus("error");
          setMessage(error instanceof Error ? error.message : "Algo salió mal.");
        }
      }}
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
        <label className="flex flex-1 flex-col gap-1 font-mono text-xs uppercase tracking-[0.2em] text-coslat-dark">
          <input
            type="email"
            name="email"
            required
            placeholder="tu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border-2 border-coslat-blue px-3 py-2 text-sm uppercase tracking-widest placeholder:text-coslat-dark/40 focus:outline-none focus:ring-2 focus:ring-coslat-yellow"
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 font-mono uppercase border-2 border-coslat-accent bg-coslat-accent text-white px-4 py-2 hover:bg-coslat-yellow hover:text-coslat-blue hover:border-coslat-yellow transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Suscribirme"}
        </button>
      </div>
      {message && (
        <p className={`font-mono text-xs ${status === "error" ? "text-red-600" : "text-coslat-dark"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
