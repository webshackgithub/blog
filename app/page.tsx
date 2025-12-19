import { BlogCard, BlogCardProps } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCarousel } from "@/components/BlogCarousel";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  // 'published' 상태인 포스트만 최신순으로 가져오기
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  // DB 데이터를 UI 컴포넌트 형식에 맞게 변환
  const formattedPosts: BlogCardProps[] =
    posts?.map((post) => ({
      title: post.title,
      summary: post.excerpt || post.content?.substring(0, 100) + "..." || "",
      tags: post.tags || [],
      publishedAt: new Date(
        post.published_at || post.created_at
      ).toLocaleDateString(),
      readTime: String(post.read_time || "5"), // 기본값 처리
      thumbnailUrl:
        post.thumbnail_url ||
        "https://images.unsplash.com/photo-1499750310159-5254f219551d?q=80&w=2070&auto=format&fit=crop", // Fallback image
      href: `/blog/${post.slug}`,
    })) || [];

  // 섹션별 데이터 분배
  const latestPosts = formattedPosts.slice(0, 4);
  const popularPosts = formattedPosts.slice(0, 2); // 추후 조회수 등으로 변경 가능
  const carouselPosts = [...formattedPosts].reverse(); // 캐러셀용 데이터

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
            {latestPosts.length > 0 ? (
              latestPosts.map((post, i) => <BlogCard key={i} {...post} />)
            ) : (
              <p className="text-muted-foreground col-span-full text-center py-10">
                아직 등록된 포스트가 없습니다.
              </p>
            )}
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
            {popularPosts.length > 0 ? (
              popularPosts.map((post, i) => <BlogCard key={i} {...post} />)
            ) : (
              <p className="text-muted-foreground col-span-full text-center py-10">
                아직 등록된 포스트가 없습니다.
              </p>
            )}
          </div>
        </section>

        {/* Blog Carousel */}
        <section className="bg-muted/30 py-16">
          <BlogCarousel posts={carouselPosts} />
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
