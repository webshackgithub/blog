import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostHeader } from "@/components/blog/PostHeader";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostNavigation } from "@/components/blog/PostNavigation";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Badge } from "@/components/ui/badge";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    // Dummy Data for Demo
    const post = {
        title: "사용자 중심의 블로그 디자인: 가독성과 경험을 고려한 레이아웃",
        category: "UX Design",
        publishedAt: "2024-03-24",
        readTime: "5",
        thumbnailUrl: "/assets/Gemini_Generated_Image_1ve5g01ve5g01ve5.png",
        author: {
            name: "김개발",
            role: "Frontend Developer",
            description: "사용자 경험에 집중하는 프론트엔드 개발자입니다. React와 Next.js를 주로 다루며, 읽기 좋은 코드를 작성하기 위해 노력합니다.",
            avatarUrl: "https://github.com/shadcn.png",
            socials: {
                github: "https://github.com",
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
            }
        },
        toc: [
            { id: "intro", title: "1. 시작하며", level: 2 },
            { id: "readability", title: "2. 가독성의 중요성", level: 2 },
            { id: "layout", title: "3. 레이아웃 전략", level: 2 },
            { id: "conclusion", title: "4. 마치며", level: 2 },
        ]
    };

    const relatedPosts = [
        {
            title: "Next.js 14의 새로운 기능 탐구",
            summary: "Next.js 14는 웹 개발의 패러다임을 바꾸는 혁신적인 기능들을 대거 도입했습니다.",
            tags: ["Next.js", "React"],
            publishedAt: "2024-03-15",
            readTime: "5",
            thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (1).png",
            href: "#"
        },
        {
            title: "효과적인 상태 관리를 위한 Zustand",
            summary: "Zustand는 가볍고 직관적인 API로 인기를 얻고 있습니다.",
            tags: ["State", "Frontend"],
            publishedAt: "2024-03-12",
            readTime: "12",
            thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (2).png",
            href: "#"
        },
        {
            title: "TypeScript 5.0 업데이트",
            summary: "Decorators 표준화와 성능 개선이 포함된 TypeScript 5.0의 주요 변경 사항.",
            tags: ["TypeScript"],
            publishedAt: "2024-03-10",
            readTime: "3",
            thumbnailUrl: "/assets/Gemini_Generated_Image_4i4c9k4i4c9k4i4c (3).png",
            href: "#"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <article className="container mx-auto px-4 py-12 lg:py-16">
                    {/* Post Header */}
                    <PostHeader
                        title={post.title}
                        category={post.category}
                        publishedAt={post.publishedAt}
                        readTime={post.readTime}
                        thumbnailUrl={post.thumbnailUrl}
                    />

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-8 lg:col-start-2 space-y-12">
                            {/* Dummy Content */}
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="lead">
                                    블로그는 지식을 공유하는 강력한 도구입니다. 하지만 아무리 좋은 내용이라도 읽기 어렵다면 독자는 금방 떠나갑니다. 이 글에서는 독자가 편안하게 글을 읽을 수 있도록 돕는 UX 요소들을 살펴봅니다.
                                </p>
                                <h2 id="intro">1. 시작하며</h2>
                                <p>
                                    사용자는 웹페이지에 들어오자마자 3초 안에 이 글을 읽을지 말지 결정합니다. 명확한 제목, 매력적인 썸네일, 그리고 읽기 편해 보이는 레이아웃이 필수적입니다.
                                </p>
                                <div className="my-8 relative rounded-xl overflow-hidden bg-muted aspect-video flex items-center justify-center text-muted-foreground">
                                    Content Image Placeholder
                                </div>
                                <h2 id="readability">2. 가독성의 중요성</h2>
                                <p>
                                    가독성은 단순히 폰트 크기의 문제가 아닙니다. 줄 간격(Line-height), 자간(Letter-spacing), 그리고 문단의 길이(Line-length)가 조화를 이루어야 합니다. Tailwind CSS의 Typography 플러그인은 이러한 설정들을 자동으로 최적화해줍니다.
                                </p>
                                <blockquote>
                                    "디자인은 어떻게 보이는가가 아니라, 어떻게 작동하는가이다." - 스티브 잡스
                                </blockquote>
                                <h2 id="layout">3. 레이아웃 전략</h2>
                                <p>
                                    중앙 정렬된 본문은 시선의 분산을 막아줍니다. 사이드바에는 목차나 공유 버튼 같은 부가 기능을 배치하여, 본문을 읽는 흐름을 방해하지 않으면서도 필요할 때 쉽게 접근할 수 있도록 해야 합니다.
                                </p>
                                <ul>
                                    <li><strong>Progress Bar</strong>: 독자가 현재 위치를 파악하게 돕습니다.</li>
                                    <li><strong>Table of Contents</strong>: 원하는 정보로 빠르게 이동합니다.</li>
                                </ul>
                                <h2 id="conclusion">4. 마치며</h2>
                                <p>
                                    결국 좋은 블로그 디자인이란, 독자가 내용에만 온전히 집중할 수 있게 하는 투명한 그릇과 같습니다.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-8 border-t">
                                <span className="text-sm font-medium text-muted-foreground mr-2">Tags:</span>
                                {["UX", "Design", "Web Development", "Tuorial"].map(tag => (
                                    <Badge key={tag} variant="secondary">#{tag}</Badge>
                                ))}
                            </div>

                            {/* Author Bio */}
                            <AuthorBio
                                name={post.author.name}
                                role={post.author.role}
                                description={post.author.description}
                                avatarUrl={post.author.avatarUrl}
                                socials={post.author.socials}
                            />

                            {/* Post Navigation */}
                            <PostNavigation
                                prevPost={{ title: "이전 글: Next.js 13 마이그레이션 가이드", href: "#" }}
                                nextPost={{ title: "다음 글: React 19의 새로운 훅 살펴보기", href: "#" }}
                            />
                        </div>

                        {/* Sidebar Column */}
                        <div className="hidden lg:block lg:col-span-3 space-y-8 sticky top-24 h-fit">
                            <div className="space-y-4">
                                <span className="text-sm font-medium text-muted-foreground">목차</span>
                                <TableOfContents items={post.toc} />
                            </div>
                            <div className="space-y-4">
                                <span className="text-sm font-medium text-muted-foreground">공유하기</span>
                                <ShareButtons orientation="vertical" />
                            </div>
                        </div>
                    </div>

                    {/* Related Posts (Full Width) */}
                    <div className="mt-24">
                        <RelatedPosts posts={relatedPosts} />
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
