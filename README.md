# Web — Dra. Ana Laura Batalles

Sitio estático en **Astro 6** para desplegar en **Cloudflare Pages**.

## Desarrollo

Requiere Node 22 (hay `.nvmrc`):

```bash
nvm use
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview
```

## Estructura

- `src/data/` — todo el contenido editable: textos de tratamientos, FAQs,
  artículos (videos de YouTube) y datos de contacto (`site.ts`).
- `src/components/Icono.astro` — iconografía lineal inline (SVG).
- `src/assets/` — logos SVG (fuente: `../ana-laura-batalles-logos-svg/`),
  fotos del consultorio y logos OSDE.
- `functions/api/contact.ts` — Cloudflare Pages Function del formulario
  (Resend + Turnstile opcional).
- `public/_redirects` — 301 desde las URLs del WordPress viejo.

## Variables de entorno (Cloudflare Pages)

| Variable | Uso |
|----------|-----|
| `RESEND_API_KEY` | API key de Resend (formulario) |
| `CONTACT_TO` | destinatario (default `info@draanalaurabatalles.com.ar`) |
| `CONTACT_FROM` | remitente verificado en Resend |
| `TURNSTILE_SECRET` | secret de Turnstile (opcional) |
| `PUBLIC_TURNSTILE_SITEKEY` | sitekey de Turnstile (build) |
| `PUBLIC_GTM_ID` | ID de Google Tag Manager (build) |

## Eventos (dataLayer → GTM → GA4)

- `click_whatsapp`, `click_telefono`, `click_email` — clicks en enlaces con
  `data-evento`.
- `envio_formulario` — envío exitoso del formulario.

## Build en Cloudflare Pages

- Build command: `npm run build`
- Output: `dist`
- Node: 22 (variable `NODE_VERSION=22`)
