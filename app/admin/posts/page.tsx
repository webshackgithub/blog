import Link from "next/link";
import Image from "next/image";
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
import { Plus, Pencil, Trash2, Image as ImageIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function PostsPage({
    searchParams,
}: {
    searchParams: Promise<{ status?: string }>;
}) {
    const { status } = await searchParams;
    const supabase = await createClient();

    // Supabase에서 포스트 목록 조회 (최신순 정렬)
    let query = supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

    // 상태 필터링 적용
    if (status) {
        query = query.eq('status', status);
    }

    const { data: posts, error } = await query;

    if (error) {
        console.error("Error fetching posts:", error);
        return <div>포스트를 불러오는 중 오류가 발생했습니다.</div>;
    }

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
                            <TableHead className="w-[400px] text-center">Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Read Time</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {posts?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                                    작성된 포스트가 없습니다.
                                </TableCell>
                            </TableRow>
                        ) : (
                            posts?.map((post) => (
                                <TableRow key={post.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-12 w-20 overflow-hidden rounded-md border bg-muted shrink-0">
                                                {post.thumbnail_url ? (
                                                    <Image
                                                        src={post.thumbnail_url}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-muted/50">
                                                        <ImageIcon className="h-4 w-4 text-muted-foreground/50" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="truncate font-semibold text-sm max-w-[200px] lg:max-w-[300px]" title={post.title}>
                                                    {post.title}
                                                </span>
                                                <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                                                    /{post.slug}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{post.category || '-'}</TableCell>
                                    <TableCell>
                                        <Badge variant={post.status === "published" ? "default" : "secondary"}>
                                            {post.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{post.read_time ? `${post.read_time} min` : '-'}</TableCell>
                                    <TableCell>{new Date(post.created_at).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" title="Edit" asChild>
                                                <Link href={`/admin/posts/${post.id}`}>
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            {/* TODO: 삭제 기능 연결 (Server Action or API) */}
                                            <Button variant="ghost" size="icon" className="text-destructive" title="Delete">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
