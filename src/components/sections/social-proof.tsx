import { Card, CardContent } from "@/components/ui/card";

const items = [
  { title: "Fast Turnaround", desc: "Ship UI in days, not weeks." },
  { title: "Clean Components", desc: "Reusable, scalable structure." },
  { title: "SaaS-Ready", desc: "Dashboards, settings, auth screens." },
];

export function SocialProof() {
  return (
    <section className="pb-16">
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.title}
            className="border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
          >
            <CardContent className="pt-6 pb-6 text-center">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {item.desc}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
