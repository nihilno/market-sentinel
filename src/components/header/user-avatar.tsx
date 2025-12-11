import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  username: string;
  size?: "sm" | "lg";
};

function UserAvatar({ username = "M", size = "sm" }: UserAvatarProps) {
  return (
    <Avatar className={cn(size === "sm" ? "h-8 w-8" : "h-10 w-10")}>
      <AvatarImage src="https://github.com/nihilno.png" />
      <AvatarFallback className="bg-yellow-500 text-sm font-bold text-yellow-900">
        {username[0]}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
