import { Link, Outlet } from "@tanstack/react-router";

export const SITE = {
  name: "Brand's Lab",
  tagline: "Metodología CRETA",
  email: "legal@brandslab.com",
  lastUpdated: "19-04-2026",
};

function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Brand&rsquo;s Lab
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">
            CRETA
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "px-3 py-2 rounded-md text-foreground font-medium" }}
            activeOptions={{ exact: true }}
          >
            Inicio
          </Link>
          <Link
            to="/terminos"
            className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "px-3 py-2 rounded-md text-foreground font-medium" }}
          >
            Términos
          </Link>
          <Link
            to="/contacto"
            className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "px-3 py-2 rounded-md text-foreground font-medium" }}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <div className="font-serif text-lg text-foreground">Brand&rsquo;s Lab</div>
          <div>Metodología CRETA &middot; Neurociencia + IA</div>
        </div>
        <div className="text-left sm:text-right">
          <div>Última actualización: {SITE.lastUpdated}</div>
          <div>
            &copy; {new Date().getFullYear()} Brand&rsquo;s Lab. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
