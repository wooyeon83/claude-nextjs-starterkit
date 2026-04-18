export const siteConfig = {
  name: "Next Starter",
  description: "Next.js 16 + Tailwind v4 + shadcn/ui 기반의 모던 웹 스타터킷",
  url: "https://example.com",
  ogImage: "https://example.com/og.png",
  links: {
    github: "https://github.com",
    docs: "https://nextjs.org/docs",
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "대시보드", href: "/dashboard" },
  { title: "문서", href: "https://nextjs.org/docs", external: true },
];
