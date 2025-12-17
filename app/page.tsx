
import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";

import { CTA } from "@/components/CTA"; // Import CTA

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 space-y-16">
      <Hero
        title="Tech Blog"
        subtitle="최신 기술 트렌드와 개발 경험을 공유합니다."
        ctaText="컴포넌트 데모 보기"
        ctaLink="/components-demo"
        backgroundImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Case 1: 기본 카드 */}
        <BlogCard
          title="Next.js 14의 새로운 기능 탐구: Server Actions와 Partial Prerendering"
          summary="Next.js 14는 웹 개발의 패러다임을 바꾸는 혁신적인 기능들을 대거 도입했습니다. Server Actions를 통한 간편한 데이터 변이와 사용자 경험을 극대화하는 Partial Prerendering에 대해 깊이 있게 알아봅니다."
          tags={["Next.js", "React", "Web Dev"]}
          publishedAt="2024-03-15"
          readTime="5"
          thumbnailUrl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
          href="#"
        />

        {/* Case 2: 긴 제목 테스트 */}
        <BlogCard
          title="효과적인 상태 관리를 위한 Zustand 완벽 가이드: Redux, Recoil과의 비교 및 실전 적용 사례 분석"
          summary="상태 관리는 프론트엔드 개발의 핵심입니다. Zustand는 가볍고 직관적인 API로 인기를 얻고 있습니다. 다른 라이브러리와의 장단점 비교를 통해 프로젝트에 적합한 도구를 선택하는 방법을 알아봅니다."
          tags={["State Management", "Zustand", "Frontend"]}
          publishedAt="2024-03-12"
          readTime="12"
          thumbnailUrl="https://images.unsplash.com/photo-1618477247222-ac59124545da?q=80&w=2072&auto=format&fit=crop"
          href="#"
        />

        {/* Case 3: 짧은 내용 테스트 */}
        <BlogCard
          title="TypeScript 5.0 업데이트"
          summary="Decorators 표준화와 성능 개선이 포함된 TypeScript 5.0의 주요 변경 사항을 빠르게 훑어봅니다."
          tags={["TypeScript"]}
          publishedAt="2024-03-10"
          readTime="3"
          thumbnailUrl="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop"
          href="#"
        />

        {/* Case 4: 추가 데이터 */}
        <BlogCard
          title="모던 CSS의 미래: Tailwind CSS v4 살펴보기"
          summary="Tailwind CSS v4는 성능 향상과 새로운 기능을 제공합니다. 기존 버전과의 차이점과 마이그레이션 가이드를 소개합니다."
          tags={["CSS", "Tailwind", "Design"]}
          publishedAt="2024-03-08"
          readTime="7"
          thumbnailUrl="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop"
          href="#"
        />
      </div>

      {/* CTA Section */}
      <section className="mt-16">
        <CTA />
      </section>
    </main>
  );
}
