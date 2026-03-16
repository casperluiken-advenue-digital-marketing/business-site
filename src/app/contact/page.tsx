import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-sm leading-6 text-foreground/70">
          Stuur een bericht. Dit formulier werkt al met een API-endpoint; e-mail/CRM-koppeling kan
          later.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <aside className="md:col-span-2">
          <div className="rounded-2xl border border-black/5 bg-background p-6 shadow-sm">
            <div className="text-sm font-semibold">Gegevens</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>info@voorbeeld.nl</li>
              <li>+31 6 12 34 56 78</li>
              <li>Amsterdam</li>
              <li className="pt-2 text-xs text-foreground/60">
                Tip: vervang dit met je echte contactgegevens.
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

