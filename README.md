# Next Starter

Next.js 16 App Router · React 19 · Tailwind CSS v4 · shadcn/ui 기반의 모던 웹 스타터킷.
프로덕션에서 바로 쓰일 법한 레이아웃, 인증 화면, 대시보드 예제, 다크모드까지 미리 구성되어 있어
아이디어를 빠르게 제품으로 옮길 수 있습니다.

## 기술 스택

- **Next.js 16.2.4** (App Router, Turbopack)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`, `tw-animate-css`)
- **shadcn/ui** + **Radix UI Primitives**
- **lucide-react** 아이콘
- **Geist / Geist Mono** 폰트 (`next/font`)

## 주요 기능

### 1. 기본 레이아웃

- `app/layout.tsx` — 루트 레이아웃, 메타데이터 템플릿(`%s | Next Starter`), 다크모드 FOUC 방지 부트스트랩
- `app/dashboard/layout.tsx` — 사이드바 + 헤더가 결합된 대시보드 레이아웃
- `components/layout/` — `site-header`, `site-footer`, `dashboard-header`, `dashboard-sidebar`
- `components/sections/` — 랜딩 페이지용 `hero`, `stats`, `features`, `cta` 섹션

### 2. 인증 예제

- `app/auth/login/page.tsx` — 로그인 화면
- `app/auth/register/page.tsx` — 회원가입 화면
- 실제 인증 로직은 미포함 (UI 및 폼 구조만 제공하여 원하는 백엔드에 맞춰 연결 가능)

### 3. shadcn/ui 컴포넌트

`components/ui/` 에 다음 7개 프리미티브가 미리 설정되어 있습니다.


| 컴포넌트        | 용도                                                                    |
| ----------- | --------------------------------------------------------------------- |
| `avatar`    | 사용자 프로필 이미지 · 이니셜                                                     |
| `badge`     | 상태/라벨 표시 (default / secondary / outline / destructive)                |
| `button`    | 6 variant × 7 size 조합                                                 |
| `card`      | `CardHeader / CardTitle / CardDescription / CardContent / CardFooter` |
| `input`     | 텍스트 입력                                                                |
| `label`     | 폼 라벨 (Radix `Label`)                                                  |
| `separator` | 가로/세로 구분선 (Radix `Separator`)                                         |


신규 컴포넌트가 필요하면 `npx shadcn@latest add <name>` 으로 동일 스타일로 추가할 수 있습니다.

### 4. 다크모드

- `components/theme/theme-provider.tsx` — 테마 컨텍스트 (`light / dark / system`)
- `components/theme/theme-toggle.tsx` — 헤더의 테마 토글 버튼
- `localStorage('starter-theme')` 에 선택값 저장, 시스템 설정 자동 감지
- 하이드레이션 전에 실행되는 부트스트랩 스크립트로 FOUC 방지

### 5. 대시보드 예제 (5 페이지)


| 경로                     | 내용                                    |
| ---------------------- | ------------------------------------- |
| `/dashboard`           | 개요 — 통계 4카드 + 최근 활동 + 빠른 작업           |
| `/dashboard/analytics` | 분석 — 지표 카드 + 트래픽 소스 + 디바이스 비율         |
| `/dashboard/projects`  | 프로젝트 — 상태 Badge + 진행률 바 카드 그리드        |
| `/dashboard/team`      | 팀 — 요약 카드 + 멤버 목록 (Avatar / 역할 Badge) |
| `/dashboard/settings`  | 설정 — 프로필 / 알림 / 계정 폼                  |


### 6. 기타

- 한국어 콘텐츠 및 `lang="ko"` 설정
- 메타데이터 템플릿으로 페이지 타이틀 자동 조합 (`<페이지명> | Next Starter`)
- `hooks/use-media-query.ts` — 반응형 분기용 훅
- `lib/site.ts` — 사이트 이름/설명/외부 링크/네비게이션 중앙 집중화

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 결과를 확인할 수 있습니다.
다른 패키지 매니저를 사용해도 동일합니다 (`yarn` / `pnpm` / `bun`).

### 사용 가능한 스크립트

```bash
npm run dev     # 개발 서버 (Turbopack)
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 실행
npm run lint    # ESLint 검사
```

## 프로젝트 구조

```
app/
  layout.tsx              루트 레이아웃 · 다크모드 부트스트랩
  page.tsx                랜딩 페이지
  auth/
    login/page.tsx        로그인
    register/page.tsx     회원가입
  dashboard/
    layout.tsx            사이드바 + 헤더
    page.tsx              개요
    analytics/page.tsx    분석
    projects/page.tsx     프로젝트
    team/page.tsx         팀
    settings/page.tsx     설정

components/
  layout/                 헤더 · 푸터 · 사이드바
  sections/               랜딩 섹션 (hero / stats / features / cta)
  theme/                  테마 프로바이더 · 토글
  ui/                     shadcn/ui 프리미티브

hooks/                    커스텀 훅
lib/
  site.ts                 사이트 메타 · 메인 네비게이션
  utils.ts                cn() 유틸
```

## 커스터마이징

- **사이트 이름·설명·네비게이션**: `lib/site.ts` 의 `siteConfig` 와 `mainNav`
- **대시보드 사이드바 메뉴**: `components/layout/dashboard-sidebar.tsx` 의 `items` 배열
- **테마 색상**: `app/globals.css` 의 Tailwind v4 CSS 변수
- **폰트**: `app/layout.tsx` 의 `Geist` / `Geist_Mono` 호출부

## 주의 사항

이 프로젝트는 **Next.js 16** 을 사용합니다. App Router · 서버 컴포넌트 · async `params` 등  
이전 버전과 달라진 부분이 있으므로, 새 코드를 작성하기 전  
`node_modules/next/dist/docs/` 의 관련 가이드 또는 [공식 문서](https://nextjs.org/docs) 를 참고하세요. 

