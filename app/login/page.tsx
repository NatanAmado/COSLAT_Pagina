"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Route } from "next";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get("redirect");
  const redirect: Route = redirectParam && redirectParam.startsWith("/") ? (redirectParam as Route) : "/admin";
  const missingCreds = searchParams.get("error") === "missing_creds";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error de autenticación");
      }
      router.push(redirect);
    } catch (err: any) {
      setError(err.message || "Error de autenticación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-coslat-blue text-white px-6">
      <div className="bg-white text-coslat-blue w-full max-w-md p-8 rounded shadow-lg border-4 border-coslat-yellow">
        <h1 className="font-title text-3xl mb-4 text-center">Acceso Admin</h1>
        <p className="font-mono text-sm text-center mb-6">Ingresa tus credenciales para continuar.</p>
        {missingCreds && (
          <p className="text-red-600 font-mono text-sm text-center mb-4">
            Credenciales de admin no configuradas en el servidor.
          </p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase">Usuario</label>
            <input
              className="border border-coslat-blue px-3 py-2 font-mono"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase">Contraseña</label>
            <input
              className="border border-coslat-blue px-3 py-2 font-mono"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {error && <p className="text-red-600 font-mono text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-coslat-yellow text-coslat-blue font-pixel text-xl px-4 py-3 border-b-4 border-black hover:bg-white transition-colors disabled:opacity-60"
          >
            {loading ? "Accediendo..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-coslat-blue text-white px-6">Cargando...</div>}>
      <LoginContent />
    </Suspense>
  );
}
