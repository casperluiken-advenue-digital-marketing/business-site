import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Overzicht van diensten.",
};

const services = [
  {
    title: "Website (nieuw of redesign)",
    body: "Van one-pager tot complete bedrijfssite. Snel, responsive en goed vindbaar.",
  },
  {
    title: "Conversie & UX",
    body: "Heldere structuur, sterke CTA’s en teksten die twijfels wegnemen.",
  },
  {
    title: "Onderhoud & doorontwikkeling",
    body: "Updates, kleine verbeteringen en uitbreiding met nieuwe pagina’s of features.",
  },
] as const;

export default function DienstenPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Diensten</h1>
        <p className="max-w-2xl text-sm leading-6 text-foreground/70">
          Hieronder staan voorbeeld-diensten. Pas titels en beschrijvingen aan naar jouw aanbod.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-black/5 bg-background p-6 shadow-sm">
            <div className="text-sm font-semibold">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-black/[0.02] to-transparent p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold">Wil je advies?</div>
            <p className="text-sm text-foreground/70">Stuur een bericht, dan denken we mee.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-4 text-sm font-medium text-background hover:opacity-90"
          >
            Contact opnemen
          </Link>
        </div>
      </div>
    </div>
  );
}

