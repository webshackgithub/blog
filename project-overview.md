# 프로젝트 분석 (Project Overview)

## 1. 프로젝트 개요
- **프로젝트 이름**: blog
- **목적**: Next.js 기반의 테크 블로그 애플리케이션 구축
- **현재 단계**: UI 구현 및 기능 개발 단계
- **주요 프레임워크**: Next.js 16.0.8 (App Router 사용)

## 2. 기술 스택 (Tech Stack)
### Core
- **Framework**: Next.js 16.0.8 (Turbopack 활용)
- **Library**: React 19.2.1, React DOM 19.2.1
- **Language**: TypeScript 5

### Styling & UI
- **CSS Framework**: Tailwind CSS v4
- **Component Library**: Shadcn UI (Radix UI 기반)
- **Icons**: `lucide-react`
- **Animation**: `tw-animate-css`

### AI & Tools
- **MCP**: Shadcn UI MCP Server (`.cursor/mcp.json` 설정 완료)
- **Editor**: Cursor (MCP 연동)

### 필수 기억 요소
   
- 컴포넌트를 만들땐 항상 shadcn mcp를 사용해줘.
- UI를 만들때 테마를 하드코딩 하지 말고 공통 테마를 사용해줘.
- 컴포넌트를 만들고 나면 /components-demo 페이지에 데모 디스플레이 해줘.
- **Rule**: `components` 폴더에 공통 컴포넌트들이 존재하므로, 페이지를 만들 때는 반드시 이 공통 컴포넌트들을 재사용해야 한다. 중복 구현을 피할 것.

## 3. 디렉토리 구조 분석 (최신)
- **`/app`**: 
  - `page.tsx`: 블로그 메인 페이지 (BlogCard 그리드 레이아웃 적용).
  - `components-demo/`: 컴포넌트 테스트 및 데모용 페이지.
  - `globals.css`: Tailwind v4 Theme 및 Shadcn UI 필수 CSS 변수 포함.
- **`/components`**:
  - `BlogCard.tsx`: 블로그 포스트 카드 컴포넌트 (Shadcn UI 기반).
  - **`/ui`**: Shadcn UI 공통 컴포넌트 라이브러리.
    - `card.tsx`: 카드 컨테이너.
    - `badge.tsx`: 태그 및 라벨.
    - `button.tsx`: 버튼 요소.
- **`/prompts`**: AI 프롬프트 템플릿 저장소 (`blog-card.md` 등).
- **Configuration**:
  - `.cursor/mcp.json`: Shadcn MCP 서버 설정 파일.
  - `next.config.ts`: 이미지 도메인(`images.unsplash.com`) 허용 설정 추가.

## 4. 주요 구현 내역
1.  **Shadcn MCP 설정**:
    - 프로젝트 레벨에서 Cursor 에디터 연동 설정 (`.cursor/mcp.json`) 완료.
    - AI가 컴포넌트 코드를 직접 조회하여 생성하도록 구성.
2.  **UI 컴포넌트 시스템 구축**:
    - `components/ui` 디렉토리 신설.
    - MCP를 통해 `Card`, `Badge`, `Button` 컴포넌트 정석 구현 (`@radix-ui/react-slot` 사용).
3.  **BlogCard 컴포넌트**:
    - 썸네일, 제목, 요약, 태그, 메타 정보(날짜/시간), CTA 버튼을 포함한 반응형 카드 구현.
    - 공통 테마 변수(`bg-card`, `text-primary` 등)를 사용하여 다크 모드 등 일관된 스타일링 보장.
4.  **메인 페이지 개편**:
    - 기본 템플릿 제거 후 BlogCard 그리드 레이아웃 적용.
    - 데모 데이터를 활용한 UI 시연 및 반응형 디자인 적용.

## 5. 반응형 웹 구성 전략 (Responsive Design)
- **Mobile First Approach**: 모바일 화면을 기본으로 설계하고, 더 큰 화면(`md`, `lg` 등)에 대한 스타일을 추가하는 방식 채택.
- **Tailwind Breakpoints 전략**:
  - `Base`: 모바일 (1열 그리드, 폰트 사이즈 조정)
  - `md` (768px): 태블릿 (2열 그리드, 패딩 증가)
  - `lg` (1024px): 데스크탑 (3열 그리드, 최대 너비 제한)
- **구현 예시 (BlogCard Grid)**:
  ```tsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ```

## 6. 향후 개발 제안
1.  **레이아웃 구조화**: `components/layout` (Header, Footer) 생성 및 `app/layout.tsx` 적용.
2.  **포스트 상세 페이지**: 동적 라우팅(`app/posts/[slug]`) 및 MDX/CMS 연동.
3.  **테마 토글**: 다크/라이트 모드 전환 기능 추가.
