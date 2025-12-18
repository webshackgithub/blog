"use client";

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
import { Mail, Send } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminSection } from "@/components/admin/AdminSection";

export default function InviteUserPage() {
    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <AdminPageHeader
                title="Invite New User"
                description="Send an invitation to join your team."
                backLink="/admin/users"
                actions={
                    <Button>
                        <Send className="mr-2 h-4 w-4" /> Send Invitation
                    </Button>
                }
            />

            <AdminSection title="Invitation Details">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <div className="relative">
                            <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input id="email" type="email" placeholder="colleague@example.com" className="pl-9" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select defaultValue="editor">
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin">Administrator</SelectItem>
                                <SelectItem value="editor">Editor</SelectItem>
                                <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                            <strong>Editor</strong> can write and publish posts. <strong>Admin</strong> has full access.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Invitation Message (Optional)</Label>
                        <Textarea
                            id="message"
                            placeholder="Hey! Join me in managing this blog."
                            className="h-24 resize-none"
                        />
                    </div>
                </div>
            </AdminSection>
        </div>
    );
}
