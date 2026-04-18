import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "회원가입",
  description: "새 계정을 만드세요.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold"
          >
            <div className="size-7 rounded-md bg-gradient-to-br from-primary to-primary/60" />
            <span>Next Starter</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">회원가입</h1>
          <p className="text-sm text-muted-foreground">
            몇 초면 계정을 만들 수 있습니다.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              autoComplete="name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
            />
            <p className="text-xs text-muted-foreground">
              8자 이상의 비밀번호를 사용하세요.
            </p>
          </div>
          <Button type="submit" size="lg" className="w-full">
            계정 만들기
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          가입하면 서비스 약관과 개인정보 처리방침에 동의하게 됩니다.
        </p>

        <p className="text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-foreground hover:underline"
          >
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
