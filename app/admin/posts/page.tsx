import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export default function PostsPage() {
    // Mock Data
    const posts = [
        {
            id: 1,
            title: "Next.js 14의 새로운 기능 탐구",
            category: "Next.js",
            status: "Published",
            views: 1240,
            date: "2024-03-15",
        },
        {
            id: 2,
            title: "React Server Components 이해하기",
            category: "React",
            status: "Draft",
            views: 0,
            date: "2024-03-20",
        },
        {
            id: 3,
            title: "Tailwind CSS v4 마이그레이션 가이드",
            category: "CSS",
            status: "Published",
            views: 843,
            date: "2024-03-10",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
                    <p className="text-muted-foreground">
                        블로그 포스트를 작성하고 관리하세요.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/admin/posts/new">
                        <Plus className="mr-2 h-4 w-4" /> New Post
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Views</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell className="font-medium">{post.title}</TableCell>
                                <TableCell>{post.category}</TableCell>
                                <TableCell>
                                    <Badge variant={post.status === "Published" ? "default" : "secondary"}>
                                        {post.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{post.views.toLocaleString()}</TableCell>
                                <TableCell>{post.date}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" title="Edit" asChild>
                                            <Link href={`/admin/posts/${post.id}`}>
                                                <Pencil className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive" title="Delete">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
