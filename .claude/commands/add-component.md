---
description: 'React 함수형 컴포넌트를 생성합니다'
argument-hint: '<ComponentName>'
allowed-tools: ['Write', 'Bash(ls:*)']
---

`$ARGUMENTS`를 컴포넌트 이름으로 사용하여 `src/components/$ARGUMENTS.tsx` 파일을 생성해주세요.

## 규칙

- 컴포넌트 이름: `$ARGUMENTS` (PascalCase)
- 파일 경로: `src/components/$ARGUMENTS.tsx`
- 파일이 이미 존재하면 덮어쓰지 말고 사용자에게 알림

## 생성할 파일 내용

```tsx
import { FC } from 'react';

interface $ARGUMENTSProps {}

const $ARGUMENTS: FC<$ARGUMENTSProps> = () => {
  return (
    <div className="">
      $ARGUMENTS
    </div>
  );
};

export default $ARGUMENTS;
```

## 완료 후

생성된 파일 경로를 사용자에게 알려주세요.
