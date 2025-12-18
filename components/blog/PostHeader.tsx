import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

interface PostHeaderProps {
    title: string;
    category: string;
    publishedAt: string;
    readTime: string;
    thumbnailUrl?: string;
}

export function PostHeader({
    title,
    category,
    publishedAt,
    readTime,
    thumbnailUrl,
}: PostHeaderProps) {
    return (
        <div className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="flex justify-center">
                <Badge variant="secondary" className="mb-4">
                    {category}
                </Badge>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-balance">
                {title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={publishedAt}>{publishedAt}</time>
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{readTime}분 읽기</span>
                </div>
            </div>
            {thumbnailUrl && (
                <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                </div>
            )}
        </div>
    );
}
