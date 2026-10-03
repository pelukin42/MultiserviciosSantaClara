---
name: premium
description: Construye un sitio web completo "Plan Premium" (estilo Axelsites.com) para un negocio local de servicios. Úsalo cuando pidan un website premium con WhatsApp, redes, cotizador, portafolio, reseñas, bilingüe y chatbot.
---

# /premium — Plan Premium (Axelsites)

## Paso 0 — Datos reales del cliente (antes de escribir código)
1. Leer el perfil de Instagram/Facebook del cliente. Si la red bloquea la lectura (HTTP 429/login), **pedir una captura del perfil** en vez de adivinar.
2. Extraer: nombre, rubro, bio, ubicación, WhatsApp, seguidores, destacadas (suelen ser las secciones del sitio: Servicios, Productos, Proyectos, Ubicación, Contacto) y **logo + colores** (recortar el logo a `assets/logo.png`; derivar la paleta del logo).
3. **No inventar datos.** Estadísticas, testimonios, horarios, años de experiencia, garantías, redes y correo que no aparezcan en la fuente van como `TODO` en `CONFIG`/arrays vacíos y **la UI se oculta cuando están vacíos** (excepto el correo profesional, que se muestra como `tucorreo@tudominio.com` hasta tener dominio). Usar solo cifras reales (p. ej. seguidores).

## Entregables obligatorios (todo el plan Profesional + extras Premium)
1. **Todo lo del Profesional**: hero con propuesta clara, servicios, proceso, FAQ, contacto, botones de WhatsApp/llamada, redes sociales, responsive, carga rápida.
2. **Portafolio tipo catálogo** por tipo de proyecto, con filtros; slots para fotos reales (`assets/projects/01.jpg…`) con ilustración de respaldo + etiqueta "Foto de ejemplo" y lightbox.
3. **Cotizador interactivo (carrito de cotización)**: 3 bloques (1 ¿Qué necesitas? con pestañas Servicios/Materiales, fichas seleccionables y lista editable con cantidad+unidad o medidas; 2 Tu proyecto: tipo, zona, presupuesto en moneda local, plazo, detalles; 3 Tus datos) + resumen lateral con vista previa del mensaje. Los botones "Agregar" de las tarjetas de servicios/productos alimentan la misma lista; botón flotante "Mi cotización" con contador. Valida (ítems o detalles, nombre, teléfono) y abre `wa.me` con el mensaje armado (negritas `*…*`, viñetas, nombres también en español si la UI está en inglés); alternativa `mailto:`. Sin precios inventados: solo mostrar totales si el cliente da una lista de precios.
4. **Enlace directo a reseñas de Google** (configurable, con respaldo a Maps) + bloque de testimonios solo si hay reales.
5. **SEO local**: title/description con servicio + zona, Open Graph (imagen **PNG** 1200×630), JSON-LD (`GeneralContractor`/`LocalBusiness`) con `areaServed`, `sitemap.xml`, `robots.txt`, mapa embebido y "Cómo llegar".
6. **Bilingüe ES/EN**: el español es el HTML original (`data-i18n`, `data-i18n-html`, `data-i18n-ph`), el inglés un diccionario en JS; selector persistente en `localStorage`; traducir también `<title>`.
7. **Correo profesional** visible como `mailto:`.
8. **Chatbot 24 h**: respuestas rápidas + campo de texto con palabras clave (ES/EN) y derivación a WhatsApp.
9. **3 rondas de ajustes** y **dominio incluido el primer año**: documentarlo en `README.md` (checklist de entrega).
10. Si el cliente vende productos/materiales: sección **Productos** con botón "Consultar precio" que abre WhatsApp con el producto.

## Reglas técnicas
- Sitio estático (HTML/CSS/JS sin build). Toda la config editable en el objeto `CONFIG` al inicio de `script.js`.
- Botón flotante de WhatsApp siempre visible; abrir enlaces externos con `rel="noopener"`.
- Accesible: contraste AA, `aria-*`, foco visible, `prefers-reduced-motion`, `aria-pressed` en filtros.
- Cuidado con colisiones de nombres de clase CSS (p. ej. `.alt` de un enlace vs `.sec.alt`).
- Para el diseño visual, aplicar también `/frontenddesign`.

## QA antes de entregar (Playwright/Chromium, abrir con `file://`)
- Sin errores de consola/`pageerror`; sin scroll horizontal a 390 px (`documentElement.scrollWidth <= innerWidth`).
- Al hacer scroll programático usar `behavior:'instant'` (el `scroll-behavior:smooth` rompe los revelados).
- Probar: filtros, cambio ES/EN, cotizador (agregar desde tarjetas y fichas, cantidades, error con datos faltantes, URL `wa.me` exacta, persistencia al recargar, vaciar), chatbot (chips y texto libre), menú móvil, `prefers-reduced-motion`.
- Redes sin URL quedan ocultas.
