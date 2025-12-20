import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostHeader } from "@/components/blog/PostHeader";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { PostNavigation } from "@/components/blog/PostNavigation";
// import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github-dark.css';
import { TableOfContents } from "@/components/blog/TableOfContents";

// 보다 견고한 Slug 생성 함수 (rehype-slug 및 github-slugger 대응)
function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-\uac00-\ud7af]/g, '') // 한글 및 영문, 숫자, 하이픈만 허용
        .replace(/-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function extractHeadings(markdown: string) {
    // 줄바꿈 처리 보강 (이스케이프된 줄바꿈 및 캐리지 리턴 처리)
    const sanitizedMarkdown = markdown
        .replace(/\\r\\n/g, '\n')
        .replace(/\\n/g, '\n')
        .replace(/\r\n/g, '\n');

    const lines = sanitizedMarkdown.split('\n');
    const headings: { id: string; text: string; level: number }[] = [];

    let inCodeBlock = false;

    for (const line of lines) {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            continue;
        }

        if (!inCodeBlock) {
            const match = trimmedLine.match(/^(#{2,3})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                const text = match[2].replace(/[*_~`]/g, '').trim();
                const id = slugify(text);

                if (id) {
                    headings.push({
                        id: id,
                        text: text,
                        level: level,
                    });
                }
            }
        }
    }

    // 서버 사이드 로그 (디버깅용)
    console.log(`[TOC Debug] Extracted ${headings.length} headings:`, headings.map(h => h.id));

    return headings;
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const supabase = await createClient();

    // 1. 현재 포스트 조회
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

    // 3. 이전/다음 포스트 조회
    // 이전 글 (현재 글보다 과거에 작성된 글 중 가장 최신 글)
    const { data: prevPostData } = await supabase
        .from('posts')
        .select('title, slug')
        .eq('status', 'published')
        .lt('created_at', post.created_at)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

    // 다음 글 (현재 글보다 미래에 작성된 글 중 가장 오래된 글 - 즉 바로 다음 글)
    const { data: nextPostData } = await supabase
        .from('posts')
        .select('title, slug')
        .eq('status', 'published')
        .gt('created_at', post.created_at)
        .order('created_at', { ascending: true })
        .limit(1)
        .single();

    const prevPost = prevPostData ? { title: prevPostData.title, href: `/blog/${prevPostData.slug}` } : undefined;
    const nextPost = nextPostData ? { title: nextPostData.title, href: `/blog/${nextPostData.slug}` } : undefined;

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

    const headings = extractHeadings(post.content || "");

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <article className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-8 lg:col-start-2 space-y-12">
                            {/* Post Header */}
                            <PostHeader
                                title={post.title}
                                category={post.category || "General"}
                                publishedAt={new Date(post.published_at || post.created_at).toLocaleDateString()}
                                readTime={String(post.read_time || "5")}
                                thumbnailUrl={post.thumbnail_url}
                            />

                            {/* Content Container - Admin Preview와 동일한 스타일 적용 */}
                            <div className="bg-card border rounded-xl p-6 md:p-10 shadow-sm">
                                <div className="prose dark:prose-invert max-w-none prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeHighlight, rehypeSlug]}
                                    >
                                        {(post.content || "").replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n')}
                                    </ReactMarkdown>
                                </div>
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

                            {/* Post Navigation */}
                            <PostNavigation
                                prevPost={prevPost}
                                nextPost={nextPost}
                            />
                        </div>

                        {/* Sidebar Column */}


                        <div className="hidden lg:block lg:col-span-3 space-y-8 sticky top-24 h-fit">
                            {/* 목차 */}
                            <TableOfContents headings={headings} />

                            <div className="space-y-4 pt-8 border-t">
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
