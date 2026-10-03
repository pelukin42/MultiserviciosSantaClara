# Multiservicios Santa Clara — Sitio Plan Premium

Sitio estático (HTML/CSS/JS, sin build): abrir `index.html` o subir la carpeta a cualquier hosting.
Skills del proyecto: `/premium` y `/frontenddesign` (en `.claude/skills`).

**Datos tomados del perfil de Instagram** [@santaclara_multiservicios](https://www.instagram.com/santaclara_multiservicios):
Construcción y Remodelación · Materiales de construcción · Proyectos Residenciales | Comerciales | Oficinas ·
Puerto Viejo de Limón, Costa Rica · WhatsApp +506 6025 6104 · logo MSC (rojo/gris/negro).

## Incluye (Plan Premium Axelsites)
- [x] Todo lo del Profesional: hero, servicios, proceso, FAQ, contacto, redes, responsive
- [x] Portafolio tipo catálogo filtrable por tipo de proyecto (Residencial, Comercial, Oficinas, Remodelación) + lightbox
- [x] Sección de Productos (materiales de construcción) que alimenta el cotizador
- [x] **Cotizador interactivo**: el cliente elige servicios y materiales (también con los botones "Agregar" de cada tarjeta), indica cantidades/medidas, tipo de proyecto, zona, presupuesto y plazo, y se abre WhatsApp con el mensaje ya armado (vista previa incluida; alternativa por correo). La lista se guarda en el navegador del visitante.
- [x] Enlace a reseñas de Google
- [x] SEO local (title/description, Open Graph, JSON-LD, sitemap, robots, mapa y "Cómo llegar")
- [x] Versión bilingüe ES/EN
- [x] Correo profesional (`tucorreo@tudominio.com`, pendiente de dominio)
- [x] Asistente/chatbot 24 h (respuestas rápidas + texto libre)
- [x] Movimiento moderno: títulos que se revelan por palabras, luz que sigue al cursor, parallax, tarjeta de contacto con inclinación 3D, botones magnéticos, brillo en tarjetas, header inteligente (se oculta al bajar), barra de progreso, marquesina que se acelera con el scroll. Todo se desactiva con "reducir movimiento" del sistema.
- [ ] 3 rondas de ajustes · Dominio incluido el primer año (se gestionan en la entrega)

## Pendiente de confirmar con el cliente (TODO)
Todo se edita en el objeto `CONFIG` al inicio de `script.js` (si un valor queda vacío, su botón se oculta):
- `email` (correo del dominio), `facebook`, `tiktok`, `googleReviews` (enlace directo de reseñas), `mapQuery` (dirección exacta), `hours` (horario).
- `TESTIMONIALS`: agregar reseñas **reales** (hoy el bloque está oculto; no se inventaron testimonios).
- Confirmar la lista de **servicios** y **productos** con las destacadas "Servicios" y "Productos" de Instagram (los textos actuales son genéricos de construcción).
- **Fotos de proyectos**: guardar `assets/projects/01.jpg … 08.jpg` (mismo orden que `PROJECTS` en `script.js`); mientras no existan se muestra una ilustración con "Foto de ejemplo".
- Reemplazar `assets/logo.png` por el logo original en alta resolución (el actual se recortó de una captura) y regenerar `assets/og.png`.
- Dominio real en `sitemap.xml`, `robots.txt` y `og:image` (URL absoluta); agregar `email`/`url` al JSON-LD de `index.html`.
- Catálogo del cotizador: `ITEMS` en `script.js` (servicios con medidas libres; materiales con cantidad y unidad). Rangos de presupuesto (en colones) en `index.html`, y la cifra de seguidores (`data-count="5119"`).
- Precios: el cotizador **no muestra precios** (no hay datos). Si el cliente los entrega, se puede agregar un total estimado por ítem.
