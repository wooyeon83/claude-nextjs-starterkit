import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "로그인",
  description: "계정에 로그인합니다.",
};

export default function LoginPage() {
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
          <h1 className="text-2xl font-semibold tracking-tight">로그인</h1>
          <p className="text-sm text-muted-foreground">
            이메일을 입력해 계정에 접속하세요.
          </p>
        </div>

        <form className="space-y-4">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password">비밀번호</Label>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            로그인
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="h-px w-full bg-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-2 text-xs uppercase text-muted-foreground">
              또는
            </span>
          </div>
        </div>

        <Button variant="outline" size="lg" className="w-full">
          Google로 계속하기
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-foreground hover:underline"
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
