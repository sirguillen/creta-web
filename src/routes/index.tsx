import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRETA — Metodología de Brand's Lab | Neurociencia + IA" },
      {
        name: "description",
        content:
          "CRETA es la metodología de Brand's Lab que fusiona neurociencia del comportamiento e Inteligencia Artificial para potenciar la motivación, el liderazgo y los resultados organizacionales.",
      },
      { property: "og:title", content: "CRETA — Metodología de Brand's Lab" },
      {
        property: "og:description",
        content:
          "Neurociencia del comportamiento + IA para transformar la motivación y los resultados de tu organización.",
      },
    ],
  }),
  component: Index,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
          Brand&rsquo;s Lab &middot; Metodología
        </div>

        <h1 className="font-serif text-6xl sm:text-8xl leading-[0.95] tracking-tight mt-6 text-foreground">
          CRETA
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-serif italic">
          Neurociencia del comportamiento e Inteligencia Artificial para
          transformar la motivación, el liderazgo y los resultados de tu
          organización.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#metodologia"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Conoce CRETA
          </a>
          <Link
            to="/terminos"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
          >
            Términos y Política de Datos →
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          <Tag>Neurociencia</Tag>
          <Tag>Inteligencia Artificial</Tag>
          <Tag>Bienestar organizacional</Tag>
        </div>
      </section>

      {/* ¿Qué es CRETA? */}
      <section id="metodologia" className="border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                01 &mdash; Qué es
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight mt-3 text-foreground">
                Una metodología que entiende cómo funciona la mente humana en el
                trabajo.
              </h2>
            </div>
            <div className="space-y-5 text-foreground/85 leading-[1.75] text-lg">
              <p>
                <strong>CRETA</strong> es el resultado de años de investigación
                en neurociencia del comportamiento aplicada al entorno
                organizacional. Fusiona ciencia, datos y tecnología para
                comprender qué motiva a las personas y cómo dirigirlas hacia
                objetivos concretos.
              </p>
              <p>
                Su objetivo principal es <em>estimular la motivación</em>{" "}
                dentro de la organización, alinear los objetivos individuales
                con los de la empresa y crear un ambiente de bienestar que
                promueva el rendimiento óptimo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            02 &mdash; Cómo funciona
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight mt-3 text-foreground max-w-3xl">
            Tecnología que mide, retroalimenta y compromete &mdash; en tiempo
            real.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Pillar
              n="A"
              title="App móvil para colaboradores"
              body="Cada persona ve su avance individual, recibe retroalimentaciones personalizadas y activa bucles de compromiso hacia los objetivos propuestos por la organización."
            />
            <Pillar
              n="B"
              title="Panel front organizacional"
              body="La empresa proyecta el contexto de bienestar diseñado para los objetivos. CRETA hace retroalimentaciones colectivas de avances y retos superados de manera automática."
            />
            <Pillar
              n="C"
              title="Medición en tiempo real"
              body="La herramienta mide el avance de los trabajadores hacia objetivos definidos, facilitando retroalimentación constante, automática y a voluntad."
            />
          </div>
        </div>
      </section>

      {/* Diagnósticos */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            03 &mdash; Diagnósticos
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight mt-3 text-foreground max-w-3xl">
            Tres diagnósticos para leer la biología humana de tu organización.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Diagnostic
              title="Reconocimiento Emocional"
              body="Identifica y comprende las emociones que experimentan los empleados. Permite a los líderes tomar decisiones más informadas para dirigir equipos hacia el éxito."
            />
            <Diagnostic
              title="Salario Emocional"
              body="Diseña una estructura de compensación que va más allá de lo financiero, atendiendo reconocimiento, pertenencia, desarrollo y equilibrio vida-trabajo."
            />
            <Diagnostic
              title="Anámnesis Organizacional"
              body="Identifica las brechas entre la cultura ideal y la experiencia real en la empresa, y abre el camino para cerrarlas con estrategias concretas."
            />
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                04 &mdash; Resultados
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight mt-3 text-foreground">
                ¿Para qué lo hacemos?
              </h2>
            </div>
            <ul className="space-y-4 text-lg text-foreground/85">
              <Result>Ambiente laboral más productivo y cohesionado.</Result>
              <Result>
                Equipos alineados con los objetivos estratégicos de la empresa.
              </Result>
              <Result>
                Decisiones de liderazgo informadas por datos y neurociencia.
              </Result>
              <Result>
                Resultados tangibles, medibles y sostenibles en el tiempo.
              </Result>
            </ul>
          </div>
        </div>
      </section>

      {/* Documentación legal */}
      <section id="legal" className="border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            05 &mdash; Legal
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight mt-3 text-foreground max-w-3xl">
            Documentación legal de la plataforma CRETA.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Tratamos datos sensibles con responsabilidad. Aquí encontrarás los
            términos de uso y la política de tratamiento de Neurodatos que rigen
            el uso de la plataforma.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <Link
              to="/terminos"
              className="group rounded-lg border border-border bg-card p-6 hover:border-foreground/30 hover:shadow-sm transition-all"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Documento principal
              </div>
              <div className="font-serif text-2xl mt-2 text-foreground">
                Términos y Política de Datos
              </div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Propiedad intelectual, tratamiento de Neurodatos, ética en IA,
                seguridad AES-256, derechos ARCO+ y jurisdicción aplicable.
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <MiniTag>Neurodatos</MiniTag>
                <MiniTag>ARCO+</MiniTag>
                <MiniTag>AES-256</MiniTag>
                <MiniTag>GDPR</MiniTag>
              </div>
              <div className="mt-5 text-sm font-medium text-foreground inline-flex items-center gap-1">
                Leer documento
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>

            <Link
              to="/contacto"
              className="group rounded-lg border border-border bg-card p-6 hover:border-foreground/30 hover:shadow-sm transition-all"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Contacto legal
              </div>
              <div className="font-serif text-2xl mt-2 text-foreground">
                Ejerce tus derechos
              </div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Solicita acceso, rectificación, supresión o explicación sobre
                la lógica aplicada por la IA en tu perfil.
              </div>
              <div className="mt-5 text-sm font-medium text-foreground inline-flex items-center gap-1">
                Escríbenos
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            Última actualización del documento legal:{" "}
            <span className="text-foreground">{SITE.lastUpdated}</span>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <div className="font-serif text-3xl text-highlight">{n}.</div>
      <div className="font-serif text-xl mt-3 text-foreground leading-snug">
        {title}
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function Diagnostic({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 hover:border-foreground/30 transition-colors">
      <div className="font-serif text-xl text-foreground leading-snug">
        {title}
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function Result({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
      <span>{children}</span>
    </li>
  );
}

function MiniTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-accent px-2 py-0.5 text-[0.7rem] font-medium text-accent-foreground uppercase tracking-wider">
      {children}
    </span>
  );
}
