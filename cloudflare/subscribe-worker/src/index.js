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

const extractErrorMessage = (result) => {
  if (!result || typeof result !== "object") return "";
  if (typeof result.error === "string") return result.error;
  if (typeof result.detail === "string") return result.detail;
  if (typeof result.message === "string") return result.message;
  if (Array.isArray(result.errors) && result.errors.length > 0) {
    const first = result.errors[0];
    if (typeof first === "string") return first;
    if (first && typeof first.message === "string") return first.message;
  }
  return "";
};

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
      const ipHeader = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "";
      const ipAddress = ipHeader.split(",")[0].trim();

      const response = await fetch("https://api.buttondown.email/v1/subscribers", {
        method: "POST",
        headers: {
          Authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
          "Content-Type": "application/json",
          "X-Buttondown-Collision-Behavior": "overwrite",
        },
        body: JSON.stringify({
          email_address: email,
          type: "regular",
          ip_address: ipAddress || undefined,
          tags: ["coslat"],
          source: "coslat-web",
        }),
      });

      const rawText = await response.text();
      let result = {};
      try {
        result = rawText ? JSON.parse(rawText) : {};
      } catch {
        result = {};
      }
      if (!response.ok) {
        const message = extractErrorMessage(result) || rawText || "No se pudo suscribir";
        return jsonResponse({ error: message }, response.status);
      }

      return jsonResponse({ ok: true });
    } catch {
      return jsonResponse({ error: "Error al conectar con Buttondown" }, 500);
    }
  },
};
