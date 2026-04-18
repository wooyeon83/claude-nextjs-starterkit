---
description: '현재 브랜치를 GitHub에 안전하게 푸시합니다'
allowed-tools:
  [
    'Bash(git push:*)',
    'Bash(git status:*)',
    'Bash(git log:*)',
    'Bash(git branch:*)',
    'Bash(git remote:*)',
  ]
---

# Claude 명령어: Push

현재 브랜치를 GitHub에 안전하게 푸시합니다.

## 프로세스

1. 현재 브랜치 및 원격 저장소 상태 확인
2. 커밋되지 않은 변경사항 확인 (있으면 경고)
3. main/master 브랜치 직접 푸시 시 사용자에게 확인
4. `git push` 실행 (신규 브랜치면 `--set-upstream` 자동 추가)
5. 푸시 결과 및 GitHub URL 안내

## 안전 규칙

- **미커밋 변경사항**이 있으면 푸시 전 사용자에게 알림
- **main/master 브랜치**는 직접 푸시 전 반드시 사용자 확인
- **force push는 절대 사용하지 않음** (사용자가 명시적으로 요청한 경우 제외)
- 원격 브랜치가 없는 경우 `--set-upstream origin <브랜치명>` 자동 적용

## 푸시 후 안내

푸시 성공 시 다음 정보를 출력합니다:
- 푸시된 브랜치명
- 원격 저장소 URL
- PR 생성 링크 (신규 브랜치인 경우)
