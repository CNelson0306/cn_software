import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata = {
  title: "Contact",
  description: "Contact information and links to contact CN Software.",
};

const EMAIL = "cn-software@outlook.com";
const CALENDLY_URL = "https://calendly.com/cn-software";

const mailtoHref = (() => {
  const subject = encodeURIComponent(
    "Project enquiry — SaaS UI implementation",
  );
  const body = encodeURIComponent(
    `Hi Carl,\n\nHere’s what I’m looking for:\n- Project type (SaaS UI / landing / dashboard):\n- Figma link:\n- Number of screens / key flows:\n- Deadline/timeline:\n- Tech stack (Next.js/React/etc):\n\nThanks!`,
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
})();

export default function ContactPage() {
  return (
    <section className="py-16">
      <Badge
        variant="secondary"
        className="border border-border/60 bg-card/40 backdrop-blur uppercase tracking-wide text-xs"
      >
        Contact
      </Badge>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Let’s work together
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        Have designs ready or need help implementing your SaaS UI? Send the
        details and I’ll reply with a clear scope, timeline, and fixed quote
        from CN Software.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {/* Primary actions */}
        <Card className="border-border/60 bg-card/60 backdrop-blur lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">
              Choose how you’d like to start
            </CardTitle>
            <CardDescription>
              Booking a call is fastest for new projects. Email works best for
              detailed briefs.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" className="w-full">
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-border/70 bg-background/40 backdrop-blur"
              >
                <a href={mailtoHref}>Email me</a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-border/60 bg-background/30 p-4">
                <div className="text-sm font-medium">Email</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {EMAIL}
                </div>
              </div>

              <div className="rounded-lg border border-border/60 bg-background/30 p-4">
                <div className="text-sm font-medium">Response time</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Typically within{" "}
                  <span className="text-foreground/90 font-medium">
                    24 hours
                  </span>{" "}
                  on weekdays.
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>
                <strong className="font-medium text-foreground">
                  Trusted by growing businesses
                </strong>{" "}
                to build and maintain production web platforms.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* What to include */}
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">What to include</CardTitle>
            <CardDescription>
              Helps me quote accurately and quickly.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {[
              "Figma link (or screenshots)",
              "Number of screens / key flows",
              "Any required states (loading/empty/error)",
              "Deadline / launch date",
              "Tech stack (Next.js/React, Tailwind, etc.)",
            ].map((x) => (
              <div key={x} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                <span>{x}</span>
              </div>
            ))}

            <div className="pt-3">
              <Button
                asChild
                variant="outline"
                className="w-full border-border/70 bg-background/40 backdrop-blur"
              >
                <Link href="/pricing/">View pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
