import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-background p-10 text-center md:p-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          지금 바로 프로젝트를 시작하세요
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          이 스타터킷과 함께라면 설정에 시간을 허비할 일이 없습니다.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              대시보드로 이동
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
