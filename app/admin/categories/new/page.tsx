"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminSection } from "@/components/admin/AdminSection";

export default function CreateCategoryPage() {
    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <AdminPageHeader
                title="Create New Category"
                description="Add a new category to organize your posts."
                backLink="/admin/categories"
                actions={
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Create Category
                    </Button>
                }
            />

            <AdminSection title="Category Details">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                        <Input id="name" placeholder="e.g. Web Development" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input id="slug" placeholder="e.g. web-development" />
                        <p className="text-xs text-muted-foreground">URL-friendly version of the name. Leave empty to auto-generate.</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Describe this category..." className="h-32" />
                    </div>
                </div>
            </AdminSection>
        </div>
    );
}
