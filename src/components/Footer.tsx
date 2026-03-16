import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:px-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-sm font-semibold">Bedrijfssite</div>
          <p className="text-sm text-foreground/70">
            Placeholder-website. Vervang straks naam, tekst en branding met je echte content.
          </p>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-semibold">Pagina’s</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link className="hover:text-foreground" href="/diensten">
                Diensten
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/prijzen">
                Prijzen
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-semibold">Contact</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>info@voorbeeld.nl</li>
            <li>+31 6 12 34 56 78</li>
            <li>Amsterdam</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Bedrijfssite. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}

