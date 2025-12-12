"use client";

import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Logo />

      <div className="mt-8 max-w-xl text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          An unexpected error occurred. You can try again or go back home.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Link href="/">
            <Button variant="ghost">Go home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
