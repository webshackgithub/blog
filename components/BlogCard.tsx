
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

export interface BlogCardProps {
    title: string;
    summary: string;
    tags: string[];
    publishedAt: string;
    readTime: string;
    thumbnailUrl: string;
    href: string;
}

export function BlogCard({
    title,
    summary,
    tags,
    publishedAt,
    readTime,
    thumbnailUrl,
    href,
}: BlogCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow py-0 gap-0">
            <CardHeader className="p-0">
                <div className="relative w-full aspect-video">
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="space-y-2">
                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                        <Link href={href}>{title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                        {summary}
                    </CardDescription>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{readTime}분</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                    <Link href={href}>읽으러 가기</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
