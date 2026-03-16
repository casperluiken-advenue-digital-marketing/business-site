import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-black/[0.03] via-transparent to-black/[0.06] p-8 sm:p-12">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background px-3 py-1 text-xs font-medium text-foreground/80">
            Nieuwe website · Snel live op Vercel
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Een strakke bedrijfssite die vertrouwen wekt en leads oplevert.
          </h1>
          <p className="text-base leading-7 text-foreground/70 sm:text-lg">
            Dit is een mooie basis met pagina’s voor diensten, prijzen, FAQ en contact. Vervang
            later eenvoudig de placeholder-tekst door jouw echte content.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
            >
              Plan een kennismaking
            </Link>
            <Link
              href="/diensten"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-black/10 bg-background px-5 text-sm font-medium text-foreground hover:bg-black/[0.03]"
            >
              Bekijk diensten
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">Waarom deze site werkt</h2>
          <Link className="text-sm font-medium text-foreground/70 hover:text-foreground" href="/prijzen">
            Bekijk prijzen →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Snel en modern",
              body: "Next.js + Tailwind voor performance, SEO en een strakke uitstraling.",
            },
            {
              title: "Duidelijke structuur",
              body: "Heldere navigatie, dienstpagina’s en een FAQ die bezwaren wegneemt.",
            },
            {
              title: "Conversiegericht",
              body: "CTA’s en een contactformulier met server-side endpoint (klaar voor e-mail later).",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/5 bg-background p-6 shadow-sm"
            >
              <div className="text-sm font-semibold">{card.title}</div>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-black/5 bg-background p-8 sm:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Klaar om te starten?</h2>
            <p className="text-sm leading-6 text-foreground/70">
              Vertel kort wat je nodig hebt, dan nemen we contact op. (Nu nog placeholder-contact,
              straks te koppelen aan e-mail/CRM.)
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
            >
              Contact opnemen
            </Link>
            <Link
              href="/faq"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-black/10 bg-background px-5 text-sm font-medium text-foreground hover:bg-black/[0.03]"
            >
              Veelgestelde vragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
