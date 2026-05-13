import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brand's Lab — Documentos legales" },
      {
        name: "description",
        content:
          "Documentos legales de Brand's Lab (Metodología CRETA): términos de uso, política de tratamiento de datos y contacto.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
        Documentos legales
      </div>

      <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight mt-6 text-foreground">
        Brand&rsquo;s Lab
        <span className="block italic text-muted-foreground text-3xl sm:text-4xl mt-2">
          Metodología CRETA
        </span>
      </h1>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Una solución que fusiona neurociencia e Inteligencia Artificial para la
        transformación organizacional. Aquí encontrarás los documentos legales
        que rigen el uso de nuestra plataforma y el tratamiento de tus datos.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
          <div className="mt-3 text-sm text-muted-foreground">
            Términos de uso, tratamiento de Neurodatos, derechos ARCO+, ética
            en IA y jurisdicción aplicable.
          </div>
          <div className="mt-4 text-sm font-medium text-foreground inline-flex items-center gap-1">
            Leer documento
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link
          to="/contacto"
          className="group rounded-lg border border-border bg-card p-6 hover:border-foreground/30 hover:shadow-sm transition-all"
        >
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Contacto
          </div>
          <div className="font-serif text-2xl mt-2 text-foreground">
            Ejerce tus derechos
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            Solicita acceso, rectificación, supresión o explicación sobre la
            lógica aplicada por la IA en tu perfil.
          </div>
          <div className="mt-4 text-sm font-medium text-foreground inline-flex items-center gap-1">
            Escríbenos
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </div>
        </Link>
      </div>

      <div className="mt-10 text-sm text-muted-foreground">
        Última actualización:{" "}
        <span className="text-foreground">{SITE.lastUpdated}</span>
      </div>
    </section>
  );
}
