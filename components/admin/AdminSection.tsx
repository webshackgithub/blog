import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface AdminSectionProps {
    title: string;
    description?: string;
    children: ReactNode;
    className?: string;
}

export function AdminSection({
    title,
    description,
    children,
    className,
}: AdminSectionProps) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent className="space-y-4">
                {children}
            </CardContent>
        </Card>
    );
}
