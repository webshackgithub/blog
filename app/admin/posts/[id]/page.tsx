"use client";

import { use } from "react";
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
import { Image as ImageIcon, Save } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminSection } from "@/components/admin/AdminSection";

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params in Next.js 15+ way (though using React 19 `use` hook pattern)
    // or just await it if async component, but for client component we assume resolved or passed props.
    // However, `params` prop in Next 15 is a Promise. To be safe in Client Component:
    const { id } = use(params);

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <AdminPageHeader
                title="Edit Post"
                description={`Editing post #${id}`}
                backLink="/admin/posts"
                actions={
                    <div className="flex items-center gap-2">
                        <Button variant="outline">Save Draft</Button>
                        <Button>
                            <Save className="mr-2 h-4 w-4" /> Update Post
                        </Button>
                    </div>
                }
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Area */}
                <div className="lg:col-span-2 space-y-6">
                    <AdminSection title="Content">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" defaultValue="Next.js 14의 새로운 기능 탐구" className="text-lg font-medium" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug</Label>
                                <div className="flex gap-2">
                                    <span className="flex items-center px-3 border rounded-md bg-muted text-muted-foreground text-sm">
                                        /blog/
                                    </span>
                                    <Input id="slug" defaultValue="nextjs-14-features" />
                                </div>
                            </div>

                            <div className="space-y-2 h-[500px]">
                                <Label>Content (Markdown)</Label>
                                <Textarea
                                    className="h-full font-mono resize-none leading-relaxed p-4"
                                    defaultValue="# Next.js 14 Features\n\nNext.js 14 includes several new features..."
                                />
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
                                <Select defaultValue="nextjs">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="nextjs">Next.js</SelectItem>
                                        <SelectItem value="react">React</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags</Label>
                                <Input id="tags" defaultValue="Next.js, React, Web Dev" />
                            </div>

                            <div className="space-y-2">
                                <Label>Thumbnail</Label>
                                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer bg-muted/20">
                                    <ImageIcon className="h-8 w-8 mb-2" />
                                    <span className="text-sm">Change Image</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="excerpt">Excerpt</Label>
                                <Textarea id="excerpt" defaultValue="Deep dive into Next.js 14 features." className="h-24 resize-none" />
                            </div>
                        </div>
                    </AdminSection>
                </div>
            </div>
        </div>
    );
}
