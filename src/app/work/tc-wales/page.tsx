import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScreenshotLightbox } from "../screenshot-lightbox";

export const metadata = {
  title: "TC Wales Case Study",
  description:
    "A production training and consultancy platform with bookings, payments and ongoing support by CN Software.",
};

const details = [
  { label: "Client", value: "TC Wales (Training and Consultancy provider)" },
  { label: "Role", value: "Full-stack build & ongoing support" },
  {
    label: "Summary",
    value:
      "A production platform for training dates, online booking & sales, plus quiz-based content for upcoming exams. ",
  },
];

const features = [
  "Training date calendars and course listings",
  "Services listed for all transport management needs",
  "Stripe checkout & online payments",
  "Quiz content import from external APIs",
  "Responsive UI across devices",
  "Ongoing updates, improvements, maintenance and support",
];

const outcomes = [
  "A single platform to manage training dates and course sales.",
  "A stable production system that can evolve as the business grows",
  "Reduced admin friction by keeping key workflows in one place",
];

const screenshots = [
  {
    src: "/tcwales.png",
    alt: "TC Wales platform preview",
    caption: "Live production platform for course listings and sales",
  },
  {
    src: "/tcw-courses.png",
    alt: "TC Wales course calendar",
    caption:
      "Course calendar showing available dates, pricing, and availability.",
  },
  {
    src: "/tcw-shop.png",
    alt: "TC Wales shop",
    caption: "Preview of online shop and products available",
  },
  {
    src: "/tcw-checkout.png",
    alt: "TC Wales checkout preview",
    caption: "Preview of Stripe checkout and payment page of live site",
  },
  // ADD MORE SCREENSHOTS WHEN AVAILABLE
];

export default function TCWalesCaseStudyPage() {
  return (
    <section className="py-16">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge
          variant="secondary"
          className="border border-border/60 bg-card/40 backdrop-blur uppercase tracking-wide text-xs"
        >
          Case Study
        </Badge>

        <Link
          href="/work/"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back To Work
        </Link>
      </div>

      {/* HERO SECTION */}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        TC Wales - Full-Stack Training Platform
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        A production web platform for managing training courses, bookings,
        payments, and ongoing content updates.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {/* Main image / preview */}
        <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg lg:col-span-2">
          <div className="p-4">
            <div className="flex items-center justify-center overflow-hidden rounded-md border bg-muted">
              <Image
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                width={1600}
                height={1000}
                className="h-56 w-full object-contain p-3 sm:h-64"
                priority
              />
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              {screenshots[0].caption}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild>
                <Link
                  href="https://tcwtraining.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-border/70 bg-background/40 backdrop-blur"
              >
                <Link href="/contact/">Discuss A Project</Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Project details */}
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Project details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {details.map((d) => (
              <div
                key={d.label}
                className="rounded-lg border border-border/60 p-3"
              >
                <div className="text-xs text-muted-foreground">{d.label}</div>
                <div className="mt-1 text-sm text-foreground">{d.value}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Content sections */}
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {/* Challenge */}
        <Card className="border-border/60 bg-card/60 backdrop-blur lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">The challenge</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>
              TC Wales needed a single platform to manage their growing training
              business, including upcoming training dates, online sales, and
              quiz-based content.
            </p>
            <p>
              The goal was to keep everything clear for customers and easy to
              update as new courses and requirements were added.
            </p>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="border-border/60 bg-card/60 backdrop-blur lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">The solution</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              I built a custom production platform tailored to their workflow,
              bringing scheduling, payments, and content into one place — and I
              continue to maintain and extend it as the business evolves.
            </p>

            <Separator className="my-4" />

            <div className="grid gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Screenshots */}
      <div className="mt-4">
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Screenshots</CardTitle>
          </CardHeader>

          <CardContent>
            <ScreenshotLightbox
              title="TC Wales — Screenshots"
              screenshots={screenshots.slice(1)} // keeps hero as screenshots[0]
            />
          </CardContent>
        </Card>
      </div>

      {/* Outcomes */}
      <div className="mt-4">
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Outcome</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {outcomes.map((o) => (
              <div key={o} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                <span>{o}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-lg border border-border/60 bg-card/40 backdrop-blur p-6">
        <h2 className="text-lg font-semibold tracking-tight">
          Want something similar?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          I build and maintain production-ready web platforms for businesses
          that need more than a basic website. Send a quick overview and I'll
          reply with scope, timeline, and a fixed quote.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact/">Get in touch</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-border/70 bg-background/40 backdrop-blur"
          >
            <Link href="/pricing/">View pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
