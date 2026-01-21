import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const included = [
  "Clear scope & timeline agreed upfront",
  "Responsive implementation (mobile → desktop)",
  "Reusable components & clean structure",
  "UI states: loading / empty / error (where applicable)",
  "Polish pass (spacing, typography, UX details)",
  "Handoff notes so your team can extend it",
];

const notIncluded = [
  "UI/UX design (happy to implement your designs)",
  "Complex backend architecture (available as an add-on)",
  "Copywriting or branding (unless provided)",
];

export default function PricingPage() {
  return (
    <section className="py-16">
      <Badge
        variant="secondary"
        className="border border-border/60 bg-card/40 backdrop-blur uppercase tracking-wide text-xs"
      >
        Pricing
      </Badge>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Pricing & packages
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        Most projects are fixed-price. After a quick chat and a look at your
        Figma, I’ll confirm a clear scope and a firm quote.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">
              UI Implementation Sprint
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-2xl font-semibold">£1,500–£3,000</div>
            <p className="text-sm text-muted-foreground">
              Best when designs are ready and you want fast implementation.
            </p>
            <Separator />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 1–3 key screens or a landing page set</li>
              <li>• Responsive + component cleanup</li>
              <li>• Quick turnaround</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/contact">Get a quote</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/60 backdrop-blur ring-1 ring-primary/25">
          <CardHeader>
            <CardTitle className="text-base flex items-center justify-between">
              SaaS UI Build
              <span className="rounded-md border border-border/60 bg-background/40 px-2 py-1 text-[11px] text-muted-foreground">
                Popular
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-2xl font-semibold">£3,500–£7,500</div>
            <p className="text-sm text-muted-foreground">
              Multi-screen app UI: dashboards, flows, settings, and UI states.
            </p>
            <Separator />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 4–10 screens (depending on complexity)</li>
              <li>• States: loading/empty/error</li>
              <li>• Component system for consistency</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/contact">Get a quote</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Ongoing Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-2xl font-semibold">£600–£1,200/mo</div>
            <p className="text-sm text-muted-foreground">
              For teams who want reliable UI updates and improvements each
              month.
            </p>
            <Separator />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Updates, new screens, polish</li>
              <li>• Bug fixes & small features</li>
              <li>• Priority option available</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Ask about retainers</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">What’s included</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {included.map((x) => (
              <div key={x} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                <span>{x}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">
              Not included (unless agreed)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {notIncluded.map((x) => (
              <div key={x} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                <span>{x}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 rounded-lg border border-border/60 bg-card/40 backdrop-blur p-6">
        <h2 className="text-lg font-semibold tracking-tight">
          Ready to get started?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send your Figma link or design with a quick description of what you
          need. I'll reply with scope, timeline, and a fixed quote.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Contact me</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/work">View work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
