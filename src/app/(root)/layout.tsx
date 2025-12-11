import Header from "@/components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-dvh text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
}
