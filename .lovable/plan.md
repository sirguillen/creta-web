## Objetivo

Transformar el sitio actual (que solo muestra documentos legales) en un **landing page real sobre la metodología CRETA**, basado en el contenido de brandslab.com.co. Los términos y condiciones siguen accesibles en `/terminos` mediante link directo (URL compartible para Apple App Store).

## Estructura de rutas

```
/                → Landing CRETA (nuevo, completo)
/terminos        → Términos y Política de Datos (ya existe, sin cambios de contenido)
/contacto        → Contacto / ARCO+ (ya existe)
```

## Nueva landing `/` — secciones

1. **Hero**
   - Eyebrow: "Brand's Lab · Metodología"
   - Título grande: "CRETA"
   - Subtítulo: "Neurociencia del comportamiento + IA para transformar la motivación, el liderazgo y los resultados de tu organización."
   - CTAs: "Conoce CRETA" (scroll a #metodologia) y "Términos y Política de Datos" (Link a `/terminos`)

2. **¿Qué es CRETA?**
   - Texto adaptado de brandslab.com.co: fusiona neurociencia del comportamiento con prácticas organizacionales para potenciar rendimiento y motivación.
   - 3 badges: Neurociencia · IA · Bienestar organizacional

3. **¿Cómo funciona?** (3 columnas)
   - **App móvil para colaboradores** — avance individual, retroalimentación personalizada, bucles de compromiso.
   - **Panel front organizacional** — proyecta contexto de bienestar, retroalimentación colectiva automática.
   - **Medición en tiempo real** — alineación de objetivos individuales con los de la empresa.

4. **Diagnósticos CRETA** (3 tarjetas)
   - Reconocimiento Emocional
   - Salario Emocional
   - Anámnesis Organizacional
   (resúmenes breves de 2–3 líneas cada uno, basados en el sitio original)

5. **Resultados / Para qué sirve**
   - Bullets cortos: ambiente productivo, equipos cohesionados, decisiones de liderazgo informadas, resultados tangibles.

6. **Sección legal / confianza**
   - Card destacada: "Documentación legal"
   - Link grande y claro a **`/terminos`** (Términos de Uso y Política de Tratamiento de Datos — incluye Neurodatos, ARCO+, AES-256, GDPR).
   - Link secundario a `/contacto`.
   - Esta es la sección clave para Apple: el link a `/terminos` queda visible y la URL es directa y compartible.

7. **Footer** (ya existe en SiteLayout)
   - Mantener nav con Inicio · Términos · Contacto, copyright y "Última actualización".

## Cambios técnicos

- **`src/routes/index.tsx`** — reescribir completamente con las secciones anteriores. Mantener import de `SITE` y usar `<Link to="/terminos">` para el link directo.
- **`src/components/SiteLayout.tsx`** — verificar que el header tenga nav visible "CRETA · Términos · Contacto" para que `/terminos` siempre sea accesible desde cualquier página.
- **`src/routes/terminos.tsx`** — sin cambios (ya está completo y es la URL que usará Apple).
- **`src/routes/contacto.tsx`** — sin cambios.
- **`src/routes/__root.tsx`** — actualizar meta `<title>` y `description` por defecto a algo tipo *"CRETA — Metodología de Brand's Lab"* para reflejar que ya no es solo documento legal.
- **SEO por ruta**: `/` recibe título y descripción de CRETA; `/terminos` mantiene su título legal propio.

## Estilo

Mantener el sistema de diseño actual (Instrument Serif + Inter, paleta cálida ámbar/azul) — ya está definido y funciona. La landing usará las mismas tarjetas, badges (`Tag`) y tipografía que ya existen en `/terminos` para coherencia visual.

## Resultado para Apple

La URL `https://<dominio>/terminos` queda como link directo, estable y compartible para pegar en App Store Connect. El landing en `/` da contexto profesional sobre CRETA, lo que aumenta credibilidad ante el revisor de Apple.

¿Procedo con la implementación?
