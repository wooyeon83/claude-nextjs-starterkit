import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-xs text-muted-foreground">
              © 2026 {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              홈
            </Link>
            <Link href="/dashboard" className="hover:text-foreground">
              대시보드
            </Link>
            <a
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              문서
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
