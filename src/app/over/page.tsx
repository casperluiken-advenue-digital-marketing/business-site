import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over",
  description: "Informatie over het bedrijf.",
};

export default function OverPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Over</h1>
        <p className="max-w-2xl text-sm leading-6 text-foreground/70">
          Dit is placeholder-tekst. Vertel hier wie je bent, wat je doet en waarom klanten voor jou
          kiezen.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-background p-6 shadow-sm">
          <div className="text-sm font-semibold">Onze aanpak</div>
          <p className="mt-2 text-sm leading-6 text-foreground/70">
            We starten met doelen en doelgroep, maken daarna een heldere structuur en werken toe
            naar een site die snel laadt en vertrouwen uitstraalt.
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-background p-6 shadow-sm">
          <div className="text-sm font-semibold">Wat je kunt verwachten</div>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-foreground/70">
            <li>• Heldere communicatie en korte lijntjes</li>
            <li>• Snelle iteraties en duidelijke oplevermomenten</li>
            <li>• Focus op gebruiksvriendelijkheid en conversie</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

