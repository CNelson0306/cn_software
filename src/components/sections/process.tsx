import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    n: "01",
    title: "Quick scope",
    desc: "You share Figma/designs and notes. I confirm screens, states, and timeline.",
  },
  {
    n: "02",
    title: "Build",
    desc: "I implement the UI in Next.js/React with reusable components and clean structure.",
  },
  {
    n: "03",
    title: "Polish & handoff",
    desc: "Responsive checks, UX polish, and a smooth handover your team can extend.",
  },
];

export function Process() {
  return (
    <section className="relative py-16 border-y border-border/60 overflow-hidden">
      {/* subtle background glow to match other sections */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="absolute -right-20 top-24 h-64 w-64 rounded-full blur-3xl"
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
        Process
      </Badge>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        Simple, fast, predictable
      </h2>

      <p className="mt-2 max-w-2xl text-muted-foreground">
        A straightforward process designed to move quickly without surprises.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <Card
            key={s.n}
            className="relative border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
          >
            <CardContent className="pt-6 space-y-2">
              {/* step number */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-primary">{s.n}</span>
                <span className="h-px flex-1 bg-border/60" />
              </div>

              <div className="font-medium">{s.title}</div>

              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
