import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock,
  Eye,
  Monitor,
  MousePointerClick,
  Smartphone,
  Sparkles,
  Tablet,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "분석",
  description: "방문자 및 트래픽 지표를 확인하세요.",
};

const stats = [
  {
    label: "페이지뷰",
    value: "184,302",
    change: "+9.4%",
    up: true,
    icon: Eye,
  },
  {
    label: "이탈률",
    value: "42.1%",
    change: "-2.1%",
    up: true,
    icon: MousePointerClick,
  },
  {
    label: "평균 체류 시간",
    value: "3m 42s",
    change: "+6.8%",
    up: true,
    icon: Clock,
  },
  {
    label: "신규 세션",
    value: "12,408",
    change: "-1.3%",
    up: false,
    icon: Sparkles,
  },
];

const sources = [
  { name: "자연 검색", visits: 42180, share: 52, change: "+8.2%" },
  { name: "직접 방문", visits: 18940, share: 23, change: "+3.5%" },
  { name: "추천", visits: 9210, share: 11, change: "+1.7%" },
  { name: "소셜", visits: 7340, share: 9, change: "+12.4%" },
  { name: "이메일", visits: 3980, share: 5, change: "-0.6%" },
];

const devices = [
  { name: "데스크톱", share: 58, icon: Monitor },
  { name: "모바일", share: 34, icon: Smartphone },
  { name: "태블릿", share: 8, icon: Tablet },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">분석</h1>
          <p className="text-sm text-muted-foreground">
            방문자 흐름과 참여 지표를 한눈에 확인하세요.
          </p>
        </div>
        <Badge>7일</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {s.label}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">{s.value}</div>
                <div
                  className={
                    "mt-1 flex items-center gap-1 text-xs " +
                    (s.up
                      ? "text-emerald-600 dark:text-emerald-500"
                      : "text-red-600 dark:text-red-500")
                  }
                >
                  {s.up ? (
                    <ArrowUpRight className="size-3" />
                  ) : (
                    <ArrowDownRight className="size-3" />
                  )}
                  {s.change}
                  <span className="text-muted-foreground">지난주 대비</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>트래픽 소스</CardTitle>
            <CardDescription>
              채널별 방문수와 지난주 대비 증감입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {sources.map((s) => (
                <div key={s.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{s.visits.toLocaleString()} 방문</span>
                      <span
                        className={
                          s.change.startsWith("-")
                            ? "text-red-600 dark:text-red-500"
                            : "text-emerald-600 dark:text-emerald-500"
                        }
                      >
                        {s.change}
                      </span>
                    </div>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${s.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>디바이스</CardTitle>
            <CardDescription>접속 기기 비율입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {devices.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium">
                        <Icon className="size-4 text-muted-foreground" />
                        {d.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {d.share}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${d.share}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
