import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata = {
  title: "Work",
  description:
    "Examples of SaaS UI and web applications built with Next.js and React by CN Software.",
};

const projects = [
  {
    featured: true,
    title: "TC Wales (Full-stack Web App)",
    clientType: "Training provider",
    role: "Full-stack build + ongoing support",
    desc: "A production platform with training dates, shop, payments, and quiz content.",
    image: "/tcwales.png",
    url: "https://tcwtraining.com",
    highlights: [
      "Calendar-based training date services",
      "Stripe checkout & product sales",
      "Quiz questions imported from external APIs",
      "Ongoing maintenance & feature updates",
    ],
    tags: ["React.js", "API Integrations", "Stripe", "Admin UI"],
  },
  {
    featured: false,
    title: "Fuschia Hive Hair & Beauty Website",
    clientType: "Local business",
    role: "UI build + integrations",
    desc: "Marketing site focused on conversion and mobile UX.",
    image: "/fuschia.png",
    url: "https://fuschia-hive.co.uk",
    highlights: [
      "Services & pricing sections",
      "Contact/booking-friendly UX",
      "Google Maps integration",
      "Responsive layout across devices",
    ],
    tags: ["React.js", "Forms", "Google Maps", "Responsive UI"],
  },
  {
    featured: false,
    title: "Personal Portfolio",
    clientType: "Brand site",
    role: "Design + build",
    desc: "Fast, responsive portfolio with clean component structure.",
    image: "/portfolio.png",
    url: "https://carl-nelson.co.uk",
    highlights: [
      "Responsive layout & reusable components",
      "Performance-focused implementation",
      "Domain + deployment management",
    ],
    tags: ["Next.js", "CSS", "Performance", "Deployment"],
  },
];

const featured = projects.find((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function WorkPage() {
  return (
    <>
      <main className="py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          A few examples of the kind of work I have completed for clients.
        </p>

        <div className="mt-8 space-y-6">
          {/* Featured */}
          {featured && (
            <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
              <div className="grid gap-0 md:grid-cols-[1.2fr_1fr] md:items-center">
                {/* Image */}
                <Link
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-center overflow-hidden rounded-md border bg-muted md:py-4">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        width={1600}
                        height={1000}
                        className="h-48 w-full object-contain p-3 sm:h-56 md:h-64"
                      />
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 md:pl-0 md:py-6 md:pr-6">
                  <div className="inline-flex items-center rounded-md border border-border/60 bg-background/40 px-2 py-1 text-[11px] text-muted-foreground">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Featured project
                  </div>

                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    {featured.title}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {featured.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-md border px-2 py-0.5 text-muted-foreground">
                      <span className="text-foreground/80 font-medium">
                        Role:
                      </span>{" "}
                      {featured.role}
                    </span>
                    <span className="rounded-md border px-2 py-0.5 text-muted-foreground">
                      <span className="text-foreground/80 font-medium">
                        Client:
                      </span>{" "}
                      {featured.clientType}
                    </span>
                  </div>

                  <div className="mt-4 space-y-1">
                    {featured.highlights.slice(0, 4).map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-primary hover:underline"
                    >
                      View Project →
                    </Link>
                  </div>

                  <div className="mt-2">
                    <Link
                      href="/work/tc-wales/"
                      className="inline-block text-sm font-medium text-primary hover:underline"
                    >
                      Read case study →
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Others */}
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((p) => (
              <Card
                key={p.title}
                className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
              >
                <Link href={p.url} target="_blank" rel="noopener noreferrer">
                  <div className="px-4 pt-4">
                    <div className="overflow-hidden rounded-md border bg-muted">
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={1200}
                        height={750}
                        className="h-16 w-full object-contain p-2"
                      />
                    </div>
                  </div>
                </Link>

                <CardHeader className="pb-2 pt-3">
                  <CardTitle className="text-base">{p.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 pt-0">
                  <p className="text-sm text-muted-foreground">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-md border px-2 py-0.5 text-muted-foreground">
                      <span className="text-foreground/80 font-medium">
                        Role:
                      </span>{" "}
                      {p.role}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {p.highlights.slice(0, 3).map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-primary hover:underline"
                  >
                    View Project →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
