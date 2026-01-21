import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Let's Work Together
        </h1>

        <p className="mt-3 text-muted-foreground">
          Have Figma designs ready or need help implementing your SaaS UI? Send
          over the details and I'll reply with scope, timeline, and a quote.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {/* BOOK A CALL */}
          <Card className="border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base">Book A Call</CardTitle>
              <CardDescription>
                Best for new projects and quick discussions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link
                  href="MY CALENDLY ADDRESS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule A Call
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* EMAIL */}
          <Card className="border-border/60 bg-card/60 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base">Email Me</CardTitle>
              <CardDescription>
                Send details, links or any questions you may have.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:cn-software@outlook.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
