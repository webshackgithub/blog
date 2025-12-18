import { BlogCard, BlogCardProps } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCarousel } from "@/components/BlogCarousel";

const ALL_POSTS: BlogCardProps[] = [
  {
    title: "Next.js 14의 새로운 기능 탐구: Server Actions와 Partial Prerendering",
    summary:
      "Next.js 14는 웹 개발의 패러다임을 바꾸는 혁신적인 기능들을 대거 도입했습니다. Server Actions를 통한 간편한 데이터 변이와 사용자 경험을 극대화하는 Partial Prerendering에 대해 깊이 있게 알아봅니다.",
    tags: ["Next.js", "React", "Web Dev"],
    publishedAt: "2024-03-15",
    readTime: "5",
    thumbnailUrl: "/assets/Gemini_Generated_Image_1ve5g01ve5g01ve5.png",
    href: "#",
  },
  {
    title:
      "효과적인 상태 관리를 위한 Zustand 완벽 가이드: Redux, Recoil과의 비교 및 실전 적용 사례 분석",
    summary:
      "상태 관리는 프론트엔드 개발의 핵심입니다. Zustand는 가볍고 직관적인 API로 인기를 얻고 있습니다. 다른 라이브러리와의 장단점 비교를 통해 프로젝트에 적합한 도구를 선택하는 방법을 알아봅니다.",
    tags: ["State Management", "Zustand", "Frontend"],
    publishedAt: "2024-03-12",
    readTime: "12",
    thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (1).png",
    href: "#",
  },
  {
    title: "TypeScript 5.0 업데이트",
    summary:
      "Decorators 표준화와 성능 개선이 포함된 TypeScript 5.0의 주요 변경 사항을 빠르게 훑어봅니다.",
    tags: ["TypeScript"],
    publishedAt: "2024-03-10",
    readTime: "3",
    thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (2).png",
    href: "#",
  },
  {
    title: "모던 CSS의 미래: Tailwind CSS v4 살펴보기",
    summary:
      "Tailwind CSS v4는 성능 향상과 새로운 기능을 제공합니다. 기존 버전과의 차이점과 마이그레이션 가이드를 소개합니다.",
    tags: ["CSS", "Tailwind", "Design"],
    publishedAt: "2024-03-08",
    readTime: "7",
    thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (3).png",
    href: "#",
  },
  {
    title: "React Server Components 이해하기",
    summary:
      "RSC가 가져올 렌더링 방식의 변화와 이로 인한 성능 이점에 대해 알아봅니다.",
    tags: ["React", "RSC", "Performance"],
    publishedAt: "2024-03-05",
    readTime: "8",
    thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (4).png",
    href: "#",
  },
  {
    title: "웹 접근성(A11y) 실전 가이드",
    summary:
      "모든 사용자를 위한 웹사이트 만들기. ARIA 속성과 시맨틱 마크업의 중요성을 다룹니다.",
    tags: ["A11y", "HTML", "UX"],
    publishedAt: "2024-03-01",
    readTime: "6",
    thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (5).png",
    href: "#",
  },
];

const CAROUSEL_POSTS = [...ALL_POSTS].reverse();

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-24 pb-24">
        <Hero
          title="Tech Blog"
          subtitle="최신 기술 트렌드와 개발 경험을 공유합니다."
          ctaText="컴포넌트 데모 보기"
          ctaLink="/components-demo"
          backgroundImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        />

        {/* 4 Column Grid */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8">최신 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_POSTS.slice(0, 4).map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <CTA
            title="뉴스레터 구독하기"
            description="매주 새로운 기술 소식을 가장 먼저 받아보세요."
            buttonText="구독하기"
          />
        </section>

        {/* 2 Column Grid */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8">인기 글</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALL_POSTS.slice(0, 2).map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </section>

        {/* Blog Carousel */}
        <section className="bg-muted/30 py-16">
          <BlogCarousel posts={CAROUSEL_POSTS} />
        </section>

        <section className="container mx-auto px-4">
          <CTA
            title="개발자 커뮤니티 참여하기"
            description="다른 개발자들과 지식을 공유하고 함께 성장하세요."
            buttonText="디스코드 참여"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
