---
name: frontenddesign
description: Dirección de arte para frontends distintivos y no genéricos. Úsalo para dar valor agregado al diseño de una página web (tipografía, color, composición, movimiento, detalles).
---

# /frontenddesign

Evita el look "plantilla genérica" (Inter + degradado morado + tarjetas idénticas).

1. **Concepto**: define una idea visual ligada al negocio (p. ej. plano técnico, cinta métrica, señalética de obra) antes de escribir CSS.
2. **Tipografía**: par con carácter — display expresivo + texto legible. Escala fluida con `clamp()`.
3. **Color**: variables CSS; 1 neutro cálido/oscuro dominante + 1 acento fuerte. Verificar contraste AA.
4. **Composición**: rompe la cuadrícula (offsets, números grandes, secciones de ritmo alterno, bordes tipo plano).
5. **Detalles**: textura sutil, sombras duras, microinteracciones, hover con propósito, cursor/estados de foco cuidados.
6. **Movimiento**: revelado al scroll y contadores con `IntersectionObserver`; respetar `prefers-reduced-motion`.
7. **Imágenes**: si no hay fotos reales, usar ilustraciones SVG/patrones propios, nunca stock genérico; dejar slots claros para fotos reales.
8. **Responsive y rendimiento**: mobile-first, sin dependencias pesadas, fuentes con `display=swap`.
