"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim().length >= 2 && isEmail(email.trim()) && message.trim().length >= 10;
  }, [name, email, message]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!canSubmit) return;

    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Er ging iets mis. Probeer het opnieuw.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Er ging iets mis. Probeer het opnieuw.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-black/5 bg-background p-6 shadow-sm">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="name">
            Naam
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-xl border border-black/10 bg-background px-3 text-sm outline-none focus:border-black/30"
            placeholder="Jouw naam"
            autoComplete="name"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 rounded-xl border border-black/10 bg-background px-3 text-sm outline-none focus:border-black/30"
            placeholder="naam@bedrijf.nl"
            autoComplete="email"
            inputMode="email"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="message">
            Bericht
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[140px] rounded-xl border border-black/10 bg-background px-3 py-2 text-sm outline-none focus:border-black/30"
            placeholder="Waar kunnen we je mee helpen?"
          />
          <div className="text-xs text-foreground/60">
            Minimaal 10 tekens. We gebruiken dit alleen om te reageren.
          </div>
        </div>

        {error ? <div className="text-sm text-red-600">{error}</div> : null}
        {status === "sent" ? (
          <div className="text-sm text-foreground/80">Verzonden. We nemen snel contact op.</div>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit || status === "sending"}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-4 text-sm font-medium text-background disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-90"
        >
          {status === "sending" ? "Versturen…" : "Verstuur bericht"}
        </button>
      </div>
    </form>
  );
}

