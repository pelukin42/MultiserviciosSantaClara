---
name: premium
description: Construye un sitio web completo "Plan Premium" (estilo Axelsites.com) para un negocio local de servicios. Úsalo cuando pidan un website premium con WhatsApp, redes, cotizador, portafolio, reseñas, bilingüe y chatbot.
---

# /premium — Plan Premium (Axelsites)

Entregables obligatorios (todo el plan Profesional + extras Premium):

1. **Todo lo del plan Profesional**: hero con propuesta clara, servicios, sobre nosotros, contacto, botones de WhatsApp/llamada, redes sociales, SEO básico, responsive, carga rápida.
2. **Portafolio tipo catálogo** organizado por tipo de proyecto, con filtros por categoría.
3. **Formulario de cotización detallado**: tipo de proyecto, zona, presupuesto, medidas/descripción, nombre y teléfono. Al enviar abre WhatsApp con el mensaje armado (y alternativa mailto).
4. **Enlace directo a reseñas de Google** + bloque de testimonios.
5. **SEO local**: title/description, Open Graph, JSON-LD `LocalBusiness` con `areaServed`, textos con servicio + zona, `sitemap.xml`, `robots.txt`.
6. **Versión bilingüe** (ES/EN) con selector persistente (`localStorage`) y atributos `data-i18n`.
7. **Correo profesional** visible (`tucorreo@tudominio.com`) como `mailto:`.
8. **Chatbot/asistente 24 h**: widget con respuestas rápidas (servicios, precios, zona, horario) y derivación a WhatsApp.
9. **3 rondas de ajustes** y **dominio incluido el primer año**: documentarlo en `README.md` (checklist de entrega).

## Reglas
- Sitio estático (HTML/CSS/JS sin build) para desplegar en cualquier hosting.
- Toda la config editable (teléfono, correo, redes, URL de reseñas) en un objeto `CONFIG` al inicio de `script.js`.
- Accesible (contraste, `aria-*`, foco visible, `prefers-reduced-motion`), mobile-first.
- Botón flotante de WhatsApp siempre visible.
- Marcar claramente con `TODO` los datos placeholder que el cliente debe confirmar.
- Para el diseño visual, aplicar también `/frontenddesign`.
