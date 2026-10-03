---
name: frontenddesign
description: Dirección de arte para frontends distintivos y no genéricos. Úsalo para dar valor agregado al diseño de una página web (tipografía, color, composición, movimiento, detalles).
---

# /frontenddesign

Evita el look "plantilla genérica" (Inter + degradado morado + tarjetas idénticas + emojis como íconos).

1. **Concepto**: define una idea visual ligada al negocio antes de escribir CSS (p. ej. *plano de obra*: grilla técnica, "cotas" en los títulos, láminas numeradas) y reutiliza **la forma del logo** (p. ej. el hexágono de MSC en íconos, fondos y animaciones).
2. **Color desde el logo**: extraer rojo/gris/negro reales del logo del cliente. Variables CSS; un neutro dominante + un acento. Usar una variante clara del acento para texto sobre fondo oscuro y una oscura para texto sobre fondo claro. Verificar contraste AA (blanco sobre el rojo de marca ≥ 4.5:1).
3. **Tipografía**: par con carácter — display condensado y pesado (p. ej. Archivo `wdth`) + texto legible (Hanken Grotesk) + mono para etiquetas (JetBrains Mono). Escala fluida con `clamp()` y `text-wrap:balance`.
4. **Composición**: ritmo alterno de fondos (oscuro / concreto / rojo), tarjetas con borde duro y sombra desplazada, tarjeta de contacto inclinada, números grandes en contorno, marquesina.
5. **Íconos**: sprite SVG propio con trazo uniforme (nunca emojis); contenedores hexagonales con `clip-path`.
6. **Detalles**: textura de ruido sutil (SVG `feTurbulence` en data-URI), hover con propósito (desplazar + cambiar sombra), foco visible, estados de error en formularios.
7. **Movimiento**: hexágonos que se "dibujan" (`stroke-dashoffset`), revelado al scroll y contadores con `IntersectionObserver`; todo respeta `prefers-reduced-motion`.
8. **Imágenes**: sin fotos reales → ilustraciones/íconos SVG sobre patrón, nunca stock genérico; dejar slots claros para fotos reales con respaldo automático.
9. **Responsive y rendimiento**: mobile-first, sin dependencias pesadas, fuentes con `display=swap`, sin scroll horizontal a 390 px.
