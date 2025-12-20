import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, CheckCircle, Layers, FileEdit } from "lucide-react";
import { getDashboardStats, getRecentActivity } from "./actions";
import Link from "next/link";

export default async function AdminDashboardPage() {
    const stats = await getDashboardStats();
    const recentPosts = await getRecentActivity();

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                <Link href="/admin/posts">
                    <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalPosts}</div>
                            <p className="text-xs text-muted-foreground">전체 게시글 수</p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/admin/posts?status=published">
                    <Card className="hover:bg-accent transition-colors cursor-pointer h-full border-green-100 dark:border-green-900/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Published</CardTitle>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600 dark:text-green-500">{stats.publishedPosts}</div>
                            <p className="text-xs text-muted-foreground">공개된 게시글</p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/admin/posts?status=draft">
                    <Card className="hover:bg-accent transition-colors cursor-pointer h-full border-yellow-100 dark:border-yellow-900/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
                            <FileEdit className="h-4 w-4 text-yellow-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">{stats.draftPosts}</div>
                            <p className="text-xs text-muted-foreground">작성 중인 게시글</p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/admin/categories">
                    <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Categories</CardTitle>
                            <Layers className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalCategories}</div>
                            <p className="text-xs text-muted-foreground">등록된 카테고리</p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/admin/users">
                    <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalUsers}</div>
                            <p className="text-xs text-muted-foreground">관리자 및 사용자</p>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-full">
                    <CardHeader>
                        <CardTitle>Recent Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {recentPosts.length > 0 ? (
                                recentPosts.map((post: any) => (
                                    <div key={post.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                        <div className="space-y-1">
                                            <Link href={`/admin/posts/${post.id}`}>
                                                <p className="text-sm font-medium leading-none hover:underline cursor-pointer">
                                                    {post.title}
                                                </p>
                                            </Link>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                                <span>•</span>
                                                <span className="capitalize">{post.category || "No Category"}</span>
                                                <span>•</span>
                                                <span>작성자: {post.author?.full_name || post.author?.email || "Unknown"}</span>
                                            </div>
                                        </div>
                                        <div className={`text-xs font-semibold px-2 py-1 rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {post.status.toUpperCase()}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground py-4 text-center">최신 활동이 없습니다.</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
