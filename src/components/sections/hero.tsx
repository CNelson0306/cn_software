import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background: subtle grid + glow */}
      <div className="pointer-events-none absolute inset-0">
        {/* faint grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[48px_48px]" />
        {/* glow blobs */}
        <div
          className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, hsl(var(--primary)) 35%, transparent), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, hsl(var(--primary)) 18%, transparent), transparent 60%)",
          }}
        />
      </div>

      <Badge
        variant="secondary"
        className="border border-border/60 bg-card/40 backdrop-blur uppercase tracking-wide text-xs"
      >
        Figma/Design → Next.js/React.js Implementation
      </Badge>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl sm:tracking-[-0.02em]">
        Pixel-perfect SaaS UI{" "}
        <span className="bg-linear-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent font-bold">
          shipped fast
        </span>
        .
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        I turn Figma designs into responsive, production-ready Next.js/React
        interfaces— clean components, polished UX details, and an easy handoff
        your team can extend.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <Link href="/contact">Get a quote</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-border/70 bg-background/40 backdrop-blur"
        >
          <Link href="/work">View work</Link>
        </Button>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-muted-foreground">
          <strong className="font-medium text-foreground">
            Trusted by growing businesses
          </strong>{" "}
          to build and maintain production web platforms.
        </span>
      </div>

      {/* quick credibility row */}
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Responsive & Accessible UI
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Reusable components & clean structure
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          SaaS dashboards & flows
        </div>
      </div>
    </section>
  );
}
