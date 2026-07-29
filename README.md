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
| `PUBLIC_GA_ID` | ID del flujo web de GA4; destino de los eventos propios (build) |

## Eventos (sitio → Google tag en GTM → GA4)

| Evento | Disparador | Parámetros principales |
|--------|------------|------------------------|
| `appointment_request` | Click en un CTA de turno por WhatsApp | `cta_id`, `link_location`, `contact_method` |
| `contact_click` | Click de contacto general | `contact_method`, `link_location` |
| `select_content` | Selección de tratamiento o video | `content_type`, `item_id`, `item_name`, `content_location`, `item_position` |
| `outbound_click` | Click en Maps, Instagram o Facebook | `destination_type`, `link_location`, `link_domain` |
| `faq_open` | Primera apertura de cada pregunta | `faq_id`, `faq_category`, `item_position` |
| `contact_form_start` | Primera edición de un campo del formulario | `form_id`, `field_name` |
| `generate_lead` | Envío confirmado por la API | `form_id`, `lead_source`, `contact_method` |
| `contact_form_error` | Validación, error de API o de red | `form_id`, `error_type`, `error_code`, `http_status`, `field_name` |

Todos incluyen `page_type` y, dentro de una página de tratamiento,
`treatment_id`. El sitio no envía a GA4 nombres, emails, mensajes ni URLs de
contacto. Los clicks internos también incluyen `destination_path` y conservan
la página de origen. `appointment_request` y `generate_lead` deben marcarse
como eventos clave en GA4.

Los eventos propios se envían al `PUBLIC_GA_ID` mediante el Google tag cargado
por GTM. Si falta cualquiera de los dos IDs, analytics no se carga. GA4 mantiene su medición automática de páginas, adquisición,
dispositivos, engagement y scroll.

### URLs de campaña

- Instagram: `https://draanalaurabatalles.com.ar/?utm_source=instagram&utm_medium=organic_social&utm_campaign=perfil`
- Google Business Profile: `https://draanalaurabatalles.com.ar/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile`
- Facebook: `https://draanalaurabatalles.com.ar/?utm_source=facebook&utm_medium=organic_social&utm_campaign=perfil`

## Build en Cloudflare Pages

- Build command: `npm run build`
- Output: `dist`
- Node: 22 (variable `NODE_VERSION=22`)
