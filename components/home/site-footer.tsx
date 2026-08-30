import Link from "next/link";

const navLinks = [
  { label: "El espacio", href: "#espacio" },
  { label: "Cómo acompaño", href: "#enfoque" },
  { label: "Sesiones", href: "#sesiones" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Preguntas", href: "#preguntas" },
];

const altermanuHref = "https://altermanu.com/";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-tight text-foreground">
              Lucía<span className="italic">Indo.</span>
            </span>
            <span className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Psicóloga Sanitaria
            </span>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Navegación del pie"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-pretty text-xs leading-relaxed text-muted-foreground">
            Este espacio no sustituye una atención de urgencia. Si estás
            atravesando una crisis o pensás que podés hacerte daño, comunicate
            con los servicios de emergencia de tu país.
          </p>
          <p className="shrink-0 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lucía Indo
          </p>
        </div>

        <div className="border-t border-border pt-4 mt-4 flex gap-1 text-pretty text-xs leading-relaxed text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl">Creado con ♥ por</p>
          <Link
            className="underline cursor-pointer text-secondary"
            href={altermanuHref}
            target="_blank"
          >
            Manu Maldonado
          </Link>
        </div>
      </div>
    </footer>
  );
}
