"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work/", label: "Work" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const base = href.replace(/\/$/, "");
    return pathname?.startsWith(base);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/cns_logo.png"
            alt="Company logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm transition-colors"
            >
              <span
                className={
                  isActive(l.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {l.label}
              </span>

              {/* Active underline */}
              {isActive(l.href) && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </Link>
          ))}

          <Button asChild size="sm">
            <Link href="/contact/">Book a call</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-border/70 bg-background/40"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)} // ✅ auto-close
                    className={[
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      isActive(l.href)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="mt-4">
                  <Button
                    asChild
                    className="w-full"
                    onClick={() => setOpen(false)} // ✅ auto-close
                  >
                    <Link href="/contact/">Book a call</Link>
                  </Button>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">
                    CN Software
                  </span>{" "}
                  — Next.js & React UI implementation
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
