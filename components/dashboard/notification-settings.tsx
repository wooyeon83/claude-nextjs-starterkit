"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const notifications = [
  {
    id: "notif-email",
    title: "이메일 알림",
    description: "중요한 활동을 이메일로 받아봅니다.",
    defaultChecked: true,
  },
  {
    id: "notif-marketing",
    title: "마케팅 소식",
    description: "신기능 및 이벤트 정보를 받아봅니다.",
    defaultChecked: false,
  },
  {
    id: "notif-security",
    title: "보안 경고",
    description: "로그인 및 권한 변경 시 즉시 알림을 보냅니다.",
    defaultChecked: true,
  },
];

export function NotificationSettings() {
  return (
    <div className="flex flex-col gap-4">
      {notifications.map((n, i) => (
        <div key={n.id}>
          <div className="flex items-start gap-3">
            <Checkbox
              id={n.id}
              defaultChecked={n.defaultChecked}
              className="mt-1"
            />
            <div className="flex flex-col">
              <Label htmlFor={n.id} className="cursor-pointer text-sm font-medium">
                {n.title}
              </Label>
              <span className="text-sm text-muted-foreground">
                {n.description}
              </span>
            </div>
          </div>
          {i < notifications.length - 1 && <Separator className="mt-4" />}
        </div>
      ))}
    </div>
  );
}
