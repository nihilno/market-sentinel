"use client";

import { NAV_ITEMS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchCommand from "./search-command";

function NavItems() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-3 p-2 sm:flex-row sm:gap-10">
        {NAV_ITEMS.map((item) => {
          if (item.label === "Search")
            return (
              <li key="search-trigger">
                <SearchCommand
                  renderAs="text"
                  label="Search"
                  initialStocks={[]}
                />
              </li>
            );
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-2 transition-colors hover:text-yellow-500",
                  pathname === item.href
                    ? "font-semibold text-gray-100"
                    : "text-gray-100/50",
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavItems;
