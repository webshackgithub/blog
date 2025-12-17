import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ComponentsDemoPage() {
    return (
        <div className="container mx-auto py-10 px-4 space-y-16">
            <h1 className="text-4xl font-bold mb-8">Component Demo</h1>

            {/* Header Section Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Header Component</h2>
                <div className="border rounded-xl overflow-hidden shadow-sm bg-gray-50 dark:bg-slate-900">
                    <Header />
                    <div className="p-10 text-center text-muted-foreground">
                        (헤더 아래 컨텐츠 영역 예시)
                    </div>
                </div>
            </section>

            {/* Footer Section Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Footer Component</h2>
                <div className="border rounded-xl overflow-hidden shadow-sm">
                    <Footer />
                </div>
            </section>

            {/* Hero Section Demo */}
            <section>

                <h2 className="text-2xl font-semibold mb-6">Hero Component</h2>
                <div className="border rounded-xl overflow-hidden shadow-sm">
                    <Hero
                        title="기술의 미래를 탐험하다"
                        subtitle="최신 개발 트렌드, 심도 있는 튜토리얼, 그리고 영감을 주는 이야기를 만나보세요."
                        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                        ctaLink="#"
                    />
                </div>
            </section>

            {/* CTA Section Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">CTA Component</h2>
                <div className="max-w-4xl mx-auto">
                    <CTA />
                </div>
            </section>

            {/* Blog Card Section Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Blog Card Component</h2>
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
                        thumbnailUrl="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2075&auto=format&fit=crop"
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
                </div>
            </section>
        </div>
    );
}
