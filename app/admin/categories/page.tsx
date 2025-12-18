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
import { Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export default function CategoriesPage() {
    // Mock Data
    const categories = [
        {
            id: 1,
            name: "Next.js",
            slug: "nextjs",
            count: 12,
            description: "Everything about Next.js framework"
        },
        {
            id: 2,
            name: "React",
            slug: "react",
            count: 24,
            description: "React ecosystem and best practices"
        },
        {
            id: 3,
            name: "CSS",
            slug: "css",
            count: 8,
            description: "Styling, Tailwind CSS, and more"
        },
        {
            id: 4,
            name: "JavaScript",
            slug: "javascript",
            count: 15,
            description: "Core JavaScript concepts"
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
                    <p className="text-muted-foreground">
                        Manage post categories.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/admin/categories/new">
                        <Plus className="mr-2 h-4 w-4" /> New Category
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-center">Count</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.map((category) => (
                            <TableRow key={category.id}>
                                <TableCell className="font-medium">{category.name}</TableCell>
                                <TableCell>
                                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                        {category.slug}
                                    </code>
                                </TableCell>
                                <TableCell className="text-muted-foreground">{category.description}</TableCell>
                                <TableCell className="text-center">{category.count}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link href={`/admin/categories/${category.id}`}>
                                                <Pencil className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive">
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
