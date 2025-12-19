import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostHeader } from "@/components/blog/PostHeader";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ShareButtons } from "@/components/blog/ShareButtons";
// import { TableOfContents } from "@/components/blog/TableOfContents";
// import { PostNavigation } from "@/components/blog/PostNavigation";
// import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    if (error || !post) {
        if (error) console.error("Error fetching post:", error);
        notFound();
    }

    // 작성자 정보 (임시 하드코딩 - 추후 users 테이블 연동)
    const author = {
        name: "Admin",
        role: "Editor",
        description: "IT 기술 트렌드와 개발 이야기를 전해드립니다.",
        avatarUrl: "https://github.com/shadcn.png", // 임시 아바타
        socials: {
            github: "https://github.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <article className="container mx-auto px-4 py-12 lg:py-16">
                    {/* Post Header */}
                    <PostHeader
                        title={post.title}
                        category={post.category || "General"}
                        publishedAt={new Date(post.published_at || post.created_at).toLocaleDateString()}
                        readTime={String(post.read_time || "5")}
                        thumbnailUrl={post.thumbnail_url}
                    />

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-8 lg:col-start-2 space-y-12">
                            {/* Content */}
                            <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-img:rounded-xl">
                                <ReactMarkdown>
                                    {post.content || ""}
                                </ReactMarkdown>
                            </div>

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-8 border-t">
                                    <span className="text-sm font-medium text-muted-foreground mr-2">Tags:</span>
                                    {post.tags.map((tag: string) => (
                                        <Badge key={tag} variant="secondary">#{tag}</Badge>
                                    ))}
                                </div>
                            )}

                            {/* Author Bio */}
                            <AuthorBio
                                name={author.name}
                                role={author.role}
                                description={author.description}
                                avatarUrl={author.avatarUrl}
                                socials={author.socials}
                            />

                            {/* Post Navigation - 추후 구현 */}
                            {/* 
                            <PostNavigation
                                prevPost={{ title: "이전 글", href: "#" }}
                                nextPost={{ title: "다음 글", href: "#" }}
                            /> 
                            */}
                        </div>

                        {/* Sidebar Column */}
                        <div className="hidden lg:block lg:col-span-3 space-y-8 sticky top-24 h-fit">
                            {/* TOC - 추후 구현 */}
                            {/* 
                            <div className="space-y-4">
                                <span className="text-sm font-medium text-muted-foreground">목차</span>
                                <TableOfContents items={[]} />
                            </div> 
                            */}
                            <div className="space-y-4">
                                <span className="text-sm font-medium text-muted-foreground">공유하기</span>
                                <ShareButtons orientation="vertical" />
                            </div>
                        </div>
                    </div>

                    {/* Related Posts - 추후 구현 */}
                    {/* 
                    <div className="mt-24">
                        <RelatedPosts posts={[]} />
                    </div> 
                    */}
                </article>
            </main>

            <Footer />
        </div>
    );
}
