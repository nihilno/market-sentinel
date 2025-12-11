import { LayoutDashboard, LineChart, Search } from "lucide-react";

export const NAV_ITEMS = [
  {
    href: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    label: "Dashboard",
  },
  { href: "/search", icon: <Search className="h-4 w-4" />, label: "Search" },
  {
    href: "/watchlist",
    icon: <LineChart className="h-4 w-4" />,
    label: "Watchlist",
  },
];
