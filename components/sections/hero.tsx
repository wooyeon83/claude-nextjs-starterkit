import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/10%),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="gap-1.5">
            <Sparkles className="size-3" />
            Next.js 16 + Tailwind v4 + shadcn/ui
          </Badge>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            빠르게 시작하는
            <br />
            모던 웹 스타터킷
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            최신 기술 스택과 프로덕션급 컴포넌트가 미리 구성되어 있어
            <br className="hidden md:block" />
            아이디어를 곧바로 제품으로 만들 수 있습니다.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                대시보드 보기
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/auth/login">로그인 해보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
