import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
    title: string;
    href: string;
}

interface PostNavigationProps {
    prevPost?: NavigationItem;
    nextPost?: NavigationItem;
    className?: string;
}

export function PostNavigation({ prevPost, nextPost, className }: PostNavigationProps) {
    return (
        <nav
            className={cn(
                "grid grid-cols-1 gap-4 md:grid-cols-2 pt-8 border-t",
                className
            )}
            aria-label="Blog post navigation"
        >
            {/* Previous Post Link */}
            {prevPost ? (
                <Link
                    href={prevPost.href}
                    className="group flex flex-col items-start gap-1 p-4 rounded-lg border transition-colors hover:bg-muted/50 text-left"
                    aria-label={`Previous post: ${prevPost.title}`}
                >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <span>이전 포스트</span>
                    </div>
                    <span className="font-medium line-clamp-2 md:text-lg text-balance">
                        {prevPost.title}
                    </span>
                </Link>
            ) : (
                <div role="none" className="hidden md:block" aria-hidden="true" />
            )}

            {/* Next Post Link */}
            {nextPost ? (
                <Link
                    href={nextPost.href}
                    className="group flex flex-col items-end gap-1 p-4 rounded-lg border transition-colors hover:bg-muted/50 text-right"
                    aria-label={`Next post: ${nextPost.title}`}
                >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        <span>다음 포스트</span>
                        <ArrowRight className="h-4 w-4" />
                    </div>
                    <span className="font-medium line-clamp-2 md:text-lg text-balance">
                        {nextPost.title}
                    </span>
                </Link>
            ) : (
                <div role="none" className="hidden md:block" aria-hidden="true" />
            )}
        </nav>
    );
}
