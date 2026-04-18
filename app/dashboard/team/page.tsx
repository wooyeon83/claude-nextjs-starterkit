import type { Metadata } from "next";
import { Mail, Shield, UserPlus, Users } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "팀",
  description: "팀원 목록과 권한을 관리하세요.",
};

type Role = "관리자" | "편집자" | "뷰어";

const summary = [
  { label: "멤버 수", value: "12", icon: Users },
  { label: "관리자", value: "3", icon: Shield },
  { label: "초대 대기", value: "2", icon: Mail },
];

const members: {
  name: string;
  email: string;
  role: Role;
  initials: string;
  joined: string;
}[] = [
  {
    name: "김지훈",
    email: "jihoon@example.com",
    role: "관리자",
    initials: "김",
    joined: "2024-03-12",
  },
  {
    name: "이서연",
    email: "seoyeon@example.com",
    role: "편집자",
    initials: "이",
    joined: "2024-05-02",
  },
  {
    name: "박민준",
    email: "minjun@example.com",
    role: "편집자",
    initials: "박",
    joined: "2024-07-21",
  },
  {
    name: "최유나",
    email: "yuna@example.com",
    role: "관리자",
    initials: "최",
    joined: "2024-01-09",
  },
  {
    name: "정하늘",
    email: "haneul@example.com",
    role: "뷰어",
    initials: "정",
    joined: "2025-02-18",
  },
  {
    name: "강도현",
    email: "dohyun@example.com",
    role: "편집자",
    initials: "강",
    joined: "2025-06-30",
  },
];

const roleVariant: Record<
  Role,
  "default" | "secondary" | "outline" | "destructive"
> = {
  관리자: "default",
  편집자: "secondary",
  뷰어: "outline",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">팀</h1>
          <p className="text-sm text-muted-foreground">
            팀원을 초대하고 권한을 관리하세요.
          </p>
        </div>
        <Button size="sm">
          <UserPlus />
          팀원 초대
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {summary.map((s) => {
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
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>멤버</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {members.map((m, i) => (
              <div key={m.email}>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{m.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{m.name}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {m.email}
                    </p>
                  </div>
                  <Badge variant={roleVariant[m.role]}>{m.role}</Badge>
                  <span className="hidden text-xs text-muted-foreground md:inline">
                    가입 {m.joined}
                  </span>
                </div>
                {i < members.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
