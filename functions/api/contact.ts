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

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const datos = await request.formData();

  // Honeypot: los bots completan el campo oculto.
  if (datos.get('website')) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const nombre = String(datos.get('nombre') ?? '').trim();
  const email = String(datos.get('email') ?? '').trim();
  const mensaje = String(datos.get('mensaje') ?? '').trim();

  if (!nombre || !mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ ok: false, error: 'datos_invalidos' }), { status: 400 });
  }

  if (nombre.length > 200 || email.length > 200 || mensaje.length > 5000) {
    return new Response(JSON.stringify({ ok: false, error: 'datos_invalidos' }), { status: 400 });
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
      return new Response(JSON.stringify({ ok: false, error: 'captcha' }), { status: 403 });
    }
  }

  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ ok: false, error: 'sin_configurar' }), { status: 500 });
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
    return new Response(JSON.stringify({ ok: false, error: 'envio' }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
