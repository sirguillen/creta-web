import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/components/SiteLayout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Brand's Lab" },
      {
        name: "description",
        content:
          "Contacta con Brand's Lab para ejercer tus derechos ARCO+ o resolver dudas sobre el tratamiento de tus datos.",
      },
      { property: "og:title", content: "Contacto — Brand's Lab" },
      {
        property: "og:description",
        content:
          "Ejerce tus derechos ARCO+ o consulta dudas sobre la metodología CRETA.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-20 pb-10">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Contacto
      </div>
      <h1 className="font-serif text-5xl leading-[1.05] tracking-tight mt-3 text-foreground">
        Estamos aquí para ayudarte
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Para ejercer tus derechos <strong>ARCO+</strong> (acceso, rectificación,
        cancelación, oposición y derecho a la explicación), o para cualquier
        consulta sobre el tratamiento de tus datos bajo la metodología{" "}
        <strong>CRETA</strong>, escríbenos al siguiente correo:
      </p>

      <a
        href={`mailto:${SITE.email}`}
        className="mt-8 group block rounded-lg border border-border bg-card p-6 hover:border-foreground/30 transition-all"
      >
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Correo legal
        </div>
        <div className="font-serif text-3xl mt-2 text-foreground group-hover:text-highlight transition-colors">
          {SITE.email}
        </div>
        <div className="mt-3 text-sm text-muted-foreground">
          Responderemos a tu solicitud en un plazo razonable conforme a la
          normativa aplicable.
        </div>
      </a>

      <div className="mt-10 text-sm text-muted-foreground">
        ¿Aún no has leído nuestros{" "}
        <Link
          to="/terminos"
          className="text-foreground underline underline-offset-4 decoration-highlight decoration-2 hover:decoration-foreground"
        >
          Términos y Política de Datos
        </Link>
        ?
      </div>
    </section>
  );
}
