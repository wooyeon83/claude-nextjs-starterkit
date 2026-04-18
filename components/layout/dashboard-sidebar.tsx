"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartColumn,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { title: "개요", href: "/dashboard", icon: LayoutDashboard },
  { title: "분석", href: "/dashboard/analytics", icon: ChartColumn },
  { title: "프로젝트", href: "/dashboard/projects", icon: FolderKanban },
  { title: "팀", href: "/dashboard/team", icon: Users },
  { title: "설정", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-background px-3 py-4 md:flex">
      <div className="mb-6 px-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="size-6 rounded-md bg-gradient-to-br from-primary to-primary/60" />
          <span>Next Starter</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
              )}
            >
              <Icon className="size-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
