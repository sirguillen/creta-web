import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/components/SiteLayout";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos de Uso y Política de Datos — Brand's Lab" },
      {
        name: "description",
        content:
          "Términos de uso y política de tratamiento de datos de Brand's Lab y la metodología CRETA: propiedad intelectual, neurodatos, ética en IA, seguridad y derechos ARCO+.",
      },
      {
        property: "og:title",
        content: "Términos de Uso y Política de Datos — Brand's Lab",
      },
      {
        property: "og:description",
        content:
          "Documento legal completo: propiedad intelectual, neurodatos, ética en IA, seguridad y derechos ARCO+.",
      },
    ],
  }),
  component: TerminosPage,
});

const sections = [
  { id: "objeto", n: "1", title: "Objeto y propiedad intelectual" },
  { id: "datos", n: "2", title: "Naturaleza de los datos y consentimiento" },
  { id: "ia", n: "3", title: "Supervisión humana y ética de la IA" },
  { id: "seguridad", n: "4", title: "Seguridad y almacenamiento global" },
  { id: "derechos", n: "5", title: "Derechos del Usuario (ARCO+)" },
  { id: "confidencialidad", n: "6", title: "Confidencialidad corporativa" },
  { id: "ley", n: "7", title: "Ley aplicable y jurisdicción" },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-accent px-1.5 py-0.5 text-[0.92em] font-medium text-accent-foreground">
      {children}
    </span>
  );
}

function TerminosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
      <div className="grid lg:grid-cols-[220px_1fr] gap-12">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contenido
            </div>
            <nav className="flex flex-col gap-2 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-muted-foreground hover:text-foreground transition-colors leading-snug"
                >
                  <span className="text-foreground/40 mr-2 tabular-nums">{s.n}.</span>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Documento */}
        <article className="max-w-[68ch]">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Documento legal
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.1] tracking-tight mt-3 text-foreground">
            Términos de Uso y Política de Tratamiento de Datos
          </h1>
          <p className="mt-3 text-lg text-muted-foreground italic font-serif">
            Brand&rsquo;s Lab — Metodología CRETA
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Última actualización:{" "}
            <span className="text-foreground">{SITE.lastUpdated}</span>
          </div>

          <div className="mt-10 prose-spacing space-y-12 text-foreground/90 leading-[1.75]">
            <p>
              Bienvenido a <strong>Brand&rsquo;s Lab</strong>. Al acceder a
              nuestra plataforma y utilizar la metodología <Tag>CRETA</Tag>,
              usted (en adelante el &ldquo;Usuario&rdquo;) y la organización
              que representa (en adelante el &ldquo;Cliente&rdquo;) aceptan
              los siguientes términos y condiciones.
            </p>

            <Section id="objeto" n="1" title="Objeto y propiedad intelectual">
              <p>
                Brand&rsquo;s Lab ofrece una solución de vanguardia que
                fusiona neurociencia e Inteligencia Artificial (IA) para la
                transformación organizacional.
              </p>
              <DefList>
                <DefItem term="Propiedad">
                  La metodología CRETA, sus algoritmos, modelos
                  neurocientíficos, interfaces y marcas son propiedad
                  exclusiva de Brand&rsquo;s Lab.
                </DefItem>
                <DefItem term="Licencia">
                  Se otorga una licencia de uso personal, intransferible y no
                  exclusiva. Queda prohibida la ingeniería inversa, el{" "}
                  <em>scraping</em> de datos o la reproducción total o parcial
                  del método.
                </DefItem>
              </DefList>
            </Section>

            <Section
              id="datos"
              n="2"
              title="Naturaleza de los datos y consentimiento informado"
            >
              <p>
                El Usuario autoriza de manera previa, expresa e informada el
                tratamiento de sus datos personales, incluyendo{" "}
                <strong>
                  datos de personalidad, conducta y estilos cognitivos
                </strong>{" "}
                (en adelante <Tag>Neurodatos</Tag>).
              </p>
              <DefList>
                <DefItem term="Finalidad">
                  Los datos se procesarán exclusivamente para generar perfiles
                  de fortalezas, optimizar la gestión del talento, mejorar el
                  clima organizacional y ofrecer estrategias de liderazgo
                  personalizadas.
                </DefItem>
                <DefItem term="Voluntariedad">
                  El suministro de información es voluntario, entendiendo que
                  es necesario para la ejecución de la metodología CRETA.
                </DefItem>
              </DefList>
            </Section>

            <Section id="ia" n="3" title="Supervisión humana y ética de la IA">
              <p>
                En cumplimiento de los estándares globales de Ética en IA:
              </p>
              <DefList>
                <DefItem term="Apoyo a la decisión">
                  CRETA es una herramienta de soporte. Toda recomendación
                  generada por la IA debe ser validada e interpretada por un
                  líder humano.
                </DefItem>
                <DefItem term="Responsabilidad">
                  El Cliente es el único responsable de las decisiones
                  administrativas o laborales derivadas del uso de la
                  herramienta. Brand&rsquo;s Lab no será responsable por el
                  uso de los informes para fines discriminatorios o que
                  vulneren derechos fundamentales.
                </DefItem>
              </DefList>
            </Section>

            <Section
              id="seguridad"
              n="4"
              title="Seguridad y almacenamiento global"
            >
              <DefList>
                <DefItem term="Infraestructura">
                  Los datos se almacenan en nubes de alta seguridad
                  (AWS&nbsp;/&nbsp;Azure&nbsp;/&nbsp;Google Cloud) con
                  cifrado de grado militar <Tag>AES-256</Tag>.
                </DefItem>
                <DefItem term="Anonimización">
                  Siempre que sea posible, los resultados presentados a la
                  organización serán agregados o anonimizados para proteger la
                  intimidad del Usuario.
                </DefItem>
                <DefItem term="Transferencia internacional">
                  El Usuario acepta que sus datos puedan ser procesados en
                  servidores fuera de su país de residencia, garantizando
                  siempre niveles de protección equivalentes a los estándares
                  del <Tag>GDPR</Tag> (Europa).
                </DefItem>
              </DefList>
            </Section>

            <Section
              id="derechos"
              n="5"
              title="Derechos del Usuario (ARCO+)"
            >
              <p>Usted tiene derecho a:</p>
              <ol className="list-decimal pl-6 space-y-2 marker:text-muted-foreground">
                <li>Conocer, actualizar y rectificar sus datos.</li>
                <li>Solicitar la supresión de la información cuando lo desee.</li>
                <li>
                  <strong>Derecho a la explicación:</strong> solicitar
                  información sobre la lógica aplicada por la IA en la
                  generación de su perfil.
                </li>
              </ol>
            </Section>

            <Section
              id="confidencialidad"
              n="6"
              title="Confidencialidad corporativa"
            >
              <p>
                El Cliente y sus representantes se obligan a mantener estricta
                confidencialidad sobre los informes y metodologías
                compartidas por Brand&rsquo;s Lab, absteniéndose de revelarlos
                a terceros o utilizarlos para desarrollar herramientas
                competitivas.
              </p>
            </Section>

            <Section id="ley" n="7" title="Ley aplicable y jurisdicción">
              <p>
                Este documento se rige por las leyes de la{" "}
                <strong>República de Colombia</strong> y, en lo pertinente
                para usuarios internacionales, por los estándares del{" "}
                <strong>
                  Reglamento General de Protección de Datos (GDPR)
                </strong>{" "}
                de la UE. Cualquier disputa será resuelta ante los centros de
                arbitraje de la <strong>Cámara de Comercio de Bogotá</strong>.
              </p>
            </Section>

            <div className="mt-12 rounded-lg border border-border bg-card p-6">
              <p className="font-serif italic text-foreground leading-relaxed">
                &ldquo;He leído y acepto los Términos de Uso, la Política de
                Privacidad y el procesamiento de mis Neurodatos bajo la
                metodología CRETA.&rdquo;
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Declaración de aceptación
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Para ejercer cualquiera de los derechos descritos en este
              documento, escríbenos a{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-foreground underline underline-offset-4 decoration-highlight decoration-2 hover:decoration-foreground"
              >
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-serif text-2xl text-highlight tabular-nums">
          {n}.
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function DefList({ children }: { children: React.ReactNode }) {
  return <dl className="space-y-3 mt-2">{children}</dl>;
}

function DefItem({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-border pl-4">
      <dt className="font-semibold text-foreground">{term}.</dt>
      <dd className="text-foreground/85 mt-1">{children}</dd>
    </div>
  );
}
