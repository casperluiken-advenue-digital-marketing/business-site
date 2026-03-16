"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: Props) {
  const pathname = usePathname();
  const hrefStr = typeof href === "string" ? href : href.pathname ?? "";
  const active = hrefStr !== "/" && pathname?.startsWith(hrefStr);

  return (
    <Link
      href={href}
      className={[
        "inline-flex h-10 items-center rounded-xl px-3 text-sm font-medium transition-colors",
        active ? "bg-black/[0.06] text-foreground" : "text-foreground/80 hover:bg-black/[0.04]",
        className ?? "",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

