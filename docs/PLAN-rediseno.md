# Plan de rediseño — martin-gk.com

Estado: implementado en local (03/11/2026). Pendiente: deploy con OK.
Fecha: 03/11/2026

## Objetivo

Pasar de un CV en formato documento a una página que cuente la carrera como un **timeline de resultados**, con interacción y motion que sorprendan en los primeros segundos, sin perder lo que un reclutador necesita encontrar en menos de 10 segundos: quién sos, qué hacés, dónde trabajaste y cómo contactarte.

## Qué se conserva

- Todo el contenido real del CV (`src/data/cv.ts`); no se inventan métricas, clientes ni logros.
- Datos de contacto siempre a mano (Calendly, LinkedIn, email). Sin teléfono ni descarga del CV.
- Stack técnico: Next.js 15 + React 19 + Tailwind 4, deploy en Vercel (proyecto `curriculum-vitae`).
- Impresión: `Ctrl+P` sigue dando un CV limpio en una sola columna (versión estática, sin animaciones).

## Qué se reemplaza

El estilo actual (tarjeta navy/dorado con columna lateral) se toma como referencia de contenido, no de diseño. Se define un mundo visual nuevo y se documenta en `DESIGN.md`.

## Estructura propuesta

1. **Apertura.** Nombre, rol y una frase de posicionamiento. Entrada animada única (un solo momento de motion fuerte, no efectos en cada sección). Contacto y PDF visibles desde el primer pantallazo.
2. **Timeline (columna vertebral de la página).** Línea vertical que se dibuja con el scroll, de 2013 (UTN) a hoy. Cada hito es un nodo:
   - empresa, rol, período y duración calculada;
   - el **resultado** destacado primero (por ejemplo, "Cobertura de tests de 5% a 90%"), después el detalle;
   - proyectos de cliente anidados (BordoAI, CenExel dentro de Nearsure);
   - stack usado en ese tramo.
   Los proyectos propios (Signal, Lanista) aparecen en el mismo timeline, marcados como independientes y en paralelo a los trabajos, para mostrar la solapación real (Lanista 2022–2023 en paralelo con Flydevs/Vairix).
3. **Stack interactivo.** Al tocar una tecnología se resaltan en el timeline los tramos donde se usó y se atenúa el resto. Responde "¿cuánta experiencia real tiene en X?" sin texto extra.
4. **Resultados.** Los números aparecen dentro de su hito, con conteo animado al entrar en pantalla. No va una fila de métricas sueltas arriba (es una plantilla gastada y saca los números de contexto).
5. **Cierre.** Idiomas, soft skills, estudios y un llamado a contacto claro.

## Motion e interacción

- Librería: `motion` (Framer Motion) para entradas y layout; el timeline usa animaciones ligadas al scroll.
- Un momento principal (la apertura y la línea del timeline dibujándose), el resto es sutil: aparición de cada nodo, conteo de números y transición del filtro de stack.
- `prefers-reduced-motion`: todo se muestra estático y completo, sin perder información.
- Rendimiento: solo `transform`, `opacity`, `clip-path` y filtros suaves; objetivo Lighthouse ≥ 95 en performance y accesibilidad.
- Teclado: el filtro de stack y los nodos son accesibles con Tab y tienen foco visible.

## Datos

`src/data/cv.ts` gana campos nuevos por hito: `highlight` (resultado principal), `metrics` (número, unidad, etiqueta) y `kind` (`job`, `client`, `project`, `education`). Solo se cargan con información confirmada.

## Fases

1. Confirmar respuestas a las preguntas abiertas y escribir `PRODUCT.md`.
2. Dirección visual: tipografía, paleta, claro/oscuro y concepto de la apertura → `DESIGN.md`.
3. Modelo de datos y contenido (resultados por hito).
4. Construcción: apertura, timeline, filtro de stack, cierre, versión de impresión.
5. Motion y reduced motion.
6. Revisión en escritorio y móvil, detector de diseño, accesibilidad y Lighthouse.
7. Deploy con OK explícito (`vercel --prod`).

## Decisiones confirmadas (03/11/2026)

- Público: reclutadores y empresas que contratan remoto. Acción principal: agendar una llamada por Calendly.
- Resultados reales: CenExel 653 usuarios; Vairix cobertura 5% → 90%; Lanista ~200 endpoints y 150 jugadores (fuera de producción); Signal 118 PR mergeados y 27 releases a producción desde el 23/09/2026 (GitHub), en desarrollo, signal.dreammakers.tech.
- Sin teléfono en la web y sin foto.
- Inglés en `/` y español en `/es`.
- Libertad visual total: papel cálido, tinta casi negra, un acento naranja quemado, Schibsted Grotesk + JetBrains Mono para fechas y números. Detalle en `DESIGN.md`.
- Estado: buscando trabajo ("Open to remote roles").

## Cambios del 03/11/2026 (segunda ronda)

- Se quitó la barra "Career at a glance" de la portada.
- Se quitó la descarga del CV en PDF (y el PDF de `public/`).
- Links: Calendly https://calendly.com/mrtgeka/talk-with-martin y LinkedIn https://www.linkedin.com/in/martin-gainza/.
- Stack de Vairix y Flydevs: Next.js, Tailwind CSS, GraphQL, Node.js y PostgreSQL.

## Pendientes

- Deploy con OK explícito.
