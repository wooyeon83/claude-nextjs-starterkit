import {
  Code,
  Paintbrush,
  Rocket,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "즉시 사용 가능",
    description:
      "Next.js 16 App Router, TypeScript, Tailwind v4가 이미 설정되어 있습니다.",
  },
  {
    icon: Paintbrush,
    title: "shadcn/ui 컴포넌트",
    description:
      "Radix UI 기반의 접근성 높은 UI 컴포넌트를 바로 활용할 수 있습니다.",
  },
  {
    icon: Code,
    title: "타입 안전성",
    description:
      "프로젝트 전체가 TypeScript로 작성되어 안전하게 확장 가능합니다.",
  },
  {
    icon: Sparkles,
    title: "다크 모드",
    description:
      "시스템 설정에 따라 자동으로 전환되는 테마 시스템을 내장했습니다.",
  },
  {
    icon: Shield,
    title: "프로덕션 레디",
    description:
      "인증 페이지, 대시보드 레이아웃 등 실전에 바로 쓰이는 구성이 포함됩니다.",
  },
  {
    icon: Rocket,
    title: "빠른 개발 속도",
    description:
      "필요한 부품이 준비되어 있어 비즈니스 로직에만 집중할 수 있습니다.",
  },
];

export function Features() {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            필요한 모든 것이 준비되어 있습니다
          </h2>
          <p className="mt-3 text-muted-foreground">
            반복되는 설정은 저희가 해두었습니다. 당신은 프로덕트에만 집중하세요.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Card key={f.title}>
                <CardHeader>
                  <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
