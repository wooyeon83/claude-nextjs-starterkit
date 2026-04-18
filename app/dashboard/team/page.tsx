import type { Metadata } from "next";
import { Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "팀",
  description: "팀원을 관리하고 역할을 확인하세요.",
};

const members = [
  { name: "김지훈", role: "프론트엔드 개발자", initials: "김", status: "온라인" },
  { name: "이서연", role: "백엔드 개발자", initials: "이", status: "온라인" },
  { name: "박민준", role: "디자이너", initials: "박", status: "자리 비움" },
  { name: "최유나", role: "프로덕트 매니저", initials: "최", status: "오프라인" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">팀</h1>
          <p className="text-sm text-muted-foreground">
            팀원을 관리하고 역할을 확인하세요.
          </p>
        </div>
        <Users className="size-5 text-muted-foreground" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>팀원</CardTitle>
          <CardDescription>현재 팀에 속한 멤버 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {members.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between rounded-lg border border-border p-3"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{m.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                  </div>
                </div>
                <Badge
                  variant={m.status === "온라인" ? "default" : "secondary"}
                >
                  {m.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
