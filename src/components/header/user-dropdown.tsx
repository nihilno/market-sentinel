"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import NavItems from "./nav-items";
import UserAvatar from "./user-avatar";

function UserDropdown() {
  const { push } = useRouter();

  function handleSignOut() {
    push("/sign-in");
  }

  const user = {
    name: "Maciej",
    email: "maciej.polowy1@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <UserAvatar username={user?.name} />
          <div className="hidden flex-col items-start md:flex">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-gray-400" sideOffset={10}>
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-3 py-2">
            <UserAvatar username={user?.name} size="lg" />
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600 sm:hidden" />
        <div className="flex px-2 sm:hidden">
          <NavItems />
        </div>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-md group cursor-pointer px-4 font-medium text-gray-100 transition-colors focus:bg-transparent"
        >
          <LogOut className="h-4 w-4 group-focus:text-yellow-500" />
          <span className="group-focus:text-yellow-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
