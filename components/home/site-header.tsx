import Link from "next/link";

const navLinks = [
  { label: "El espacio", href: "#espacio" },
  { label: "Cómo acompaño", href: "#enfoque" },
  { label: "Sesiones", href: "#sesiones" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Preguntas", href: "#preguntas" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="#inicio" className="flex flex-col leading-none">
          <span className="font-serif font-medium text-2xl tracking-tight text-foreground">
            Lucía<span className="italic">Indo.</span>
          </span>
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Psicóloga Sanitaria
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegación principal"
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
    </header>
  );
}
