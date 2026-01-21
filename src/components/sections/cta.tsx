import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTA() {
  return (
    <section className="py-16 border-y border-border/60">
      <Card>
        <CardContent className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              Want me to implement your UI?
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Send your Figma link or Design and I'll reply with scope &
              timeline.
            </div>
          </div>

          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
