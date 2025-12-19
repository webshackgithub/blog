"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, Loader2, Image as ImageIcon } from "lucide-react";
import { updatePost, ActionState } from "../actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminSection } from "@/components/admin/AdminSection";
import ReactMarkdown from "react-markdown";

// DB에서 불러온 Post 타입 정의 (Supabase 타입 생성 전 임시 정의)
type Post = {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    category: string | null;
    tags: string[] | null;
    thumbnail_url: string | null;
    status: "draft" | "published" | string; // DB에서는 text일 수 있음
};

const initialState: ActionState = {
    success: false,
    message: "",
};

export default function EditPostForm({ initialPost }: { initialPost: Post }) {
    // updatePost는 id를 첫 번째 인자로 받으므로 bind를 사용해 고정
    const updatePostWithId = updatePost.bind(null, initialPost.id);
    const [state, action, isPending] = useActionState(updatePostWithId, initialState);

    // Select 컴포넌트 제어를 위한 상태
    const [category, setCategory] = useState(initialPost.category || "");
    // Thumbnail URL 상태 관리
    const [thumbnailUrl, setThumbnailUrl] = useState(initialPost.thumbnail_url || "");
    // Content 상태 관리 for Preview
    const [content, setContent] = useState(initialPost.content || "");

    return (
        <form action={action} className="space-y-6 max-w-5xl mx-auto pb-10" suppressHydrationWarning>
            <AdminPageHeader
                title="Edit Post"
                description={`Editing post #${initialPost.id.substring(0, 8)}...`}
                backLink="/admin/posts"
                actions={
                    <div className="flex items-center gap-2">
                        <Button variant="outline" type="button" disabled={isPending}>
                            Save Draft
                        </Button>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Save className="mr-2 h-4 w-4" />
                            )}
                            Update Post
                        </Button>
                    </div>
                }
            />

            {state.message && (
                <div className={`p-4 rounded-md ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Area */}
                <div className="lg:col-span-2 space-y-6">
                    <AdminSection title="Content">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    defaultValue={initialPost.title}
                                    className="text-lg font-medium"
                                    required
                                />
                                {state.errors?.title && <p className="text-sm text-red-500">{state.errors.title[0]}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug</Label>
                                <div className="flex gap-2">
                                    <span className="flex items-center px-3 border rounded-md bg-muted text-muted-foreground text-sm">
                                        /blog/
                                    </span>
                                    <Input
                                        id="slug"
                                        name="slug"
                                        defaultValue={initialPost.slug}
                                        required
                                    />
                                </div>
                                {state.errors?.slug && <p className="text-sm text-red-500">{state.errors.slug[0]}</p>}
                            </div>

                            <div className="space-y-2">
                                <Tabs defaultValue="edit" className="w-full">
                                    <div className="flex items-center justify-between mb-2">
                                        <Label htmlFor="content">Content (Markdown)</Label>
                                        <TabsList>
                                            <TabsTrigger value="edit">Edit</TabsTrigger>
                                            <TabsTrigger value="preview">Preview</TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <TabsContent value="edit" className="h-[500px]">
                                        <Textarea
                                            id="content"
                                            name="content"
                                            className="h-full font-mono resize-none leading-relaxed p-4"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            required
                                        />
                                    </TabsContent>

                                    <TabsContent value="preview" className="h-[500px] overflow-y-auto border rounded-md p-6 bg-card">
                                        <div className="prose dark:prose-invert max-w-none">
                                            <ReactMarkdown>
                                                {content || "*No content to preview*"}
                                            </ReactMarkdown>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                                {state.errors?.content && <p className="text-sm text-red-500">{state.errors.content[0]}</p>}
                            </div>
                        </div>
                    </AdminSection>
                </div>

                {/* Sidebar Settings Area */}
                <div className="space-y-6">
                    <AdminSection title="Settings">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Select onValueChange={setCategory} value={category}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="nextjs">Next.js</SelectItem>
                                        <SelectItem value="react">React</SelectItem>
                                        <SelectItem value="javascript">JavaScript</SelectItem>
                                        <SelectItem value="css">CSS</SelectItem>
                                    </SelectContent>
                                </Select>
                                <input type="hidden" name="category" value={category} />
                                {state.errors?.category && <p className="text-sm text-red-500">{state.errors.category[0]}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags</Label>
                                <Input
                                    id="tags"
                                    name="tags"
                                    defaultValue={Array.isArray(initialPost.tags) ? initialPost.tags.join(", ") : ""}
                                    placeholder="e.g. Next.js, React"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="thumbnail_url">Thumbnail URL</Label>
                                <Input
                                    id="thumbnail_url"
                                    name="thumbnail_url"
                                    value={thumbnailUrl}
                                    onChange={(e) => setThumbnailUrl(e.target.value)}
                                    placeholder="https://images.unsplash.com/..."
                                />
                                {thumbnailUrl ? (
                                    <div className="relative aspect-video w-full rounded-lg overflow-hidden border mt-2">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={thumbnailUrl}
                                            alt="Thumbnail preview"
                                            className="object-cover w-full h-full"
                                            onError={(e) => {
                                                // 이미지 로드 실패 시 placeholder로 fallback
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('hidden');
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-muted-foreground bg-muted/20 text-xs mt-2 h-[150px]">
                                        <ImageIcon className="h-6 w-6 mb-2 opacity-50" />
                                        <span>No thumbnail set</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="excerpt">Excerpt</Label>
                                <Textarea
                                    id="excerpt"
                                    name="excerpt"
                                    defaultValue={initialPost.excerpt || ""}
                                    className="h-24 resize-none"
                                />
                                {state.errors?.excerpt && <p className="text-sm text-red-500">{state.errors.excerpt[0]}</p>}
                            </div>

                            <input type="hidden" name="status" value={initialPost.status || "published"} />
                        </div>
                    </AdminSection>
                </div>
            </div>
        </form>
    );
}
