import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Logo />

      <div className="mt-8 max-w-xl text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          We couldn’t find the page you’re looking for.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/">
            <Button>Go home</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Explore stocks</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
