---
trigger: always_on
---

# 프로젝트 분석 (Project Overview)

## 1. 프로젝트 개요
- **프로젝트 이름**: blog
- **목적**: Next.js 기반의 블로그 애플리케이션 구축
- **현재 단계**: 초기 설정 (Initial Setup) 단계
- **주요 프레임워크**: Next.js 16.0.8 (App Router 사용)

## 2. 기술 스택 (Tech Stack)
### Core
- **Framework**: Next.js 16.0.8
- **Library**: React 19.2.1, React DOM 19.2.1
- **Language**: TypeScript 5

### Styling
- **CSS Framework**: Tailwind CSS v4 (최신 버전 사용)
- **Utilities**: 
  - `clsx`: 조건부 클래스 결합
  - `tailwind-merge`: Tailwind 클래스 충돌 해결
  - `class-variance-authority`: 컴포넌트 변형(Variant) 관리

### Tools & Configuration
- **Linting**: ESLint 9 (Flat Config 호환)
- **Icons**: `lucide-react` (아이콘 라이브러리)
- **Animation**: `tw-animate-css`

## 3. 디렉토리 구조 분석
- **`/app`**: Next.js App Router의 핵심 디렉토리로, 라우팅과 페이지 로직을 담당합니다.
  - `page.tsx`: 현재 기본 템플릿 코드가 포함된 메인 페이지입니다.
  - `layout.tsx`: 애플리케이션의 루트 레이아웃을 정의합니다.
  - `globals.css`: Tailwind CSS v4 설정 및 전역 스타일이 포함되어 있습니다.
- **`/lib`**: 프로젝트 전반에서 사용되는 유틸리티 함수들을 모아두는 곳입니다.
  - `utils.ts`: `cn` 함수(clsx + tailwind-merge) 등 헬퍼 함수가 위치합니다.
- **`/public`**: 이미지, 폰트 등 정적 에셋을 저장하는 디렉토리입니다.
- **Root Configuration Files**:
  - `next.config.ts`: Next.js 관련 설정.
  - `tsconfig.json`: TypeScript 컴파일러 설정 (Strict 모드, Path Alias `@/*` 설정됨).
  - `package.json`: 의존성 및 스크립트 정의.

## 4. 코드 분석 (초기 상태)
- **`app/page.tsx`**: 현재 Next.js의 기본 "Get Started" 템플릿이 적용되어 있습니다. 블로그 레이아웃으로 전면 수정이 필요합니다.
- **`app/globals.css`**: Tailwind v4를 위한 기본 설정이 되어 있을 것으로 추정됩니다.
- **의존성 특징**: `lucide-react`가 이미 설치되어 있어 UI 개발 시 아이콘 사용이 용이하며, `tailwind-merge`와 `clsx` 조합은 Shadcn UI와 같은 모던 컴포넌트 패턴을 따를 준비가 되어 있음을 시사합니다.

## 5. 향후 개발 제안
1.  **초기화**: `app/page.tsx`의 기본 템플릿 코드를 제거하고 블로그 메인 페이지 구조로 변경.
2.  **구조화**: 
    - `components/ui`: 공통 UI 컴포넌트 (버튼, 카드 등).
    - `components/layout`: 헤더, 푸터, 사이드바 등 레이아웃 컴포넌트.
    - `app/blog`: 블로그 포스트 상세 페이지 및 리스트 페이지 라우팅.
3.  **기능 구현**:
    - 블로그 포스트 데이터 소스 결정 (MDX, CMS, 데이터베이스 등).
    - 다크 모드/라이트 모드 토글 (Tailwind v4 `dark:` 클래스 활용).
