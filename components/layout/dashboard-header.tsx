import { Bell, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-8">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="검색..." className="pl-9" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="알림">
          <Bell />
        </Button>
        <ThemeToggle />
        <Avatar>
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
