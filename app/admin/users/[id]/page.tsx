"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Save } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminSection } from "@/components/admin/AdminSection";

export default function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <AdminPageHeader
                title="Edit User"
                description={`Managing user #${id}`}
                backLink="/admin/users"
                actions={
                    <Button>
                        <Save className="mr-2 h-4 w-4" /> Update User
                    </Button>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Panel: Profile Summary */}
                <div className="space-y-6">
                    <AdminSection title="Profile" className="text-center">
                        <div className="flex flex-col items-center gap-4 py-4">
                            <Avatar className="h-32 w-32 border-4 border-muted">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>User</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold">Alice Johnson</h3>
                                <p className="text-sm text-muted-foreground">alice@example.com</p>
                            </div>
                            <Button variant="outline" size="sm">Change Avatar</Button>
                        </div>
                    </AdminSection>
                </div>

                {/* Right Panel: Edit Form */}
                <div className="md:col-span-2 space-y-6">
                    <AdminSection title="Account Information">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First Name</Label>
                                    <Input id="first-name" defaultValue="Alice" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input id="last-name" defaultValue="Johnson" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue="alice@example.com" type="email" />
                            </div>
                        </div>
                    </AdminSection>

                    <AdminSection title="Role & Permissions">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Role</Label>
                                <Select defaultValue="admin">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Administrator</SelectItem>
                                        <SelectItem value="editor">Editor</SelectItem>
                                        <SelectItem value="viewer">Viewer</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-xs text-muted-foreground">Admin has full access to all resources.</p>
                            </div>

                            <div className="space-y-2">
                                <Label>Status</Label>
                                <Select defaultValue="active">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="suspended">Suspended</SelectItem>
                                        <SelectItem value="pending">Pending Invite</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </AdminSection>
                </div>
            </div>
        </div>
    );
}
