import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { PostHeader } from "@/components/blog/PostHeader";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { PostNavigation } from "@/components/blog/PostNavigation";
import { Badge } from "@/components/ui/badge";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminSection } from "@/components/admin/AdminSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ComponentsDemoPage() {
    return (
        <div className="container mx-auto py-10 px-4 space-y-16">
            <h1 className="text-4xl font-bold mb-8">Component Demo</h1>

            {/* Header Section Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Header Component</h2>
                <div className="border rounded-xl overflow-hidden shadow-sm bg-muted">
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
                        backgroundImage="/assets/Gemini_Generated_Image_1ve5g01ve5g01ve5.png"
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
                        thumbnailUrl="/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(1).png"
                        href="#"
                    />

                    {/* Case 2: 긴 제목 테스트 */}
                    <BlogCard
                        title="효과적인 상태 관리를 위한 Zustand 완벽 가이드: Redux, Recoil과의 비교 및 실전 적용 사례 분석"
                        summary="상태 관리는 프론트엔드 개발의 핵심입니다. Zustand는 가볍고 직관적인 API로 인기를 얻고 있습니다. 다른 라이브러리와의 장단점 비교를 통해 프로젝트에 적합한 도구를 선택하는 방법을 알아봅니다."
                        tags={["State Management", "Zustand", "Frontend"]}
                        publishedAt="2024-03-12"
                        readTime="12"
                        thumbnailUrl="/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(2).png"
                        href="#"
                    />

                    {/* Case 3: 짧은 내용 테스트 */}
                    <BlogCard
                        title="TypeScript 5.0 업데이트"
                        summary="Decorators 표준화와 성능 개선이 포함된 TypeScript 5.0의 주요 변경 사항을 빠르게 훑어봅니다."
                        tags={["TypeScript"]}
                        publishedAt="2024-03-10"
                        readTime="3"
                        thumbnailUrl="/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(3).png"
                        href="#"
                    />
                </div>
            </section>

            {/* Blog Card Carousel Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Blog Card Carousel</h2>
                <div className="w-full max-w-[calc(100%-100px)] mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {[
                                "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(4).png",
                                "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(5).png",
                                "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(6).png",
                                "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(7).png",
                                "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c%20(8).png",
                                "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c.png"
                            ].map((imagePath, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className="h-full py-2">
                                        <BlogCard
                                            title={`Carousel Item ${index + 1}: Next.js 14 Update`}
                                            summary={`This is a summary for item ${index + 1}. Shadcn UI carousel component makes it easy to build swipable interfaces.`}
                                            tags={["Next.js", "Carousel", "Demo"]}
                                            publishedAt={`2024-03-${10 + index}`}
                                            readTime={`${3 + index}`}
                                            thumbnailUrl={imagePath}
                                            href="#"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>

            {/* Post Header Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Blog Post Header Component</h2>
                <div className="border rounded-xl p-8 bg-background">
                    <PostHeader
                        title="사용자 중심의 블로그 디자인: 가독성과 경험을 고려한 레이아웃"
                        category="UX Design"
                        publishedAt="2024-03-24"
                        readTime="5"
                        thumbnailUrl="/assets/Gemini_Generated_Image_1ve5g01ve5g01ve5.png"
                    />
                </div>
            </section>

            {/* Feature Components Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Author Bio Demo */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Author Bio Component</h2>
                    <AuthorBio
                        name="김개발"
                        role="Frontend Developer"
                        description="사용자 경험에 집중하는 프론트엔드 개발자입니다. React와 Next.js를 주로 다루며, 읽기 좋은 코드를 작성하기 위해 노력합니다."
                        avatarUrl="https://github.com/shadcn.png"
                        socials={{
                            github: "https://github.com",
                            twitter: "https://twitter.com",
                            linkedin: "https://linkedin.com",
                        }}
                    />
                </section>

                {/* Share Buttons Demo */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Share Buttons Component</h2>
                    <div className="space-y-6">
                        <div className="border p-6 rounded-xl flex items-center justify-between">
                            <span>수평 레이아웃 (Horizontal)</span>
                            <ShareButtons orientation="horizontal" />
                        </div>
                        <div className="border p-6 rounded-xl flex items-center justify-between">
                            <span>수직 레이아웃 (Vertical)</span>
                            <ShareButtons orientation="vertical" />
                        </div>
                    </div>
                </section>
            </div>

            {/* TOC Demo Removed */}

            {/* Post Navigation Demo */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Post Navigation Component</h2>
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-muted-foreground">Full (Prev & Next)</h3>
                        <div className="border rounded-xl p-8 bg-background">
                            <PostNavigation
                                prevPost={{
                                    title: "TypeScript 5.0의 새로운 기능들을 깊이 있게 살펴보기",
                                    href: "#"
                                }}
                                nextPost={{
                                    title: "React Server Components와 Next.js 14 도입 가이드",
                                    href: "#"
                                }}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-muted-foreground">First Post (Next Only)</h3>
                        <div className="border rounded-xl p-8 bg-background">
                            <PostNavigation
                                nextPost={{
                                    title: "웹 접근성을 고려한 UI 디자인 패턴",
                                    href: "#"
                                }}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-muted-foreground">Last Post (Prev Only)</h3>
                        <div className="border rounded-xl p-8 bg-background">
                            <PostNavigation
                                prevPost={{
                                    title: "효과적인 상태 관리를 위한 Zustand 사용법",
                                    href: "#"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Admin Components Demo */}
            <section className="container mx-auto px-4 py-8 border-t space-y-8 bg-muted/20">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Admin Form Components</h2>
                    <p className="text-muted-foreground">어드민 페이지에서 사용되는 공통 헤더 및 섹션 컴포넌트입니다.</p>
                </div>

                <div className="space-y-8 bg-background p-6 rounded-lg border">
                    {/* AdminPageHeader Demo */}
                    <div className="space-y-4">
                        <Badge>Header with Actions</Badge>
                        <AdminPageHeader
                            title="Edit User Profile"
                            description="Update user information and permissions."
                            backLink="#"
                            actions={
                                <>
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Save Changes</Button>
                                </>
                            }
                        />
                    </div>

                    {/* AdminSection Demo */}
                    <div className="space-y-4">
                        <Badge>Form Section Card</Badge>
                        <AdminSection
                            title="Basic Information"
                            description="Enter the user's basic profile details."
                        >
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Email Address</Label>
                                    <Input placeholder="john@example.com" />
                                </div>
                            </div>
                        </AdminSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
