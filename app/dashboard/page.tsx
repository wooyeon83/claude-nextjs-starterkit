import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "대시보드",
  description: "핵심 지표를 한눈에 확인하세요.",
};

const stats = [
  {
    label: "총 매출",
    value: "₩12,450,000",
    change: "+12.5%",
    up: true,
    icon: DollarSign,
  },
  {
    label: "활성 사용자",
    value: "2,847",
    change: "+4.3%",
    up: true,
    icon: Users,
  },
  {
    label: "전환율",
    value: "3.24%",
    change: "-0.8%",
    up: false,
    icon: TrendingUp,
  },
  {
    label: "세션",
    value: "24,891",
    change: "+18.2%",
    up: true,
    icon: Zap,
  },
];

const activities = [
  {
    name: "김지훈",
    action: "새로운 프로젝트를 생성했습니다",
    time: "2분 전",
    initials: "김",
  },
  {
    name: "이서연",
    action: "결제를 완료했습니다",
    time: "10분 전",
    initials: "이",
  },
  {
    name: "박민준",
    action: "팀에 합류했습니다",
    time: "1시간 전",
    initials: "박",
  },
  {
    name: "최유나",
    action: "대시보드 설정을 업데이트했습니다",
    time: "3시간 전",
    initials: "최",
  },
];

const quickActions = [
  {
    title: "새 프로젝트 만들기",
    description: "빈 프로젝트로 시작하거나 템플릿을 선택하세요.",
  },
  {
    title: "팀원 초대",
    description: "이메일로 팀원을 초대할 수 있습니다.",
  },
  {
    title: "문서 읽기",
    description: "스타터킷 사용 가이드를 확인하세요.",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">개요</h1>
          <p className="text-sm text-muted-foreground">
            오늘의 핵심 지표를 한눈에 확인하세요.
          </p>
        </div>
        <Badge>실시간</Badge>
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
                  <span className="text-muted-foreground">이번 달</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {activities.map((a, i) => (
                <div key={a.name}>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{a.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{a.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {a.action}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {a.time}
                    </span>
                  </div>
                  {i < activities.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>빠른 작업</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            {quickActions.map((q) => (
              <div
                key={q.title}
                className="rounded-lg border border-border p-3 transition-colors hover:bg-muted/30"
              >
                <div className="font-medium">{q.title}</div>
                <div className="text-muted-foreground">{q.description}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
