const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const jsonResponse = (data, status = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
};

const isValidEmail = (value) => /.+@.+\..+/.test(value);

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response("", { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405);
    }

    let payload = {};
    try {
      payload = await request.json();
    } catch {
      payload = {};
    }

    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    if (!email || !isValidEmail(email)) {
      return jsonResponse({ error: "Email inválido" }, 400);
    }

    if (!env.BUTTONDOWN_API_KEY) {
      return jsonResponse({ error: "Buttondown API key no configurada" }, 500);
    }

    try {
      const response = await fetch("https://api.buttondown.email/v1/subscribers", {
        method: "POST",
        headers: {
          Authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          tags: ["coslat"],
          source: "coslat-web",
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        return jsonResponse({ error: result?.error || "No se pudo suscribir" }, response.status);
      }

      return jsonResponse({ ok: true });
    } catch {
      return jsonResponse({ error: "Error al conectar con Buttondown" }, 500);
    }
  },
};
