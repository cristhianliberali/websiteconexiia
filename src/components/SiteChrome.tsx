import { Link } from "@tanstack/react-router";
import logoGray from "@/assets/conexi-logo-gray.webp";

export function Logo() {
  return (
    <img
      src={logoGray}
      alt="Conexi IA"
      className="h-7 w-auto sm:h-8"
      loading="eager"
      decoding="async"
    />
  );
}

const LEGAL_LINKS = [
  { label: "Termos de uso", to: "/termos/" },
  { label: "Política de privacidade", to: "/privacidade/" },
  { label: "Exclusão de dados", to: "/exclusao-dados/" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <Logo />
            <div className="text-sm text-muted-foreground">
              <p>Operado por Conexi IA</p>
              <p>CNPJ: 45.852.101/0001-29</p>
              <p>
                E-mail:{" "}
                <a href="mailto:contato@conexiia.com.br" className="hover:text-foreground">
                  contato@conexiia.com.br
                </a>
              </p>
            </div>
          </div>

          <nav className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Conexi IA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
