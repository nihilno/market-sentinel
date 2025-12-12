import Logo from "@/components/global/logo";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="auth-layout">
      <section className="auth-left-section">
        <div className="auth-logo">
          <Logo />
        </div>
        <div className="flex-1 pb-6 lg:pb-8">{children}</div>
      </section>

      <section className="auth-right-section">
        <div className="relative z-10 lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            I rely on Signalist every trading day. The price-change summaries
            are fast and accurate, the watchlist is easy to manage, and the
            alert system caught a breakout that saved me hours of manual
            monitoring.
          </blockquote>
          <div className="flex justify-between">
            <div>
              <cite className="auth-testimonial-author">- Ethan R.</cite>
              <p className="text-gray-500 max-md:text-xs">Retail Investor</p>
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, index) => (
                <Image
                  src="assets/icons/star.svg"
                  alt="Star"
                  key={index}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
}
