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
import { ArrowLeft, Save, Loader2, Image as ImageIcon } from "lucide-react";
import { createPost, ActionState } from "../actions";

const initialState: ActionState = {
    success: false,
    message: "",
};

export default function NewPostPage() {
    const [state, action, isPending] = useActionState(createPost, initialState);
    const [category, setCategory] = useState("");

    return (
        <form action={action} className="space-y-6 max-w-5xl mx-auto pb-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild type="button">
                        <Link href="/admin/posts">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h2 className="text-2xl font-bold tracking-tight">Create New Post</h2>
                </div>
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
                        Publish
                    </Button>
                </div>
            </div>

            {state.message && (
                <div className={`p-4 rounded-md ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Enter post title..."
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
                                placeholder="post-url-slug"
                                required
                            />
                        </div>
                        {state.errors?.slug && <p className="text-sm text-red-500">{state.errors.slug[0]}</p>}
                    </div>

                    <div className="space-y-2 h-[500px]">
                        <Label htmlFor="content">Content (Markdown)</Label>
                        <Textarea
                            id="content"
                            name="content"
                            className="h-full font-mono resize-none leading-relaxed p-4"
                            placeholder="# Write your post content here..."
                            required
                        />
                        {state.errors?.content && <p className="text-sm text-red-500">{state.errors.content[0]}</p>}
                    </div>
                </div>

                {/* Sidebar Settings Area */}
                <div className="space-y-6">
                    <div className="space-y-4 border rounded-lg p-4 bg-card">
                        <h3 className="font-semibold text-lg">Post Settings</h3>

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
                                placeholder="e.g. tutorial, guide (comma separated)"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="thumbnail_url">Thumbnail URL</Label>
                            <Input
                                id="thumbnail_url"
                                name="thumbnail_url"
                                placeholder="https://images.unsplash.com/..."
                            />
                            <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer text-xs">
                                <ImageIcon className="h-4 w-4 mb-1" />
                                <span>Preview placeholder</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Excerpt (Meta Description)</Label>
                            <Textarea
                                id="excerpt"
                                name="excerpt"
                                placeholder="Brief summary for SEO..."
                                className="h-24 resize-none"
                            />
                            {state.errors?.excerpt && <p className="text-sm text-red-500">{state.errors.excerpt[0]}</p>}
                        </div>

                        <input type="hidden" name="status" value="published" />
                    </div>
                </div>
            </div>
        </form>
    );
}
