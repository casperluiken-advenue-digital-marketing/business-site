import Link from "next/link";
import { NavLink } from "@/components/NavLink";

const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/over", label: "Over" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold tracking-tight hover:bg-black/[0.04]"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-background">
            B
          </span>
          Bedrijfssite
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-foreground px-4 text-sm font-medium text-background hover:opacity-90"
          >
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </header>
  );
}

