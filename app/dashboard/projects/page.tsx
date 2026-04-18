import type { Metadata } from "next";
import { Plus } from "lucide-react";

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
  title: "프로젝트",
  description: "진행 중인 프로젝트를 한눈에 확인하세요.",
};

type Status = "진행 중" | "검토" | "완료" | "대기";

const projects: {
  name: string;
  description: string;
  status: Status;
  progress: number;
  owner: string;
  updated: string;
}[] = [
  {
    name: "결제 모듈 리팩터링",
    description: "신규 PG 연동을 위한 결제 플로우 재설계.",
    status: "진행 중",
    progress: 62,
    owner: "김지훈",
    updated: "2시간 전",
  },
  {
    name: "온보딩 퍼널 개선",
    description: "첫 방문 사용자의 전환율을 높이기 위한 실험.",
    status: "검토",
    progress: 88,
    owner: "이서연",
    updated: "어제",
  },
  {
    name: "모바일 앱 v2",
    description: "React Native 기반 신규 모바일 앱.",
    status: "진행 중",
    progress: 35,
    owner: "박민준",
    updated: "10분 전",
  },
  {
    name: "디자인 시스템 v3",
    description: "토큰 기반 디자인 시스템으로 마이그레이션.",
    status: "완료",
    progress: 100,
    owner: "최유나",
    updated: "3일 전",
  },
  {
    name: "검색 품질 개선",
    description: "임베딩 기반 시맨틱 검색 도입 프로젝트.",
    status: "대기",
    progress: 8,
    owner: "정하늘",
    updated: "1주 전",
  },
  {
    name: "관리자 대시보드",
    description: "운영자용 내부 대시보드 리뉴얼.",
    status: "진행 중",
    progress: 48,
    owner: "강도현",
    updated: "5시간 전",
  },
];

const statusVariant: Record<
  Status,
  "default" | "secondary" | "outline" | "destructive"
> = {
  "진행 중": "default",
  검토: "outline",
  완료: "secondary",
  대기: "outline",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">프로젝트</h1>
          <p className="text-sm text-muted-foreground">
            현재 진행 중인 {projects.length}개의 프로젝트입니다.
          </p>
        </div>
        <Button size="sm">
          <Plus />
          새 프로젝트
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.name}>
            <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
              <CardTitle className="text-base">{p.name}</CardTitle>
              <Badge variant={statusVariant[p.status]}>{p.status}</Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>진행률</span>
                  <span className="font-medium text-foreground">
                    {p.progress}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>담당 · {p.owner}</span>
                <span>{p.updated}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
