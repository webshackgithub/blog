"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save, Trash2 } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminSection } from "@/components/admin/AdminSection";

export default function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <AdminPageHeader
                title="Edit Category"
                description={`Editing category: ${id}`}
                backLink="/admin/categories"
                actions={
                    <div className="flex items-center gap-2">
                        <Button variant="destructive" size="sm">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </Button>
                        <Button>
                            <Save className="mr-2 h-4 w-4" /> Save Changes
                        </Button>
                    </div>
                }
            />

            <AdminSection title="Category Details">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Next.js" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input id="slug" defaultValue="nextjs" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" defaultValue="Everything about Next.js framework" className="h-32" />
                    </div>
                </div>
            </AdminSection>
        </div>
    );
}
