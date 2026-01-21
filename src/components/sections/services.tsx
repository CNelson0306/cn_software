import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Design → Next.js UI",
    bullets: [
      "Responsive layouts",
      "Pixel-perfect implementation",
      "Reusable components",
    ],
  },
  {
    title: "Dashboard & App Screens",
    bullets: [
      "Tables, filters, empty states",
      "Loading & error states",
      "Component consistency",
    ],
  },
  {
    title: "Polish Pass",
    bullets: [
      "Spacing & typography cleanup",
      "Accessibility basics",
      "Performance-first UI",
    ],
  },
];

export function Services() {
  return (
    <section className="relative py-16 border-y border-border/60 overflow-hidden">
      {/* subtle background wash to separate the section */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="absolute -left-20 top-10 h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, hsl(var(--primary)) 18%, transparent), transparent 60%)",
          }}
        />
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <Badge
            variant="secondary"
            className="border border-border/60 bg-card/40 backdrop-blur uppercase tracking-wide text-xs"
          >
            What I do
          </Badge>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            UI implementation that’s ready for production
          </h2>

          <p className="mt-2 text-muted-foreground max-w-2xl">
            Clear scope, clean code, polished UX details—delivered in a way your
            team can extend.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className="border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{service.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 pt-0">
              {service.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                  <span>{bullet}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
