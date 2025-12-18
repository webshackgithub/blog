import { BlogCard, BlogCardProps } from "@/components/BlogCard";

interface RelatedPostsProps {
    posts: BlogCardProps[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="space-y-6 pt-8 border-t">
            <h3 className="text-2xl font-bold tracking-tight">관련 포스트</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </section>
    );
}
