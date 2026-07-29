/**
 * Formulario de contacto — Cloudflare Pages Function.
 *
 * Variables de entorno (configurar en el proyecto de Pages):
 *   RESEND_API_KEY    — API key de Resend (obligatoria)
 *   CONTACT_TO        — destinatario (default: info@draanalaurabatalles.com.ar)
 *   CONTACT_FROM      — remitente verificado en Resend
 *   TURNSTILE_SECRET  — secret de Cloudflare Turnstile (opcional; si está, se valida)
 */

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
  TURNSTILE_SECRET?: string;
}

const escaparHtml = (texto: string) =>
  texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const MENSAJES: Record<string, string> = {
  datos_invalidos: 'Revisá los datos: el nombre, el email y el mensaje son obligatorios.',
  captcha: 'No pudimos verificar que no seas un robot. Probá de nuevo.',
  sin_configurar: 'El formulario no está disponible en este momento.',
  envio: 'No pudimos enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.',
};

/**
 * El JS del formulario manda `Accept: application/json` y espera JSON. Si el JS
 * no corrió, el navegador hace un POST nativo y navega a esta respuesta: ahí
 * devolvemos una página, no el JSON crudo.
 */
const responder = (request: Request, estado: number, error?: string, ignored = false) => {
  const aceptaJson = (request.headers.get('accept') ?? '').includes('application/json');
  const cuerpo = error ? { ok: false, error } : { ok: true, ...(ignored ? { ignored: true } : {}) };

  if (aceptaJson) {
    return new Response(JSON.stringify(cuerpo), {
      status: estado,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const titulo = error ? 'No pudimos enviar tu mensaje' : '¡Gracias por escribirnos!';
  const detalle = error
    ? (MENSAJES[error] ?? MENSAJES.envio)
    : 'Recibimos tu consulta y te vamos a responder a la brevedad.';

  return new Response(
    `<!doctype html><html lang="es-AR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>${escaparHtml(titulo)} — Dra. Ana Laura Batalles</title>
<style>body{font-family:system-ui,sans-serif;background:#faf6f2;color:#443a33;display:grid;place-content:center;gap:1rem;min-height:100vh;margin:0;padding:2rem;text-align:center;line-height:1.6}a{color:#7c5f68}</style>
</head><body><h1>${escaparHtml(titulo)}</h1><p>${escaparHtml(detalle)}</p>
<p><a href="/">Volver al inicio</a></p></body></html>`,
    { status: estado, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const datos = await request.formData();

  // Honeypot: los bots completan el campo oculto.
  if (datos.get('website')) {
    return responder(request, 200, undefined, true);
  }

  const nombre = String(datos.get('nombre') ?? '').trim();
  const email = String(datos.get('email') ?? '').trim();
  const mensaje = String(datos.get('mensaje') ?? '').trim();

  if (!nombre || !mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return responder(request, 400, 'datos_invalidos');
  }

  if (nombre.length > 200 || email.length > 200 || mensaje.length > 5000) {
    return responder(request, 400, 'datos_invalidos');
  }

  // Turnstile (si está configurado)
  if (env.TURNSTILE_SECRET) {
    const token = String(datos.get('cf-turnstile-response') ?? '');
    const verificacion = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP') ?? '',
      }),
    });
    const resultado = (await verificacion.json()) as { success: boolean };
    if (!resultado.success) {
      return responder(request, 403, 'captcha');
    }
  }

  if (!env.RESEND_API_KEY) {
    return responder(request, 500, 'sin_configurar');
  }

  const envio = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM ?? 'Web <onboarding@resend.dev>',
      to: [env.CONTACT_TO ?? 'info@draanalaurabatalles.com.ar'],
      reply_to: email,
      subject: 'Consulta desde la web',
      html: `<p><strong>Nombre:</strong> ${escaparHtml(nombre)}</p>
<p><strong>Email:</strong> ${escaparHtml(email)}</p>
<p><strong>Mensaje:</strong></p>
<p>${escaparHtml(mensaje).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!envio.ok) {
    return responder(request, 502, 'envio');
  }

  return responder(request, 200);
};
