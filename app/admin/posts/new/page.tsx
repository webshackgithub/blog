"use client";

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
import { ArrowLeft, Save, Image as ImageIcon } from "lucide-react";

export default function NewPostPage() {
    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/posts">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h2 className="text-2xl font-bold tracking-tight">Create New Post</h2>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Save Draft</Button>
                    <Button>
                        <Save className="mr-2 h-4 w-4" /> Publish
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter post title..." className="text-lg font-medium" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <div className="flex gap-2">
                            <span className="flex items-center px-3 border rounded-md bg-muted text-muted-foreground text-sm">
                                /blog/
                            </span>
                            <Input id="slug" placeholder="post-url-slug" />
                        </div>
                    </div>

                    <div className="space-y-2 h-[500px]">
                        <Label>Content (Markdown)</Label>
                        <Textarea
                            className="h-full font-mono resize-none leading-relaxed p-4"
                            placeholder="# Write your post content here..."
                        />
                    </div>
                </div>

                {/* Sidebar Settings Area */}
                <div className="space-y-6">
                    <div className="space-y-4 border rounded-lg p-4 bg-card">
                        <h3 className="font-semibold text-lg">Post Settings</h3>

                        <div className="space-y-2">
                            <Label>Category</Label>
                            <Select>
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
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags</Label>
                            <Input id="tags" placeholder="e.g. tutorial, guide (comma separated)" />
                        </div>

                        <div className="space-y-2">
                            <Label>Thumbnail</Label>
                            <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer">
                                <ImageIcon className="h-8 w-8 mb-2" />
                                <span className="text-sm">Click to upload</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Excerpt (Meta Description)</Label>
                            <Textarea id="excerpt" placeholder="Brief summary for SEO..." className="h-24 resize-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
