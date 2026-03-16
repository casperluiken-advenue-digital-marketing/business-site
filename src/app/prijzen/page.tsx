import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prijzen",
  description: "Voorbeeldpakketten en prijzen.",
};

const tiers = [
  {
    name: "Start",
    price: "€ 750",
    desc: "Voor een simpele, strakke one-pager.",
    items: ["1 pagina", "Basis SEO", "Contact CTA", "Responsive"],
    featured: false,
  },
  {
    name: "Groei",
    price: "€ 1.500",
    desc: "Voor de meeste bedrijven: meerdere pagina’s en duidelijke structuur.",
    items: ["Tot 6 pagina’s", "Diensten/FAQ", "Contactformulier", "Snelle performance"],
    featured: true,
  },
  {
    name: "Pro",
    price: "Op aanvraag",
    desc: "Maatwerk: extra modules, integraties of een webapp.",
    items: ["Maatwerk pagina’s", "Integraties", "A/B-ready", "Doorontwikkeling"],
    featured: false,
  },
] as const;

export default function PrijzenPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Prijzen</h1>
        <p className="max-w-2xl text-sm leading-6 text-foreground/70">
          Dit zijn voorbeeldprijzen. Je kunt dit aanpassen naar jouw pakketten of uurtarief.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "rounded-2xl border bg-background p-6 shadow-sm",
              t.featured ? "border-black/15" : "border-black/5",
            ].join(" ")}
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="text-sm font-semibold">{t.name}</div>
              {t.featured ? (
                <span className="rounded-full border border-black/10 bg-black/[0.03] px-2 py-0.5 text-[11px] font-medium text-foreground/80">
                  Meest gekozen
                </span>
              ) : null}
            </div>
            <div className="mt-3 text-3xl font-semibold tracking-tight">{t.price}</div>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{t.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              {t.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={[
                "mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl px-4 text-sm font-medium",
                t.featured
                  ? "bg-foreground text-background hover:opacity-90"
                  : "border border-black/10 bg-background text-foreground hover:bg-black/[0.03]",
              ].join(" ")}
            >
              Offerte aanvragen
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

