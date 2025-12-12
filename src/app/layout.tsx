import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Signalist",
    default: "Dashboard | Signalist",
  },
  description:
    "Track real-time stock prices, get personalized alerts and explore detailed company insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
