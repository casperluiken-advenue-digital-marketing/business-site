import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Veelgestelde vragen.",
};

const faqs = [
  {
    q: "Hoe snel kan de site live?",
    a: "Met deze basis kunnen we vaak binnen enkele dagen live. Definitieve timing hangt af van content en feedbackrondes.",
  },
  {
    q: "Kan ik later teksten en afbeeldingen aanpassen?",
    a: "Ja. Je kunt content handmatig aanpassen, of we kunnen later een CMS koppelen (bijv. Sanity/Contentful).",
  },
  {
    q: "Is dit goed voor SEO?",
    a: "De basis is SEO-vriendelijk (performance, structuur). Voor maximale SEO stemmen we content, titels en interne links af op zoekwoorden.",
  },
  {
    q: "Doet het contactformulier al e-mail?",
    a: "Nog niet: het formulier gebruikt een API-endpoint (klaar om te koppelen aan e-mail/CRM). Voor nu is het een nette “success”-flow.",
  },
] as const;

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Veelgestelde vragen</h1>
        <p className="max-w-2xl text-sm leading-6 text-foreground/70">
          Voeg hier vragen toe die twijfels wegnemen en het besluit makkelijker maken.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-black/5 bg-background p-6">
            <summary className="cursor-pointer list-none text-sm font-semibold">
              <span className="inline-flex items-center justify-between gap-4">
                {f.q}
                <span className="text-foreground/50 group-open:rotate-45 transition-transform">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-foreground/70">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

