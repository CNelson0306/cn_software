import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    title: "UI Implementation Sprint",
    price: "£1,500-£3,000",
    desc: "Best when designs are ready and you want fast, clean implementation.",
    bullets: [
      "Figma → Next.js/React UI",
      "Responsive layout",
      "Reusable components",
      "Polish pass & handoff",
    ],
  },
  {
    title: "SaaS UI Build",
    price: "£3,500-£7,500",
    desc: "For multi-screen apps: dashboards, flows, settings, and UI states.",
    bullets: [
      "Multi-page app UI",
      "Loading/empty/error states",
      "Consistency & component system",
      "Accessibility basics",
    ],
    featured: true,
  },
  {
    title: "Ongoing Support",
    price: "£600-£1,200/mo",
    desc: "For teams who want reliable UI updates and improvements each month.",
    bullets: [
      "UI updates & new screens",
      "Bug fixes & tweaks",
      "Small features & polish",
      "Priority turnaround option",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="relative py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <Badge
            variant="secondary"
            className="border border-border/60 bg-card/40 backdrop-blur uppercase tracking-wide text-xs"
          >
            Pricing
          </Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Simple packages. Clear scope.
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Pricing depends on scope, but these ranges give you a solid starting
            point. I'll confirm a fixed quote after a quick chat.
          </p>
        </div>

        <Button asChild variant="outline" className="hidden sm:inline-flex">
          <Link href="/pricing">View details</Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {tiers.map((t) => (
          <Card
            key={t.title}
            className={[
              "border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg",
              t.featured ? "ring-1 ring-primary/25" : "",
            ].join(" ")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center justify-between gap-3">
                <span>{t.title}</span>
                {t.featured ? (
                  <span className="rounded-md border border-border/60 bg-background/40 px-2 py-1 text-[11px] text-muted-foreground">
                    Popular
                  </span>
                ) : null}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div>
                <div className="text-2xl font-semibold tracking-tight">
                  {t.price}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>

              <div className="space-y-2">
                {t.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  className="w-full"
                  variant={t.featured ? "default" : "outline"}
                >
                  <Link href="/contact">Get a quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        Prefer something custom?{" "}
        <Link className="text-primary hover:underline" href="/contact">
          Message me
        </Link>
        .
      </div>
    </section>
  );
}
