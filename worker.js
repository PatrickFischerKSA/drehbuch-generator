/**
 * Cloudflare Worker – CORS-Proxy für den Drehbuch-Generator
 *
 * Deployment (einmalig):
 *   1. https://workers.cloudflare.com  →  Anmelden / Konto erstellen (kostenlos)
 *   2. Workers & Pages  →  Create  →  Create Worker
 *   3. Diesen Code einfügen  →  Deploy
 *   4. Die Worker-URL (z.B. https://drehbuch-proxy.DEINNAME.workers.dev)
 *      in der App unter „Proxy-URL" eintragen und speichern.
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key, anthropic-version, anthropic-beta',
  'Access-Control-Max-Age':       '86400',
};

export default {
  async fetch(request) {

    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const apiKey = request.headers.get('x-api-key');
    if (!apiKey || !apiKey.startsWith('sk-ant-')) {
      return new Response(
        JSON.stringify({ error: { message: 'Kein gültiger API Key übermittelt.' } }),
        { status: 401, headers: { 'Content-Type': 'application/json', ...CORS_HEADERS } }
      );
    }

    // Anfrage an Anthropic weiterleiten
    const body = await request.text();
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method:  'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         apiKey,
        'anthropic-version': request.headers.get('anthropic-version') || '2023-06-01',
      },
      body,
    });

    // Antwort mit CORS-Headern zurückgeben (Streaming bleibt erhalten)
    const response = new Response(upstream.body, {
      status:  upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('Content-Type') || 'application/json',
        ...CORS_HEADERS,
      },
    });
    return response;
  },
};
