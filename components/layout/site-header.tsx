import Link from "next/link";
import { Code } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { mainNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="size-6 rounded-md bg-gradient-to-br from-primary to-primary/60" />
            <span>{siteConfig.name}</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="소스 코드"
            >
              <Code />
            </a>
          </Button>
          <ThemeToggle />
          <Button size="sm" asChild className="ml-1">
            <Link href="/auth/login">로그인</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
