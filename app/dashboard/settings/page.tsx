import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { NotificationSettings } from "@/components/dashboard/notification-settings";

export const metadata: Metadata = {
  title: "설정",
  description: "계정과 알림 환경을 관리하세요.",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">설정</h1>
        <p className="text-sm text-muted-foreground">
          프로필, 알림, 계정 설정을 관리하세요.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>
            팀원에게 표시되는 공개 정보입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="profile-name">이름</Label>
              <Input id="profile-name" defaultValue="김지훈" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="profile-email">이메일</Label>
              <Input
                id="profile-email"
                type="email"
                defaultValue="jihoon@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="profile-bio">소개</Label>
            <Input
              id="profile-bio"
              placeholder="팀에 자신을 소개해보세요"
              defaultValue="풀스택 엔지니어 · 결제/정산 팀"
            />
          </div>
          <div className="flex justify-end">
            <Button size="sm">변경 사항 저장</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>알림</CardTitle>
          <CardDescription>
            받고 싶은 알림 유형을 선택하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NotificationSettings />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>계정</CardTitle>
          <CardDescription>
            비밀번호 및 계정 삭제 등 민감한 작업입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="current-password">현재 비밀번호</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="new-password">새 비밀번호</Label>
              <Input id="new-password" type="password" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="sm" variant="outline">
              비밀번호 변경
            </Button>
          </div>
          <Separator />
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium">계정 삭제</p>
              <p className="text-sm text-muted-foreground">
                삭제된 계정은 복구할 수 없습니다.
              </p>
            </div>
            <Button size="sm" variant="destructive">
              계정 삭제
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
