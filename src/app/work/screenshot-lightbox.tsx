"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Shot = {
  src: string;
  alt: string;
  caption?: string;
};

export function ScreenshotLightbox({
  screenshots,
  title = "Screenshots",
}: {
  screenshots: Shot[];
  title?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<Shot | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((s) => (
          <button
            key={s.src}
            type="button"
            onClick={() => {
              setActive(s);
              setOpen(true);
            }}
            className="group text-left"
          >
            <div className="overflow-hidden rounded-md border border-border/60 bg-muted transition hover:border-primary/30 hover:shadow-lg">
              <div className="flex items-center justify-center p-3">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1400}
                  height={900}
                  className="h-48 w-full object-contain sm:h-56"
                />
              </div>

              {s.caption ? (
                <div className="border-t border-border/60 px-3 py-2 text-xs text-muted-foreground">
                  {s.caption}
                  <span className="ml-2 text-primary/90 opacity-0 transition group-hover:opacity-100">
                    Click to enlarge →
                  </span>
                </div>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-base">{title}</DialogTitle>
          </DialogHeader>

          {active ? (
            <div className="space-y-3">
              <div className="overflow-hidden rounded-md border border-border/60 bg-muted">
                <div className="flex items-center justify-center p-3">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    width={2000}
                    height={1200}
                    className="max-h-[70vh] w-full object-contain"
                    priority
                  />
                </div>
              </div>

              {active.caption ? (
                <p className="text-sm text-muted-foreground">
                  {active.caption}
                </p>
              ) : null}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
