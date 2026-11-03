# Solicitud de propuesta: el sitio con los colores del panel y el personaje Creta

**Qué se pide**: una propuesta visual de www.cretaapp.com que use la misma paleta del panel de administración de CRETA, para que el sitio, el panel, la pantalla de TV y la app se vean como una sola marca, y que ponga al personaje **Creta** en algunos puntos del sitio, elegidos después de leer los textos.

**Lo que no se toca**: ningún texto. La propuesta lee los textos para decidir dónde y cómo aparece Creta, pero no reescribe, agrega, quita ni reordena ninguno (ver §2 y la verificación de §7).

La propuesta se entrega como commits en esta misma rama (`propuesta/paleta-y-personaje-creta`), sobre este PR, con capturas de antes y después. **No se mergea a `main` hasta que se apruebe**: cada push a `main` publica el sitio.

---

## 1. Insumos incluidos en esta rama

| Ruta | Qué es |
|---|---|
| `_propuesta/README.md` | Este documento. |
| `_propuesta/paleta.css` | Los tokens de color del panel (`--creta-*`), con sus contrastes, y la correspondencia propuesta con las variables actuales de `styles.css`. |
| `_propuesta/verificar-textos.py` | Comprueba que ningún texto cambió (§7). |
| `img/creta/creta_0N_<pose>_busto_600.webp` | Las 8 poses de Creta en busto, 600×720, WebP con transparencia (~50 KB c/u). |
| `img/creta/creta_0N_<pose>_avatar_256.webp` | Las 8 poses en avatar circular, 256×256, WebP con transparencia (~13 KB c/u). |
| `fonts/plus-jakarta-sans-v12/` | Plus Jakarta Sans, la fuente del panel (variable, pesos 200–800, latin y latin-ext) con su `@font-face` (`plus-jakarta-sans.css`) y su licencia (`OFL.txt`). |
| `img/brand/logo-creta-blanco.svg` | El logo de CRETA en blanco, el del menú del panel (79×112). Solo sobre fondo oscuro (`--creta-navy`). |

Las carpetas que empiezan con `_` no se publican en el sitio (Jekyll), pero el repositorio es público: aquí no va nada que no pueda verse.

### 1.1. Las poses de Creta

Ilustración 3D, fondo transparente sin halo sobre crema, blanco y marino. **La cabeza está en la misma posición en las 8 poses** (busto: punta nasal en x ≈ 291, y ≈ 286 a 600×720; avatar: centrada), así que se puede cambiar de pose en el mismo lugar sin que «salte». El busto llega justo al borde inferior: apoyarlo sobre el borde inferior de una tarjeta o sección, nunca flotando con el torso cortado en el aire. El avatar va inscrito en un círculo con margen transparente del 6,6 %; se lee bien desde 28 px.

| Pose | Qué expresa | Uso sugerido (del paquete del personaje) |
|---|---|---|
| `01_saludo` | Saluda con la mano abierta, sonrisa cálida | Bienvenida, portada |
| `02_feliz` | Postura relajada, sonrisa amable (la pose base) | Inicio, cabeceras, estados neutros |
| `03_celebra` | Puños arriba, ojos cerrados de alegría | Logros, reconocimiento |
| `04_escucha` | Atenta, ceja arqueada, boca en «o» | Escuchar, procesar, atender |
| `05_tranquila` | Ojos cerrados, sonrisa serena | Privacidad, mensajes sensibles, calma |
| `06_confundida` | Dedo en el mentón, cejas asimétricas | Errores, «no encontrado» |
| `07_senalando` | Índice arriba, dirige la atención | Guías, llamadas a la acción |
| `08_animo` | Pulgar arriba, sonrisa motivadora | Confirmaciones, refuerzo positivo |

## 2. Restricciones

1. **Ningún texto cambia.** Ni el contenido visible, ni el `<title>`, ni los `<meta>` (`description`, `og:*`), ni los `alt`/`title`/`aria-label` existentes, ni el orden en que aparecen. Tampoco se agrega texto nuevo (ni globos de diálogo de Creta con frases, ni rótulos, ni pies de imagen). Cambiar etiquetas, clases o el anidamiento del HTML sí se permite, mientras el texto siga igual.
2. **Creta es decorativa**: cada imagen lleva `alt=""` (vacío) para que los lectores de pantalla la salten. Un `alt` con texto cuenta como texto nuevo y lo rechaza la verificación.
3. **Sin dependencias nuevas**: HTML + CSS + JS plano, sin framework, build ni npm. Las fuentes, desde `fonts/` (no agregar orígenes externos nuevos). Nada de animaciones pesadas: si se anima a Creta, solo con CSS y respetando `prefers-reduced-motion`.
4. **El encabezado y el pie se repiten en 5 archivos** (`index.html`, `terminos.html`, `cretacoins.html`, `contacto.html` y `404.html`), igual que el `<head>`: un cambio va en los cinco. `404.html` usa rutas absolutas (`/styles.css`, `/img/...`) porque se sirve en cualquier URL.
5. **No cambiar** `CNAME`, los `id` de las secciones (`#metodologia`, `#cretacoins`, `#legal` y todos los de `terminos.html` y `cretacoins.html`; la app enlaza a `terminos.html#chat-ia`), los enlaces, `og:url` ni `<link rel="canonical">`.
6. **En `terminos.html` y `cretacoins.html` no se toca el contenido de `<article>`**: son documentos legales versionados. Los cambios de estilo y del encabezado de la página sí se pueden.
7. **Estilo del CSS**: compacto, varias propiedades por línea y comentarios de sección `/* Nombre */`, como el `styles.css` actual. Sin estilos en línea: cada cosa nueva, una clase.
8. **Accesibilidad AA**: texto ≥ 4,5:1 (grande ≥ 3:1). Las reglas de contraste de la paleta están en `_propuesta/paleta.css` §3; en particular, nunca texto blanco sobre el naranja base (`#E0520B`) ni sobre el dorado.
9. **Responsivo**: sin scroll horizontal a 390 px; en móvil Creta se reduce, se mueve debajo del texto o se oculta, pero nunca tapa texto ni botones.
10. **Imágenes**: `width` y `height` en cada `<img>` (sin saltos de diseño), `loading="lazy"` y `decoding="async"` salvo la del hero. Para un avatar pequeño, el WebP de 256 px; para un busto, el de 600×720 (sirve hasta ~300 px de ancho en pantallas 2×).

## 3. Paleta

La del panel, en `_propuesta/paleta.css`. En resumen:

| Rol | Token | HEX |
|---|---|---|
| Fondo | `--creta-bg` (Crema, oficial) | `#FBF6EF` |
| Tarjetas | `--creta-surface` | `#FFFFFF` |
| Texto | `--creta-text` (Marino, oficial) | `#0A1428` |
| Texto secundario | `--creta-muted` | `#6B6458` |
| Secciones alternas (`.muted`) | `--creta-line-soft` | `#F1E8DB` |
| Bordes | `--creta-line` | `#EADFCF` |
| Botón principal | `--creta-orange` (sombra media del cabello, oficial) / hover | `#C83E03` / `#A63303` |
| Acento del personaje (decorativo) | `--creta-hair` / `--creta-hair-highlight` (oficiales) | `#E0520B` / `#F36A23` |
| Tinte cálido | `--creta-hair-soft` | `#FCE3D4` |
| Dorado (medallón, oficial; decorativo) | `--creta-gold` / etiqueta: `--creta-gold-soft` + `--creta-gold-text` | `#DDA032` / `#F6EBCF` + `#7A5A12` |
| Enlaces | `--creta-link` | `#1E3F94` |
| Bloques oscuros | `--creta-navy`, `--creta-navy-2` | `#0A1428`, `#13213D` |

El sitio ya usa variables (`--background`, `--foreground`, `--muted`, `--accent`, `--border`, `--highlight`…): la sección 2 de `paleta.css` propone a qué token pasa cada una. El dorado reemplaza al ámbar actual de `--highlight` (puntos, números de las tarjetas y subrayados), y el naranja es el del botón principal. No hay modo oscuro; no hace falta proponerlo.

## 4. Tipografía (recomendado)

El panel usa **Plus Jakarta Sans** en todo. Para que el sitio se sienta igual, se recomienda reemplazar *Inter* por Plus Jakarta Sans (local, desde `fonts/plus-jakarta-sans-v12/plus-jakarta-sans.css`) y quitar la petición a Google Fonts de Inter. Sobre *Instrument Serif* (títulos, clase `.serif`), la propuesta puede mostrar las dos opciones: conservarla como contraste editorial, o pasar los títulos a Plus Jakarta Sans en peso 700–800 con `letter-spacing: -0.01em` (lo que hace el panel). Si se conserva, sigue cargándose desde Google Fonts como hoy.

## 5. Dónde poner a Creta (propuesta inicial, a partir de los textos)

Pocas apariciones, cada una con una razón en el texto que la acompaña. Son sugerencias: la propuesta puede mover, quitar o cambiar de pose cualquiera, explicando por qué en el PR.

| Página / sección | Texto que la motiva | Pose | Formato |
|---|---|---|---|
| `index.html`, hero | «Neurociencia del comportamiento e Inteligencia Artificial para transformar la motivación…»: Creta es la IA de la plataforma y es su presentación | `01_saludo` | Busto grande a la derecha del texto en escritorio, apoyado en el borde inferior del hero; en móvil, debajo o más pequeño |
| `index.html`, 02 — Cómo funciona | Card A «App móvil para colaboradores» (retroalimentación personalizada) y B «Panel front organizacional» (CRETA hace las retroalimentaciones colectivas): son los lugares donde Creta habla | `02_feliz` (A) y `07_senalando` (B), o una sola `07_senalando` junto al título | Avatar pequeño en la esquina de cada card, o busto junto al título |
| `index.html`, 04 — CretaCoins | «Cada logro cuenta. Y se reconoce.» | `03_celebra` | Busto junto al título o la intro |
| `index.html`, 05 — Resultados | «¿Para qué lo hacemos?» y la lista de resultados | `08_animo` | Busto en la columna del título, debajo de él (escritorio) |
| `index.html`, 06 — Legal | «Tratamos datos sensibles con responsabilidad.» | `05_tranquila` | Avatar junto a la intro |
| `contacto.html` | «Estamos aquí para ayudarte» | `04_escucha` (o `01_saludo`) | Busto junto al título o a la tarjeta del correo |
| `404.html` | «Esta página no existe» | `06_confundida` | Busto junto al texto |
| `terminos.html`, `cretacoins.html` | Documentos legales | Ninguna, u opcional `05_tranquila` | A lo sumo un avatar pequeño en el encabezado de la página, fuera de `<article>` |

Fuera de esas, no repetir la misma pose en una página, y no poner a Creta en 01 — Qué es ni en 03 — Diagnósticos (texto denso y técnico).

## 6. Qué entregar

1. Commits en esta rama con los cambios a `styles.css` y a los HTML (y `script.js` si hace falta).
2. **Capturas de antes y después** de cada página, en escritorio (1440 px) y en móvil (390 px), pegadas en el PR (no se versionan).
3. La salida de `python3 _propuesta/verificar-textos.py` en el PR: las 5 páginas en `OK`.
4. En la descripción del PR, por cada aparición de Creta: dónde, qué pose y por qué; y qué se decidió sobre la tipografía (§4).
5. Si la propuesta no usa alguna imagen de `img/creta/`, no hace falta borrarla antes de la aprobación; se limpia antes del merge.

## 7. Verificación

```bash
python3 -m http.server 8000                 # ver el sitio en http://localhost:8000
python3 _propuesta/verificar-textos.py      # 0 = ningún texto cambió; 1 = hay diferencias (las imprime)
```

El script compara, en las 5 páginas, el texto visible y los atributos `alt`, `title`, `aria-label`, `placeholder` y el `content` de los `<meta>` contra `origin/main` (o la referencia que se le pase), ignorando espacios y saltos de línea. Se probó con cambios falsos: detecta un texto modificado y un `alt` con texto, y acepta un `alt=""` y reindentar.

## 8. Origen de los insumos

- **Paleta**: `public/css/creta.css` del panel de administración (`:root`), que toma los valores «oficiales» de la especificación de assets del personaje (renders sRGB). Azul y turquesa salen del globo de la pantalla de TV. Contrastes calculados con la fórmula de luminancia relativa de WCAG 2.
- **Creta**: paquete oficial `creta_pack_completo_png24` (PNG-24 sRGB; bustos de 1200×1440 y avatares de 512×512). Convertidos con cwebp 1.6.0: bustos con `cwebp -q 85 -alpha_q 100 -m 6 -resize 600 720` (los mismos parámetros del panel; `01_saludo`, `03_celebra`, `07_senalando` y `08_animo` son idénticos byte a byte a los del panel) y avatares con `-resize 256 256`. Los originales no se suben a este repositorio público.
- **Plus Jakarta Sans v12**: copia de la fuente del panel, descargada de Google Fonts (SIL Open Font License 1.1, `OFL.txt`).
- **Logo**: `logo-creta-blanco.svg` del panel (sin scripts ni referencias externas).

SHA-256:

| Archivo | SHA-256 | Original (SHA-256) |
|---|---|---|
| `img/creta/creta_01_saludo_busto_600.webp` | `bc2fd221ce8cfd2c58a02d85ea66a9978d71483e60052c39babb80178b6a1eb0` | `17d04fc97dbfab667e243ad410238a5ab5c4c9aae3b9842eb2c5bbd42f768cd3` |
| `img/creta/creta_02_feliz_busto_600.webp` | `e1aa35aa2ebf5731850bc5b59d61d638cd2e0bb87a363482772a47f006121b29` | `58bc26dc71f4ad479b88ff83bf12ce580e5a4d85dab3a2914e51b600dc961c67` |
| `img/creta/creta_03_celebra_busto_600.webp` | `edf68c1d3d97c8e668bdde94d63427c7df813fc654aac17ddca5eaa9cae63db2` | `4eb384e70de9142dc261d2b82db119fe8a98493106c33054154092b4d9df1fcc` |
| `img/creta/creta_04_escucha_busto_600.webp` | `7d8695b981be734b263aa7703af949264e0a88b6cbe8d60a89f33aa783afdf53` | `d426c7c6d64d3fc5195038a0079e7378fe48cd104ac8b8ffc8e1303221905842` |
| `img/creta/creta_05_tranquila_busto_600.webp` | `8379991decfce2533063a81327c2ce0ed88a7e964eca22e74764d2043cdf998e` | `810bfe9edad18eb608ade3ae33577e9119c3b622da49e14491c0c5737ccb3bde` |
| `img/creta/creta_06_confundida_busto_600.webp` | `383a533a3b57590566b98cfee68133eb5e90d0c8dec9a22853e5351aff26eee6` | `353a8fe7a352460432cd09b68c05b7dcb577ca8679674e0b84018253caf4931f` |
| `img/creta/creta_07_senalando_busto_600.webp` | `68048c58d07ab336e303736c1bb19d487be467a8178bd2840d35fe317774abd9` | `8405b011b1d57d9ce4c3c6187cd38a77b535077628095b107cc0a23b71b43862` |
| `img/creta/creta_08_animo_busto_600.webp` | `21b2d4879ecb3919d35d3288c3e01a86f1f1f8f95e1d5b90c0c3f9717f20d152` | `bca702e65f248f86455aabf446da987a1bf7fd832547fb3cae4839e50598167c` |
| `img/creta/creta_01_saludo_avatar_256.webp` | `9617f68264902a35f51edd6c548751beff07a6a8b3c6e5b1ab99821f850d7de9` | `a5479a02cf21ff3bd50fbe9deadd9b54eb364de59c766913b6f38aacd710c7bd` |
| `img/creta/creta_02_feliz_avatar_256.webp` | `b8760e6e0645fa53cb731f21a163a774d2829dcabe1f9ca262331e1c7e2e75b1` | `c49245cc96990fc5b4c728ccd1576be36f8d41d5d3842253bd48f0675b72f45a` |
| `img/creta/creta_03_celebra_avatar_256.webp` | `eb35a3e94f571284c985e812907137bde2f0a9f0e1162fc0b75de0ad7558fc43` | `10b0a6b2a380e4c7bbdc0ad84a8d7f119b1aed313d5642bc97b0773c27b0e244` |
| `img/creta/creta_04_escucha_avatar_256.webp` | `3a36575126870a3bb1cd674f17ca240547facb4451b772351c4ba9d0bad929a6` | `67a6061e088d848e7975847752fcf97c265a42bb5918e7877b800cef66a229cd` |
| `img/creta/creta_05_tranquila_avatar_256.webp` | `2484a6cad67b1115a22140828be4033067b0e3aab409b8b4e9dad42ec835c724` | `be272082d65dd7f1b9b57dd70bb7641884b007688860f27f843fd547cec72746` |
| `img/creta/creta_06_confundida_avatar_256.webp` | `d0785a66fd2dd30e088a15d236f94b38da27607a4568acf10a31dadee25aae05` | `78f277a027730d34b61c0d038be51704bef16c54ffaa6d8cee093dae7ade6a8f` |
| `img/creta/creta_07_senalando_avatar_256.webp` | `519fc7f3dfcf844fc96aa007cd0d1ed70d2da086dc00d1644d079929dee3e605` | `afffe402e9d52ca4292e36ce5cb739bc0acaf7340d9c4ce555d4597f1249a7bf` |
| `img/creta/creta_08_animo_avatar_256.webp` | `acf133edab84e5c270d4d2ab12105c69604280b1a0874f994d8faeae37d9cf57` | `9e9fccf6283eb71a76d21a35a6a5d3d7e8c16c2a9c5a7baacc6bf6a36e5af587` |
| `fonts/plus-jakarta-sans-v12/plus-jakarta-sans-latin-normal.woff2` | `cd8db90cd950e26bc8761f65d323588bd5cd112d326d6d322bc7c8ea86771215` | Google Fonts |
| `fonts/plus-jakarta-sans-v12/plus-jakarta-sans-latin-ext-normal.woff2` | `0303e02b53b0298fb26a0193941a2e8754f0f9a9fce50d90b178d8da3424873f` | Google Fonts |
| `img/brand/logo-creta-blanco.svg` | `e3e3fdcc68236596083d58cbe0f20427093ba5690d6eee3af8d06618d2dc84b3` | panel de administración |
