import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Logo, Footer } from "@/components/SiteChrome";

function LegalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="inline-flex items-center">
          <Logo />
        </Link>
        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          Voltar ao site
        </Link>
      </div>
    </header>
  );
}

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title?: string;
  updatedAt?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LegalHeader />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {title && <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>}
        {updatedAt && (
          <p className="mt-2 text-sm text-muted-foreground">Última atualização: {updatedAt}</p>
        )}
        <div className={title ? "mt-8 space-y-8" : "space-y-8"}>{children}</div>
      </article>
      <Footer />
    </main>
  );
}
