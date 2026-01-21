import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/cns_logo.png"
            alt="Company logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-shadow-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-sm text-shadow-muted-foreground hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-shadow-muted-foreground hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm text-shadow-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
          <Button asChild size="sm">
            <Link href="/contact">Book A Call</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
